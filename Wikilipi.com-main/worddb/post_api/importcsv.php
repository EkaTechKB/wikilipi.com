<?php 
include_once('db-config.php');
$file= "csv1.csv";

$result1=mysqli_query($cons,"select count(*) count from $tableName");
$r1=mysqli_fetch_array($result1);
$count1=(int)$r1['count'];
//If the fields in CSV are not seperated by comma(,)  replace comma(,) in the below query with that  delimiting character 
//If each tuple in CSV are not seperated by new line.  replace \n in the below query  the delimiting character which seperates two tuples in csv
// for more information about the query http://dev.mysql.com/doc/refman/5.1/en/load-data.html

mysqli_query($conn, '
    LOAD DATA LOCAL INFILE "'.$file.'"
        INTO TABLE '.$tableName.'
        FIELDS TERMINATED by \',\'
        LINES TERMINATED BY \'\n\'
')or die(mysql_error());

$result2=mysqli_query($conn,"select count(*) count from $tableName");
$r2=mysqli_fetch_array($result2);
$count2=(int)$r2['count'];

$count=$count2-$count1;
if($count>0)
echo "Success";
echo "<b> total $count records have been added to the table $tableName </b> ";

?>