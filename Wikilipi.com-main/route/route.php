<?php

    require_once('config.php');

    //          HTTP protocol + Server address(localhost or example.com) + requested uri (/route or /route/home)
    $current_url = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    
    //Current URL = http://www.ekalipi.com/route/something
    //Site URL - http://www.ekalipi.com/route

    //Requested page = Current URL - Site URL
    //Requested page = something
    $request = str_replace($site_url, '', $current_url);
    
    //Replacing extra back slash at the end
    $request = str_replace('/', '', $request);

    //Converting the request to lowercase
    $request = strtolower($request);

?>