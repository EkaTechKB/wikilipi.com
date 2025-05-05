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
$srno = $reuestData->srno;

$selection = "C_TIME > '$lastSyncTime'";
if ($srno && $srno != 'undefined') {
	$selection = "srn > $srno";
}

 $sql= "SELECT C_ENGLISH, C_COUNTRY, COUNT(*) FROM $tableName GROUP BY C_ENGLISH HAVING COUNT(*)>1 AND 
C_COUNTRY like 'IN%' LIMIT 100";
 
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