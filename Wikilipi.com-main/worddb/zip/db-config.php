<?php
$server = "localhost";
$user = "EKALIPI_94";
$pass = "Ekalipi@94";
$db = "WORD_DATABASE";
$tableName = "EKA_WORD_TABLE";
//$tableName = "EKA_WORD_TABLE_TEST"; 
 
// Create connection
$conn = new mysqli($server, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//mysqli_set_charset($conn,"utf8");

?>