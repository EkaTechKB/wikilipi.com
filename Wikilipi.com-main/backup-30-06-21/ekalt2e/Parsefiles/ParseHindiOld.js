var  currchar = "";	
var  currtype = " "; 	
var nexttype = "";	
var stressIndic = "n";	

function ParseHindi(sentWordforIPA)
{
	var lang = $("#langFor").children("option:selected").val();
	var sentWordforReplace = sentWordforIPA;
	selectLangArray(lang);
	Chale_Chalo(array_one, sentWordforReplace);
 } // end of Devanagari_to_IPA function	

function ParseHindiAfterReplace(ipaParse)
{        
	var myString = ipaParse;
	var concatstr = "";
	var prevtype = "";
	var prevchar = "";
	var prValLen="";
		
	inplen = myString.length;
	for(i = 0; i < myString.length; i++) 
	{                                      
		EkaTTSParseHindi(i, myString);
	}
}
 
function EkaTTSParseHindi(i,myString) 
{
	currchar = myString[i] ;
	nextchar = myString [i+1];
	
	//Adjust for Nukta
	if (currchar == String.fromCharCode(326)) 
	{
		if (prevchar == "j")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			currchar = "ɉ";
			concatstr = concatstr.concat(currchar);
		}
		else {						
			if (prevchar == "c") 
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				currchar = "č";
				concatstr = concatstr.concat(currchar);
			}
		}	
	} 
	else 
	{
		concatstr = concatstr.concat(currchar);	
	}
	
	// Adjust for avagraha			
	if (currchar ==String.fromCharCode(2365)) 						//if current character is  "ऽ" avagraha(2365). 
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		currchar = prevchar;
		concatstr = concatstr.concat(currchar);						// repeat the previous character (a vowel)
	}
	
	// Adjust for Anusvar	
	if (currchar == String.fromCharCode(324)) 
	{
		if (/[kg]/.test(nextchar))
		{
			nexttype = "k";
		}
		if (/[čcɉjz]/.test(nextchar))
		{ 
			nexttype = "c";
		}
		if (/[tdл]/.test(nextchar))
		{ 
			nexttype = "t";
		}
		if (/[ŧđn]/.test(nextchar))
		{ 
			nexttype = "ŧ";
		}
		if (/[pbm]/.test(nextchar))
		{ 
			nexttype = "p";
		}
		if (/[yrlwshφ]/.test(nextchar)) 
		{        // k-s-h begins with k ???
			nexttype = "y";
		}
		if (/[. ?!,:]/.test(nextchar)) 
		{       	 // Punctuation or blank
			nexttype = ".";
		}
		if (i == myString.length - 1) 
		{       	 // end of input string
			nexttype = ".";
		}
					
		if (nexttype == "k") 
		{                     	// Rule 1
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			currchar = "ŋ";
			concatstr = concatstr.concat(currchar);
		}
		if (nexttype == "c") 
		{							// Rule 2
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			currchar = "n-";
			concatstr = concatstr.concat(currchar);
		}
		if (nexttype == "t") 
		{							// Rule 3
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			currchar = "л-";
			concatstr = concatstr.concat(currchar);
		}
		if (nexttype == "ŧ") 
		{							// Rule 4
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			currchar = "n-";
			concatstr = concatstr.concat(currchar);
		}
		if (nexttype == "p") 
		{							// Rule 5
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			currchar = "m-";
			concatstr = concatstr.concat(currchar);
		}
		if (nexttype == "y") 
		{							// Rule 6
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			currchar = "ŋ";
			concatstr = concatstr.concat(currchar);
		}
		if (nexttype == ".") 
		{							// Rule 7 Sanskrit
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			currchar = "ŋ";
			concatstr = concatstr.concat(currchar);
		}
		// Currently Rule 8 not applied to first part of double word, don't know how to
		/* 	if (nexttype == ".") {				// Rule 8 Marathi override Sanskrit
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			currchar = "a ";
			concatstr = concatstr.concat(currchar);
		} */						 
	}
	
	
	// Store values for the next iteration of the loop	
	prevtype = currtype; 
	prevchar = currchar;
	prValLen = prevchar.length;
}               	  