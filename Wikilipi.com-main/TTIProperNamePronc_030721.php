<?php

	error_reporting(0);

	session_start();

?>



<!DOCTYPE html>

<html lang="en">



<head>

	<meta charset="utf-8">

	<!-- <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"> -->

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">



	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta name="description" content="">

	<title>Ekalipi Wiki</title>

	 <script src="lib\js\soundmanager2.js"></script>

	<!-- <script src=".\lib\js\soundmanager2-nodebug-jsmin.js"></script>

	<script src="lib\js\EkaTTSInsertSound.js"></script>

	<script src="lib\js\EkaL2Eplay.js"></script> -->



	<link rel="shortcut icon" href="assets/images/gt_favicon.png">

	<!-- <link rel="stylesheet" media="screen" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700"> -->

	<link rel="stylesheet" href="assets/css/bootstrap.min.css">

	<link rel="stylesheet" href="assets/css/font-awesome.min.css">

	<link rel="stylesheet" href="assets/css/jquery-ui.css">



	<!-- <script src="assets/js/jquery.min.js"></script> -->

	<!-- <script src="https://code.jquery.com/jquery-1.12.4.js"></script> -->

	<script src="assets/js/jquery.js"></script>

	<script src="assets/js/bootstrap.min.js"></script>

	<script src="assets/js/jquery-ui.js"></script>



	<!-- Custom CSS -->

	<link href="assets/css/scrolling-nav.css" rel="stylesheet">

	<link href="lib/css/TTI_Common_CSS.css" rel="stylesheet">



	<!-- Custom styles for our template -->

	<link rel="stylesheet" href="assets/css/bootstrap-theme.css" media="screen">

	<link rel="stylesheet" href="assets/css/main.css">

	<link rel="stylesheet" href="assets/css/style.css">

	<link rel="stylesheet" href="assets/css/jkeyboard.css">

	<link rel="stylesheet" href="assets/css/custom_menu.css">





	<!-- <link rel="stylesheet" href="/resources/demos/style.css"> -->





	<script src="lib\js\soundmanager2-nodebug.js"></script>

	<!-- <script src=".\lib\js\soundmanager2-nodebug-jsmin.js"></script> -->

	<script src="lib\js\EkaTTSInsertSound.js"></script>

	<script src="https://alemangui.github.io/pizzicato/Pizzicato.js"></script>

	<script src="https://www.ekalipi.org/ekaTTS/EkaTTS.js"></script>

    <script src="assets/js/audio_recording/RecordRTC.js"></script>



	<!-- word not found parsing js start -->

	<script src="ekalt2e\lib\js\ParseEnglishIN.js"></script>

	<script src="ekalt2e\lib\js\ParseEnglishUK.js"></script>

	<script src="ekalt2e\lib\js\ParseEnglishUS.js"></script>



	<script src="ekalt2e\lib\js\text-to-ipa.js"></script>

	<script src="ekalt2e\lib\js\text-to-eka.js"></script>



	<script src="ekalt2e\lib\js\tti-ui-min.js"></script>



	<script src="ekalt2e\lib\js\selectLang.js"></script>

	<!-- word not found parsing js end -->



	<style>

		

		



		.custom-form-control {

			display: block;

			/* width: 100%; */

			height: 34px;

			padding: 6px 12px;

			font-size: 14px;

			line-height: 1.428571429;

			color: #555;

			background-color: #fff;

			background-image: none;

			border: 1px solid #ccc;

			border-radius: 4px;

			-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);

			box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);

			-webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

			transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

		}



		.option-add {

			cursor: pointer;

			/* margin: 15px 0; */

		}

		.output-span{

			/* border-radius: 10px;

			background: cornsilk;

			padding: 1px; */

		}

		.ui-autocomplete {

            max-height: 200px;

            overflow-y: auto;

            /* prevent horizontal scrollbar */

            overflow-x: hidden;

            /* add padding to account for vertical scrollbar */

            padding-right: 20px;

		}

		/* .modal-backdrop {

			z-index: 1020;

		} */

		.modal-backdrop.in { z-index: auto;}

		#exampleModalCenter .modal-dialog {

		width: 100%;

		height: 100%;

		margin: 0;

		padding: 0;

		}



		/* .modal-content { */

		/* height: 90%; */

		/* min-height: 100%; */

		/* border-radius: 0; */

		/* } */

		#exampleModalCenter .modal-content {

			background-color: #fefefe !important;

			/* margin: 5% auto 15% auto; */

			border: 1px solid #888 !important;

			/* width: 80%; */

		}

		.bs-dark.navbar-inverse {

  background-color: #222;

  border-color: #080808;

}

.bs-dark .navbar-img {padding:5px 6px !important;}

.bs-dark .navbar-img img {width:40px;}

.bs-dark .dropdown-menu {

  min-width: 200px;

  padding: 5px 0;

  margin: 2px 0 0;

  background-color: #000;

  border: 1px solid rgba(0, 0, 0, 0.7);

  border: 1px solid rgba(0, 0, 0, .15);

  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);

          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);

}



.bs-dark .dropdown-menu .divider {

  border: 1px solid rgba(0, 0, 0, 0.8);

}

.bs-dark .dropdown-menu > li > a {

  padding: 6px 20px;

  color: rgba(255,255,255,0.80);

}

.bs-dark .dropdown-menu > li > a:hover,

.bs-dark .dropdown-menu > li > a:focus {

  color: rgba(255,255,255,0.70);

  text-decoration: none;

  background-color: transparent;

}

.bs-dark .dropdown-menu > .active > a,

.bs-dark .dropdown-menu > .active > a:hover,

.bs-dark .dropdown-menu > .active > a:focus {

  color: rgba(255,255,255,0.70);

  text-decoration: none;

  background-color: transparent;

  outline: 0;

}



.bs-dark .navbar-form {

  margin:0;

  margin-top: 5px;

  padding:8px 0px;

}



.bs-dark .navbar-form .search-box {

  border:0px;

  height:35px;

  outline: none;

  width:320px;

  padding-right: 3px;

  padding-left: 15px;

  margin:4px;

  -webkit-border-radius: 22px;

  -moz-border-radius: 22px;

  border-radius: 22px;

}



.bs-dark .navbar-form button {

  border: 0;

  background: none;

  padding: 2px 5px;

  margin-top: 2px;

  position: relative;

  left: -34px;

  margin-bottom: 0;

  -webkit-border-radius: 3px;

  -moz-border-radius: 3px;

  border-radius: 3px;

}



.bs-dark .search-box:focus + button {

  z-index: 3;

}



