var currchar = "";	
var replchar = "";	
var prev2ndchar ="";	
var next2ndchar ="";
var stressIndic = "n";

/*var vowelTest = (function() {
								var re = /^[ā@åΔöūλeuoa]$/i;
								return function(s) 
								{
									return re.test(s);
								}
							})();

var consonantTest = (function() {
								var cons = /^[ŧđwrtyɉpлφsdfghjklzčcvbnma]$/i;
								return function(s) 
								{
									return cons.test(s);
								}
							})();
*/		
					
function ParseSanskrit(ipaParse)
{        
	var myString = ipaParse;
	
	//var myString = myString.concat(ipaParse);
	var concatstr = "";
	var prevchar = "";
	var prValLen ="";
	var nexttype = "";	
	
	for(i = 0; i < myString.length; i++) 
	{                                      
		EkaTTSParse(i, myString);
		//document.write("<br/>Entered String is:" + myString);
	}
}

function EkaTTSParse(i,myString)
{
	/* if (i == 0)
	{
		var stressIndic = "n";
	}		 */
	currchar = myString[i];
	nextchar = myString [i+1];
	next2ndchar = myString [i+2];
	prev2ndchar = myString[i-2];
	nexttype = "";
	
//-------	// Adjust for cedilla (ņ). This replaces a single character value. -------------------------------------------------		
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
	}else 
	{
		concatstr = concatstr.concat(currchar);	
	}
//------------------------------------------------------------------------------------------------------------------------------
	
	// logic for special characters in Sanskrit
	// Adjust for visarga. Looks like a colon sign (: or ः) 		
	 
	if ((currchar ==String.fromCharCode(2307)) || (currchar ==String.fromCharCode(58)) ) 	
	{
		//visarga ः (2307) or colon :(58).
		
		//देवः = व् + अ = ह -----> देवह
		if(/[ŧđwrtyɉpлφsdfghjklzčcvbnma]/.test(prevchar))
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("aha");
		}
		
		//मालाः = ल् + आ = हा -----> मालाहा
		if (prevchar == "ā") 
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("hā");
		}
		
		if(prevchar == "e") 
		{	
			//कवीः = व् + ई  = ही -----> कवीही
			if(prev2ndchar == "e")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				concatstr = concatstr.concat("hee");
			}
			else
			{	//कविः = व् + इ = हि -----> कविहि
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				concatstr = concatstr.concat("he");
			}
		}
		if(prevchar == "u") 
		{
			//वधूः = ध् + ऊ = हू -----> वधूहू
			if(prev2ndchar == "u")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				concatstr = concatstr.concat("huu");
			}
			else
			{
				//भानुः = न् + उ = हु -----> भानुहु
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				concatstr = concatstr.concat("hu");
			}
		}
		
		//मुनेः = न् + ए = हे -----> मुनेहे
		if (prevchar == "λ") 
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("hλ");
		}
		
		//वनैः = न् + ऐ = हि -----> वनैहि
		if (prevchar == "Δ") 
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("he");
		}
		
		//धेनोः = न् + ओ = हो -----> धेनोहो
		if (prevchar == "o") 
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("ho");
		}
		
		//नौः = न् + औ = हु -----> नौहु
		if (prevchar == "å") 
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("hu");
		}
		if (prevchar == "ń") 
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("hń");
		}
		
		if (stressIndic == "y")      		// Syllable ended, any conjunct consonants found?
				{				
					// Show high stress character
					concatstr = concatstr.concat(String.fromCharCode(712));
					stressIndic = "n";
				}	
	}
//<------------------------------------------------------------------------------------------------------------------------------------------------>	
	
	// Adjust for avagraha			
	if (currchar ==String.fromCharCode(2365)) 						//if current character is  "ऽ" avagraha(2365). 
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = prevchar;
		concatstr = concatstr.concat(replchar);						// repeat the previous character (is it always a vowel?)
	}
//-------------------------------------------------------------------------------------------------------------------------------	
	
	// Adjust for nukta			
	if (currchar ==String.fromCharCode(2364)) 						//if current character is nukta ़ (2364). 
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ø";												// shorten the letter sound, if nukta is found
		concatstr = concatstr.concat(replchar);						
	}
