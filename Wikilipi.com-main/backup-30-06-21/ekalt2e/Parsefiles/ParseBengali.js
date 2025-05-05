var  currchar = "";	
var  currtype = " "; 	
var nexttype = "";		

function ParseBengali(sentWordforIPA)
{
	var lang = $("#langFor").children("option:selected").val();
	var sentWordforReplace = sentWordforIPA;
	selectLangArray(lang);
    Chale_Chalo(array_one, sentWordforReplace);
} // end of Devanagari_to_IPA function
	
function ParseBengaliAfterReplace(ipaParse)
{        
    var myString = ipaParse;
    var concatstr = "";
    var prevtype = "";

    inplen = myString.length;
    //	document.write("Entered String is:" + myString);
    //	document.write("<br/>Entered String length is:" + inplen);
     
    for(i = 0; i < myString.length; i++) 
    {                                      
        EkaTTSParseBengali(i, myString);
    }
}
    
function EkaTTSParseBengali(i,myString) 
{
    currchar = myString[i] ;
    
     var currtype = "";	
     if (/[ā@åΔöū\euoa]/.test(currchar)) {
         currtype = "v";
     }	
     if (/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(currchar)) { 
         currtype = "c";
     }
     if (/[ ]/.test(currchar)) { 
         currtype = "b";
     }
     var checkvar = "o";			
     if($("#IsSymbolÖ").is(':checked')) {
         var checkvar = "ö";
     }
       
     // a consonant preceded by a consonant
      if (currtype == "c" && prevtype == "c") {
         concatstr = concatstr.concat(checkvar).concat(currchar);
     } else {
         concatstr = concatstr.concat(currchar);
     }

     
         
         
// Store values for the next iteration of the loop	
         prevtype = currtype;  
      
}