<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 1728000");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once('db-config.php');
// get posted data
$reuestData = json_decode(file_get_contents("php://input"));

 $data = $reuestData->data;
 	 
$insertQuery = "INSERT INTO EKA_MISSING_WORD_TABLE1(C_ENGLISH,C_EKALIPI,C_TIME,srn)";
$values = array();

 foreach ($data as $row) {

	$english = strtolower($row->english ? $row->english : '');
	$ekalipi = $row->ekalipi;
	if ($english) {
	//replace single double and brackets etc
	$english = str_replace("'","", $english);
	$english = str_replace(",","", $english);
	$english = str_replace(".","", $english);
	$english = str_replace("(","", $english);
	$english = str_replace(")","", $english);
	$english = str_replace("\"","", $english);
	 $values[] = "('$english','$ekalipi',UNIX_TIMESTAMP(),DEFAULT)";
	}
}

if (sizeof($values) > 0) {
$insertQuery.= "VALUES".implode(", ", $values)."";

$resQuery = mysqli_multi_query($conn, $insertQuery);
	
  	 if($resQuery) {
		$result = array(
			"status"            => 0,  
			"msg" => 'data sync completed.'
		);
  	 
  	 }else{
		$result = array(
			"status"            => 1,  
			"msg" => 'error adding new record.'
		);
  		
  	 }
} else {
	$result = array(
		"status"            => 0,  
		"msg" => 'array length is zero.'
	);
}
	 echo json_encode($result);

?>



