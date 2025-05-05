var  currchar = "";	
var replchar = "";		
var nexttype = "";	
var stressIndic = "n";	

function ParseMarathi(sentWordforIPA)
{
	var lang = $("#langFor").children("option:selected").val();
	var sentWordforReplace = sentWordforIPA;
	selectLangArray(lang);
	Chale_Chalo(array_one, sentWordforReplace);
} // end of Devanagari_to_IPA function
			
function ParseMarathiAfterReplace(ipaParse)
{        
	var myString = ipaParse;
	var concatstr = "";
	var prevchar = "";
	var prValLen="";
		
	inplen = myString.length;
				
	for(i = 0; i < myString.length; i++) 
	{  
		EkaTTSParseMarathi(i, myString);
	}
}
 
function EkaTTSParseMarathi(i,myString) 
{
	currchar = myString[i] ;
	nextchar = myString [i+1];
	if (i == 0)
	{	
		prevchar  = "";
	}
	
	//Adjust for Nukta
	if (currchar == String.fromCharCode(326)) 
	{
		if (prevchar == "j") 
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ɉ";
			concatstr = concatstr.concat(replchar);
		}
		else 
		{						
			if (prevchar == "c") 
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "č";
				concatstr = concatstr.concat(replchar);
			}
		}	
	} 
	else 
	{
		replchar = currchar;
		concatstr = concatstr.concat(currchar);	
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
		if (/[।. ?!,:]/.test(nextchar)) 
		{       		 // Punctuation or blank
			nexttype = ".";
		}
		if (i == myString.length - 1)
		{       	 // end of input string
			nexttype = ".";
		}
		
		if (nexttype == ".") 
		{							// Rule 7 Sanskrit
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			currchar = "ŋ";
			concatstr = concatstr.concat(currchar);
		}
		if (nexttype == "k") 
		{                       	// Rule 1
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ŋ";
			concatstr = concatstr.concat(replchar);
		}
		if (nexttype == "c") 
		{							// Rule 2
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "n-";
			concatstr = concatstr.concat(replchar);
		}
		if (nexttype == "t") 
		{							// Rule 3
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "л-";
			concatstr = concatstr.concat(replchar);
		}
		if (nexttype == "ŧ") 
		{							// Rule 4
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "n-";
			concatstr = concatstr.concat(replchar);
		}
		if (nexttype == "p") 
		{							// Rule 5
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "m-";
			concatstr = concatstr.concat(replchar);
		}
		if (nexttype == "y") 
		{							// Rule 6
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ŋ";
			concatstr = concatstr.concat(replchar);
		}
	}	
	//<------------------------------------------------------------------------------------------------------------------------------------------------>		
	if (currchar == String.fromCharCode(8209)) 				//if current character is non-breaking hyphen(8209). 
	{
		stressIndic = "y";
		if ((/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(nextchar)) || (/[. ?!,:| ]/.test(currchar)))
		{ 
		// do nothing 
		} 
		else 
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("ø");
			if (stressIndic == "y")      		// Syllable ended, any conjunct consonants found?
			{				
				// Show high stress character
				concatstr = concatstr.concat(String.fromCharCode(712));
				stressIndic = "n";
			}
		}
	}
//<-------------------------------------------------------------------------------------------------------------------------------	
// checking whether currchar and prevchar is consonant or not

	if ((/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(currchar)) && (/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(prevchar)))		
	{
		if((currchar == "r" || currchar == "l") && (nextchar == "u"))			// special handling for ru and lu
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = currchar;
			concatstr = concatstr.concat(String.fromCharCode(8209) + replchar);
		}
		else
		{	
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("a");
			replchar = currchar;
			concatstr = concatstr.concat(replchar);						// fix stress character positioning error
		}	
	}		
//<-------------------------------------------------------------------------------------------------------------------------------				
	// Store values for the next iteration of the loop	
	prevchar = currchar;
	prValLen = prevchar.length;
}