<?php
$self=$_GET['np'];
if($self >10)
{
  $self=$_GET['np'];
}
else{
   $self=0; 
}

 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
 include_once("../../db-config/db-config.php");

 // get posted data
 
// $query1=mysqli_query($conn,"SELECT * EKA_WORD_TABLE ORDER BY srn desc");   

// $row=mysqli_fetch_array($query1);

// $ceng=$row['C_ENGLISH'];
// $ceka=$row['C_EKALIPI'];
// $cother=$row['C_OTHER'];
// $ccount=$row['C_COUNT'];
// $ccountry=$row['C_COUNTRY'];






?>


<!DOCTYPE html>
<html lang="eng">
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Wikilipi Dictionary</title>
<link rel="icon" id="favicon" href="wikilipi.com/img/wikilipi.com logo.png">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
<link rel="icon" id="favicon" href="wikilipi.com/view/img/wikilipi.com logo.png">
   
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-table.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="searchword.js"></script>
    <script src="js/bootstrap-table.min.js"></script>
    
 <style type="text/css">



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

 </style>
 <script>
 $(document).ready(function () {
$('#myTable').DataTable({
"scrollX": true
});
 });
</script>
</head>
<body themebg-pattern="pattern4">

			<!------------- Navbar -------------->

			<div class="" style="background:#f5f5f5">

				<div class="">

					<nav class="navbar navbar-inverse bs-dark" style="margin-bottom:0px;border-radius:0px;">

						<div class="navbar-header">

						 

							<span class="sr-only">Toggle navigation</span>

							<span class="icon-bar"></span>

							<span class="icon-bar"></span>

							<span class="icon-bar"></span>

						  </button>

						  <a class="navbar-brand" href="../index.php" style="font-size:20px;color:#fff"><i class="fa fa-home" style="font-size:20px"></i> Wikilipi</a>
              <a href="../TTIProperNamePronc.php" style="font-size:15px;color:#fff;text-decoration:none" target="_blank">Expert Mode</a>
              <a href="../submissions.php" style="font-size:15px;color:#fff;text-decoration:none;margin-left:10px" target="_blank">Submissions</a> 
			  <a href="../contribute.php" style="font-size:15px;color:#fff;text-decoration:none;margin-left:10px" target="_blank">Contribute</a>
              <a href="../view/wdictionary.php" style="font-size:15px;color:#fff;text-decoration:none;margin-left:10px" target="_blank">Dictionary</a>  
			  <a href="../ekalipilinks.html" style="font-size:15px;color:#fff;text-decoration:none;margin-left:10px" target="_blank">Ekalipi Links</a>  
              
			  <a href="../help.php"  style="font-size:15px;color:#fff;text-decoration:none;margin-left:10px" target="_blank">Help<i class="fa fa-question-circle"></i></a>              
						</div>
                       
					
					</nav>	

				</div>				

			</div>

	


<div class="page-body">
<div class="row" style="padding-top:6px">
 <div class="col-lg-3"></div>
 <div class="col-lg-6" style="">
 <div class="container-fluid" style="border: 1px solid lightgray;padding-top:10px;padding-bottom:50px;">  
 <p class="text-info text-center" style="font-size:20px;font-weight:bold">Wikilipi word Dictionary</p> 

 <a style="font-weight:bold;text-decoration:none;display:none" href="wdictionary.php" class="backdict text-info" >
 <i class="fa fa-arrow-left" style="color:lightblue"></i> Dictionary  
</a>

