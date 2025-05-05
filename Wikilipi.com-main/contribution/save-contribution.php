<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
 include_once("../../db-config/db-config-suspense.php");

 $requestData = json_decode(file_get_contents("php://input"));                    
 $status = $requestData->status;
 $cTime = $requestData->cTime;
 $update_record_sql = "UPDATE EKA_WORD_TABLE SET approved='".$status."' WHERE C_TIME='".$cTime."'";
 if ($conn->query($update_record_sql) === true){
    echo json_encode(array('status'=>'200','message'=>'Saved'));
 } else{
    echo json_encode(array('status'=>'400','message'=>'Failed'));
}
 mysqli_close($conn);
 ?>