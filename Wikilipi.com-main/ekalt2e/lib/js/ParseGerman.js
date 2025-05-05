var concatstr = "";                                                         
var prevchar = "";      
var currchar = "";       
var prevtype = ""; 
var currtype = ""; 
var ccVal="";
var prValLen ="";

//  German pronunciation rules obtained from this website http://joycep.myweb.port.ac.uk/pronounce/index.html
// german alphabets rules  http://www.lingvozone.com/German german 
function ParseGerman(sentWordforIPA)
{					
	var origString = sentWordforIPA ;
    var text_size = sentWordforIPA.length ;
	var origString = origString;
	
	origString = origString.replace(/\n/g, "~ ");
	
	origString = origString.replace(/-/g, String.fromCharCode(8209));		// change all regular hyphens to unbreakable
	origString = origString.replace(/:/g, String.fromCharCode(2307));		// change all regular colons to visarga
	origString = origString.replace(/\n/g, "~ ");	

	ParseGermanAfterReplace(origString); 
	
	concatstr = concatstr.replace(/-/g, String.fromCharCode(8209));
	concatstr = concatstr.replace(/~ /g, "\n");                   // Change special characters back to line breaks
	parseString = concatstr;
	if($("#IsConjunctShow").is(':checked'))      
	{				
		// Do nothing, show the conjunct consonants explicitly
	}
	else 
	{
		parseString  = parseString .replace(/‑/g,"");        // Remove the explicit conjunct characters String.fromCharCode(8209)
	}
	//  Breaking part code over
	document.getElementById("ipa-out").value = parseString ;
 }		

function ParseGermanAfterReplace(origString)
{        
	var myString = origString;
	inplen = myString.length;
	var result = "";
	for(i = 0; i < myString.length; i++)
	{                                      
		var incrementVal = EkaTTSParseGerman(i, myString);
		i = incrementVal[2];
	}	      
}		

