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
$result;
	 
$insertQuery = "INSERT IGNORE INTO EKA_MISSING_WORD_TABLE(C_ENGLISH,C_TIME,srn)";
$values = array();

 foreach ($data as $row) {

	$row = strtolower($row ? $row : '');
	//replace single double and brackets etc
	$row = str_replace("'","", $row);
	$row = str_replace(",","", $row);
	$row = str_replace(".","", $row);
	$row = str_replace("(","", $row);
	$row = str_replace(")","", $row);
	$row = str_replace("\"","", $row);

	//split - for row if it has this charactor

	$rowArr = explode("-", $row);

	foreach($rowArr as $splitRowBydash) {
		$sql= "SELECT * from EKA_WORD_TABLE WHERE C_ENGLISH='$splitRowBydash'";
		$result1=mysqli_query($conn, $sql);
		$count1 = intval($result1->num_rows);

		$sql2= "SELECT * from SALUTATION_TABLE WHERE C_ENGLISH='$splitRowBydash'";
		$result2=mysqli_query($conn, $sql2);
		$count2 = intval($result2->num_rows);

		$sql3= "SELECT * from EKA_MISSING_WORD_TABLE WHERE C_ENGLISH='$splitRowBydash'";
		$result3=mysqli_query($conn, $sql3);
		$count3 = intval($result3->num_rows);

		if ($count1 == 0 && $count2 == 0 && $count3 == 0){
			$values[]="('$splitRowBydash',UNIX_TIMESTAMP(),DEFAULT)";
		}
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
		"msg" => 'data sync completed.'
	);
 }
	 echo json_encode($result);

?>



