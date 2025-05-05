var concatstr = "";
function ParseAssamese(sentWordforIPA)
{
	var lang = $("#langFor").children("option:selected").val();
	selectLangArray(lang);
var array_one_length = array_one.length ;
var modified_substring = sentWordforIPA ;


//*************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//*************************************************************
    var text_size = sentWordforIPA.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 60000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (sentWordforIPA.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

      modified_substring = sentWordforIPA.substring ( sthiti1, sthiti2 )  ;
	  
      Replace_Symbols( ) ;

      var processed_text = processed_text + modified_substring ;
    
      //  Breaking part code over
      concatstr = concatstr.concat(processed_text);
      document.getElementById("ipa-out").value = concatstr ;

    }
   

 //--------------------------------------------------

 function Replace_Symbols( )
    {

     if ( modified_substring != "" )  // if string to be converted is non-blank then no need of any processing.
        {
         for(input_symbol_idx = 0;   input_symbol_idx < array_one_length-1 ;    input_symbol_idx = input_symbol_idx + 2 )

            {
             indx = 0  ;  // index of the symbol being searched for replacement
             
             while (indx != -1 ) //whie-00
                {
                 modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx + 1] )
                 indx = modified_substring.indexOf( array_one[input_symbol_idx] )
				 console.log("indx " + indx);
                 console.log ("input symbol indx " + input_symbol_idx);
				 console.log ("character in array " + array_one [input_symbol_idx]);
				 console.log ("character in array " + array_one [input_symbol_idx + 1]);
                } // end of while-00 loop
            } // end of for loop


    } //end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols

 } // end of Devanagari_to_IPA function
