<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 60000");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//include_once('db-config.php');


$requestData = json_decode(file_get_contents("php://input"));                    

$dbConnection = new DbConnection();
$zipCreate = new ZipCreate();
$zipCreate->createZip($requestData, $dbConnection->getDbConnection(), $tableName);

class ZipCreate {
    function __construct() {

    }
    
    public function createZip($requestData, $conn, $tableName) {
        
        $resultJson;
        $resultJson->status = 0;
        $data = $requestData->data;
    
        //echo json_encode($data);
        $inQuery = "";
        foreach ($data as $row) {
            $inQuery.="'$row',";
        }
       
        $inQuery.="'lastelement'";
    
        $whereClause = " C_ENGLISH in ($inQuery)";
        $sql= "SELECT * FROM EKA_WORD_TABLE WHERE $whereClause";
        $resultQuery = $conn->query($sql);
        $rows = array();    
        $fileNameArr = array();
    
        while ($rowDb = $resultQuery -> fetch_assoc()) {
            $rows[] = $rowDb;
            if ($rowDb['filename']) {
    
                $folder = $rowDb['foldername'];
                if ($folder) {
                    $fileNameArr[] = $folder.'/'. $rowDb['filename'];
                } else {
                    $fileNameArr[] = $rowDb['filename'];
                }
            }
        }
    
        // $resultJson->data = $rows;
        // echo json_encode($resultJson);
        $conn->close();
    
        if (count($fileNameArr) > 0) {
        } else {
            $fileNameArr[] = 'kishor.m4r';
        }
            try {
                $folderToZip = 'sounds/';
                $filename = uniqid().'.zip';
                $outputZipName = 'destination/'.$filename;
                $zip = new ZipArchive();
                $zip->open($outputZipName, ZipArchive::CREATE | ZipArchive::OVERWRITE);
        
                //$files = new RecursiveIteratorIterator(
                //    new RecursiveDirectoryIterator($rootPath),
                //    RecursiveIteratorIterator::LEAVES_ONLY
                //);
        
                foreach ($fileNameArr as $file) {
                    $filePath = $folderToZip.$file;//$file->getRealPath();
                    $zip->addFile($filePath, $file);
                }
        
                $zip->close();
                //echo realpath($outputZipName);
                $resultJson->downloadUrl = 'http://www.wikilipi.com/worddb/zip/'.$outputZipName;
                $resultJson->filename = $filename;
                $resultJson->status = 200;
                echo json_encode($resultJson);
            } catch (Exception $e) {
                $resultJson->status = 1100;
                $resultJson->errorMessage = "excetion";
                echo json_encode($resultJson);
            }
        
    }
    
}

class DbConnection {
	function __construct() {

	}

	public function getDbConnection() {
		$link = mysqli_connect("localhost", "EKALIPI_94", "Ekalipi@94", "WORD_DATABASE");
		// Check connection
		if($link === false){
			die("ERROR: Could not connect. " . mysqli_connect_error());
			echo 'error';
		} else {
			//echo 'connectedd';
		}
		return $link;
	}
}

?> 
