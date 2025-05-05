<?php
// Powered by Zyro
$local = in_array($_SERVER['REMOTE_ADDR'], ['127.0.0.1','localost','::1']);

if ($local != 1)
{
	if(empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == "off"){
		session_start();
		$redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
		header('HTTP/1.1 301 Moved Permanently');
		header('Location: ' . $redirect);
		exit();
	}
}

 //ini_set('session.cookie_domain', '.kelkarkul.org');
 //echo "Site is under maintainance";
 //session_start();
//echo session_save_path();
//phpinfo();
//exit;
//error_reporting(E_ERROR);
//error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
//include dirname(__FILE__).'/vrutanta/index.php';
?>
<html>
	<head>
		<title>Welcome to Wikilipi</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Cache-Control" content="no-store" />
		<link href="assets/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/bootstrap.min.js"></script>
				
		<style>
			body{
				
				background:#fff5ff;
				
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

.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {
    color: #fff;
    background-color: transparent !important;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button4 {border-radius: 12px;}
.jumbotron {
    padding-top: 0px;
}
	body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.429;
    color: #000;
		</style>
		
	</head>
	
	<body style="background: #ffffff;">
		
			<!------------- Navbar -------------->
			<div class="" style="background:#f5f5f5">
				<div class="">
					<nav class="navbar navbar-inverse bs-dark" style="margin-bottom:0px;border-radius:0px;">
						<div class="navbar-header">
						  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						  </button>
						  <a class="navbar-brand" href="index.php" style="font-size:20px;color:#fff">Wikilipi</a>
						</div>

						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						  <ul class="nav navbar-nav">
						  <li class="active" style="font-size:16px"><a href="TTIProperNamePronc.php"target="_blank">Expert Mode</a></li>
						  <li class="active" style="font-size:16px"><a href="contribution.php"target="_blank">Contributions</a></li>
						 
						   <li class="active" style="font-size:16px"><a href="https://wikilipi.com/view/dictionary.html"target="_blank">Dictionary</a></li>
							<li class="active" style="font-size:16px"><a href="https://ekalipi.com/downloads.html"target="_blank">Downloads</a></li>
							<li class="active" style="font-size:16px"><a href="about.html"target="_blank">About</a></li>
							<li class="active" style="font-size:16px"><a href="#contact" class="tm-nav-item-link">Contact</a></li>
							 <li style="font-size:16px"><a href="https://wikilipi.com/contribution/dashboard.html" target="_blank">AdminApprovals</a></li>
							 <li><a href="./ekalipiwebsites.html" target="_blank">Ekalipi Websites</a></li>
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
				</div>				
			</div>
	
			
			<!-- Main jumbotron for a primary marketing message or call to action -->
				
				  <div class="container">
				 <!-- <a class="btn btn-success" href="TTIProperNamePronc.php" target="_blank" role="button">Expert Mode</a> -->
					<h3>Welcome to the world of Wikilipi</h3>
					<p>Some neat spinoffs of Ekalipi - A single script for all the world’s languages! Learn more at <a href="https://www.ekalipi.org">ekalipi.org.</a></p>
					<!-- <p><a class="btn btn-info btn-lg" href="#" role="button">Learn more »</a></p> -->
						<!--<div class="panel panel-default">
						<div class="panel-heading">
							<h4>All Ekalipi Sites:</h4>
						</div>
						<div class="panel-body">
							General info - <a href="https://www.ekalipi.org">https://www.ekalipi.org</a><br>
							Ekalipi Tools - <a href="https://www.ekalipi.com">https://www.ekalipi.com</a><br>
							Proper Name Pronunciation Dictionary - <a href="https://www.wikilipi.com">https://www.wikilipi.com</a><br>
							Ekalipi Community Site - <br>
							 <a href="https://www.wikilipi.com">https://www.ekalipi.in</a> OR <a href="https://www.wikilipi.com">एकलिपी.भारत</a>
							Futuristic Site - <a href="https://www.origenidea.com">https://www.origenidea.com</a>						
						</div>
					</div>-->
				  </div>
				

				<div class="container" style="margin-bottom:50px">
				  <!-- Example row of columns -->
				  <div class="row" id="row">
					<div class="col-md-6">
						<div class="panel panel-primary">
						  <div class="panel-heading" style="">
	 						<h4>World Language to Ekalipi</h4>
						  </div>		  
						  <div class="panel-body">
							 
							  <ul>
								  <li>Find it annoying,when people mispronounce (rather butcher) your name? <br><strong>It’s not their fault..</strong></li>
								  <li>They are pronouncing the name by reading an English/ Roman script spelling.<strong> It’s impossible.</strong></li>
								  <li>Want to know and practice saying other people’s names correct. <br><strong>Now you can.</strong></li>
								  <li>Pronounce names correctly by sounding them out using our easy to learn Ekalipi script.</li>
								  <li>Once you master the script, use it everywhere. Languages are no longer a roadblock. </li>
								  <li>If we don’t have the Ekalipi spelling of your name (or your friend’s), please add it. IT’S EASY! </li>
								  <li>Watch this space: COMING SOON – A new feature that speaks names accurately.</li>
							  </ul>					
							 
					  	  </div>
						  <div class="panel-footer">
								 <div class="text-center"><a class="btn btn-success" href="TTIProperNamePronc.php" role="button">Try now</a></div>
						  </div>	  
						</div>
					</div>
					
				 <!--	<div class="col-md-3">
						<div class="panel panel-primary">
 						  <div class="panel-heading" style="">
	 						<h4>Ekalipi to World Language</h4>
						  </div>							
						  <div class="panel-body">
						  	<ul class="list-group">
							   <li class="list-group-item">If you know the single language, you can let the world understand you better</li>
							    <li class="list-group-item">Just type what you want to say and you are good to go !</li>
					  	  </div>
						  <div class="panel-footer">	
							  <div class="text-center"><a class="btn btn-success" href="#" role="button">Start now</a></div>
						  </div>														  
						</div>							  
				   </div>
					<div class="col-md-3">
						<div class="panel panel-primary">	
 						  <div class="panel-heading" style="">
	 						<h4>Ekalipi TTS</h4>
						  </div>							
						  <div class="panel-body">
								<ul class="list-group">
								  <li class="list-group-item">This modules lets the user enter a word and smart engine will say the word with best pronounciation available. </li>
								  </ul>
							  <div class="alert alert-success" style="padding:8px;margin-bottom:0px">New feature</div>
					
					  	  </div>
						  <div class="panel-footer">	
		  						<div class="text-center"><a class="btn btn-info" href="#" role="button">View details</a></div>
						  </div>	  
						</div>							  
					</div> -->
					
				  </div>
				</div>
				<center> <div id="contact"></div>
      <hr>
      <h2>Contact Us</h2>      <h4> India </h4>
      The Ekalipi Institute
      <br>Survey No:54, Ramanadi Housing Society,
      <br>Bavdhan, Pune-411021
      <br>admin@ekalipi.org
      <br>Phone: +91 7208696522
      <address>
      <h4> US</h4>
      5440 Lindley Avenue Unit 111, <br>
      Encino CA 91316<br>
      Phone: +1 805 426 5676	</center>
				  <footer class="navbar-footer" style="position:fixed;bottom:0px;left:0;width:100%;background:#222;height:40px;">
					<div class="panel-body text-center" style="color:#fff">Copyright © 2021 Wikilipi. All rights reserved</div>
				  </footer>
			
	
	</body>
</html>	