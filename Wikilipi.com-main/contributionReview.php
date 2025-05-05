<?php

if(isset($_GET['submit_form']) &&  $_GET['submit_form'] == '1'){
        include_once("./db-config-suspense.php");

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
    <title>Document</title>

	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/css/jquery-ui.css">

	<script src="assets/js/jquery.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/jquery-ui.js"></script>

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

</head>
<body style='background-color: rgb(240, 218, 242);'>
<div class='container'>
<div class="navbar navbar-inverse navbar-fixed-top headroom">
		<!-- Modal -->

		<div class="container">
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
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
					<div class="collapse navbar-collapse">
						<ul class="nav navbar-nav pull-left">
						<li class="active"><a class="navbar-brand" href="#"><strong>Pronunciation Dictionary</strong></a></li>
							<li class="active"><a href="./index.php">Home</a></li>
							<li><a href="downloads.html" target="_blank">Downloads</a></li>
                            <li><a href="contribution.php" target="_blank">Contributions</a></li>
							<li><a href="about.html" target="_blank">About</a></li>
							<li><a href="contact.html" target="_blank">Contact</a></li>
							<li><a class="page-scroll" href="signup.html" target="_blank">Sign Up</a></li>
						</ul>
					</div>
					<!--/.nav-collapse -->
				</div>
			</div>
		</div>
	</div>

<div class='row' style='margin-top:50px;'>
<div class='col-md-12'>
<div class="text-center"><span><font face="Arial" size="6">Contribution Review</font><span></div>
            <div class="row col-md-12 col-xs-12 col-sm-12">
                <div class="row">
                    <div class="col-md-2 col-xs-10 col-sm-4 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                      <div class="row">
                        <label for="any_pan" class="control-label">Verification Status</label>
                      </div>
                      <div class="row">
                        <div class="form form-horizontal">
                            <div class="form-group" >
                              <select class="form-control" id='verification_status' onchange="reloadTable();">
                                <option value="All"<?php if(isset($_GET['filter']) && $_GET['filter']=='All'){ echo 'selected'; }?>>ALL</option>
                                <option value="P"  <?php if(isset($_GET['filter']) && $_GET['filter']=='P'){ echo 'selected'; }else{ echo 'selected'; } ?>>PENDING</option>
                                <option value="A"  <?php if(isset($_GET['filter']) && $_GET['filter']=='A'){ echo 'selected'; }?>>APPROVED</option>
                                <option value="R"  <?php if(isset($_GET['filter']) && $_GET['filter']=='R'){ echo 'selected'; }?>>REJECTED</option>
                              </select>
                            </div>
                        </div>
                      </div>
                    </div>

                </div>
                <hr>
                </div>
        <br>

<table id="example" class="display" style="width:100%;">
        <thead>
            <tr>
                <th>Id</th>
                <th>Input</th>
                <th>Ekalipi</th>
                <th>Country</th>
                <th>Created At</th>
                <th>Filename</th>
                <th>email</th>
                <th>Status</th>
                <th>FormHere</th>
            </tr>
        </thead>
        <tbody>
            <?php
            include_once("./db-config-suspense.php");

            if(isset($_GET['filter']) && in_array($_GET['filter'], array('All','A','P','R'))){
                if($_GET['filter'] == 'A'){
                    $sql1 = "SELECT * FROM EKA_WORD_TABLE WHERE approved='A' ORDER BY srn ASC";
                }else if($_GET['filter'] == 'P'){
                    $sql1 = "SELECT * FROM EKA_WORD_TABLE WHERE approved='P' ORDER BY srn ASC";
                }else if($_GET['filter'] == 'R'){
                    $sql1 = "SELECT * FROM EKA_WORD_TABLE WHERE approved='R' ORDER BY srn ASC ";
                }else{
                    $sql1 = "SELECT * FROM EKA_WORD_TABLE ORDER BY srn ASC";
                }

            }else{
                $sql1 = "SELECT * FROM EKA_WORD_TABLE WHERE approved='P' ORDER BY srn ASC";
            }

            $result = mysqli_query($conn, $sql1);

            $total_result = mysqli_num_rows($result);

            // if ($total_result > 0)
            // {?

                while($row = mysqli_fetch_array($result))
                {
                    $C_EKALIPI = $row["C_EKALIPI"];
                    echo "<tr id=".$row['srn'].">
                    <th>".$row['srn']."</th>
                    <th>".$row['C_ENGLISH']."</th>
                    <th>".$row['C_EKALIPI']."</th>
                    <th>".$row['C_COUNTRY']."</th>
                    <th>".$row['C_TIME']."</th>
                    <th>".$row['foldername']."/".$row['filename']."</th>
                    <th>".$row['email']."</th>
                    <th>".$row['approved']."</th>
                    <th>
                    <form id='FORM_".$row['srn']."' method='GET' class='form-inline'>
                    <input type='hidden' name='submit_form' value='1'>
                    <input type='hidden' name='record_id' value='".$row['srn']."'>
                    <label class='radio-inline'><input name='radiooptions' type='radio'required value='ok'>Approve</label>
                    <br><label class='radio-inline'><input name='radiooptions' type='radio'required value='error'>Reject</label>
                    <br><button type='button' onclick='save_form(FORM_".$row['srn'].");' class='btn btn-xs btn-success'>Save</button>
                    </form>
                    </th>
                    </tr>
                    ";
                }
                $conn->close();
            // }
            ?>
            <tr>
                <th>Id</th>
                <th>Input</th>
                <th>Ekalipi</th>
                <th>Country</th>
                <th>Created At</th>
                <th>Filename</th>
                <th>email</th>
                <th>Status</th>
                <th>FormHere</th>
            </tr>
        </tbody>
</table>
</div>

</div>

</div>

<script>
var table = "";
$(document).ready(function() {
    table = $('#example').DataTable();

} );
function reloadTable(){
    window.location.replace(window.location.href.split('?')[0]+"?filter="+$('#verification_status').val());
}
function save_form(form, rowid){
    // var xform = form;/
    var formdata = $('#'+form.id).serialize();
    $.ajax({
		type: "GET",
		url: "contributionReview.php",
		async: false,
		timeout: 1500,
		data:formdata,
		success: function(data){
            console.log(data);
            res = JSON.parse(data);
            console.log(res);
            alert(res.message);
            table.row("#"+form.id.split('_')[1]).remove().draw();
        },
		error: function(data){
            alert(data.message);
			console.log('error ',data);
		}
		});
}
</script>
</body>
</html>