<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once('db-config.php');
// get posted data
$reuestData = json_decode(file_get_contents("php://input"));                    

$returnResult;

$lastSyncTime = $reuestData->lastSyncTime;
$lastSrn = $reuestData->lastSrn;


if ($lastSyncTime == "0") {
  $lastSyncTime = "1534598018";
}
$whereClause = '';
if ($lastSrn == 'undefined' || $lastSrn == "0") {
  $whereClause =  "C_TIME>'$lastSyncTime'";
} else {
  $whereClause = "srn>'$lastSrn'";
}

 $sql= "SELECT * FROM $tableName WHERE $whereClause  ORDER BY C_TIME DESC LIMIT 300";
 
 $result=mysqli_query($conn, "SELECT count(*) as total from $tableName");
 $data=mysqli_fetch_assoc($result);

 $returnResult->count =$data['total'];

  $resultQuery = mysqli_query($conn, $sql) ;
  $rows = array();

 $returnResult->status = 0;
 
 while ($row = mysqli_fetch_assoc($resultQuery)) {
    //$row['C_EKALIPI'] = str_replace("&#955;","A",$row['C_EKALIPI']);
      $rows[] = $row;
     // $rows['C_EKALIPI'] = str_replace("&#955;","A",$row['C_EKALIPI']);
      $returnResult->lastSyncTime = $row['C_TIME'];
      $returnResult->lastSrn = $row['srn'];
    //   utf8_encode ("b‑hābad")
  }
 
  $returnResult->data = $rows;
 echo json_encode($returnResult);
?>