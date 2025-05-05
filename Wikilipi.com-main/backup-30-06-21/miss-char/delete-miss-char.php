<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
 include_once("../../db-config/db-config-suspense.php");

 // get posted data
$requestData = json_decode(file_get_contents("php://input"));                    
$srNo = $requestData->srNo;

 $result;
	 
$insertQuery = "DELETE FROM MissingCharTable WHERE SrNo = '$srNo'";

$resQuery = mysqli_query($conn, $insertQuery);
	
  	 if($resQuery) {
  		$result->status = 0;
  		$result->msg = 'delete success';
  	 }else{
  		$result->status = 1;
  		$result->error = "error deleting record.";
  	 }

	 echo json_encode($result);
mysqli_close($conn);
?>