//-------------------------------------------------------------------------------------------------------------------------------	
	
	// Adjust for Anusvar
	// Assign the next Ekalipi character to a consonant group. The following character determines the pronunciation of the anusvar.
	if (currchar == String.fromCharCode(324)) 
	{
		if (/[ kg]/.test(nextchar)) 
		{
			nexttype = "k";
		}
		if (/[ čcɉjz]/.test(nextchar)) 
		{ 
			nexttype = "c";
		}
		if (/[ tdл]/.test(nextchar)) 
		{ 
			nexttype = "t";
		}
		if (/[ ŧđn]/.test(nextchar)) 
		{ 
			nexttype = "ŧ";
		}
		if (/[ pbm]/.test(nextchar)) 
		{ 
			nexttype = "p";
		}
		if (/[ yrlwshφ]/.test(nextchar)) 
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
		// Adjust the pronunciation depending on the following characters group
		//	k class, use nasal velar	
		if (nexttype == "k") 
		{              									// Rule 1
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ŋ";
			concatstr = concatstr.concat(replchar);
		}
		
		// c class, replace with n
		if (nexttype == "c") 
		{												// Rule 2
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "n";
			concatstr = concatstr.concat(replchar);
		}
		
		// t class, replace with л
		if (nexttype == "t") 
		{												// Rule 3
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "л";
			concatstr = concatstr.concat(replchar);
		}
		
		// ŧ class, replace with n
		if (nexttype == "ŧ") 
		{												// Rule 4
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "n";
			concatstr = concatstr.concat(replchar);
		}
		
		// p class, replace with m
		if (nexttype == "p") 
		{												// Rule 5
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "m";
			concatstr = concatstr.concat(replchar);
		}
		
		// y class, replace with ŋ
		if (nexttype == "y") 
		{												// Rule 6
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ŋ";
			concatstr = concatstr.concat(replchar);
		}
		
		// "." class, replace with m
		if (nexttype == ".") 
		{												// Rule 7 Sanskrit
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "m";
			concatstr = concatstr.concat(replchar);
		} 
	}
//------------------------------------------------------------------------------------------------------------------------------
	
	// Special rule added for Sanskrit 
	// Add an extra "a" if consonant is not followed by a vowel
	// Rule doesn't apply if previous char is an anusvar. Note- Test performed on incoming string since prevchar value could have changed
	// checking for currchar is vowel or not also checking for prevchar is consonant or not
	// Vowel precede by a consonant
	if((/[ā@åΔöūλeuoa]/.test(currchar)) && (/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(prevchar)))
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		concatstr = concatstr.concat(currchar);
		if (stressIndic == "y")      		// Syllable ended, any conjunct consonants found?
			{				
				// Show high stress character
				concatstr = concatstr.concat(String.fromCharCode(712));
				stressIndic = "n";
			}
	}

	// checking whether currchar and prevchar is consonant or not

	if ((/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(currchar)) && (/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(prevchar)))		
	{
		if((currchar == "r" || currchar == "l") && (nextchar == "u"))			// special handling for ru and lu
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat(String.fromCharCode(8209) + currchar);
		}
		else 
		if (prevchar == String.fromCharCode(324)) 							// special handling for anusvar
		{									
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat(String.fromCharCode(8209) + currchar);
		} 
		else
		{	
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("a");
			if (stressIndic == "y")      		// Syllable ended, any conjunct consonants found?
			{				
				// Show high stress character
				concatstr = concatstr.concat(String.fromCharCode(712));
				stressIndic = "n";
			}
			concatstr = concatstr.concat(currchar);						// fix stress character positioning error
		}	
	}
		
	// Checking for currchar is blank or Punctuation
	// Checking for prevchar is consonant or not
	// In sanskrit rule, after the single consonants add the extra character "a".

	//if( (/[. ?!,:| ]/.test(currchar)) && (/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(prevchar)))
	if( (/[~. ?!,:| ]/.test(currchar)) && (/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(prevchar)))
	{
		if (myString[i-1] == String.fromCharCode(324))
		{
		// do nothing	
		}
		else
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("a");
			if (stressIndic == "y")      		// Syllable ended, any conjunct consonants found?
			{				
				// Show high stress character
				concatstr = concatstr.concat(String.fromCharCode(712));
				stressIndic = "n";
			}
			concatstr = concatstr.concat(currchar);
		}	
	}
//---------------------------------------------------------------------------------------------------------------------		
		
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

//------------------------------------------------------------------------------------------------------------------------------

	// Store values for the next iteration of the loop	 
	prevchar = currchar;
	prValLen = prevchar.length;			 
}