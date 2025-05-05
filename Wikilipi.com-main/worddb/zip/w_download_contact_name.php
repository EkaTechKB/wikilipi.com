<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once('db-config.php');

function createZip($requestData, $conn, $tableName) {
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
        if ($row['C_ENGLISH']) {
            $fileNameArr[] = $row['C_ENGLISH'].'.txt';
        }
    }

    $resultJson->data = $rows;
   
    $conn->close();
    try {
        $folderToZip = 'source_contact/';
        $outputZipName = 'contact_zips/'.uniqid().'.zip';
        $rootPath = realpath($folderToZip);
        $zip = new ZipArchive();
        $zip->open($outputZipName, ZipArchive::CREATE | ZipArchive::OVERWRITE);

        $files = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($rootPath),
            RecursiveIteratorIterator::LEAVES_ONLY
        );

        foreach ($files as $file) {
            // echo $file;
           if (!$file->isDir()) {
                $filePath = $file->getRealPath();
                $relativePath = substr($filePath, strlen($rootPath) + 1);            
                $zip->addFile($filePath, $relativePath);
           }
        }

        $zip->close();
        //echo realpath($outputZipName);
        $resultJson->filename = 'http://www.wikilipi.com/worddb/zip/'.$outputZipName;
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
