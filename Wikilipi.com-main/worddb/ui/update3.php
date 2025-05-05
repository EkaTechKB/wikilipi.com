<?php
error_reporting(0);
?>
<!DOCTYPE html>
<html lang="en"><head>

<meta http-equiv="Content-Type" content="application/xhtml+xml; charset=UTF-8" />
<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1">

// script to display the confirm delete dialog    
<script>
function confirmDelete(delUrl) {
  if (confirm("Are you sure you want to delete")) {
   document.location = delUrl;
  }
}
// get the update date and time (notcurrently used)
</script>
<script type="text/javascript" language="javascript">

    function GetDateTime() {

        var param1 = new Date();

        var t2 = param1.getMonth() + 1;

        var param2 = param1.getDate();

        document.getElementById('txttime').value = param2;

    }
    
// display table on html page
</script>
             <div class="row-fluid sortable">
		<div class="box span12">
		<div class="box-header well" data-original-title>
		<h2><i class="icon-edit"></i>Update the word</h2>
</div>

// Main logic of script
<?php
include_once("../post_api/db-config.php");
include_once("../post_api/db-config3.php");
$srn = $_REQUEST['srn'];
//$srn=776;
$isUpdated = 0; 
// Slect all rows in table 
$sql = "SELECT * FROM EKA_MISSING_WORD_TEST_TABLE WHERE srn = " . $srn;

$result = mysqli_query($conn2, $sql);

if (!$result ) 
		{
		die("Error: Data not found..");
		}
			//database table name
// display individual rows one by one on screen				
$test = mysqli_fetch_assoc($result);			
						$C_ENGLISH=$test['C_ENGLISH'];
						$C_COUNT=$test['C_COUNT'];
						$C_EKALIPI=$test['C_EKALIPI'];
						$C_COUNTRY=$test['C_COUNTRY'];
						$C_TIME=$test['C_TIME'];
						$C_OTHER=$test['C_OTHER'];

// put entry back into table, after save is pressed
if(isset($_POST['save']))
{	
//if update is pressed, rebuild the row
$isUpdated = $isUpdated + 1;
						$C_ENGLISH_save=$_POST['english'];
						$C_COUNT_save=$_POST['count'];
						$C_EKALIPI_save=$_POST['ekalipi'];
						$C_COUNTRY_save=$_POST['country'];
						//$C_TIME_save=$_POST['C_TIME'];
						$C_OTHER_save=$_POST['other'];

// see if English name is in production table						
$sql1 = "SELECT * FROM EKA_WORD_TABLE WHERE C_ENGLISH='$C_ENGLISH'";

$result1 = mysqli_query($conn, $sql1);
// english name found
if (mysqli_num_rows($result1) > 0) 
 {
 $match_val =0;
	echo "same name found in EKA_WORD_TABLE";
	while($row = mysqli_fetch_assoc($result1))
	{
	        $test_var1 = $row['C_EKALIPI']; 
	    
	        
		
		//if($row['EKA_WORD_TABLE.C_EKALIPI']==$C_EKALIPI_save)
		if($test_var1==$C_EKALIPI_save)
		{
			$match_val = $match_val + 1;
			echo "Two values are equals...........";
		}
		echo $row['C_COUNT'];
		$inc_count=$row['C_COUNT'] + 1 ;
	}
//Ekalipi name not found for this row	
	if($match_val==0)
	{
		//$inc_count=$inc_count - 1 ;
$sql2 = "UPDATE EKA_MISSING_WORD_TEST_TABLE SET `C_ENGLISH` =  '$C_ENGLISH_save', `C_COUNT` =  '$inc_count', `C_EKALIPI` =  '$C_EKALIPI_save', `C_COUNTRY` =  '$C_COUNTRY_save', `C_OTHER` =  '$C_OTHER_save' WHERE srn ='$srn'";

$result3 = mysqli_query($conn2, $sql2);

	echo "Updated!";
	}
	else
// if ekalipi name is already in production table, delete row from missing table	
	{
		$sql2 = "DELETE FROM `EKA_MISSING_WORD_TEST_TABLE` WHERE srn ='$srn'"; 
		$result3 = mysqli_query($conn2, $sql2);
		echo "Word already present!";
	}

 }
// English name not found in production table, update row in missing table from screen					
else
{	
$sql2 = "UPDATE EKA_MISSING_WORD_TEST_TABLE SET `C_COUNT` =  '$C_COUNT_save', `C_EKALIPI` =  '$C_EKALIPI_save', `C_COUNTRY` =  '$C_COUNTRY_save', `C_OTHER` =  '$C_OTHER_save' WHERE srn ='$srn'";

$result3 = mysqli_query($conn2, $sql2);

	echo "Word Updated!";
}
}
//processing of missing table row ends
mysql_close($conn);
mysql_close($conn2);
?>


