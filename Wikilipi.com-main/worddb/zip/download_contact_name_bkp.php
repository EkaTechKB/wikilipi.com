<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 60000");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once('db-config.php');

function createZip($requestData, $conn, $tableName) {
    $resultJson;
    $resultJson->status = 0;
    $data = $requestData->data;

    $inQuery = '';
    foreach ($data as $row) {
        $inQuery.="'$row',";
    }

    $inQuery.="'lastelement'";

    $whereClause = " C_ENGLISH in ($inQuery)";
    $sql= "SELECT * FROM EKA_WORD_TABLE WHERE $whereClause";

    $resultQuery = $conn->query($sql);
    $rows = array();    
    $fileNameArr = array();

    while ($row = $resultQuery -> fetch_assoc()) {
        $rows[] = $row;
        if ($row['filename']) {

            $folder = $row['foldername'];
            if ($folder) {
                $fileNameArr[] = $folder.'/'. $row['filename'];
            } else {
                $fileNameArr[] = $row['filename'];
            }
        }
    }

    $resultJson->data = $rows;
   
    $conn->close();
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
        $resultJson->errorMessage = $e->getMessage();
        echo json_encode($resultJson);
    }
}

$requestData = json_decode(file_get_contents("php://input"));                    

createZip($requestData, $conn, $tableName);
?> 
