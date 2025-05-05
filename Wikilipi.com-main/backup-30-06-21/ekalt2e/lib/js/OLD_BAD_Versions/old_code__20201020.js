//***************
//Telugu script *
//***************

var concatstr = "";
function ParseTelugu(sentWordforIPA)
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
      concatstr = concatstr.concat(processed_text);
//  Breaking part code over

      document.getElementById("ipa-out").value = concatstr  ;

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
                } // end of while-00 loop
            } // end of for loop


    } //end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols

 } // end of Devanagari_to_IPA function


//*********************
//Old Code of Chinese *
//*********************

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
	  
	  ParseChineseAfterReplace(processed_text); 
	  concatstr = concatstr.replace(/-/g, String.fromCharCode(8209));
	  processed_text = concatstr;
		var concatstrPinyin = concatstr;
		concatstr = "";
		document.getElementById("ipa-box").value = concatstrPinyin;  
//  Breaking part code over

    }
		Pinying_to_Ekalipi(processed_text);

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
                } // end of while-00 loop
            } // end of for loop
		} //end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols
	 
			

//********************			
//Old Code of Telugu *
//********************
			
			case "Telugu(Alpha)" :
             array_one = new Array(  

                // Telgu Consonants
                'క' 	,  				'k' ,										//	'a' , 
                'చ' 	, 				'k' ,										//	'a' , 
                'ట' 	,  				't' ,										//	'aː' , 
                'త' 	,  				't' ,										//	'aː' , 
                'ప' 	,  				'p' ,										//	'i' , 
                'య' 	, 			    'y' ,										//	'i' , 
                'శ' 	,  				's' ,										//	'iː' , 
                'ఖ' 	, 				'k' ,										//	'iː' , 
                'ఛ' 	,  				'č' ,										//	'u' , 
                'ఠ' 	,  				't-h' ,										//	'u' , 
                'థ' 	, 				'đ' ,										//	'ɯ' , 
                'ఫ' 	,  				'p-h' ,										//	'uː' , 
                'ర' 	, 				'r' ,										//	'uː' , 
                'ష' 	, 				're' ,										//	'e' , 
                'గ' , 				'g' ,										//	'e' , 
                'జ' 	,  				'j' ,										//	'eː' , 
                'డ' 	,  				'd' ,										//	'eː' , 
                'ద' 	,  				'đ' ,										//	'aɪ̯' , 
                'బ' , 				'b' ,										//	'aɪ̯' , 
                'ల' 	, 				'l' ,										// 	'o' , 
                'స' ,  				's' ,										//	'o' , 
                'ఘ' 	, 				'g-h' ,										//	'oː' , 
                'ఝ' ,  				'z' ,										//	'oː' , 
                'ఢ' , 				'd' ,										//	'aʊ̯' , 
                'ధ',  				'd' ,										//	'aʊ̯' ,
                
                'భ' ,  				'b' ,
                'వ' ,  				'v' ,
                'ఱ' ,  				'r' ,
                'ఙ' ,  				'ɉ' ,
                'ఞ' ,  				'n' ,
                'ణ' ,  				'n' ,
                'న' ,  				'n' ,
                'మ' ,  				'm' ,
                'ళ' ,  				'ø' ,
                'హ' ,  				'h' ,
                
                 
                
                //Telgu Vowels
                
                'అ' 	,  				'a' ,										//	'k' , 
                'ఇ' 	,  				'e' ,										//	'k' , 
                'ఉ' 	, 				'u' ,										//	'h' , 
                'ఋ' 	,  			    'ā' ,										//	'ŋ' , 
                'ఌ' 	,  				'lu' ,										//	't͡ʃ' , 
                'ఎ' 	,  				'λ',										//	'd͡ʑ' , 
                'ఐ' 	,  				'Δ' ,										//	's' , 
                'ఓ' 	,  				'o' ,										//	'ɲ' , 
                'అం' 	,  			    'pλ',					       		    //	'ʈ' , 
                'ఆ' 	,  				'ā' ,										//	'ɖ' , 
                'ఈ' 	,  				'e' ,									    //	'ɽ' , 
                'ఊ' 	,  				'ū' ,									    //	'ɳ' , 
                'ౠ' 	,  			'r' ,										//	't̪' , 
                'ౡ' 	,  			    'l'  ,		// ŧ, đ or ŧ-h 								//	'd̪' , 
                'ఏ' 	,  				'āy' ,		// ŧ, đ or ŧ-h								//	'ð' , 
                'ఒ' 	,  				'o' ,										//	'n̪' , 
                'ఔ' 	,  				'å' ,										//	'p' , 
                'అః' 	,  			    'ahø' ,										//	'b' , 
                'ొ' ,  				'o' ,
                 
                
                // Kana,matra velanti etc 
                
                'ి' ,  				'e' ,
                'ా' ,  				'ā' ,
                'ీ' ,  				'e' ,
                'ు' ,  				'u' ,
                'ో' ,  				'o' ,
                'ే' ,  				'λ' ,
                'ూ' ,  				'u' ,
                'ె' ,  				'λ' ,
                '్' ,  				'-' ,
                'ం' ,  				'ŋ' ,
                'ై' ,  				'Δ' ,
                'ె' ,  				'e' ,
                'ౖ' ,  				'Δ' ,
                'ృ' ,  				'r' ,
                'ౌ' ,  				'å' ,
                
                
                
                // Telugu Numbers
                
                '౦' ,      			'0' ,
                '౧' ,      			'1' ,
                '౨' ,      			'2' ,										   
                '౩' ,      			'3' ,										 
                '౪' ,      			'4' ,										  
                '౫' ,      			'5' ,										 
                '౬' ,      			'6' ,										 
                '౭' ,      			'7' ,										  
                '౮' ,      			'8' ,										 
                '౯' ,      			'9' ,										  
                '౧౦' ,      	       '10'
                );
            break; 


