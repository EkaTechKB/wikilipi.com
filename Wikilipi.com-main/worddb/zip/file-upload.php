<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Access-Control-Allow-Credentials: true');
include_once('db-config.php');

/* ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); */

//call function 
// get posted data
$inputParams = json_decode(file_get_contents("php://input"));

$dbConnection = new DbConnection();
$uploadFile = new UploadFile();
echo json_encode($uploadFile->uploadFile($dbConnection->getDbConnection()));


class UploadFile {
    function __construct() {
    }

    public function uploadFile($dbConnection){
        //print_r($_FILES);
        $fileActualName = basename($_FILES['recording']['name']);
        $fileTempPath = $_FILES['recording']['tmp_name'];
        $target_dir = $_SERVER['DOCUMENT_ROOT']."/worddb/zip/sounds/";
        //$target_dir =  "/sounds/recording/";
        
        $split = explode(".", $fileActualName);
        $ext = '.'.end($split);
        $filenameWithoutExt = basename($fileActualName, ".m4r");
        $uniqueFileName = $fileActualName;
        $target_file = $fileActualName;
        if(move_uploaded_file($fileTempPath,$target_dir.$target_file)){
            //update file name in database
            if(mysqli_query($dbConnection,"Update EKA_WORD_TABLE SET filename = '".$fileActualName."' WHERE C_ENGLISH = '".$filenameWithoutExt."';")) {
            // Close connection
            
            } else {
                
            }	
            return array(
				"status"            => 0,
				"msg"             => "file upload success."
            );
            
            mysqli_close($dbConnection);
        } else {
            return array(
				"status"            => 1100,
				"errorMsg"             => "file upload failed."
			);
        }
    }

}

class DbConnection {
	function __construct() {

	}

	public function getDbConnection() {
		$link = mysqli_connect("localhost", "EKALIPI_94", "Ekalipi@94", "WORD_DATABASE");
		// Check connection
		if($link === false){
			die("ERROR: Could not connect. " . mysqli_connect_error());
			echo 'error';
		} else {
			//echo 'connectedd';
		}
		return $link;
	}
}

?>