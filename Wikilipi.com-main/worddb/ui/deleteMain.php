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


            
             <div class="row-fluid sortable">
		<div class="box span12">
		<div class="box-header well" data-original-title>
		<h2><i class="icon-edit"></i>Update the word</h2>
</div>



<?php
include_once("../post_api/db-config.php");
$srn = $_REQUEST['srn'];
//$srn=776;

$sql = "SELECT * FROM $tableName WHERE srn = " . $srn;

$result = mysqli_query($conn, $sql);

if (!$result ) 
		{
		die("Error: Data not found..");
		}
			//database table name
				
$test = mysqli_fetch_assoc($result);			
						$C_ENGLISH=$test['C_ENGLISH'];
						$C_COUNT=$test['C_COUNT'];
						$C_EKALIPI=$test['C_EKALIPI'];
						$C_COUNTRY=$test['C_COUNTRY'];
						$C_TIME=$test['C_TIME'];
						$C_OTHER=$test['C_OTHER'];
						
						
$query="Delete from $tableName where srn='$srn'"; 

$result = mysqli_query($conn, $query);



mysql_close($conn);
?>


<title>Ekalipi Script</title>


</head>

<body>

<form method="post" name="" id="formID" class="formular">

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
                            	include_once("../post_api/db-config.php");
                            		
                            	$sql = "SELECT * FROM $tableName";
                            	
                     		$result = mysqli_query($conn, $sql);
                     		
                                while($test=mysqli_fetch_array($result))
                                {
                                	$srn = $test['srn'];	
                                    echo "<tr align='center'>";	
                                    //here display the database table column name
                                            
                                   
                                    echo"<td><font color='black'>".$test['C_ENGLISH']."</font></td>";
                            		echo"<td><font color='black'>".$test['C_COUNT']."</font></td>";
                                    echo"<td><font color='black'>".$test['C_EKALIPI']."</font></td>";
                                    	
                                    echo"<td><font color='black'>".$test['C_COUNTRY']."</font></td>";
									echo"<td><font color='black'>".$test['C_OTHER']."</font></td>";
    
						echo"<td> <a href ='updateMain.php?srn=$srn'>Update</a>";
						echo"<td><a href='deleteMain.php?srn=$srn'>Delete</a>";
						echo "</tr>";
				
			}
			@mysql_close($test);
			?>
</table>
</div>
</body>
</html>
<?php
 echo "";
?>