function EkaTTSParseGerman(i,myString) 
{
	currchar = myString[i] ;
	var fstcharLC = myString[i].toLowerCase();
	var seccharLC = "";
	var thirdcharLC = "";
	
	var myStringLen = myString.length;
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
	
		// German consonants whose pronunciation changes based on location in the word
	if( fstcharLC =="s" && seccharLC =="c" && thirdcharLC=="h")				// replace consonant dipthong "sch" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "s-h";
		}	
		else
		{	
			replchar = "S-h";
		}	
		concatstr = concatstr.concat(replchar);	
		currtype="c";
		i = i+ 2;
	}
	else if( fstcharLC =="c" && seccharLC =="h" && thirdcharLC=="s")				// replace consonant dipthong "chs" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "k-s";
		}	
		else
		{	
			replchar = "K-s";
		}	
		concatstr = concatstr.concat(replchar);	
		currtype="c";
		i = i+ 2;
	}
	// First handle dipthongs	
	else if( fstcharLC =="e" && seccharLC =="i")							// replace dipthong "ei" then move one character ahead		
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "Δ";
		}	
		else
		{	
			replchar = "Δ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 1;
	}
	else if( fstcharLC =="i" && seccharLC =="e")				// replace dipthong "ie" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "ee";
		}	
		else
		{	
			replchar = "EE";
		}	
		concatstr = concatstr.concat(replchar);	
		currtype="v";
		i = i+ 1;
	}
	else if(fstcharLC =="a" && seccharLC =="i")					// replace dipthong "ai" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "āe";
		}	
		else
		{	
			replchar = "Āe";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 1;
	}
	else if(fstcharLC =="a" && seccharLC =="u")						// replace dipthong "au" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "āu";
		}	
		else
		{	
			replchar = "Āu";
		}	
		concatstr = concatstr.concat(replchar);	
		currtype="v";
		i = i+ 1;
	}	
	else if(fstcharLC =="e" && seccharLC =="u")						// replace dipthong "eu" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "öy";
		}	
		else
		{	
			replchar = "Öy";
		}	
		concatstr = concatstr.concat(replchar);	
		currtype="v";
		i = i+ 1;
	}
	else if(fstcharLC =="ä" && seccharLC =="u")						// replace dipthong "äu" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "åu";
		}	
		else
		{	
			replchar = "Åu";
		}	
		concatstr = concatstr.concat(replchar);		
		currtype="v";
		i = i+ 1;
	}
	else if(fstcharLC =="q" && seccharLC =="u")						// replace dipthong "qu" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "k-v";
		}	
		else
		{	
			replchar = "K-v";
		}	
		concatstr = concatstr.concat(replchar);		
		currtype="c";
		i = i+ 1;
	}
	else if( fstcharLC =="c" && seccharLC =="h")				// replace consonant dipthong "ch" then move one character ahead
	{	
		if (prevcharLC == "a" || prevcharLC == "o" || prevcharLC == "u" || prevcharLC == "e")
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "k-h";
			}
			else
			{
				replchar = "K-h";
			}
		}	
		else
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "s-h";
			}
			else
			{
				replchar = "S-h";
			}
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 1;
	}
	else if( fstcharLC =="c" && seccharLC =="k")				// replace consonant dipthong "ck" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "k";
		}	
		else
		{	
			replchar = "k";
		}	
		concatstr = concatstr.concat(replchar);	
		currtype="c";
		i = i+ 1;
	}	
	else if( fstcharLC =="t" && seccharLC =="z")				// replace consonant dipthong "tz" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "t-ɉ";
		}	
		else
		{	
			replchar = "T-Ɉ";
		}	
		concatstr = concatstr.concat(replchar);	
		currtype="c";
		i = i+ 1;
	}
	else if( fstcharLC =="d" && seccharLC =="t")							// replace dipthong "dt" then move one character ahead		
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "t";
		}	
		else
		{	
			replchar = "T";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 1;
	}
	else if( fstcharLC =="s" && seccharLC =="p")							// replace dipthong "dt" then move one character ahead		
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "s-hp";
		}	
		else
		{	
			replchar = "S-hp";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 1;
	}
		// TBD How do I distinguish between the short ā in Bank versus long ā in Jahr?
	else if(fstcharLC =="ā" && seccharLC =="h")						// replace dipthong "ah" then move one character ahead
	{	
		if (myString[i] == fstcharLC)
		{
			replchar = "āā";
		}	
		else
		{	
			replchar = "Āa";
		}	
		concatstr = concatstr.concat(replchar);		
		currtype="v";
		i = i+ 1;
	}
	else if(fstcharLC =="e" && seccharLC =="r") 									// if the last character of a word is "er"
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "λr";
		}	
		else
		{	
			replchar = "Λr";
		}	
		if ((/[~. ?!,:| ]/.test(thirdcharLC)))
		{
			if(myString[i] === fstcharLC)
			{
				replchar = "λr";
			}	
			else
			{	
				replchar = "Λr";
			}
		}				
		concatstr = concatstr.concat(replchar);	
		currtype = "c";	
		i = i+ 1;			
	}
	else if (fstcharLC =="a")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "ā";
		}	
		else
		{	
			replchar = "Ā";
		}		
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if(fstcharLC =="e") 									// if the last character of a word is "e"
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "λ";
		}	
		else
		{	
			replchar = "Λ";
		}	
		if ((/[~. ?!,:| ]/.test(seccharLC)))
		{
			if(myString[i] === fstcharLC)
			{
				replchar = "a";
			}	
			else
			{	
				replchar = "A";
			}
		}				
		concatstr = concatstr.concat(replchar);	
		currtype = "v";			
	}
	else if(fstcharLC =="i") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "ee";
		}	
		else
		{	
			replchar = "Ee";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
	}
	else if(fstcharLC =="o") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "o";
		}	
		else
		{	
			replchar = "O";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
	}
	else if(fstcharLC =="ö")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "ua";
		}	
		else
		{	
			replchar = "Ua";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
	}
	else if(fstcharLC =="ü") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "ū";
		}	
		else
		{	
			replchar = "Ū";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
	}	
 	else if(fstcharLC =="ä") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "λā";
		}	
		else
		{	
			replchar = "Λā";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
	}	
	else if(fstcharLC =="u") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "u";
		}	
		else
		{	
			replchar = "U";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
	}
	else if(fstcharLC =="d") 									// if the last character of a word is "d", change it to "t"
	{
		replchar = myString[i] 
		if ((/[~. ?!,:| ]/.test(seccharLC)))
		{
			if(myString[i] === fstcharLC)
			{
				replchar = "d";
			}	
			else
			{	
				replchar = "D";
			}
		}				
		concatstr = concatstr.concat(replchar);	 
		currtype="c";
	}
	else if(fstcharLC =="s") 									// at the beginning of a word "s" is pronounced as "z"
	{
		replchar = myString[i] 
		if ((/[~. ?!,:| ]/.test(prevcharLC)))
		{
			if(myString[i] == fstcharLC)
			{
				replchar = "z";
			}	
			else
			{	
				replchar = "Z";
			}
		}	
		concatstr = concatstr.concat(replchar);	
		currtype="c";
	} 
	else if(fstcharLC =="b")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "b";
		}	
		else
		{	
			replchar = "B";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if( fstcharLC =="c")				// replace consonant dipthong "c" then move one character ahead
	{							//before a,o,u or anthor consonant ,prononced like k; e,i,y or ä pronounced like t-s.	
		if (prevcharLC == "e" || prevcharLC == "i" || prevcharLC == "y"||prevcharLC =="ä")
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "k";
			}
			else
			{
				replchar = "K";
			}
		}	
		else
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "t-s";
			}
			else
			{
				replchar = "t-s";
			}
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}
		/* else if(fstcharLC =="c") 
		{

			if (myString[i] == fstcharLC)
			{
				replchar = "k";
			}	
			else
			{	
				replchar = "K";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
		} */
	
	else if(fstcharLC =="f") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "f";
		}	
		else
		{	
			replchar = "F";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}
	else if(fstcharLC =="g")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "g";
		}	
		else
		{	
			replchar = "G";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if(fstcharLC =="h") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "h";
		}	
		else
		{	
			replchar = "H";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if(fstcharLC =="j") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "y";
		}	
		else
		{	
			replchar = "Y";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}
	else if(fstcharLC =="k") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "k-h";
		}	
		else
		{	
			replchar = "K-h";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if(fstcharLC =="l") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "l";
		}	
		else
		{	
			replchar = "L";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if(fstcharLC =="m") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "m";
		}	
		else
		{	
			replchar = "M";
		}
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}	
	else if(fstcharLC=="n") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "n";
		}	
		else
		{	
			replchar = "N";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if(fstcharLC =="p") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "p-h";
		}	
		else
		{	
			replchar = "P-h";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if(fstcharLC =="q")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "k";
		}	
		else
		{	
			replchar = "K";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if(fstcharLC =="r")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "r-h";
		}	
		else
		{	
			replchar = "R-h";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}
	else if(fstcharLC =="t") 
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "t";
		}	
		else
		{	
			replchar = "T";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}
	else if(fstcharLC =="v")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "f";
		}	
		else
		{	
			replchar = "F";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if(fstcharLC =="w")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "v";
		}	
		else
		{	
			replchar = "V";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}
	else if(fstcharLC =="x")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "k-s";
		}	
		else
		{	
			replchar = "K-s";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}
	else if(fstcharLC =="y")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "y";
		}	
		else
		{	
			replchar = "Y";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if(fstcharLC =="z")
	{
		if (myString[i] == fstcharLC)
		{
			replchar = "ɉ";
		}	
		else
		{	
			replchar = "Ɉ";
		}
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	else if(fstcharLC =="ß")
	{
		replchar = "ss";
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}	
	// More keyboard special characters
	else if(fstcharLC==" ")
	{
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}
	else if(fstcharLC == "~")
	{
		replchar = "~ ";			//new line character
		currtype="s";
		concatstr = concatstr.concat(replchar);
	}
	else if(fstcharLC==",")
	{
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}
	else if(fstcharLC==".")
	{
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}
	else if(myString[i]==":")
	{
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}
	else if(myString[i]=="“")
	{
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s"
	}
	else if(myString[i]=="”")
	{
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s"
	}
	else if(myString[i]==";")
	{	
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}
	else if(fstcharLC =="!")
	{ 
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}
	else if(myString[i]==",")
	{
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}
	else if(fstcharLC=="?")
	{
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}
	else if(fstcharLC=="-")
	{
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}
	else
	{
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}
					
	if (currchar == String.fromCharCode(8209)) 				//if current character is non-breaking hyphen(8209). 
	{
		stressIndic = "y";
		if ((/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(nextchar)) || (/[. ?!,:| ]/.test(currchar)))
		{ 
		// do nothing 
		} 
		else 
		{
			concatstr = concatstr.concat("ø");
			if (stressIndic == "y")      		// Syllable ended, any conjunct consonants found?
			{				
				// Show high stress character
				concatstr = concatstr.concat(String.fromCharCode(712));
				stressIndic = "n";
			}
		}
	}
//	prevchar = currchar;
	prValLen = prevchar.length;	
	return [currchar, currtype, i];		
	// Store values for the next iteration of the loop	 
}
	

    