//******************
//Old Replace Code *
//******************

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
    document.getElementById("ipa-out").value = concatstr  ;
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
                } // end of while-00 loop
            } // end of for loop


    } //end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols
	
case "Telugu(Alpha)" :
             array_one = new Array(  

                // Telugu Consonants
				
                'ఞ'  ,  				'g-n-ya' ,				
			    'శ' 	,  				's-h-a' ,										//	'iː' , 
                'ఖ' 	, 				'k-h' ,										//	'iː' , 	
                'ఠ' 	,  				't-h' ,										//	'u' , 
                'థ' 	, 				'đ-h' ,										//	'ɯ' , 
                'ఫ' 	,  				'p-h' ,										//	'uː' , 	
                'ష' 	, 				's-h' ,										//	'e' , 	
                'ఘ' 	, 				'g-h' ,										//	'oː' , 	
                'ఢ' , 				'd-h' ,										//	'aʊ̯' , 		
                'భ' ,  				'b-h' ,				
                'య' 	, 			    'yā' ,										//	'i' , 				
                'క' 	,  				'k' ,										//	'a' , 
                'చ' 	, 				'c' ,										//	'a' , 
                'ట' 	,  				't' ,										//	'aː' , 
                'త' 	,  				'ŧ' ,										//	'aː' , 
                'ప' 	,  				'p' ,										//	'i' , 
                'ఛ' 	,  				'č' ,										//	'u' , 
                'ర' 	, 				'r' ,										//	'uː' , 
                'గ' 	, 				'g' ,										//	'e' , 
                'జ' 	,  				'j' ,										//	'eː' , 
                'డ' 	,  				'd' ,										//	'eː' , 
                'ద' 	,  				'đ' ,										//	'aɪ̯' , 
                'బ' 	, 				'b' ,										//	'aɪ̯' , 
                'ల' 	, 				'l' ,										// 	'o' , 
                'స' 	,  				's' ,										//	'o' , 
                'ఝ' 	,  				'z' ,										//	'oː' , 
                'ధ'	,  				'd' ,										//	'aʊ̯' ,
                'వ' 	,  				'v' ,
                'ఱ' 	,  				'r' ,
                'ఙ' 	,  				'ɉ' ,
                'ణ' 	,  				'ŋ' ,
                'న' 	,  				'n' ,
                'మ' 	,  				'm' ,
                'ళ' 	,  				'φ' ,
                'హ' 	,  				'h' ,
                
                 
                
                //Telgu Vowels

                'ౠ' 	,  			'ruu' ,										//	't̪' , 
                'ౡ' 	,  			    'luu' ,		// ŧ, đ or ŧ-h 								//	'd̪' ,          
                'అః' 	,  			    'ahø' ,										//	'b' , 	
                'ఋ' 	,  			    'ru' ,										//	'ŋ' , 
                'ఌ' 	,  				'lu' ,										//	't͡ʃ' ,
                'ఈ' 	,  				'ee' ,									    //	'ɽ' ,
                'ఏ' 	,  				'āy' ,		// ŧ, đ or ŧ-h								//	'ð' ,   				
                'అ' 	,  				'a' ,										//	'k' , 
                'ఇ' 	,  				'e' ,										//	'k' , 
                'ఉ' 	, 				'u' ,										//	'h' , 
                'ఎ' 	,  				'λ'	,										//	'd͡ʑ' , 
                'ఐ' 	,  				'Δ' ,										//	's' , 
                'ఓ' 	,  				'o' ,										//	'ɲ' , 
                'అం' ,  			    'ŋ'	,					       		    //	'ʈ' , 
                'ఆ' 	,  				'ā' ,										//	'ɖ' , 
                'ఊ' 	,  				'ū' ,									    //	'ɳ' , 
                'ఒ' 	,  				'o' ,										//	'n̪' , 
                'ఔ' 	,  				'å' ,										//	'p' , 
                'ొ' ,  				'o' ,
                 
                
                // Kana,matra velanti etc 
                
                'ీ'  ,  				'ee' ,	
                'ూ' ,  				'oo' ,	
                'ృ' ,  				'ru' ,				
                'ి'  ,  				'Δ' ,
                'ా'  ,  				'ā' ,
                'ు' ,  				'u' ,
                'ో'  ,  				'ö' ,
                'ే'  ,  				'λ' ,
                'ె'  ,  				'λ' ,
                '్'  ,  				'-' ,
                'ం' ,  				'ŋ' ,
                'ై'  ,  				'Δ' ,
                'ె'  ,  				'e' ,
                'ౖ'  ,  				'Δ' ,
                'ౌ'  ,  				'å' ,
                
                
                
                // Telugu Numbers
                
                '౦' ,      			'0' ,
                '౧' ,      			'1' ,
                '౨' ,      			'2' ,										   
                '౩' ,      			'3' ,										 
                '౪' ,      			'4' ,										  
                '౫' ,      			'5' ,										 
                '౬' ,      			'6' ,										 
                '౭' ,      			'7' ,										  
                '౮' ,      			'8' ,										 
                '౯' ,      			'9' ,										  
                '౧౦' ,      	        '10',
                );


