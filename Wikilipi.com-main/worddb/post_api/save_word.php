<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once('db-config.php');
// get posted data
$reuestData = json_decode(file_get_contents("php://input"));

     $english = strtolower($reuestData->english);
     $ekalipi = $reuestData->ekalipi;
	 $other = $reuestData->other;
	 $count = $reuestData->count;
	 $country = $reuestData->country;

	 $result;

	 //$resQuery = mysqli_query($conn,"INSERT INTO $tableName(C_ENGLISH,C_EKALIPI,C_OTHER,C_TIME,C_COUNT,C_COUNTRY,srn)VALUES('$english','$ekalipi','$other',UNIX_TIMESTAMP(),'$count','$country',DEFAULT)");
	 
	$resQuery = mysqli_query($conn,"INSERT INTO $tableName(C_ENGLISH,C_COUNT,C_EKALIPI,C_COUNTRY,C_TIME,C_OTHER,srn)VALUES('$english','$','$ekalipi','$country',UNIX_TIMESTAMP(),'$other',DEFAULT)");
	
	 if($resQuery) {
		$result->status = 0;
		$result->msg = 'Inserted successfully.';
	 }else{
		$result->status = 1;
		$result->error = "error adding new record.";
	 }
	
	 echo json_encode($result);

?>



