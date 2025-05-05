<?php
include_once("./db-config.php");

if(!empty($_GET["keyword"])) {

    $word = strtolower($_GET["keyword"]);

    $sql1 = 'SELECT DISTINCT C_ENGLISH FROM EKA_WORD_TABLE where C_ENGLISH like "'.$word.'%" order by C_ENGLISH ASC limit 21';
    // echo $sql1;
    $result = mysqli_query($conn, $sql1);
    $suggestions = array();

    $total_result = mysqli_num_rows($result);
    if ($total_result > 0)
    {

        while($row = mysqli_fetch_assoc($result))

        {
            array_push($suggestions, $row['C_ENGLISH']);

            // array_push($suggestions, addslashes($row['C_ENGLISH']));
        }
        if($total_result>20){
            array_push($suggestions, "...");
        }

    }
    echo json_encode($suggestions);
}else{
    echo json_encode(array());
}

$conn->close();

?>
