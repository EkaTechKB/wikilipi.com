<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 1728000");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once('db-config.php');
// get posted data
$reuestData = json_decode(file_get_contents("php://input"));

 $srn = $reuestData->srn;
$result;
	 
$insertQuery = "DELETE FROM EKA_MISSING_WORD_TABLE1 WHERE srn = '$srn'";

$resQuery = mysqli_query( $conn, $insertQuery);
	
  	 if($resQuery) {
  		$result->status = 0;
  		$result->msg = 'delete success';
  	 }else{
  		$result->status = 1;
  		$result->error = "error deleting record.";
  	 }

	 echo json_encode($result);

?>



