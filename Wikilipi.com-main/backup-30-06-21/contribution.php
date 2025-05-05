<?php
	error_reporting(E_ERROR | E_PARSE); //E_ALL ^ E_WARNING
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
                                 <!-- <li class="active"><a class="navbar-brand" href="#"><strong>Pronunciation
                                            Dictionary</strong></a></li> -->
											<li class="active" style="font-size:16px"><a href="index.php"target="_blank">Home</a></li>
                                <li class="active" style="font-size:16px"><a href="contribution.php"target="_blank">Contributions</a></li>
						  <li class="active" style="font-size:16px"><a href="TTIProperNamePronc.php"target="_blank">Expert Mode</a></li>
							<li class="active" style="font-size:16px"><a href="https://ekalipi.com/downloads.html"target="_blank">Downloads</a></li>
							<li class="active" style="font-size:16px"><a href="about.html"target="_blank">About</a></li>
							<li class="active" style="font-size:16px"><a href="https://www.wikilipi.com/#contact" class="tm-nav-item-link">Contact</a></li>
                            </ul>
                        </div>
                        <!--/.nav-collapse -->
                    </div>
                </div>
            </div>
        </div>

        <div class='row' style='margin-top:50px;'>
            <div class='col-md-12'>
                <div class="text-center"><span>
                        <font face="Arial" size="6">Contributions</font><span></div>
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
                        </tr>
                    </thead>
                    <tbody>
                        <?php
            include_once("./db-config-suspense.php");

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
                    echo "<tr id=".$row['srn'].">
                    <th>".$index."</th>
                    <th>".$row['C_ENGLISH']."</th>
                    <th>".$row['C_EKALIPI']."</th>
                    <th>".$row['C_COUNTRY']."</th>
                    <th>".$row['C_TIME']."</th>
                    <th>".$row['foldername']."/".$row['filename']."</th>
                    <th>".$email."</th>
                    <th>".$row['approved']."</th>
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