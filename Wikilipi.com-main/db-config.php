<?php

$local = in_array($_SERVER['REMOTE_ADDR'], ['127.0.0.1','localost','::1']);
// die($_SERVER['REMOTE_ADDR']);
if ($local == 1)
{   
    $server = "127.0.0.1";
    $user = "root";
    $pass = "";
    $db = "WORD_DATABASE";
    $tableName = "EKA_WORD_TABLE";
} 
else
{

    $server = "localhost";
    $user = "EKALIPI_94";
    $pass = "Ekalipi@94";
    $db = "WORD_DATABASE";
    $tableName = "EKA_WORD_TABLE";
}

// Create connection
$conn = new mysqli($server, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

mysqli_set_charset($conn,"utf8");

?>