<?php
error_reporting(0);
?>



<script>
function confirmDelete(delUrl) {
  if (confirm("Are you sure you want to delete")) {
   document.location = delUrl;
  }
}
</script>
<script type="text/javascript" language="javascript">

    function GetDateTime() {

        var param1 = new Date();

        var t2 = param1.getMonth() + 1;

        var param2 = param1.getDate();

        document.getElementById('txttime').value = param2;

    }
</script>
             <div class="row-fluid sortable">
		<div class="box span12">
		<div class="box-header well" data-original-title>
		<h2><i class="icon-edit"></i>Update the word</h2>
</div>


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
				<font face="Vardana" size="5"><a href="viewwordlist.html"><button type="submit" value="submit" style="
    /* margin-right: 160px; */
    /* margin-left: 100px; */
	width: 200px;
    height: 50px;
	background-color: blue;
	color: white;
	border-radius: 12px;
	border:5px solid white;">Back To Main Page</button></a></font>
		</div>
<form method="post" name="" id="formID" class="formular">

	<div align="center"><h2></h2></div>
<div class="container">
<table>
    <div id = "loading" class="loader"></div>
	<tr>
    <div class="form-group">
      <td><label for="english">English word</label></td>
      <td><input type="text" class="form-control" id="english" name="english"  ></td>
    </div>
	</tr>
	

</table> 
	
	<div class="margin">
		<td><input type="submit" name="save" value="Search" class="btn-primary form-actions"/></td>
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
                                
                                <th colspan="2"class="btn-primary">Action</th>
                            </tr>
                            
				<?php
                            	include_once("../post_api/db-config2.php");
                            	if(isset($_POST['save']))
				{	
					$C_ENGLISH_save=$_POST['english'];
					$C_COUNT_save=$_POST['count'];
					$C_EKALIPI_save=$_POST['ekalipi'];
					$C_COUNTRY_save=$_POST['country'];
					//$C_TIME_save=$_POST['C_TIME'];
					$C_OTHER_save=$_POST['other'];
						
                            		$sql = "SELECT * FROM $tableName where `C_ENGLISH` =  '$C_ENGLISH_save'";
                            	
                     			$result1 = mysqli_query($conn2, $sql);
                     		
                                	while($test=mysqli_fetch_array($result1))
                                	{
                                		$srn = $test['srn'];	
                                    		echo "<tr align='left' id='$srn'>";	
                                    		//here display the database table column name
                                            
                                   
                                   		echo"<td ><font color='black'>".$test['C_ENGLISH']."</font></td>";
                            			echo"<td><font color='black'>".$test['C_COUNT']."</font></td>";
                                   		echo"<td><font color='black'>".$test['C_EKALIPI']."</font></td>";
                                    	
                                   		echo"<td><font color='black'>".$test['C_COUNTRY']."</font></td>";
						//echo"<td><font color='black'>".$test['C_OTHER']."</font></td>";
    
						echo"<td> <a href ='update2.php?srn=$srn'>Update</a>";
						echo"<td><a href='delete2.php?srn=$srn'>Delete</a>";
						echo "</tr>";
				
					}
				}
			@mysql_close($test);
			?>

</table>
</div>

<i class="fa fa-arrow-circle-left" style="font-size:50px; color: green; padding-left:0px;"><a href="updateMain.php"></a></i>
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