@media (min-width: 768px) {

    .bs-dark .dropdown:hover {background-color: #000;}

	.bs-dark .dropdown:hover .dropdown-menu {

	  display: block;

	}

	.bs-dark .navbar-form {

	  padding:0px;

	}

	.bs-dark .navbar-form .search-box {

	  width:260px;

	  height:32px;

	}



}

* {

  box-sizing: border-box;

}



.column {

  float: left;

  width: 70px;

  padding: 10px;

  height: 50px; /* Should be removed. Only for demonstration */

}

.column1 {

    float: left;

    width: 100px;

    padding: 10px;

    height: 50px;

}

.column2 {

    float: left;

    width: 140px;

    padding: 0px;

    height: 50px;

	border-top-width: 0px;

	border-top-style: solid;

	padding-top: 18px;

}

.column3 {

  float: left;

  width: 90px;

  padding: 10px;

  height: 50px; /* Should be removed. Only for demonstration */

}

/* Clear floats after the columns */

.row:after {

  content: "";

  display: table;

  clear: both;

}

body {



    line-height: 1.0em;

}

	</style>

</head>

<nav class="navbar navbar-inverse bs-dark" style="margin-bottom:0px;border-radius:0px;">

						<div class="navbar-header">

						  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">

							<span class="sr-only">Toggle navigation</span>

							<span class="icon-bar"></span>

							<span class="icon-bar"></span>

							<span class="icon-bar"></span>

						  </button>

						  <a class="navbar-brand" href="index.php" style="font-size:20px;color:#fff">Home</a>

						  

						</div>



						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

						  <ul class="nav navbar-nav">

						  <li class="active" style="font-size:16px"><a href="index.php"target="_blank">Novice Mode</a></li>

						  <li class="active" style="font-size:16px"><a href="contribution.php"target="_blank">Contributions</a></li>

						  <li class="active" style="font-size:16px"><a href="http://wikilipi.com/view/dictionary.html"target="_blank">Dictionary</a></li>

							<li class="active" style="font-size:16px"><a href="https://ekalipi.com/downloads.html"target="_blank">Downloads</a></li>

							<li class="active" style="font-size:16px"><a href="about.html"target="_blank">About</a></li>

							<li class="active" style="font-size:16px"><a href="#contact" class="tm-nav-item-link">Contact</a></li>

							<li style="font-size:16px"><a href="http://wikilipi.com/contribution/dashboard.html" target="_blank">AdminApprovals</a></li>

						

							

							<li class="dropdown hide">

							  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Explores <span class="caret"></span></a>

							  <ul class="dropdown-menu">

								<li><a href="#">News</a></li>

								<li><a href="#">Sports</a></li>

								<li><a href="#">Business</a></li>

								<li><a href="#">Fashion</a></li>

								<li role="separator" class="divider"></li>

								<li><a href="#">Gallery</a></li>

								<li role="separator" class="divider"></li>

								<li><a href="#">Videos</a></li>

							  </ul>

							</li>

						  </ul>



						  <ul class="nav navbar-nav navbar-right hide">

						  <form class="navbar-form navbar-left form-horizontal" role="search">

							  <div class="input-group">

								 <input type="text" class="search-box" placeholder="Search">

								 <button type="submit" class="btn"><span class="glyphicon glyphicon-search" style="margin-bottom:5px;"></span></button>

							  </div>

						  </form>

							<li class="dropdown hide">

							  <a href="#" class="dropdown-toggle navbar-img" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">

							  Account

							  <img src="http://placehold.it/150x150" class="img-circle" alt="Profile Image" />

							  </a>

							  <ul class="dropdown-menu">

								<li><a href="#">Profile</a></li>

								<li><a href="#">Inbox</a></li>

								<li><a href="#">Followers</a></li>

								<li role="separator" class="divider"></li>

								<li><a href="#">Settings</a></li>

							  </ul>

							</li>

						  </ul>

						</div>

					</nav>





<body style="background: #FFFFFF;" >

<div class="modal fade" id="emailModal" role="dialog">

    <div class="modal-dialog modal-sm">

      <div class="modal-content">

        <div class="modal-header">

          <button type="button" class="close" data-dismiss="modal">&times;</button>

          <h5 class="modal-title">Saved</h5>

        </div>

		<form id='emailform' accept-charset="utf-8" style="padding-left:20px; padding-right:20px;" action='submit_contribution.php' class='form'>



			<div class="modal-body">

				<div class="row">

				<input type="hidden" name='formtype' value='emailform'>

				<input type="hidden" name='record_id' id='record_id' value=''>



					<label class='control-label' for='useremail'>Enter you email</label>

					<input class='form-control' type='text' id='email' name='email' value='<?php echo $_SESSION['email']?>'>

				</div>

				<div class="row">

					<small><b>We will inform you updates on your contribution.</b></small>

				</div>

			</div>

			<div class="modal-footer">

			<button type="button" class="btn btn-success" id='submitEmailModalBtn' >Submit</button>

			</div>



	</form>



      </div>

	</div>

</div>



<div class="modal fade" id="exampleModalCenter" role="dialog" style='padding-top:0px;'>

				<div class="modal-dialog modal-lg" style="height: 90%;">

					<div class="modal-content">

						<div class="modal-header">

							<button type="button" class="close" data-dismiss="modal">&times;</button>

							<h4 class="modal-title">Add</h4>

						</div>

						<div class="modal-body" style='background-color: #030303;'>

						<div class="row">

							

							<div class="col-md-6">

								<form action="/action_page.php" class='form' method="get">

								<div class='row'>

									<div class="col-sm-7">

										

										<input class='form-control' type="text" placeholder="Input word" id="ekalipi_input_word" name='ekalipi_input_word' readonly>

									</div>

								</div>

								<br>

								<div class='row'>

									<div class="col-sm-7">

										

										<input class='form-control' type="text" id="search_field" placeholder="Ekalipi word"name='search_field'>

									</div>

									<div class="col-sm-4" >

										

										

										<input class='form-control col-sm-10' type="text" id="country_code"placeholder="Country Code" maxlength='4' name='country_code'>

									</div>

									<!-- <div class='col-sm-1'>



										<label> </label>

										<input type="hidden" >

									</div> -->

								</div>

								<br>

								<div align="center"><input name="sound" value="sound" id="IsPlaysound" type="checkbox"><label

										for="sound">

										<font color="White">Hover to Play Sound </font>

									</label>

								</div>

								<div align="center"><input name="hoverTyping" value="hoverTyping" id="HoverTyping" type="checkbox"><label

										for="hoverTyping">

										<font color="White">Hover to Type </font>

									</label>

								</div>

								<div id="keyboard"> </div>



								<div align="center">

									<div class="row">

										<button style='padding:5px; border: 2px solid white;' onclick="playEklipi2();" type="button" class="btn btn-xs btn-success shadow">Play-Under Construction</button>

										<button style='padding:5px; border: 2px solid white;' type="reset" value="Reset" class="btn btn-xs btn-warning">Clear Boxes</button>

										<button style='padding:5px; border: 2px solid white;' type="button" class="btn btn-xs btn-info" ><a href="https://ekalipi.com/downloads.html" target="_blank">View Instructions</a></button>

									</div>

									<div class="row" style='margin-top:5px;'>

										<div class='col-sm-3'>



										</div>

										<div class='col-sm-6'>

											<a id="btn-save-contribution" style='padding:5px; border: 2px solid yellow;' class="btn btn-xs btn-success btn-block"  href='#' >Save My Contribution <i id="loader_submit_btn" class="fa fa-spinner fa-spin hidden"></i></a>

										</div>

										<div class='col-sm-3'>



										</div>

									</div>



									<div id="demo" class="collapse">

										<font color="white">

											<h4><a href="https://ekalipi.com/downloads.html" target="_blank">Ekalipi Windows Keyboard Installation Instructions</a></h4>





										<!--	<ol>

												<div align="left">

													<p><b>If you do not currently have the Ekalipi Keyboard installed, simply

															respond to the onscreen prompts.</b></p>

													<hr class="border">

													<p><b>If you already have the Ekalipi keyboard installed, you can remove it,

															using the Windows control panel.</b></p>

													<hr class="border">

													<p><b>OR </b></p>

													<li>If you already have an Ekalipi Keyboard, you will be prompted to save

														downloaded file.</li>

													<li><a href="Ekalipi6.4.exe" download> Download </a> the Installation package.

														Save the file at the default location (or at a different location if you are

														familiar with Windows). Navigate to the file location and double-click on

														the file name Ekalipi6.4.exe.

														<img src="img/windows1.jpg" class="img-responsive">

													</li>

													<li>Click on save downloaded the executable fileYou may receive the following

														warning. This is the standard Windows warning for .exe files. Click on “Run

														Anyway”.

														<img src="img/windows_1.jpg" class="img-responsive">

														_

													</li>

													<li>Click on Yes

														<img src="img/windows3.jpg" class="img-responsive">

													</li>

													<li>Click on Yes

														Click on Remove Keyboard

														<img src="img/windows4.jpg" class="img-responsive">

													</li>

													<li>Click on Download.exe & repeat the process.After complete all the process

														the you get below window that mean Ekalipi Keyboard is successfully

														installed on your computer.

														Click the Close button

														<img src="img/windows5.jpg" class="img-responsive">

														Activating the Ekalipi keyboard

													</li>

													<li>Follow the instructions here to install the icon. Right click on the

														Taskbar, click on Toolbars, then click on Touch Key board. You should now

														see a keyboard icon in the taskbar.

													</li>

													<li>Click on the keyboard icon on the taskbar, then click on the keyboard icon

														on the keyboard. You should now see the Ekalipi keyboard in the list of

														keyboards.

														<img src="img/windows_7.jpg" class="img-responsive">

													</li>

													<li>Reboot your computer.</li>

													<li>After you have rebooted the computer, click on the keyboard icon on the

														taskbar. You will first see your default keyboard:

														<img src="img/windows_91.jpg" class="img-responsive"> Click on the keyboard

														icon in the right hand corner and click on the Ekalipi keyboard. You will

														now see the following keyboard:

														<img src="img/windows7.jpg" class="img-responsive"> CONGRATULATIONS! You

														have successfully installed and activated the Ekalipi keyboard.

													</li>

													</div>

											</ol> -->

										</font>

								</div>

								</div>



								<div align="center">

									<h4 style="color:#FFFF00;">Messages </h4>

								</div>

								<div align="center">

									<button style='padding:5px;margin-top:5px;' type="button" class="btn btn-xs" onclick="showHideRecordingOpions()" id='new-recording-btn'><i class="fa fa-microphone" aria-hidden="true"></i></button>



									<div class="row" id="recording_div" style="margin-top:5px;">

										<div class="col-sm-12">

											<button id="btn-start-recording" class="btn btn-xs" style="padding:4px" ><i class="fa fa-play" aria-hidden="true"></i> Start Recording</button>

											<button id="btn-stop-recording" class="btn btn-xs" style="padding:4px" disabled=""><i class="fa fa-stop" aria-hidden="true"></i> Stop Recording</button>

											<button style="display: none;" class="btn btn-xs" style="padding:4px" id="btn-release-microphone">Release Microphone</button>

											<button id="btn-download-recording" class="btn btn-xs" style="padding:4px" disabled=""><i class="fa fa-download" aria-hidden="true"></i> Download Recording</button>

											<hr>

											<div><audio controls="" autoplay="" src=""></audio></div>

											<hr>

										</div>

										</div>

								</div>

								</form>

							</div>

							<div class="col-md-3">

								<font color="white">

									<ul>

										<li> The Hover feature is only supported on Windows PC's.</li>

										<li> Intended as a practice keyboard to learn the Ekalipi alphabet and its basic sounds.

										</li>

										<div class="card">

      <div class="card-header">

        <a class="collapsed card-link" data-toggle="collapse" href="#collapseOne">

       <font color="Green"> <strong>Read More </strong></font>

      </a>

      </div>

	  

      <div id="collapseOne" class="collapse" data-parent="#accordion">

        <div class="card-body">

										<li> Text can be copy-pasted into your text messaging app or email.</li>

										<li> For regular use, download, install and use the Ekalipi keyboard on all your

											devices.</li>

										<li>Versions available for Windows PCs <br>(download from ekalipi.org), IOS (App

											Store)and Android (Play Store).</li></div></div></div>

									</ul>

								</font>

							</div>

							

							

							<div class="col-md-3">

							<font color="white">



								<ul>

									<li> Click inside the text box to get started. </li>

									<li> Then click the intended character with your mouse.</li>

									

									<li> Press "Clear" to start over.</li>

									<li> Press 'PLAY" to hear the sound. <br>Note - Our TTS engine is currently in a very primitive state.

										We are continuously improving it. </li>

									<div class="card">

      <div class="card-header">

        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">

       <font color="Green"> <strong>Read More</strong></font>

      </a>

      </div>

	  

      <div id="collapseTwo" class="collapse" data-parent="#accordion">

        <div class="card-body"><li>To hear the sound of a character before you type it:</li>

									* Check the box "Play Sound by Hovering over letter".

									<br>* Move your mouse slowly over the letter.

									<br>* To avoid playing unneeded sounds, move the mouse through the gaps between the letters.

									<li><hr></li>

									<li>

									Unable to type name in Ekalipi? In that case, please record and send it to us by clicking on the record button.

									</li>

								</ul>

								</font>

							</div></div></div></div>

						</div>



						<!-- <div class="modal-footer">

							<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

							<button type="button" class="btn btn-success" data-dismiss="modal">Save</button>

						</div> -->

					</div>

				</div>

				</div>

	</div>



	

	<div class="container-fluid">

	<!--<a class="btn btn-success" href="index.php" target="_blank" role="button">Novice Mode</a> -->

	<form id="myForm" action="TTIProperNamePronc.php" method="POST" enctype="multipart/form-data">

		<div style="text-align: left;">

			<div class="container-fluid">

				<p id="demo"></p>

				<select class='hidden' name="langFor" id="langFor"><option selected>English IN(Future)</select>

				<!-- <input type='hidden' id='langFor' value='English IN(Future)'> -->

					<div class="row">



						<?php

								echo '<div class="col-xs-12 col-md-6"><span><label for="IsStressShow">';



								if(isset($_POST['Stress']))

								{

									if($_POST['Stress'] == 'Stress'){

										echo '<input name="Stress" value="Stress" id="IsStressShow" type="checkbox" checked> ';

									}else{

										echo '<input name="Stress" value="Stress" id="IsStressShow" type="checkbox"> ';

									}

								}else{

									echo '<input name="Stress" value="Stress" id="IsStressShow" type="checkbox" checked> ';

								}

								echo '<font color="Black"> Show Stress Characters in output ( ˈ )

								</font></label></span>&nbsp;&nbsp;&nbsp;&nbsp;<span><label for="Conjunct_Con">';

								// echo '<div class="col-xs-6">';

								if(isset($_POST['Conjunct_Con']))

								{

									echo '<input name="Conjunct_Con" id="Conjunct_Con" value="Conjunct_Con" id="IsConjunctShow" type="checkbox" checked> ';

								}else{

									echo '<input name="Conjunct_Con" id="Conjunct_Con" value="Conjunct_Con" id="IsConjunctShow" type="checkbox"> ';

								}



								echo '<font color="Black"> Do not show Conjunct Consonants ( ‑ )

								</font></label></span></div>';



						?>

						<!-- <input name="Stress" value="Stress" id="IsStressShow" type="checkbox" checked> -->

						<!-- <input name="Conjunct_Con" value="Conjunct_Con" id="IsConjunctShow" type="checkbox" > -->



					</div>

					





     <div class="row">

			<div class="column">

		          <input type="submit" class="btn btn-success shadow" style="margin-right:40px;width: 75px; background-color: green;  border:3px solid white;padding: 4px 10px;" name="submit" value="Convert">

			</div>

            <div class="column3">

                  <button type="button" onclick="resetForm()" class="btn btn-warning shadow" style="margin-right:40px;width: 91px; background-color: blue;border-radius: 0px; border:3px solid white;padding: 4px 6px; ;">Clear Boxes</button>

            </div>

            <div class="column1">

                 <button style="width:70px; height:35px;" type="button"> <i class="fa fa-volume-up" style="font-size:30px" onclick="EkaTTSMain();"aria-hidden="true"></i><i class="fa fa-question" style="font-size:30px"></i></button>

            </div>

			 

  

</div>



<br>

				<div class="row">

					<div class="col-sm-3">

						<font face="Verdana" size="4">

							<textarea id="ipa-in2" name="ipaName" placeholder="Enter the Name" rows="4" cols="26"

								style="border:2px solid black;background-color:#e8ecf0; margin : 2px;"><?php

								// include_once("./db-config.php");



								if(isset($_POST['submit']))

								{

									//form table name

									$C_ENGLISH_save=$_POST['ipaName'];

									echo $C_ENGLISH_save;

								}

								//mysql_close($conn);

							?></textarea>

						</font>

					</div>

					

									<!--<div class="col-sm-1">

							

								<input type="submit" class="btn btn-success shadow" style='margin-right:40px;width: 100px; background-color: green; border-radius: 12px; border:5px solid white;padding: 7px 20px;' name='submit' value='Convert'>

								</div>

								

								<div class="col-sm-1">

								<button type="button" onclick="resetForm()" class="btn btn-warning shadow" style='margin-right:40px;width: 100px; background-color: blue;border-radius: 12px; border:5px solid white;padding: 7px 10px; ;'>Clear Boxes</button>

						</div> -->

					

				</div>



				<ul class='custom-menu custom-menu-word-found'>

				<li data-action = "pronounce">Pronounce &nbsp;&nbsp; <i class="fa fa-volume-up" aria-hidden="true"></i></li>

				<li data-action = "add_pronounce"><b>Add</b>  <i class="fa fa-plus" aria-hidden="true"></i></li>

				</ul>



				<ul class='custom-menu custom-menu-multiple-word-found'>

				<!-- <li data-action = "show_more_results">Show more results</li> -->

				<li data-action = "pronounce">Pronource &nbsp;&nbsp; <i class="fa fa-volume-up" aria-hidden="true"></i></li>

				<li data-action = "add_pronounce"><b>Add</b>  <i class="fa fa-plus" aria-hidden="true"></i></li>

				</ul>



				<ul class='custom-menu custom-menu-word-not-found'>

				<!-- <li data-action = "did_you_mean_followings">Did you mean followings?</li>

				<li data-action = "">...</li>

				<li data-action = "">...</li> -->

				<li data-action = "add_pronounce"><b>Add</b> <i class="fa fa-plus" aria-hidden="true"></i></li>

				</ul>



				<div class="row" style="margin-top:10px;">

					<div id="output-div" class="col-sm-6 col-md-6" style="margin-left:17px; font-family:verdana; font-size:130%; border-style: solid; overflow-y: scroll; height:150px; width:271px;">



						<?php

								$worddata_list = array();

								include_once("./db-config.php");



								if(isset($_POST['submit']))

								{

									// var_dump($_POST);

									//form table name

									$C_ENGLISH_save=$_POST['ipaName'];



									$show_stress = False;

									$hide_conjuct = False;

									if($_POST['Stress'] == 'Stress'){

										$show_stress = True;

									}



									if($_POST['Conjunct_Con'] == "Conjunct_Con"){

										$hide_conjuct = True;

									}





									if($C_ENGLISH_save){

										$lines = explode(PHP_EOL, $C_ENGLISH_save);



										// Print the information of array



										for($c = 0; $c < count($lines); $c++){



											$elements = explode(" ", strtolower($lines[$c]));



											for ($i = 0; $i < count($elements); $i++)

											{



												$worddata = array();

												$element = str_replace(".","",$elements[$i]);

												$element = str_replace(",","",$element);

												$element = trim($element,' ');

												$element = trim($element,"\t");

												$element = trim($element,"\r");



												$worddata['input'] = $element;

												$worddata['options'] = array();



												if(strlen($element)>0){





													$sql1 = "SELECT C_EKALIPI,C_COUNTRY FROM EKA_WORD_TABLE WHERE C_ENGLISH='".$element."'";



													// echo $sql1;

													$result = mysqli_query($conn, $sql1);

													$first_time = true;

													$total_result = mysqli_num_rows($result);

													// var_dump($total_result);

													if ($total_result > 0)

													{



														while($row = mysqli_fetch_assoc($result))

														{

															$C_EKALIPI = $row["C_EKALIPI"];

															if(!$show_stress){

																// echo ' |hide stree 1 '.$C_EKALIPI.' | ';

																$C_EKALIPI = str_replace("ˈ","", $C_EKALIPI);

																// echo ' |hide stree 2 '.$C_EKALIPI.' | ';



															}else{

																// echo ' |show stress| ';

															}

															if($hide_conjuct){

																// echo ' |hide conjuct 1 '.$C_EKALIPI.' | ';

																$C_EKALIPI = str_replace('‑','', $C_EKALIPI);

																// echo ' |hide conjuct 2 '.$C_EKALIPI.' | ';



															}else{

																// echo ' |show conjuct| ';

															}



															if($first_time){

																$worddata['input'] = $element;

																$style = "color:green";

																if($total_result>1){

																	$style = 'color:violet';

																	$class = 'output-span-multiple-word-found';

																}else{

																	$class = 'output-span-word-found';

																}

																$span_id = "span-".$element;

																echo "<span class='$class' style='".$style.";' id='".$span_id."'>$C_EKALIPI</span><span style='color:gray;'></span>";

																$first_time = false;

															}

															$option_text = $C_EKALIPI." ( ". $row['C_COUNTRY'] ." )";

															array_push($worddata['options'], array($C_EKALIPI, $option_text));



														}

														echo " ";

													}else{



															echo "<span style='color:red;' class='output-span-word-not-found' id='".$element."'>".$element."</span> ";

															echo "<input class='hidden' type='checkbox' id='words_not_found_list_class' checked value='".$element."'>";





															$sql2 = "INSERT INTO `EKA_MISSING_WORD_TABLE`(`C_ENGLISH`, `C_COUNT`, `C_EKALIPI`, `C_COUNTRY`, `C_TIME`, `C_OTHER`, `srn`) VALUES ('$elements[$i]','','','','','','')";

															$result1 = mysqli_query($conn1, $sql2);

													}

													// else

													// {

													// 	$found = False;



													// 	for($char_at=0; $char_at<strlen($element); $char_at++){

													// 		$word_to_search = substr($element,0,strlen($element)-$char_at);



													// 		$sqlx = "SELECT * FROM EKA_WORD_TABLE WHERE C_ENGLISH='$word_to_search'";



													// 		$result = mysqli_query($conn, $sqlx);

													// 		// $n = mysqli_num_rows($result);

													// 		$total_result = mysqli_num_rows($result);

													// 		if ($total_result > 0)

													// 		{

													// 			while($row = mysqli_fetch_assoc($result))

													// 			{

													// 				if($first_time){

													// 					$worddata['input'] = $word_to_search;

													// 					$style = "color:green";

													// 					if($total_result>1){

													// 						$style = "color:orang";

													// 					}

													// 					echo "<span style='".$style.";'>" .$row['C_EKALIPI']."</span><span style='color:red;'>".substr($element,strlen($element)-$char_at,$char_at)."</span><span style='color:gray;'></span>";



													// 					$first_time = false;

													// 				}

													// 				$option_text = $row['C_EKALIPI']." ( ".$row['C_COUNTRY']." )";

													// 				$option_val = $row['C_EKALIPI'];



													// 				array_push($worddata['options'], array($option_val, $option_text));

													// 				$found=True;

													// 			}

													// 			echo " ";



													// 		}

													// 		if($found===True){

													// 			break;

													// 		};

													// 	}

													// 	if(!$found){

													// 		echo "<span style='color:red;'>". $element ."</span>";

													// 		echo " ";



													// 		$sql2 = "INSERT INTO `EKA_MISSING_WORD_TABLE`(`C_ENGLISH`, `C_COUNT`, `C_EKALIPI`, `C_COUNTRY`, `C_TIME`, `C_OTHER`, `srn`) VALUES ('$elements[$i]','','','','','','')";

													// 		$result1 = mysqli_query($conn1, $sql2);

													// 	}



													// } // you either find whole word or dont - kishor sir 29-oct-2020





													if(Count($worddata['options'])>=1){

														array_push($worddata_list, $worddata);

													}



												}

											}

											echo "<br>";

										}

									}

								}

								//mysql_close($conn);

							?>





					</div>



				<!--	<div class="col-md-1" style="">

						<h3><button style="width:35px; height:35px;" type="button" onclick="EkaTTSMain();"><i class="fa fa-volume-up" aria-hidden="true"></i></button></h3>

					</div>-->

					<div id="div-output-selectors" class="row" style="margin-top: 16px;margin-left: 16px;"> 

					<?php

						// $counter = 1;

						// foreach($worddata_list as $worddata){

						// 		echo '<div class="col-md-2">



						// 		<label id="label-'.$worddata['input'].'" for="select-'.$worddata['input'].'" class="">'.$worddata['input'].'</label>

						// 		<select id="select-'.$worddata['input'].'" class="custom-form-control" onchange=updateOutputDiv("'.$worddata['input'].'",this)>';



						// 		foreach($worddata['options'] as $option){

						// 			echo "<option value='$option[0]'>$option[1]</option>";

						// 		}

						// 		echo "<option class='option-add' value='add' >Add +</option>";

						// 		echo '</select></div>';

						// 	$counter++;

						// }

						$input_output_mapping = array();

						foreach($worddata_list as $worddata){

								$input_output_mapping[$worddata['input']] = $worddata['options'];

						}

						$output_input_mapping = array();

						foreach($worddata_list as $worddata){

							foreach($worddata['options'] as $option){

								$output_input_mapping[$option[0]] = $worddata['input'];

							}

						}



						echo "<div id='data-json-div' data-json='".json_encode($input_output_mapping)."' data-json-mapping='".json_encode($output_input_mapping)."'></div>";



					?>

					</div>



				</div>

				<div class="row" style="margin-top:5px;">

					<div  class="col-sm-3 col-md-3" style="font-family:verdana; font-size:90%;">

						<label><input type="checkbox" name='show-debug-checkbox' id='show-debug-checkbox' value='show' onclick="showHideDebug()"> Debug Sound Issue</label>

					</div>

				</div>

				<div class="row" style="margin-top:5px;" id="debug-div" >

				<div  class="col-sm-3 col-md-3" style="font-family:verdana; font-size:130%;">



						<textarea name="ErrMsg" id="ErrMsg" cols="1" rows="4" class='form-control'></textarea>

						<textarea name="err-out" id="err-out" cols="1" rows="4" class='form-control hidden'></textarea>

						<textarea name="ipa-out" id="ipa-out" cols="1" rows="1" class='form-control hidden'></textarea>

						<textarea name="ipa-box" id="ipa-box" cols="1" rows="1" class='form-control hidden'></textarea>

				</div>

				</div>

				<div align="left" style="margin-right : 0px;">

					<div class="row">

						<div class='col-sm-3'>

							<p style='margin-left:5px; color:black;'>

							<font size='2'>

							<div class="card">

      <div class="card-header">

        <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">

       <font color="Blue"> <strong>More Info</strong></font>

      </a>

      </div>

	  

      <div id="collapseThree" class="collapse" data-parent="#accordion">

        <div class="card-body">

								<b>Words not found in our database are colored in red and found words are colored in green.</b><br>

								<b>Word with multiple results colored in violet. Right click to see more results and available options.</b><br>

								<b>In dropdown country code shown in brackets. <br>ex. ( US )</b><br>

								<b>Text To Speech under construction.</b>

							</font>

							</p>

						</div>

					</div>

</div>

</div>



					<div class="row">

					<!--	<div class="col-sm-3">

							<center>

								<input type="submit" class="btn btn-success shadow" style='margin-left:40px;width: 200px; background-color: green; border-radius: 12px; border:5px solid white;' name='submit' value='Convert'>

								<br>

								<button type="button" onclick="resetForm()" class="btn btn-warning shadow" style='margin-top:10px; margin-left:40px;width: 200px; border-radius: 12px; border:5px solid white; ;'>Clear Boxes</button>



							</center>

						</div> -->

						<!--<div class="col-sm-3">

							<div style="padding:10px; border:5px solid black; background-color:white;">

							<div class="card">

      <div class="card-header">

        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">

       <font color="Blue"> <strong>More Info </strong></font>

      </a>

      </div>

	  

      <div id="collapseTwo" class="collapse" data-parent="#accordion">

        <div class="card-body">

										<b style="color:black;">To hear the text prounced correctly,</b>



										<a target="_blank"  href="https://www.amazon.com/ECA-Ekalipi-Call-Announcer-India/dp/B07Q5Z8G8D/ref=sr_1_1?dchild=1&keywords=ekalipi&qid=1605789735&s=mobile-apps&sr=1-1">Download the Ekalipi Call Announcer Android App</a>



										<br><center style="color:gray;"><font size='3'><b>--------- OR ---------</b></font></center>

										<b>From our,</b> <a href="http://www.ekalipi.com/eca.html">Ekalipi site</a> (Coming Soon)

							</div>

						</div>

						</div>

      </div>

    </div>	-->

	  </div>

						<!-- <div class="col-xs-5 col-sm-5 col-lg-5 col-md-5"> -->

							<!-- <input

								style="width: 200px; height: 50px; background-color: green; color: white; border-radius: 12px; border:5px solid white;"

								type="submit" name="submit" value="submit"> -->

						<!-- </div> -->

					</div>

					<!-- <div class="row" style="margin-top:10px;">

						<div class="col-sm-3">

							<center>

							</center>

						</div>

					</div> -->

					<!-- <div class="row">

						<div class="col-xs-3 col-sm-3 col-lg-3 col-md-3"></div>

						<div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">

							<font face="Vardana" size="5"><input type="button" value="Clear Boxes" onclick="resetForm()"

									style="	width: 200px;

											height: 50px;

											background-color: red;

											color: white;

											border-radius: 12px;

											border:5px solid white;"></button></font>

						</div>

						<div class="col-xs-3 col-sm-3 col-lg-3 col-md-3"></div>

					</div> -->

					<br>

					<div class="container">



						<style>

							body {

								background: #1E242C;

							}



							#search_field {

								display: block;

								margin: 0 auto;

								padding: 0px 10px;

							}



							.tempDesign12 {

								background-color: Seashell;

								width: 500px;

								border: 10px solid Salmon;

								padding: 20px;

								margin: 5px;

								display: inline-block;

								vertical-align: top;

								height: 290px;

							}



							.tempColor5 {

								background-color: Beige;

								border: 10px solid turquoise;

							}



							.ribbon {

								position: relative;

								top: -500px;

								right: -50px;

							}

						</style>



						<!-- <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script> -->

						<script src="./lib/js/jkeyboard.js"></script>



					</div>





				</div>

				</div>

				</div>

	</form>

	</div>

	

	<center> <div id="contact"></div>

      <hr>

      <h2>Contact Us</h2>     <br> <strong>India </strong>

      <br> The Ekalipi Institute

      <br>Survey No:54, Ramanadi Housing Society,

      <br>Bavdhan, Pune-411021

      <br>admin@ekalipi.org

      <br>Phone: +91 7208696522

      <br><br>

      <strong>US</strong>

      5440 Lindley Avenue Unit 111, <br>

      Encino CA 91316<br>

      Phone: +1 805 426 5676	</center>





	<script>

		function resetForm() {

			$("#ipa-in2").val("");

			$("#search_field").val("");

			$('#ekalipi_input_word').val('');

			$('#output-div').html('');

			$('#div-output-selectors').html('');

		}

		// $('select').change(function () {

		// 	console.log('select changed');

		// 	console.log($(this).val());

		// 	var value = $(this).val();

		// 	if (value == 'add') {

		// 		// alert('modal pop');

		// 		$('#exampleModalCenter').modal('show');

		// 	}

		// });

		var output_word = "";

		var options_json = $('#data-json-div').data('json');

		var output_input_mappig = $('#data-json-div').data('json-mapping');

		// var all_words = $('#data-english-word-json-div').data('json');

		var visible_words = [];

		var ekalipi_keyboard_inputbox_value = '';

		var words_not_found_list = []; //$('#words_not_found_list').val();

		$('#debug-div').hide();

		var showDebugDiv = false



        $('#words_not_found_list_class:checked').each(function(i){

			words_not_found_list[i] = $(this).val();

        });

		// console.log("######words_not_found_list###### "+words_not_found_list);

		words_not_found_list.forEach(function(key,val){

			var output = tryToParse('EnglishIN',key);



			$('#'+key).html(output);

			output_input_mappig[output] = key;

		})

		// console.log(all_words);

		// console.log(options_json);

		// console.log(output_input_mappig);

		// Trigger action when the contexmenu is about to be shown

		// $('.output-span-multiple-word-found').mousedown(function(event) {

		// 	switch (event.which) {

		// 		case 1:

		// 			if(!visible_words.includes(event.target.textContent)){



		// 				showMoreResult(event.target.textContent);

		// 			}

		// 			break;

		// 	}

		// });

		$('.output-span-word-found').bind("contextmenu", function (event) {

			output_word = event.target.textContent;

			ekalipi_keyboard_inputbox_value = output_word;

			$('#search_field').val(ekalipi_keyboard_inputbox_value);

			console.log('1');

			console.log(output_input_mappig);

			console.log(output_word);

			$('#ekalipi_input_word').val(output_input_mappig[output_word]);

			// Avoid the real one

			event.preventDefault();



			// Show contextmenu

			$(".custom-menu-word-found").finish().toggle(100).



			// In the right position (the mouse)

			css({

				top: event.pageY + "px",

				left: event.pageX + "px"

			});

		});

		$('.output-span-multiple-word-found').bind("contextmenu", function (event) {

			output_word = event.target.textContent;

			ekalipi_keyboard_inputbox_value = output_word;

			$('#search_field').val(ekalipi_keyboard_inputbox_value);

			console.log('2');

			console.log(output_input_mappig);

			console.log(output_word);



			$('#ekalipi_input_word').val(output_input_mappig[output_word]);



			// Avoid the real one

			event.preventDefault();

			showMoreResult(output_word);

			// Show contextmenu

			$(".custom-menu-multiple-word-found").finish().toggle(100).



			// In the right position (the mouse)

			css({

				top: event.pageY + "px",

				left: event.pageX + "px"

			});

		});



		$('.output-span-word-not-found').bind("contextmenu", function (event) {

			output_word = event.target.textContent;

			ekalipi_keyboard_inputbox_value = output_word;

			$('#search_field').val(ekalipi_keyboard_inputbox_value);

			console.log('3');

			console.log(output_input_mappig);

			console.log(output_word);



			if(output_input_mappig[output_word] ==  undefined){

				$('#ekalipi_input_word').val(output_word);

			}else{

				$('#ekalipi_input_word').val(output_input_mappig[output_word]);

			}



			// Avoid the real one

			event.preventDefault();

			// showMoreResult(output_word);



			// Show contextmenu

			$(".custom-menu-word-not-found").finish().toggle(100).

			// In the right position (the mouse)

			css({

				top: event.pageY + "px",

				left: event.pageX + "px"

			});

		});





		// If the document is clicked somewhere

		$(document).bind("mousedown", function (e) {



			// If the clicked element is not the menu

			if (!$(e.target).parents(".custom-menu").length > 0) {



				// Hide it

				$(".custom-menu").hide(100);

			}

		});





		function showKeyboardModal(){

			$('#loader_submit_btn').hide();

            $('#loader_submit_btn').removeClass('hidden');



			$('#exampleModalCenter').modal('show');

		}

		// If the menu element is clicked

		$(".custom-menu li").click(function(){



			// This is the triggered action name

			switch($(this).attr("data-action")) {



				// A case for each action. Your actions here

				case "pronounce": playEklipi(output_word); break;

				case "show_more_results": showMoreResult(output_word); break;

				// case "did_you_mean_followings": alert('here') ; break;

				case "add_pronounce": showKeyboardModal(); break;

			}



			// Hide it AFTER the action was triggered

			$(".custom-menu").hide(100);

		});

		function showMoreResult(output_word){

			console.log(output_word);

			let input_word = output_input_mappig[output_word];

			console.log(input_word);



			if(!visible_words.includes(output_word)){



				console.log(options_json);

				let options = options_json[input_word];





				console.log('options ',options);

				let selector = "<label clsss='control-label' for='selector-"+input_word+"'>"+input_word+"</label><select id='selector-"+input_word+"' class='custom-form-control' onchange=updateOutputDiv('"+input_word+"',this)>";

				options.forEach(

					function(option){

						visible_words.push(option[0]);

						selector+='<option value='+option[0]+'>'+option[1]+'</option>';

					}

				)

				selector += '<option class="option-add" value="add" >Add +</option></select>';



				$('#div-output-selectors').append(selector);



				// $('#label-justin').addClass('hidden');

				// $('#select-justin').addClass('hidden');

			}



		}

		function playEklipi(word_to_play){

			let text = word_to_play.trim().replace('\n','');

			console.log('Playing ',text);

			EkaTTSMain(text);

		}

		function playEklipi2(){

			let text = $('#search_field').val();

			console.log('Playing ',text);

			EkaTTSMain(text);

		}



		function updateOutputDiv(input_, this_){

			console.log('called')

			console.log(input_, this_.value);

			if(this_.value == 'add'){

				showKeyboardModal();

			}else{

				$('#span-'+input_).html(this_.value);

			}

		}



	$( function() {

    // var availableTags = all_words;

    function split( val ) {

	  return val.split(' ');

    //   return val.split( /,\s*/ );

    }

    function extractLast( term ) {

      return split( term ).pop();

    }



	function get_response_arg(request){

		// let res = $.ui.autocomplete.filter( availableTags, extractLast( request.term ) )



		let res;

		$.ajax({

		type: "GET",

		url: "getSuggestions.php",

		async: false,

		timeout: 1500,

		data:'keyword='+extractLast( request.term ),

		success: function(data){

			res = JSON.parse(data);

		},

		error: function(data){

			console.log('error ',data);

		}

		});

		return res;

	}

    $( "#ipa-in2" )

      // don't navigate away from the field on tab when selecting an item

      .on( "keydown", function( event ) {

		var breakKeys = [9, 188, 13, $.ui.keyCode.COMMA, $.ui.keyCode.TAB, $.ui.keyCode.SPACE];

		// console.log(breakKeys)

		// if ( event.keyCode === $.ui.keyCode.TAB && $( this ).autocomplete( "instance" ).menu.active ) {

        //   event.preventDefault();

		// }

		// console.log(event.keyCode, $.ui.keyCode.COMMA, event.keyCode === $.ui.keyCode.COMMA);



		if ( breakKeys.indexOf(event.keyCode) >= 0 && $( this ).autocomplete( "instance" ).menu.active ) {

			event.preventDefault();

        }



	}).autocomplete({

        minLength: 2,

        source: function( request, response ) {

			// delegate back to autocomplete, but extract the last term

		  response( get_response_arg(request) );

        },

        focus: function() {

          // prevent value inserted on focus

          return false;

        },

        select: function( event, ui ) {

		  var terms = split( this.value );

          // remove the current input

          terms.pop();

          // add the selected item

		  terms.push( ui.item.value );

          // add placeholder to get the comma-and-space at the end

          terms.push( "" );

          this.value = terms.join( " " );

          return false;

		},

		scroll:true

      });

	} );



	$('#keyboard').jkeyboard({

                                    layout: "azeri",

                                    input: $('#search_field')

                                });



	$(".jkey.letter").on('mouseover', function () {

		if ($("#IsPlaysound").is(

			':checked')) { //For check box code and play sound on keyboard



		if (!$("#HoverTyping").is(

			':checked')) { //For check box code and play sound on keyboard

				PlaySoundForAlphabets($(this).text());

			}

		}

	});



	var delay=500, setTimeoutConst;

	$('.jkey.letter').hover(function(){

			if ($("#HoverTyping").is(':checked')) {

				currentKey = $(this).text();



				setTimeoutConst = setTimeout(function(){

					if ($("#IsPlaysound").is(

					':checked')) { //For check box code and play sound on keyboard

						PlaySoundForAlphabets(currentKey);

					}

					$('#search_field').val( $('#search_field').val()+currentKey );

					// console.log($(this).text());

				}, delay);

			}

	},function(){

			clearTimeout(setTimeoutConst );

	})



	</script>











    <script>

        var audio = document.querySelector('audio');



        function captureMicrophone(callback) {

            btnReleaseMicrophone.disabled = false;



            if (microphone) {

                callback(microphone);

                return;

            }



            if (typeof navigator.mediaDevices === 'undefined' || !navigator.mediaDevices.getUserMedia) {

                alert('This browser does not supports WebRTC getUserMedia API.');



                if (!!navigator.getUserMedia) {

                    alert('This browser seems supporting deprecated getUserMedia API.');

                }

            }



            navigator.mediaDevices.getUserMedia({

                audio: isEdge ? true : {

                    echoCancellation: false

                }

            }).then(function (mic) {

                callback(mic);

            }).catch(function (error) {

                alert('Unable to capture your microphone. Please check console logs.');

                console.error(error);

            });

        }



        function replaceAudio(src) {

            var newAudio = document.createElement('audio');

            newAudio.controls = true;

            newAudio.autoplay = true;



            if (src) {

                newAudio.src = src;

            }



            var parentNode = audio.parentNode;

            parentNode.innerHTML = '';

            parentNode.appendChild(newAudio);



            audio = newAudio;

        }



        function stopRecordingCallback() {

            replaceAudio(URL.createObjectURL(recorder.getBlob()));



            btnStartRecording.disabled = false;



            setTimeout(function () {

                if (!audio.paused) return;



                setTimeout(function () {

                    if (!audio.paused) return;

                    audio.play();

                }, 1000);



                audio.play();

            }, 300);



            audio.play();



            btnDownloadRecording.disabled = false;



            if (isSafari) {

                click(btnReleaseMicrophone);

            }

        }



        var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator

            .msSaveBlob);

        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);



        var recorder; // globally accessible

        var microphone;



        var btnStartRecording = document.getElementById('btn-start-recording');

        var btnStopRecording = document.getElementById('btn-stop-recording');

        var btnReleaseMicrophone = document.querySelector('#btn-release-microphone');

        var btnDownloadRecording = document.getElementById('btn-download-recording');



        btnStartRecording.onclick = function () {

            this.disabled = true;

            this.style.border = '';

            this.style.fontSize = '';



            if (!microphone) {

                captureMicrophone(function (mic) {

                    microphone = mic;



                    if (isSafari) {

                        replaceAudio();



                        audio.muted = true;

                        audio.srcObject = microphone;



                        btnStartRecording.disabled = false;

                        btnStartRecording.style.border = '1px solid red';

                        btnStartRecording.style.fontSize = '150%';



                        alert(

                            'Please click startRecording button again. First time we tried to access your microphone. Now we will record it.'

                            );

                        return;

                    }



                    click(btnStartRecording);

                });

                return;

            }



            replaceAudio();



            audio.muted = true;

            audio.srcObject = microphone;



            var options = {

                type: 'audio',

                numberOfAudioChannels: isEdge ? 1 : 2,

                checkForInactiveTracks: true,

                bufferSize: 16384

            };



            if (isSafari || isEdge) {

                options.recorderType = StereoAudioRecorder;

            }



            if (navigator.platform && navigator.platform.toString().toLowerCase().indexOf('win') === -1) {

                options.sampleRate = 48000; // or 44100 or remove this line for default

            }



            if (isSafari) {

                options.sampleRate = 44100;

                options.bufferSize = 4096;

                options.numberOfAudioChannels = 2;

            }



            if (recorder) {

                recorder.destroy();

                recorder = null;

            }



            recorder = RecordRTC(microphone, options);



            recorder.startRecording();



            btnStopRecording.disabled = false;

            btnDownloadRecording.disabled = true;

        };



        btnStopRecording.onclick = function () {

            this.disabled = true;

            recorder.stopRecording(stopRecordingCallback);

        };



        btnReleaseMicrophone.onclick = function () {

            this.disabled = true;

            btnStartRecording.disabled = false;



            if (microphone) {

                microphone.stop();

                microphone = null;

            }



            if (recorder) {

                // click(btnStopRecording);

            }

        };



        btnDownloadRecording.onclick = function () {

            this.disabled = true;

            if (!recorder || !recorder.getBlob()) return;



            if (isSafari) {

                recorder.getDataURL(function (dataURL) {

                    SaveToDisk(dataURL, getFileName('mp3'));

                });

                return;

            }



            var blob = recorder.getBlob();

            var file = new File([blob], getFileName('mp3'), {

                type: 'audio/mp3'

			});



            invokeSaveAsDialog(file);

        };



        function click(el) {

            el.disabled = false; // make sure that element is not disabled

            var evt = document.createEvent('Event');

            evt.initEvent('click', true, true);

            el.dispatchEvent(evt);

        }



        function getRandomString() {

            if (window.crypto && window.crypto.getRandomValues && navigator.userAgent.indexOf('Safari') === -1) {

                var a = window.crypto.getRandomValues(new Uint32Array(3)),

                    token = '';

                for (var i = 0, l = a.length; i < l; i++) {

                    token += a[i].toString(36);

                }

                return token;

            } else {

                return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');

            }

        }



        function getFileName(fileExtension) {

            var d = new Date();

            var year = d.getFullYear();

            var month = d.getMonth();

            var date = d.getDate();

            return 'RecordRTC-' + year + month + date + '-' + getRandomString() + '.' + fileExtension;

        }



        function SaveToDisk(fileURL, fileName) {

            // for non-IE

            if (!window.ActiveXObject) {

                var save = document.createElement('a');

                save.href = fileURL;

                save.download = fileName || 'unknown';

                save.style = 'display:none;opacity:0;color:transparent;';

                (document.body || document.documentElement).appendChild(save);



                if (typeof save.click === 'function') {

                    save.click();

                } else {

                    save.target = '_blank';

                    var event = document.createEvent('Event');

                    event.initEvent('click', true, true);

                    save.dispatchEvent(event);

                }



                (window.URL || window.webkitURL).revokeObjectURL(save.href);

            }



            // for IE

            else if (!!window.ActiveXObject && document.execCommand) {

                var _window = window.open(fileURL, '_blank');

                _window.document.close();

                _window.document.execCommand('SaveAs', true, fileName || fileURL)

                _window.close();

            }

		}

		var recording_visible = false;

		$('#recording_div').hide();



		function showHideRecordingOpions(){

			if(!recording_visible){

				recording_visible = true;

			}else{

				recording_visible = false;

			}

			if(recording_visible){

				$('#recording_div').show();

			}else{

				$('#recording_div').hide();

			}

		}

		$('#submitEmailModalBtn').click(function(){

			var formData1 = new FormData();

			formData1.append('formtype','emailform');

			formData1.append('email',$('#email').val());

			formData1.append('record_id',$('#record_id').val());

			console.log(formData1);

			$.ajax({

                                    url: "submit_contribution.php",

                                    type: "POST",

                                    data:  formData1,

                                    contentType: false,

                                    cache: false,

                                    processData:false,

                                    success: function(data){

                                            try{



                                                var data = JSON.parse(data);

                                                console.log(data);

                                                if(data.status==200){

													$('#emailModal').modal('hide');

                                                    alert('Saved')

                                                }

                                                else{

													alert('Failed');

                                                }

                                            }catch(err){

												console.log(err)

                                                alert('Something went wrong!')

                                            }



                                    },

                                    error: function(e) {

                                        alert("Error occured");

										console.log('error');

                                        console.log(e);



                                    }

                                });

		})

		$('#btn-save-contribution').click(function(){



			var formData = new FormData();

			if(!recorder || !recorder.getBlob()){

				console.log('no recording.');

			}else{

				var recording = recorder.getBlob();

				formData.append('recording', recording);

				console.log('set ',recording);

			}





			formData.append('ekalipi_word', $('#search_field').val() );

			formData.append('country_code', $('#country_code').val() );

			formData.append('input_word', $('#ekalipi_input_word').val());

			console.log(formData);

			$.ajax({

                                    url: "submit_contribution.php",

                                    type: "POST",

                                    data:  formData,

                                    contentType: false,

                                    cache: false,

                                    processData:false,

                                    beforeSend : function(){



                                        $('#btn-save-contribution').prop('disabled',true);

                                        $('#loader_submit_btn').show();



                                    },

                                    success: function(data){

                                            try{
												$('#loader_submit_btn').hide();



                                                var data = JSON.parse(data);

                                                console.log(data);

                                                if(data.status==200){

													$('#exampleModalCenter').modal('hide');

													$('#emailModal').modal('show');

                                                    $('#record_id').val(data.message);

													// alert('saved')

                                                }

                                                else{

                                                    $('#btn-text').html('Submit').fadeIn();

                                                    $('#btn-save-contribution').prop('disabled',false);



													alert('Failed');





                                                }

                                            }catch(err){

                                                $('#btn-save-contribution').prop('disabled',false);

                                                $('#loader_submit_btn').hide();



                                                alert('Something went wrong!' + err)

                                            }



                                    },

                                    error: function(e) {

                                        $('#btn-save-contribution').prop('disabled',false);

                                        $('#loader_submit_btn').hide();

                                        console.log('error');

                                        console.log(e);



                                    }

                                });

		});

		function showHideDebug(){

			// console.log($('#show-debug-checkbox:checked'));

			if(showDebugDiv){

				if($('#show-debug-checkbox:checked').length == 0){

					$('#debug-div').hide();

					showDebugDiv = false;

				}else{

					showDebugDiv = true;

				}

			}else{

				if($('#show-debug-checkbox:checked').length>0){

					$('#debug-div').show();

					showDebugDiv = true;

				}else{

					showDebugDiv = false;

				}

			}

		}

    </script>



	<!-- jQuery -->

	<!-- <script src="assets/js/jquery.js"></script> -->



	<!-- Bootstrap Core JavaScript -->

	<!-- <script src="assets/js/bootstrap.min.js"></script> -->

	<!-- <script src="assets/js/popover.js"></script> -->



	<!-- Scrolling Nav JavaScript -->

	<!-- <script src="assets/js/jquery.easing.min.js"></script> -->

	<!-- <script src="assets/js/scrolling-nav.js"></script> -->





	<!-- Footer Logos -->

	<!-- <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

	-->

</body>



</html>