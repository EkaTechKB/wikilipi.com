var concatstr = "";

//Telugu pronunciation rules obtained from this Pdf //file:///C:/Users/Shree/Google%20Drive/Ekalipi/httpfiles/homedir/public_html/ekalipi.com/lib/js/Telugu%20in%20Thirty%20Days.pdf

function ParseTelugu(sentWordforIPA)
{
	var lang = $("#langFor").children("option:selected").val();
	selectLangArray(lang);
	var sentWordforReplace = sentWordforIPA;
	Chale_Chalo(array_one, sentWordforReplace);
}	

function ParseTeluguAfterReplace(ipaParse)
{        
    var myString = ipaParse;
    var concatstr = "";
    var prevtype = "";

    inplen = myString.length;
    //	document.write("Entered String is:" + myString);
    //	document.write("<br/>Entered String length is:" + inplen);
     
    for(i = 0; i < myString.length; i++) 
    {                                      
        EkaTTSParseTelugu(i, myString);
    }
}
    
function EkaTTSParseTelugu(i,myString) 
{
    currchar = myString[i] ;
    
     var currtype = "";	
     if (/[ā@åΔöū\euoa]/.test(currchar)) 
	 {
         currtype = "v";
     }	
     if (/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(currchar)) 
	 { 
         currtype = "c";
     }
     if (/[ ]/.test(currchar)) 
	 { 
         currtype = "b";
     }
     var checkvar = "o";			
     if($("#IsSymbolÖ").is(':checked')) 
	 {
         var checkvar = "ö";
     }
       
     // a consonant preceded by a consonant
      if (currtype == "c" && prevtype == "c") 
	  {
         concatstr = concatstr.concat(checkvar).concat(currchar);
	  } 
	  else 
	  {
         concatstr = concatstr.concat(currchar);
	  }
}