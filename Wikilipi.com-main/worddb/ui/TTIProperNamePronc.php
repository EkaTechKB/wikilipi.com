<?php
	error_reporting(0);
?>

<!DOCTYPE html>
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
	
    <title>Ekalipi Wiki</title>
	<script src=".\lib\js\soundmanager2.js"></script>
    <script src=".\lib\js\soundmanager2-nodebug-jsmin.js"></script>
    <script src=".\lib\js\EkaTTSInsertSound.js"></script>
    <script src=".\lib\js\EkaL2Eplay.js"></script>

    <link rel="shortcut icon" href="assets/images/gt_favicon.png">
    <link rel="stylesheet" media="screen" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/font-awesome.min.css">
	<script src="./js/bootstrap.min.js"></script>

	<script src="./js/jquery.min.js"></script>
	
	<!-- Custom CSS -->
    <link href="./css/scrolling-nav.css" rel="stylesheet">
	<link href="./css/TTI_Common_CSS.css" rel="stylesheet">

    <!-- Custom styles for our template -->
    <link rel="stylesheet" href="./assets/css/bootstrap-theme.css" media="screen">
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./jkeyboard.css">
	
	<div class="navbar navbar-inverse navbar-fixed-top headroom" >
		<div class="container">
			<div class="row">
				<div class="col-xs-5 col-sm-5 col-lg-5 col-md-5">
					<div class="navbar-header">
						<!-- Button for smallest screens -->
						<div align="left">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> 
							</button>
						</div>
						<a class="navbar-brand" href="#" align="center"><strong>Pronunciation Dictionary</strong></a>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
					<div class="collapse navbar-collapse">
						<ul class="nav navbar-nav pull-right">
							<li class="active"><a  href="./index.html">Home</a></li>
							<li><a href="downloads.html" target="_blank">Downloads</a></li>
							<li><a href="about.html" target="_blank">About</a></li>
							<li><a href="contact.html" target="_blank">Contact</a></li>
							<li><a class="page-scroll" href="signup.html" target="_blank">Sign Up</a></li>
						</ul>
					</div><!--/.nav-collapse -->
				</div>
			</div>
		</div>
	</div>
<head>
    <title>Proper Name Pronunciation Dictionary</title>
</head>


<body style="background: #99e6ff;">    

	<br>
	<div style="color: #e60000;"><h4><font size= "4">Proper Name Pronunciation Dictionary</font></h4></div>

	<form action="ekalipidb.php" method="post">
	<div style="text-align: left;">
		<div class="container-fluid">
			<p id="demo"></p>
			<div id="js-text-to-ipa-form">
				<ul style="list-style-type: none;">
				<div class="row">
					<div class="col-sm-5 col-lg-5 col-md-5">
						<input name="Stress" value="Stress" id="IsStressShow" type="checkbox">
						<label for="Stress"><font color="Black">- Show Stress Characters in output ( ˈ )</label></font>
					</div>
					<div class="col-sm-2 col-lg-2 col-md-2"></div>
					<div class="col-sm-5 col-lg-5 col-md-5">
						<input name="Conjunct_Con" value="Conjunct_Con" id="IsConjunctShow" type="checkbox" >
						<label for="Conjunct_Con"><font color="Black">- Do not show Conjunct Consonants ( ‑ ) </label></font>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-3 col-sm-3 col-lg-3 col-md-3" >
						<font face="Verdana" size="4">
							<textarea id="ipa-in"  name="ipaName"  placeholder="Enter the Name" rows="2" cols="33" style="border:2px solid black; margin : 2px;"></textarea>
						</font>
					</div>	
					<div class="col-sm-1 col-xs-1 col-lg-1 col-md-1"></div>
				</div>

				<div class="row">
					<div class="col-xs-3 col-sm-3 col-lg-3 col-md-3" >
						<font face="Verdana" size="4">
							<textarea id="search_field" name="ipaOut" contenteditable="true" placeholder="åtput goz heer!" rows="2.5" cols="32" style="border:2px solid green; margin : 2px;"></textarea>
						</font>
					</div>
					<div class="col-xs-2 col-sm-2 col-lg-2 col-md-2"></div>
				</div>

</div>

	
	<div class="container">

		<link rel="stylesheet" href="./assets/css/jkeyboard.css">

		<style>
		body{
				background:#1E242C;
			}
		#search_field
		{
			display: block;
			margin: 0 auto;
			padding: 0px 10px;
        }   
		.tempDesign12 
		{
			background-color: Seashell;
			width: 500px;
			border: 10px solid Salmon;
			padding: 20px;
			margin: 5px;
			display: inline-block;
			vertical-align: top;
			height: 290px;
		} 
		.tempColor5 
		{
			background-color: Beige;
			border: 10px solid turquoise;
		}
		.ribbon 
		{
			position: relative;
			top: -500px;
			right: -50px;
		}
		</style>


</head>

	
    <th class="text-left">
	
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="./lib/js/jkeyboard.js"></script></th>

      </div>
	  
	  <div align="center">
	  <div class="row">

	
<div class="col-xs-3 col-sm-3 col-lg-3 col-md-3"></div>
<div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
	 <input style="
    /* margin-right: 160px; */
    /* margin-left: 100px; */
	width: 200px;
    height: 50px;
	background-color: #4d4d4d;	
	color: white;
	border-radius: 12px;
	border:5px solid white;" type="submit" name="submit" value="submit">
	</div> 
	<div class="col-xs-3 col-sm-3 col-lg-3 col-md-3"></div>
</div>
</div></div>


</div>
</form>	 
<div class="col-sm-2 col-lg-2 col-md-2"></div>
</div>



<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
    box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column {
    float: left;
    width: 50%;
    padding: 10px;
    height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}
</style>
</head>

</div>

<!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/popover.js"></script>


    <!-- Scrolling Nav JavaScript -->
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/scrolling-nav.js"></script>

    <!-- Site css -->
    <link href="css/style.css" rel="stylesheet">

    <!-- Footer Logos -->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
</body>


</html>
