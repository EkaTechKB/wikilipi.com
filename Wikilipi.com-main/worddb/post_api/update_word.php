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
	 $tableName = "EKA_WORD_TABLE_TEST";
	 //$resQuery = mysqli_query($conn,"INSERT INTO $tableName(C_ENGLISH,C_EKALIPI,C_OTHER,C_TIME,C_COUNT,C_COUNTRY,srn)VALUES('$english','$ekalipi','$other',UNIX_TIMESTAMP(),'$count','$country',DEFAULT)");
	 
	$resQuery = mysqli_query($conn,"INSERT INTO $tableName(C_ENGLISH,C_COUNT,C_EKALIPI,C_COUNTRY,C_TIME,C_OTHER,srn)VALUES('$english','$count','$ekalipi','$country',UNIX_TIMESTAMP(),'$other',DEFAULT)
	ON DUPLICATE KEY UPDATE C_EKALIPI='$ekalipi', C_TIME=UNIX_TIMESTAMP()");
	
	 if($resQuery) {
		$result->status = 0;
		$result->msg = 'data updated successfully.';
	 }else{
		$result->status = 1;
		$result->error = "error while updating.";
	 }
	
	 echo json_encode($result);

?>