<div style="display:flex;justify-content:space-between">
<p style="font-size: 13px;margin-left:5px;margin-bottom:0px;color:DodgerBlue">Search word by
<i class="fa fa-search text-primary" style="margin-left:2px;"></i></p>
<a href="wdictionary.php" style="font-size: 13px;color:tomato" class="btn btn-sm ">clear filter<i style="color:#A52A2A" class="fa fa-close"></i></a>
</div>
  <div class="input-group" style="">
  <input type="search" id="wsearch" class="form-control rounded" placeholder="Native word" aria-label="Search"
    aria-describedby="search-addon"  onkeyup="searchword()" />
    <input type="search" id="wesearch" class="form-control rounded" placeholder="Ekalipi" aria-label="Search"
    aria-describedby="search-addon"  onkeyup="searchEkalipi()" />
    <select class="form-control" id="selectreg"  onchange="searchregion()" >
  <option selected>region</option>
  <?php 
   $totalregion=mysqli_query($conn,"SELECT DISTINCT C_COUNTRY from EKA_WORD_TABLE ORDER BY C_COUNTRY");   
   while($mreg= mysqli_fetch_array($totalregion))
   {
?>
  <option value="<?php echo $mreg['C_COUNTRY'] ?>"><?php echo $mreg['C_COUNTRY'] ?></option>
 
  <?php }?>
</select>
  <!-- <i class="fa fa-search text-primary" style="margin:9px 0px 0px 6px;"></i> -->
</div>

<div  id="result" ></div>
<div  id="result_e" ></div>
<div  id="result_r" ></div>

  <div class="hidedict" style="margin-top:20px; display: flex;
  justify-content: space-between;">
  <a style="font-weight:bold" href="wdictionary.php?np=<?php echo $self-10 ?>" class="btn btn-dark" ><i class="fa fa-chevron-left"></i> Prev</a>
   
   
  <?php
       $totalquery=mysqli_query($conn,"SELECT COUNT(C_ENGLISH) as totalword from EKA_WORD_TABLE");   
       $tv= mysqli_fetch_array($totalquery);
       
   ?>
    <a style="font-weight:bold" class="btn btn-sm btn-light text-success">Available words :  <?php echo $tv['totalword']  ?>+</a>

  <a style="font-weight:bold" href="wndictionary.php?nxt=<?php echo $self+10 ?>" class="btn btn-dark" >Next <i class="fa fa-chevron-right"></i> </a>
  </div>
  
  <table class="hidedict table table-bordered  table-hover table-responsive" id="myTable" style="border-bottom: 1px solid lightgray;" > 
      <tr>
        <th class="bg-info text-light">Native word</th>
        <th class="bg-success text-light">Ekalipi word</th>
       
        <th class="bg-secondary text-light">Count</th>
        <th class="bg-primary text-light">Region</th>
         <th class="bg-warning text-light">Other</th>
     </tr>
        <?php 
       
        $querym=mysqli_query($conn,"SELECT * FROM EKA_WORD_TABLE ORDER BY C_ENGLISH LIMIT 20 OFFSET ".$self);   

        
        while($rowm= mysqli_fetch_array($querym))
        {
 
        ?>
        
        <tr>
        <td ><?php echo $rowm['C_ENGLISH']?></td>
        <td ><?php echo  mb_convert_encoding($rowm['C_EKALIPI'], "UTF-8")?></td>
        
        <td><?php echo $rowm['C_COUNT']?></td>
        <td><?php echo $rowm['C_COUNTRY']?></td>
        <td><?php echo $rowm['C_OTHER']?></td>
       
      </tr>
      <?php
      }
      ?>
      <tr>
        <td colspan="5">
          <a style="font-weight:bold" href="wndictionary.php?nxt=<?php echo $self+10 ?>" class="btn btn-dark" >Next <i class="fa fa-chevron-right"></i> </a>
  </td>
      </tr>
   </table>
   <a style="font-weight:bold;text-decoration:none;display:none" href="wdictionary.php" class="backdict text-info" >
 <i class="fa fa-arrow-left" style="color:lightblue"></i>Back to Dictionary
</a>
   
</div>

</div>

</div>  
</div>

</div>
</div>


</div>
</div>


<footer class="navbar-footer" style="position:fixed;bottom:0px;left:0;width:100%;background:#222;height:40px;">

<div class="text-center" style="color:#fff;padding-top:5px">Copyright © 2021 Wikilipi. All rights reserved</div>

</footer>
</body></html>