<title>Ekalipi Script</title>


</head>

<body onload="FocusOnInput()">
		<div align="left">
				<font face="Vardana" size="5"><a href="addwordmissing.html"><button type="submit" value="submit" style="
    /* margin-right: 160px; */
    /* margin-left: 100px; */
	width: 200px;
    height: 50px;
	background-color: blue;
	color: white;
	border-radius: 12px;
	border:5px solid white;">Add New Word</button></a></font>
		</div>
<div align="left">
				<font face="Vardana" size="5"><a href="search.php"><button type="submit" value="submit" style="
    /* margin-right: 160px; */
    /* margin-left: 100px; */
	width: 200px;
    height: 50px;
	background-color: blue;
	color: white;
	border-radius: 12px;
	border:5px solid white;">Search Word</button></a></font>
		</div>
<form method="post" name="" id="formID" class="formular">

	<div align="center"><h2></h2></div>
<div class="container">
<table>
    <div id = "loading" class="loader"></div>
	<tr>
    <div class="form-group">
      <td><label for="english">English word</label></td>
      <td><input type="text" class="form-control" id="english" name="english" value="<?php echo $C_ENGLISH ?>" ></td>
    </div>
	</tr>
	<tr>
    <div class="form-group">
      <td><label for="ekalipi">Ekalipi word</label></td>
      <td><input type="text" class="form-control" id="ekalipi" name="ekalipi" value="<?php echo $C_EKALIPI ?>" autofocus></td>
    </div>
	</tr>
	<tr>
    <div class="form-group">
      <td><label for="other">comment</label></td>
      <td><input type="text" class="form-control" id="other" name="other" value="2018/09/29" onload="GetDateTime()"></td>
    </div>
	</tr>
	<tr>
    <div class="form-group">
      <td><label for="count">Number of occurances</label></td>
      <td><input type="text" class="form-control" id="count" name="count" value="<?php echo $C_COUNT ?>" ></td>
    </div>
	</tr>
	<tr>
    <div class="form-group">
      <td><label for="country">Country</label></td>
      <td><input type="text" class="form-control" id="country" name="country" value="<?php echo $C_COUNTRY ?>" ></td>
    </div>
	</tr>

</table> 
	
	<div class="margin">
		<td><input type="submit" name="save" value="Save" class="btn-primary form-actions"/></td>
        <td><input type="button" name="cancel" value="Cancel" class="btn-primary form-actions"	/></td>
    </div>
</form>
</div>
     			
        
<table border="1" class="table table-striped table-bordered bootstrap-datatable datatable">

<tr>
                                <th class="btn-primary">English Word</th>
                                <th class="btn-primary">Count</th>
                                <th class="btn-primary">Ekalipi Word</th>
                                <th class="btn-primary">Country</th>
                                 <th class="btn-primary">Comment</th>
                                <th colspan="2"class="btn-primary">Action</th>
                            </tr>
                            
				<?php
                            	include_once("../post_api/db-config3.php");
                            		
                            	$sql = "SELECT * FROM EKA_MISSING_WORD_TEST_TABLE";
                            	
                     		$result1 = mysqli_query($conn2, $sql);
                     		
                                while($test=mysqli_fetch_array($result1))
                                {
                                	$srn = $test['srn'];	
                                    echo "<tr align='center' id='$srn'>";	
                                    //here display the database table column name
                                            
                                   
                                    echo"<td ><font color='black'>".$test['C_ENGLISH']."</font></td>";
                            		echo"<td><font color='black'>".$test['C_COUNT']."</font></td>";
                                    echo"<td><font color='black'>".$test['C_EKALIPI']."</font></td>";
                                    	
                                    echo"<td><font color='black'>".$test['C_COUNTRY']."</font></td>";
									echo"<td><font color='black'>".$test['C_OTHER']."</font></td>";
    
						echo"<td> <a href ='update2.php?srn=$srn'>Update</a>";
						echo"<td><a href='delete2.php?srn=$srn'>Delete</a>";
						echo "</tr>";
				
			}
			@mysql_close($test);
			?>

</table>
</div>
<script>
	<?php
		if($isUpdated == 1)
		{
			echo 'document.getElementById(' .$_REQUEST['srn']. ').scrollIntoView()';
		}
	?>
</script>   
</body>
</html>
<?php
 echo "";
?>
