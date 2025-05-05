<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once('db-config1.php');
// get posted data
$reuestData = json_decode(file_get_contents("php://input"));                    

$returnResult;

$lastSyncTime = $reuestData->lastSyncTime;
 $sql= "SELECT * FROM $tableName WHERE C_TIME>'$lastSyncTime' ORDER BY C_TIME DESC";
 
 $result=mysqli_query($conn, "SELECT count(*) as total from $tableName");
 $data=mysqli_fetch_assoc($result);

 $returnResult->count =$data['total'];

  $resultQuery = mysqli_query($conn, $sql) ;
  $rows = array();

 $returnResult->status = 0;
 
 while ($row = mysqli_fetch_assoc($resultQuery)) {
      $rows[] = $row;
      $returnResult->lastSyncTime = $row['C_TIME'];
  }
 
  $returnResult->data = $rows;
 echo json_encode($returnResult);
?>