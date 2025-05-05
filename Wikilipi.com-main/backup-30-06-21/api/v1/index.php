<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    require_once('route.php');

    // Post data from request
    $postData = json_decode(file_get_contents("php://input"));                    

    function home(){
        echo 'This is home. Home template in HTML';
    }

    function about_us($postData){
        echo json_encode($postData);
    }

    function contact_us(){
        echo 'This is contact us page. Contact Us template in HTML.';
    }

    function page404(){
        die('Page not found. Please try some different url.' .$request);
    }

    //If url is http://www.ekalipi.com/route/home or user is at the maion page(http://localhost/route/)
    if($request == 'home' or $request == '')
        home();
    //If url is http://www.ekalipi.com/route/about-us
    else if($request == 'about-us')
        about_us($postData);
    //If url is http://www.ekalipi.com/route/contact-us
    else if($request == 'contact-us')
        contact_us();
    //If user entered something else
    else
        page404();
?>