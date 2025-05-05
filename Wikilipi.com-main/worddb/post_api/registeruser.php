<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once('db-config.php');
 
$requestData = json_decode(file_get_contents("php://input"));

     $name = $requestData->name;
	 $address = $requestData->address;
	 $email = $requestData->email;
	 $mobile = $requestData->mobile;
	 $deviceId = $requestData->deviceId;
	 
	 $tableName = 'registeruser';
	 
	$resQuery = mysqli_query($conn,"INSERT INTO $tableName(deviceId,name,email,mobile, createdAt)
				VALUES('$deviceId','$name','$email','$mobile',UNIX_TIMESTAMP())");
	
	 if($resQuery) {
	 
		$result = array(
			"status"            => 0,   
			"msg"    => 'Registration successfully.'
		);
		echo json_encode($result);
	 }else{
		$result = array(
			"status"            => 0,   
			"msg"    => 'Error while inserting.'
		);
		 echo json_encode($result);
	 }
	 
?>



