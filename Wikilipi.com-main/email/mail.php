<?php
	require 'framework/vendor/autoload.php';
	require '../db-config-suspense.php';
	require 'email-config.php';

	error_reporting(E_ERROR | E_PARSE); //E_ALL ^ E_WARNING

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
	// sends email from admin@wikilipi.com to support@wikilipi.com
		// Load Composer's autoloader

	session_start();

	//task query start

	$bulkemails = array('support@wikilipi.com#Support','manoj.pjpati@gmail.com#Manoj Prajapati');

	$reply_email = $domain_email;
	$reply_name = 'Support';

	$subject = "Wikilipi - Number of items need to review";
	$query = mysqli_query($conn, "select count(*) cnt from EKA_WORD_TABLE");
	$numb_row = mysqli_fetch_assoc($query);
	$body = "<p>Hi {User},</p><p>Total ".$numb_row['cnt']." items need to be reviewed.</p><p><br></p><p>Regards,</p><p>Wikilipi.com</p>";
	$conn->close();


	// $server_name = 'smtp.gmail.com';
	$server_name = 'localhost';
	$server_port = 25;

	$c = 0;
	// Instantiation and passing `true` enables exceptions
	$mail = new PHPMailer(true);
												// Send using SMTP
	$mail->Host       = $server_name;                    // Set the SMTP server to send through
	$mail->Port       = $server_port;
	$mail->isSMTP();
	$mail->SMTPAuth   = false;                                   // Enable SMTP authentication
	$mail->SMTPDebug = 	2;                  // Enable verbose debug output
	//$mail->SMTPKeepAlive = true;
	$mail->Username   = $domain_email;                      // SMTP username
	$mail->Password   = $email_pass;                               // SMTP password

	$mail->SMTPSecure = 'ssl=none'; //PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged

	//Recipients
	$mail->setFrom('admin@wikilipi.com');

	$mail->addReplyTo('admin@wikilipi.com', 'Admin Wiki Lipi');

	// Content
	$mail->isHTML(true);                                  // Set email format to HTML
	$mail->Subject = $subject;


	foreach($bulkemails as $emailid){
		//echo '3';
		$data_str = explode("#",$emailid);

		try {

			try {
				$mail->addAddress($data_str[0]);     // Add a recipient
				//echo '4';
			} catch (Exception $e) {
				//echo '5';
				die($e);
			}


			$modified_body= str_replace("{User}",$data_str[1],$body);
			$mail->Body    = html_entity_decode($modified_body);
			// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

			if($mail->send()){
				$mail->clearAddresses();
			}
			else{

				//$err_msg = $mail->ErrorInfo;
				$mail->clearAddresses();
				$mail->getSMTPInstance()->reset();
				unset($mail);
				die("Sending email failed.");
				break;

			}


		} catch (Exception $e) {
				//echo '8';
			$err_msg = $mail->ErrorInfo;
			$mail->getSMTPInstance()->reset();
			unset($mail);
			die($err_msg);
			break;
		}
	}
	unset($mail);
	echo 'Email sent';


?>