<?php
	error_reporting(E_ERROR | E_PARSE); //E_ALL ^ E_WARNING
if(isset($_GET['submit_form']) &&  $_GET['submit_form'] == '1'){
        include_once("../db-config/db-config-suspense.php");

        $record_id = $_GET['record_id'];
        $radiooption = $_GET['radiooptions'];

        if($radiooption == 'ok'){
            $value = 'A';
        }else{
            $value = 'R';
        }
        $update_record_sql = "UPDATE EKA_WORD_TABLE SET approved='".$value."' WHERE srn='".$record_id."'";
        if ($conn->query($update_record_sql) === true){
            echo json_encode(array('status'=>'200','message'=>'Saved'));
            exit();
        }else{
            echo json_encode(array('status'=>'400','message'=>'Failed'));
            exit();

        }
        $conn->close();
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submissions</title>
<link rel="icon" id="favicon" href="img/wikilipi.com logo.png">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/css/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery-ui.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <!-- Custom CSS -->
    <!-- <link href="assets/css/scrolling-nav.css" rel="stylesheet"> -->

    <!-- Custom styles for our template -->
    <!-- <link rel="stylesheet" href="assets/css/bootstrap-theme.css" media="screen"> -->
    <!-- <link rel="stylesheet" href="assets/css/main.css"> -->
    <!-- <link rel="stylesheet" href="assets/css/style.css"> -->
    <!-- <link rel="stylesheet" href="assets/css/jkeyboard.css"> -->
    <!-- <link rel="stylesheet" href="assets/css/custom_menu.css"> -->

    <link rel="stylesheet" href="assets/css/jquery.dataTables.min.css">
    <script src="assets/js/jquery.dataTables.min.js"></script>
<style>
        @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	.table, .thead, .tbody, .th, .td, .tr { 
		display: block; 
        
	}
 .td{
margin-left:10px;
    }
	/* Hide table headers (but not display: none;, for accessibility) */
    .thead .tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
    .tr { border: 1px solid #ccc; }
	
    .th { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 3px solid #eee; 
		position: relative;
		padding-left: 50%;
        
         
		 
	}
	
    .th:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
       
		white-space: nowrap;
	}
	
	/*
	Label the data
	*/
	.td:nth-of-type(1):before { content: "Id";margin-right:80px}
	.td:nth-of-type(2):before { content: "Input";margin-right:65px }
	.td:nth-of-type(3):before { content: "Ekalipi";margin-right:58px }
	.td:nth-of-type(4):before { content: "Region";margin-right:52px }
	.td:nth-of-type(5):before { content: "Created At";margin-right:38px }
	.td:nth-of-type(6):before { content: "Recorded file";margin-right:45px }
	.td:nth-of-type(7):before { content: "email";margin-right:65px}

	.td:nth-of-type(8):before { content: "Status";margin-right:65px; }
}

#honor:link, #honor:visited {
  background-color: white;
  color: #E754CA;
  font-weight:bold;
  border: 2px solid #AD3F60;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

#honor:hover, #honor:active {
  background-color:#E754CA;
  color: white;
}
</style>
<script>
    function showhonor(){
   document.getElementById('honordiv').style.display = "block";


    }
    function closehonor(){
        document.getElementById('honordiv').style.display = "none";
        
    }
</script>
</head>

