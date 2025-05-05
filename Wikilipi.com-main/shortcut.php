<?php
$target = '/home/ekalipi/public_html/ekalt2e'; 
$shortcut = 'ekalt2e'; 
symlink($target, $shortcut); 
echo 'done';
?>