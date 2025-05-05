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
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-121400340-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-121400340-1');

</script>

    <head>

        <title>Help</title>
<link rel="icon" id="favicon" href="img/wikilipi.com logo.png">
        <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

                

        <style>

            body{
                background:#fff5ff;
                    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.429;
    color: #000;
    scroll-behavior: smooth;
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

/* Style the navigation menu */
nav {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background: #d1d2d5;
    padding: 2px;
}

/* Style the list inside the menu */
nav ul {
    list-style-type: none;
    padding: 0;
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
.panel-primary > .panel-heading {
    color: #fff;
    background-color: #601c1c;
    border-color: #601c1c;
    padding: 0px 10px;
}
.panel-primary {
    border-color: #000;
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
.column1 {
    float: left;
    width: 70%;
    padding: 5px;
    height: 35px;
}
.column2 {
    float: left;
    width: 30%;
    padding: 5px;
    height: 35px;
}
.panel-body {
    padding: 1px;
}

hr {
    margin-top: 0px;
    margin-bottom: 0px;
}
#uldesc li{
    font-size:13px
}
        </style>
<script>
     function showFullvideo(){
      
      document.getElementById('showfull').style.display ="block";
    }
    function showkeyboardvideo(){
        document.getElementById('showfull').style.display ="none";
      document.getElementById('keyboardvideo').style.display ="block";
    }
</script>
        

    </head>

    

    <body style="background: #efc7d3;">

        

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

                        <a class="navbar-brand" href="index.php" style="font-size:20px;color:#fff"><i class="fa fa-home" style="font-size:20px"></i> Wikilipi</a>

                        </div>



                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                        <ul class="nav navbar-nav">

                        <li class="active" style="font-size:16px"><a href="TTIProperNamePronc.php"target="_blank">Expert Mode</a></li>

                        <li class="active" style="font-size:16px"><a href="submissions.php"target="_blank">Submissions</a></li>

                        <li class="active" style="font-size:16px"><a href="contribute.php"target="_blank">Contribute</a></li>

                        <li class="active" style="font-size:16px"><a href="view/wdictionary.php"target="_blank">Dictionary</a></li>

                            <li class="active" style="font-size:16px"><a href="https://ekalipi.com/downloads.html"target="_blank">Downloads</a></li>

                            <!--<li class="active" style="font-size:16px"><a href="about.html"target="_blank">About</a></li> -->

                            <li class="active" style="font-size:16px"><a href="#contact" class="tm-nav-item-link">Contact</a></li>
                        <li class="active" style="font-size:16px"><a href="./ekalipilinks.html" target="_blank">Ekalipi Links</a></li>
                        <li class="active" style="font-size:16px"><a href="./help.php" target="_blank">Help<i class="fa fa-question-circle"></i></a></li>
                            <!-- <li style="font-size:16px"><a href="contribution/contribution.html" target="_blank">AdminApprovals</a></li>-->

                            

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

    

            

        

                

     <div class="container" >
    <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6 ">
    <div style="border-radius:8px;box-shadow:0 0 10px gray;margin:15px 0px 60px 0px;padding:0px 10px 50px 0px;background-color:white">

    <div style="background-color:#000;height:28px;width: 100px;align-items:center;justify-content:center;border-top-left-radius: 8px;border-bottom-right-radius: 10px;padding:5px"><i class="fa fa-question-circle" style="float:left;font-size:20px;color:white"></i><p style="font-weight:bold;color:white">Help</p></div>

   <div class="text-center"><img src="./img/wikilipi.com logo.png" class="img-thumbnail" style="height:50px;width:50px" /><p>wikilipi.com</p></div>

   <div style="margin-top:20px">
      
       <p style="text-align:center;color:#808000;font-size:18px">"To learn , please watch below link's video "</p>
       <div class="list-group" style="margin:20px 10px">
     <p style="font-weight:bold" class="list-group-item ">1. How to use Wikilipi.com ? <i class="fa fa-hand-o-right" aria-hidden="true"></i>
     <a onclick="showFullvideo()">click here</a>
     <div id="showfull" style="display:none" class="embed-responsive embed-responsive-16by9">
     <iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/3XJbsMxEIHA" title="YouTube video player" autoplay="false" allowfullscreen></iframe>
     </div></p>
    <p style="font-weight:bold" class="list-group-item">2. Learn Ekalipi Characters Keyboard  <i class="fa fa-hand-o-right" aria-hidden="true"></i>
		 <a onclick="showkeyboardvideo()">click here</a>
    <div id="keyboardvideo" style="display:none" class="embed-responsive embed-responsive-16by9">
     <video  controls>
    <source src="./img/Ekalipi_Keyboard_Characters.mp4" type="video/mp4">
     </video>
     </div></p>
         
    <p style="font-weight:bold" class="list-group-item">3. Why Ekallipi ? <i class="fa fa-hand-o-right" aria-hidden="true"></i><a href="https://ekalipi.com/why.html"> click here</a></p>
    <p style="font-weight:bold" class="list-group-item">4. What is Ekallipi ? <i class="fa fa-hand-o-right" aria-hidden="true"></i><a href="https://ekalipi.com/what.html"> click here</a></p>
    <p style="font-weight:bold" class="list-group-item">5. Pronunciations of Ekalipi character <i class="fa fa-hand-o-right" aria-hidden="true"></i><a href="https://ekalipi.org/myekalipi.org/pronunciations.html"> click here</a></p>
  
  </div>
  <div style="padding:10px">
  <img src="./img/EKALIPI.jpg" class="img-thumbnail" alt="...">
  </div>
    </div>


</div>
    </div>
    <div class="col-md-3">   </div>
    </div>
    </div>
    
    </div>	 

                <footer class="navbar-footer" style="position:fixed;bottom:0px;left:0;width:100%;background:#222;height:40px;">

                    <div class="panel-body text-center" style="color:#fff">Copyright © 2021 Wikilipi. All rights reserved</div>

                </footer>
      <style>
         

      </style>
</body>

</html>	