<body style='background-color: rgb(240, 218, 242);'>
    
        <div class="navbar navbar-inverse navbar-fixed-top headroom">
            <!-- Modal -->

            
                <!-- <div class="row" >
				<div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
					<div class="navbar-header">
						<div align="left">
							<button type="button" class="navbar-toggle" data-toggle="collapse"
								data-target=".navbar-collapse"><span class="icon-bar"></span>
								<span class="icon-bar"></span> <span class="icon-bar"></span></button>
						</div>
						<div align="left">
							<a class="navbar-brand" href="#"><strong>Pronunciation Dictionary</strong></a>
						</div>
					</div>
				</div>
			</div> -->
               <nav class="navbar navbar-inverse bs-dark" style="margin-bottom:0px;border-radius:0px;">
						<div class="navbar-header">
						  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						  </button>
						  
						   <a class="navbar-brand" href="index.php" style="color:#fff"><i class="fa fa-home" style="font-size:24px"></i></a>
						</div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						  <ul class="nav navbar-nav">
                       
                                 <!-- <li class="active"><a class="navbar-brand" href="#"><strong>Pronunciation
                                            Dictionary</strong></a></li> -->
									 
						  <li class="active" style="font-size:16px"><a href="TTIProperNamePronc.php"target="_blank">Expert Mode</a></li>
						  <li class="active" style="font-size:15px"><a href="submissions.php"target="_blank">Submissions</a></li>
						  <li class="active" style="font-size:16px"><a href="contribute.php"target="_blank">Contribute</a></li>
						  <li class="active" style="font-size:16px"><a href="view/wdictionary.php"target="_blank">Dictionary</a></li>
							<li class="active" style="font-size:16px"><a href="https://ekalipi.com/downloads.html"target="_blank">Downloads</a></li>
							<!--<li class="active" style="font-size:16px"><a href="about.html"target="_self">About</a></li> -->
							<!-- <li class="active" style="font-size:16px"><a href="https://wikilipi.com/#contact" target="_blank">Contact</a></li> -->
							 <li class="active" style="font-size:16px"><a href="./ekalipilinks.html" target="_blank">Ekalipi Links</a></li>
							 <!--<li style="font-size:16px"><a href="contribution/contribution.html" target="_blank">AdminApprovals</a></li>-->
                            </ul>
                        </div>
                        <!--/.nav-collapse -->
                   
               
            </div>
       </div>

        <div class='row' style='margin-top:50px;'>

            <div class='col-md-1'></div>
            <div class='col-md-10'>
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-5">
                    <p class="text-center" style="font-size:31px;font-weight:bold;margin-top:20px">Submissions
                        </p>
                    </div>
                    <div class="col-md-4" style="padding-top:20px;">
                    
                    <!-- <a href="./contribution/dashboard.php" style="font-size:12px" class="btn btn-success">Dashboard
                    <i class="fa fa-lock"></i>
                </a> -->
                <a id="honor" onclick="showhonor()" data-toggle="modal" data-target=".bd-example-modal-sm" href=""><i class="fa fa-trophy" style="color: #FF8000"></i> Honor Roll</a>
              
                    </div>
                </div>
          <div class="container" id="honordiv" style="display:none;">
           <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6" style="border-radius:8px;box-shadow:0 0 10px gray;margin:10px;padding:10px;background-color:white">
               <div style="display:flex;justify-content:space-between">
                <p></p>
                <p style="margin:5px;color:#E754CA;font-weight:bold"><i class="fa fa-trophy" style="color: #FF8000"></i> Top Honor Roll <i class="fa fa-trophy" style="color: #FF8000"></i></p>
                <a id="closehonor" onclick="closehonor()" style="cursor:pointer"><i class="fa fa-close" style="color:red;font-size:20px"></i></a>
                </div>
                <div style="padding:5px">
                <table class="table table-dark table">
                <thead>
                <tr>
                    <th class="text-center" style="color:#E754CA"><i class="fa fa-trophy" style="color:#E754CA"></i> Place</th>
                    <th style="color:#CD7F32">Email</th>
                    <th class="text-center text-success" >Recently number of words added</th>
                </tr>
                
                </thead>
                <tbody>
                <?php
                include_once("../db-config/db-config-suspense.php");
                  $queryh=mysqli_query($conn,"SELECT email, COUNT( email ) AS tot FROM EKA_WORD_TABLE GROUP BY email HAVING tot > 1 ORDER BY tot DESC LIMIT 10"); 
                  $hcnt=1;  
                  while($rowh= mysqli_fetch_array($queryh))
                  {
                  ?>
                <tr>
                    <td class="text-center">
                    <?php 
                    
                        if($hcnt==1)
                        {
                       ?>
                       <p style="color:#E754CA">
                       <i class="fa fa-star" style="color: #FF8000;"></i>1</p>
                       <?php
                        }
                        else  if($hcnt==2)
                        {
                       ?>
                        <p style="color:#E754CA">
                       <i class="fa fa-star" style="color: #FFD700"></i> 2
                        </p>
                       <?php
                        }
                        else  if($hcnt==3)
                        {
                       ?>
                        <p style="color:#E754CA">
                       <i class="fa fa-star" style="color: #C0C0C0"></i> 3
                        </p>
                       <?php
                        }
                        else{
                         ?>
                       
                       <p style="color:#E754CA"><?php echo $hcnt ?></p>
                       <?php
                        }
                        $hcnt++;
                        ?>    
                  </td>
                    <td>
                      <?php 
                        if($rowh['email']=="")
                        {
                            echo "unknown";
                        }
                        else{
                            echo substr($rowh['email'], 0, 5);
                            echo  "********";
                        }
                        ?>
                    </td>
                    <td class="text-center">
                        <p style="color:green;font-weight:bold"><?php echo $rowh['tot'] ?>*</p>
                   </td>
                </tr>
                <?php } ?>
                </tbody>
            </table>
                </div>
                
               </div>
               <div class="col-md-3"></div>
           </div>

          </div>              
        
                <table id="example" class="display table table-responsive " >
                    <thead class="thead">
                        <tr class="tr">
                            <th class="th">Id</th>
                            <th class="th">Input</th>
                            <th class="th">Ekalipi</th>
                            <th class="th">Region</th>
                            <th class="th">Created At</th>
                            <th class="th">Recorded file</th>
                            <th class="th">email</th>
                            <th class="th">Status</th>
                        </tr>
                    </thead>
                    <tbody class=".tbody">
                        <?php
            include_once("./../db-config/db-config-suspense.php");

            // if(isset($_GET['filter']) && in_array($_GET['filter'], array('All','A','P','R'))){
            //     if($_GET['filter'] == 'A'){
            //         $sql1 = "SELECT * FROM EKA_WORD_TABLE WHERE approved='A' ORDER BY srn ASC";
            //     }else if($_GET['filter'] == 'P'){
            //         $sql1 = "SELECT * FROM EKA_WORD_TABLE WHERE approved='P' ORDER BY srn ASC";
            //     }else if($_GET['filter'] == 'R'){
            //         $sql1 = "SELECT * FROM EKA_WORD_TABLE WHERE approved='R' ORDER BY srn ASC ";
            //     }else{
            //         $sql1 = "SELECT * FROM EKA_WORD_TABLE ORDER BY srn ASC";
            //     }

            // }else{
            //     $sql1 = "SELECT * FROM EKA_WORD_TABLE WHERE approved='P' ORDER BY srn ASC";
            // }
            $sql1 = "SELECT * FROM EKA_WORD_TABLE ORDER BY srn desc";

            $result = mysqli_query($conn, $sql1);

            $total_result = mysqli_num_rows($result);

            // if ($total_result > 0)
            // {?

                $index = 1;
                while($row = mysqli_fetch_assoc($result))
                {
                    if($row['email']){
                        $email_pre = substr($row['email'],0,round(strlen(explode('@',$row['email'])[0])/2));
                        $email = $email_pre."********";
                    }else{
                        $email = '';
                    }
                    $C_EKALIPI = $row["C_EKALIPI"];

                    $faudio=$row['foldername']."/".$row['filename'];

                    echo "<tr id=".$row['srn'].">
                    <td class='td'>".$index."</td>
                    <td class='td'>".$row['C_ENGLISH']."</td>
                    <td class='td'>".$row['C_EKALIPI']."</td>
                    <td class='td'>".$row['C_COUNTRY']."</td>
                    <td class='td'>".$row['C_TIME']."</td>
                    
                    <td>
                    ";
                    if($faudio=="/")
                    {
                        echo "<p style='text-align:center'>*No audio file found!</p>";
                    }
                    else{
                        echo "<audio controls>
                   
                        <source src=".$faudio." type='audio/mpeg'>
                      Your browser does not support the audio element.
                      </audio>";
                    }
                    echo "
                    </td>
                   
                    <td class='td'>".$email."</td>
                    <td class='td'>".$row['approved']."</td>
                    </tr>
                    ";

                    $index++;
                }
                mysqli_close($conn);
            // }
            ?>
                        
                    </tbody>
                </table>
            </div>
            <div class="col-md-1" style="padding-top:20px">
               
            </div>
            </div>
            
   
        </div>

   

    <script>
        var table = "";
        $(document).ready(function () {
            table = $('#example').DataTable({
                    "order": [[4, "desc" ]],
                    "ordering": false,
                }
            );

        });

        function reloadTable() {
            window.location.replace(window.location.href.split('?')[0] + "?filter=" + $('#verification_status').val());
        }

        function save_form(form, rowid) {
            // var xform = form;/
            var formdata = $('#' + form.id).serialize();
            $.ajax({
                type: "GET",
                url: "contributionReview.php",
                async: false,
                timeout: 1500,
                data: formdata,
                success: function (data) {
                    console.log(data);
                    res = JSON.parse(data);
                    console.log(res);
                    alert(res.message);
                    table.row("#" + form.id.split('_')[1]).remove().draw();
                },
                error: function (data) {
                    alert(data.message);
                    console.log('error ', data);
                }
            });
        }
    </script>
</body>

</html>