'use strict';
function buttonCheck() 
{
	console.log("Hello");
   var ipaName = document.getElementById("ipa-in").value;
    if (Boolean(ipaName) )
    {
        load(tti-ui-minEnglishINDB.php);
    } 
    else 
    {
        alert('Enter name');
    }
}