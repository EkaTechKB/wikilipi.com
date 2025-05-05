// Global variables
var concatstr = "";                                                              
var currchar = "";       
var prevtype = ""; 
var currtype = ""; 
var ccVal="";
var stressIndic = "n";
//  Tamil pronunciation rules obtained from this website http://books-india.com/rb_pdfs/9_tamil_teacher.pdf
//  This is one PDF file file:///C:/Users/Ekalipi01/Google%20Drive/Misc/Tamil/9_tamil_teacher.pdf

function ParseTamil(sentWordforIPA)
{					
	var orig_substring = sentWordforIPA;
    var text_size = sentWordforIPA.length ;
	var parseString = orig_substring;
	parseString = parseString.replace(/-/g, String.fromCharCode(8209));		// change all regular hyphens to unbreakable
	parseString = parseString.replace(/:/g, String.fromCharCode(2307));		// change all regular colons to visarga
	parseString = parseString.replace(/\n/g, "~ ");
	
	ParseTamilAfterReplace(parseString); 
	
	concatstr = concatstr.replace(/-/g, String.fromCharCode(8209));        // change all regular hyphens to unbreakable 
	concatstr = concatstr.replace(/~ /g, "\n");                   			// Change special characters back to line breaks
//	orig_substring = concatstr;
	if($("#IsConjunctShow").is(':checked'))      
		{				
			// Do nothing, show the conjunct consonants explicitly
		}
		else 
		{
			concatstr  = concatstr.replace(/‑/g,"");        // Remove the explicit conjunct characters String.fromCharCode(8209)
		}
	//  Breaking part code over
	document.getElementById("ipa-out").value = concatstr ;
 }

function ParseTamilAfterReplace(parseString)          // Output string is concatstr
{        
	var myString = parseString + " ";

	for(i = 0; i < myString.length; i++)
	{                                      
		var incrementVal = EkaTTSParseTamil(i, myString);
		i = incrementVal[2];
	}	      
}

