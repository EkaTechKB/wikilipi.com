var concatstr = "";
function ParseGujarati(sentWordforIPA)
{
	var lang = $("#langFor").children("option:selected").val();
	selectLangArray(lang);
	var sentWordforReplace = sentWordforIPA;
	Chale_Chalo(array_one, sentWordforReplace);
}	

function ParseGujaratiAfterReplace(ipaParse)
{        
    var myString = ipaParse;
    var concatstr = "";
    var prevtype = "";

    inplen = myString.length;
    //	document.write("Entered String is:" + myString);
    //	document.write("<br/>Entered String length is:" + inplen);
     
    for(i = 0; i < myString.length; i++) 
    {                                      
        EkaTTSParseGujarati(i, myString);
    }
}

function EkaTTSParseGujarati(i,myString) 
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
    