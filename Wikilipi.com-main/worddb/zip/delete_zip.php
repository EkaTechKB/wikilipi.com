<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$requestData = json_decode(file_get_contents("php://input"));                    

$data = $requestData->filename;
if ($data) {
    $isUnlink = unlink('destination/'.$data);
    
    if (isUnlink) {
        $resultJson->message = "File deleted successfully.";
        $resultJson->status = 200;
    } else {
        $resultJson->message = "Unable to delete file.";
        $resultJson->status = 1100;
    }

    echo json_encode($resultJson);
}

?>