function EkaTTSParseTamil(i,myString) 
{
	currchar = myString[i] ;
	var fstcharLC = myString[i].toLowerCase();
	var seccharLC = "";
	var thirdcharLC = "";
	var prevcharLC = "";
	var nextcharLC = "";
	var prev2charLC = "";
	
	var myStringLen = myString.length;
	
	// coding to handle situation where i values are outside the range
	if (i == 0)
	{	
		prevcharLC ="";
	}
	else
	{
		prevcharLC = myString[i-1];
	}
	
	if (i >= myStringLen - 1)
	{
		nextcharLC = "";
	}
	else
	{		
		nextcharLC = myString[i+1];
	}
	
	if (i < 2)
	{
		prev2charLC = "";
	}
	else
	{		
		prev2charLC = myString[i-2];
	}
	
	if (i >= myStringLen - 1)
	{
		seccharLC = "";
	}
	else
	{		
		seccharLC = myString[i+1].toLowerCase();
	}
	
	if (i >= myStringLen - 2)
	{
		thirdcharLC = "";
	}
	else
	{		
		thirdcharLC = myString[i+2].toLowerCase();
	}		

	// Ekalipi Consonants
	if(fstcharLC =="க")											// (Rule 1)
	{
		replchar = "k";
		if ((prevcharLC == "்") &&(prev2charLC == "ங") || (prev2charLC == "ண") || (prev2charLC == "ர"))
		{	
			replchar = "g"
		}
		else
		// Replace with Tamil consonant list			
		if ((/[கஙசடதணநபமறரஞலள௧ஜவோழன]/.test(prevcharLC)) && (/[கஙசடதணநபமறரஞலள௧ஜவோழன]/.test(seccharLC)))
		{
			replchar = "g-h"
		}
		else if ((prevcharLC == "ா") || (prevcharLC == "ஆ"))
		{
			replchar = "h"
		}
		else if ((/[~. ?!,:| ]/.test(seccharLC)))	
		{		
			replchar = "ø"
		}
		currtype="c";
	}
	else if(fstcharLC =="ங")									// (Rule 2)
	{
		replchar = "n";
		currtype="c";
	}
	else if(fstcharLC =="ச")									// (Rule 3)
	{
		replchar = "c";
			
		if (prevcharLC == "ஞ்"||prevcharLC == "ச") 
		{
			replchar = "j"
		}
		// Replace with Tamil consonant list
		else if ((/[கஙசடதணநபமறரஞலள௧ஜவோழன]/.test(prevcharLC)) && (/[கஙசடதணநபமறரஞலள௧ஜவோழன]/.test(seccharLC)))
		{
			replchar = "s"
		}
		currtype="c";
	} 
	
	else if( fstcharLC =="ஞ" )				// replace consonant dipthong "ஞ" then move one character ahead (Rule 4)
	{	
		//concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (prevcharLC == "த")
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "n-y";
			}
			else
			{
				replchar = "N-y";
			}
		}	
		else
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "j";
			}
			else
			{
				replchar = "J";
			}
		}	
		currtype="c";
	}
	else if(fstcharLC =="ட")												// (Rule 5)
	{
		replchar = "t";
		currtype="c";
	}
	else if(fstcharLC =="ண")											// (Rule 6)
	{
		replchar = "л";
		currtype="c";
	}
	else if(fstcharLC =="த")												// (Rule 7)
	{
		replchar = "ŧ";
		currtype="c";
	}
	else if(fstcharLC == "ந")											// (Rule 8)
	{
		replchar = "n";
		currtype="c";
		if (nextcharLC == "த")
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "n";
			}
			else
			{
				replchar = "N";
			}
		}	
		else
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "n";
			}
			else
			{
				replchar = "N";
			}
		}	
		currtype="c";
	}
	else if(fstcharLC =="ப")												// (Rule 9)
	{
		if (prevcharLC == "ட" || prevcharLC == "ற")
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "p";
			}
			else
			{
				replchar = "P";
			}
		}
		else if (prevcharLC == "ப")
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "p-p";
			}
			else
			{
				replchar = "P-p";
			}
		}
		else if ((/[அஆஇஈஉஊஎஏஐஒஓஔ]/.test(prevcharLC)) && (/[அஆஇஈஉஊஎஏஐஒஓஔ]/.test(nextcharLC)))
		{
			if (myString[i] == fstcharLC)
			{	
				replchar = "p-h";
			}
			else
			{
				replchar = "P-h";
			}
		}
		else
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "p";
			}
			else
			{
				replchar = "P";
			}
		}	
		currtype="c";
	}
	else if(fstcharLC =="ம")												// (Rule 10)
	{
		replchar = "m";
		currtype="c";
	}
	else if(fstcharLC =="ய")												// (Rule 11)
	{
		replchar = "λ";
		ccurrtype="v";
	} 
	else if(fstcharLC =="ர")												// (Rule 12)
	{
		replchar = "r";	
		currtype="c";
	}
	else if(fstcharLC =="ஷ")												// (Rule 12)
	{
		replchar = "s-ha";	
		currtype="c";
	}
	// Vowels	
	else if (fstcharLC =="அ")
	{
		replchar = "a";		
		currtype="v";	
	}
	else if(fstcharLC =="ஆ") 									//if the last character of a word is "e"
	{
		replchar = "ā";			
		currtype = "v";			
	}
	else if(fstcharLC =="இ") 
	{
		replchar = "e";
		currtype="v";
	}	
	else if(fstcharLC =="ஈ") 
	{
		replchar = "ee";
		currtype="v";
	}	
	else if(fstcharLC =="உ")
	{
		replchar = "u";
		currtype="v";
	}
	else if(fstcharLC =="ஊ") 
	{
		replchar = "uu";
		currtype="v";
	}	
 	else if(fstcharLC =="எ") 
	{
		replchar = "λ";
		currtype="v";
	}	
	else if(fstcharLC =="ஏ") 
	{
		replchar = "@";
		currtype="v";
	}	
	else if(fstcharLC =="ஐ") 
	{
		replchar = "Δ";
		currtype="v";
	}	
	else if(fstcharLC =="ஒ") 
	{
		replchar = "o";
		currtype="v";
	}
	else if(fstcharLC =="ஓ")
	{
		replchar = "oo";
		currtype="v";
	}	
	else if(fstcharLC =="ஔ") 
	{
		replchar = "å";
		currtype="v";
	} 
	else if(fstcharLC =="ஃ") 
	{
		replchar = "ak-h";
		currtype="c";
	}	
	else if(fstcharLC =="அ")
	{
		replchar = "a";
		currtype="v";
	}	
	else if(fstcharLC =="ா") 
	{
		replchar = "ā";
		currtype="v";
	}
	else if(fstcharLC =="கீ") 
	{
		replchar = "ee";
		currtype="v";
	}
	else if(fstcharLC =="கு") 
	{
		replchar = "u";
		currtype="v";
	}
	else if(fstcharLC =="கூ") 
	{
		replchar = "ku";
		currtype="v";
	}	
	else if(fstcharLC =="ெ") 
	{
		replchar = "e";
		currtype="v";
	}			
	else if(fstcharLC =="ௌ") 
	{
		replchar = "ū";
		currtype="v";
	}
	else if(fstcharLC =="ஞ")
	{
		replchar = "c";
		currtype="c";
	}	
	
	else if(fstcharLC =="ந")
	{
		replchar = "n";
		currtype="c";
	}
	
	else if(fstcharLC =="ஸ")
	{
		replchar = "s";
		currtype="c";
	}
	
	else if(fstcharLC =="ற")
	{
		replchar = "r";
		currtype="c";
	}
	else if(fstcharLC == "ழ")
	{
		replchar = "l";
		currtype="c";
	}
	else if(fstcharLC =="ன")
	{
		replchar = "n";
		currtype="c";
	}
	else if(fstcharLC =="ல")
	{
		replchar = "l";
		currtype="c";
	}
	else if(fstcharLC =="ள")
	{
		replchar = "φ";
		currtype="c";
	}
	else if(fstcharLC =="டு")
	{
		replchar = "du";
		currtype="c";
	}
	else if(fstcharLC =="௧")
	{
		replchar = "l";
		currtype="c";
	}
	else if(fstcharLC =="ஜ")
	{
		replchar = "j";
		currtype="c";
	}
	else if(fstcharLC =="ா")
	{
		replchar = "ā";
		currtype="v";
	}
	else if(fstcharLC =="ி")
	{
		replchar = "e";
		currtype="v";
	}
	else if(fstcharLC =="ீ")
	{
		replchar = "ee";
		currtype="v";
	}
	else if(fstcharLC =="ு")
	{
		replchar = "u";
		currtype="v";
	}
	else if(fstcharLC =="ூ")
	{
		replchar = "uu";
		currtype="v";
	}
	else if(fstcharLC =="ெ")
	{
		replchar = "λ";
		currtype="v";
	}
	else if(fstcharLC =="ே")
	{
		replchar = "Δ";
		currtype="v";
	}
	else if(fstcharLC =="வ")
	{
		replchar = "w";
		currtype="c";
	}
	else if(fstcharLC =="ொ")
	{
		replchar = "o";
		currtype="v";
	}
	else if(fstcharLC =="ோ")
	{
		replchar = "oo";
		currtype="c";
	}
	else if(fstcharLC =="ं")
	{
		replchar = "ń";
		currtype="v";
	}
	else if(fstcharLC =="ँ")
	{
		replchar = "ń";
		currtype="v";
	}
	else if(fstcharLC =="ः")
	{
		replchar = "ah";
		currtype="c";
	}
	else if(fstcharLC =="़")
	{
		replchar = "ņ";
		currtype="v";
	}
	else if(fstcharLC =="ை")
	{
		replchar = "Δ";
		currtype="v";
	}
	else if(fstcharLC =="ॅ")
	{
		replchar = "@";
		currtype="v";
	}
	else if(fstcharLC =="्")
	{
		replchar = "ø";
		currtype="s";
	}
	
	else if(fstcharLC =="ː")
	{
		replchar = "ah";
		currtype="v";
	}
	else if(fstcharLC =="்")							// Tamil virama, insert a hyphen
	{
		replchar = "-";
		currtype="s";
	}
	else if ((/[~. ?!,:| ]/.test(currchar)))					// end of word (i.e. followed by punctuation)	
	{	
		replchar = currchar;
		currtype="s";
	}				
	else
	{
		//document.write("<br/>You entered Character at Position " + i + " is " + myString[i]);
		//document.write("<br /> It is neither an Ekalipi consonant,vowel or special allowed symbol. SKIPPED" );
		replchar = myString[i];
		currtype="u";
		console.log ("Letter not found. Add to parser  " + myString[i]);
	}	
	if (currtype == "c" && prevtype == "c") 
	{	
		concatstr= concatstr.concat("a").concat(replchar);
	}  
	else
	{	
		concatstr = concatstr.concat(replchar);
	}
    prevcharLC = currchar;
	prevtype = currtype;
	// Store values for the next iteration of the loop		
	return [currchar, currtype, i];	
}	 	