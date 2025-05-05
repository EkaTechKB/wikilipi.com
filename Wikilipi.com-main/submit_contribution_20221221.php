<?php
header("Access-Control-Allow-Origin: *");
header("charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
session_start();
if(isset($_POST['formtype']) AND $_POST['formtype']=='emailform' ){
    $email = $_POST['email'];
    $record_id  = $_POST['record_id'];
    // var_dump($_POST);
    $_SESSION['email'] = $_POST['email'];
    include_once("db-config-suspense.php");

    $conn = new mysqli($server, $user, $pass, $db);

    if ($conn->connect_error) {
        $message = "Connection failed: " . $conn->connect_error;
        $conn->close();
        echo json_encode(array('status'=>400, 'message'=> "Failed ".$message));
        exit();
    }
    $timestamp = date("Y-m-d_H:i",$t=time());
    $insert_record_sql = "UPDATE EKA_WORD_TABLE SET email='".$email."' WHERE srn='".$record_id."'";

    if ($conn->query($insert_record_sql) === TRUE) {
        $response = TRUE;
        echo json_encode(array('status'=>200, 'message'=> mysqli_insert_id($conn)));
    } else {
        $response = "Insert Error: " . $conn->error;
        echo json_encode(array('status'=>400, 'message'=> $response));
    }

    $conn->close();

    exit();

}
// var_dump($_POST);
// var_dump($_GET);
// var_dump($_FILES);
$have_recording = False;
if(isset($_FILES['recording'])){
    $have_recording = True;
    $uploadDir = 'recordings';
    if (!file_exists($uploadDir)) {

        if(!mkdir($uploadDir, 0777, true)){
            echo json_encode(array('status'=>400,'message'=>'Failed to create recordings folder therefor cannot save file'));
            exit();
        }
    }
    if(!is_writable($uploadDir)){
        echo json_encode(array('status'=>400,'message'=>'recordings folder is not writable.'));
        exit();
    }
    $fileName = $_POST['ekalipi_word']."_".rand(); #$_FILES['recording']['name'];
    //$fileName = '';
    $tmpName  = $_FILES['recording']['tmp_name'];
    $rel_path = $uploadDir.'/'.$fileName.'.mp3';
    // echo $fileName;
    // echo '#';
    // echo $tmpName;
    // echo '#';
    // echo $rel_path;

    $res = move_uploaded_file($tmpName, $rel_path);
    // if($res) {
    //     echo json_encode(array('status'=>200, 'message'=> "Saved ".$rel_path));
    // }else{
    //     echo json_encode(array('status'=>400, 'message'=> "Failed ".$rel_path));
    // }

}

    // echo json_encode(array('status'=>200, 'message'=>'Saved'));
    $input_word = $_POST['input_word'];#htmlspecialchars($_POST['input_word'], ENT_QUOTES);
    $ekalipi_word = htmlspecialchars($_POST['ekalipi_word'], ENT_NOQUOTES, "UTF-8");#htmlspecialchars($_POST['ekalipi_word'], ENT_QUOTES);
    $country_code = $_POST['country_code'];#htmlspecialchars($_POST['country_code'], ENT_QUOTES);

    if(!$country_code){
        $country_code = 'WW';
    }
    include_once("db-config-suspense.php");

    // global $servername;
    // global $username;
    // global $password;
    // global $database;

    $conn = new mysqli($server, $user, $pass, $db);

    if ($conn->connect_error) {
        $message = "Connection failed: " . $conn->connect_error;
        $conn->close();
        echo json_encode(array('status'=>400, 'message'=> "Failed ".$message));
        exit();
    }
    if($fileName){
        $fileName .= 'mp3';
    }
    $timestamp = date("Y-m-d_H:i",$t=time());
    $insert_record_sql = "INSERT INTO EKA_WORD_TABLE(C_ENGLISH,C_EKALIPI,C_COUNTRY, filename, foldername,C_OTHER,C_TIME) VALUES ('".$input_word."','".$ekalipi_word."','".$country_code."','".$fileName."','".$uploadDir."','', '".$timestamp."')";

    if ($conn->query($insert_record_sql) === TRUE) {
        $response = TRUE;
        echo json_encode(array('status'=>200, 'message'=> mysqli_insert_id($conn)));
    } else {
        $response = "Insert Error: " . $conn->error;
        echo json_encode(array('status'=>400, 'message'=> $response));
    }

    $conn->close();

    exit();

?>