case "Gujarati(Beta)" :
            array_one = new Array(  

                // Gujrati Vowels

                'અઃ' 	, 				'a-ha' ,									//	'ʈə' , 
                'ઈ' 	,  				'ee' ,										//	'gʰə' , 
                'ઊ' 	, 				'uu' ,										//	'cə' , 
                'અ' 	,  				'a' ,										//	'kə' , 
                'આ' 	, 				'ā' ,										//	'kʰə' , 
                'ઇ' 	,  				'e' ,										//	'gə' , 
                'ઉ' 	,  				'u' ,										//	'ŋə' , 
                'ઐ' 	,  				'Δ' ,										//	'cʰə' , 
                'એ' 	, 				'λ' ,										//	'ɟə' , 
                'અં' 	,  				'ŋ' ,										//	'ɟʰə' , 
                'ઓ' 	,  				'o' ,										//	'ɲə' , 
                'ઔ' 	, 				'å' ,										//	'ʈə' , 
                
                // Gujrati Consonants
                'ક્ષ'	,  				'k-s-h' ,										//	'ɽə' , 
                'જ્ઞ' 	,  				'd-n-y' ,										//	'ɽʱə' , 
                'ખ' 	, 				'k-h' ,										//	'ɖə' , 
                'ઘ' 	, 				'g-h' ,										//	'ɳə' , 
                'છ' 	,  				'c-h' ,										//	't̪ʰə' , 
                'ઠ' 	,  				't-h' ,										//	'pə' , 
                'ઢ' 	,  				'đ-h' ,										//	'bə' ,				
                'થ' 	,  				'ŧ-h' ,										//	'jə' , 
                'ધ' 	, 				'd-h' ,										//	'lə' , 
                'ભ' 	,  				'b-h' ,										//	'ɦə' , 
                'શ' 	,  				's-h' ,										//	'xə' , 
                'ષ' 	,  				's-h' ,										//	'zə' , 
                'ક' 	,  				'k' ,										//	'ʈʰə' , 
                'ગ' 	, 				'g' ,										//	'ɖʰə' , 
                'ચ' 	,  				'c' ,										//	't̪ə' , 
                'જ' 	,  				'j' ,										//	'd̪ə' , 
                'ઝ' 	, 				'z' ,										//	'd̪ʰə' , 
                'ટ' 	, 				't' ,										// 	'nə' , 
                'ડ' 	, 				'd' ,										//	'pʰə' , 
                'ણ' 	, 				'л' ,										//	'bʰə' , 
                'ત' 	,  				'ŧ' ,										//	'mə' , 
                'દ' 	,  				'đ' ,										//	'rə' , 
                'ન' 	,  				'n' ,										//	'və' , 
                'પ' 	,  				'p' ,										//	'ɕə' , 
                'ફ' 	,  				'f',										//	'ʂə' , 
                'બ' 	,  				'b' ,										//	'sə' , 
                'મ' 	,  				'm' ,										//	'kʃə' , 
                'ય' 	,  				'y' ,										//	't̪ɾə' , 
                'ર' 	,  				'r' ,										//	'gjə' , 
                'લ' 	,  				'l' ,										//	'ɕcə' , 
                'વ' 	,  				'w' ,										//	'qə' , 
                'સ' 	,  				's' ,										//	'ɣə' , 
                'હ' 	,  				'h' ,										//	'fə' , 
                'ળ' 	,  				'l' ,										//	'ɽə' , 
 
                
                 
                // Special Charachter
                 

                'ઃ'	,  				'a-ha' ,										//	''  ,     
                'ી' 	,      		    'ee' ,										//Combine letter,
                'ૂ'  	,     			'uu' ,										//	'i' , 
                'ૃ'  	,  				'ru' ,										//	''  ,   
                'ા'  ,  				'ā' ,										//	''  ,     
                'િ'  ,      			'e' ,	                                   	//	nukta,
                "ુ" 	,     			'u' ,										//	'ɑː' ,    
                "ૈ"	,     			'Δ' ,										//	'iː' ,  
                'ે' 	,      			'λ' ,										//	'u' ,
                'ો'  ,     			'o' ,										//	'uː' ,
                'ૌ' 	,      			'å' ,										//	'ɹ̩' ,        
                "ં"	,      			"ŋ" ,										//	'eː' , 
                'ૅ' 	,  				'λ' ,										  
                'ૉ' 	,  				'o' ,										  
                '્' 	,  				'-' ,										//	gujarati sign virama	 ,  
                 
                
                // Gujrati Numbers
                 
                '૧' ,  				'1' ,										//	Gujrati digit one  ,
                '૨' ,  				'2' ,										//	Gujrati digit two  ,
                '૩' ,  				'3' ,										//	Gujrati digit Three  ,
                '૪' ,  				'4' ,										//	Gujrati digit Four  ,
                '૫' ,  				'5' ,										//	Gujrati digit Five  ,
                '૬' ,  				'6' ,										//	Gujrati digit Six  ,
                '૭' ,  				'7' ,										//	Gujrati digit Seven  ,
                '૮' ,  				'8' ,										//	Gujrati digit Eight  ,
                '૯' ,  				'9' ,										//	Gujrati digit Nine  ,
                '૧૦' ,  				'10',										//	Gujrati digit Ten  ,     
                );
            break;