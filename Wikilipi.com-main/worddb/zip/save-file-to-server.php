<?php 

function saveFile(){
    try{
        $url = 'https://www.hear2read.org/demo/play.php?text=कार्तिक&voice=demo_indic_muk_mr728-V3.flitevox';
        $file_name = 'sounds/kartik.mp3'; 
        
        if(file_put_contents( $file_name,file_get_contents($url))) { 
            echo "File downloaded successfully"; 
        } else { 
            echo "File downloading failed."; 
        } 
    }catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
}
saveFile();
?> 
