<?php
define('DB_CHARSET', 'utf8');
$server = "localhost";
$user = "EKALIPI_94";
$pass = "Ekalipi94";
$db = "WORD_DATABASE";
$tableName = "EKA_MISSING_WORD_TEST_TABLE";
//$tableName = "EKA_WORD_TABLE_TEST"; 
 
// Create connection
$conn2 = new mysqli($server, $user, $pass, $db);

// Check connection
if ($conn2->connect_error) {
    die("Connection failed : " . $conn2->connect_error);
}
//mysqli_set_charset($connection, "utf8");

?>