<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
 include_once("../../db-config/db-config-suspense.php");

 // get posted data
 $requestData = json_decode(file_get_contents("php://input"));                    
 $status = $requestData->status;
 $sql = "SELECT * FROM EKA_WORD_TABLE where approved='".$status."' ORDER BY srn desc" ;

 $qtot = mysqli_query($conn, $sql);

 $result = mysqli_query($conn, $sql);

 $total_result = mysqli_num_rows($result);

 while($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
 }

 $json_data = array(
    "total"    => intval($qtot->num_rows),
    "rows"            => $data ? $data : array() // total data array
);

echo json_encode($json_data);
mysqli_close($conn);
?>