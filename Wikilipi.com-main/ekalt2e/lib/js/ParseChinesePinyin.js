var concatstr = "";                                                         
var prevchar = "";      
var currchar = "";       
var prevtype = ""; 
var currtype = ""; 
var ccVal="";
var prValLen ="";
var stressIndic = "n";

//Chinese pinyin pronunciation rules obtained from this website https://chinese.yabla.com/chinese-pinyin-chart.php
function ParseChinesePinyin(sentWordforIPA)
{					
	var origStringPinyin = sentWordforIPA  ;
    var text_size = sentWordforIPA.length ;
	var origStringPinyin = origStringPinyin;
	
	origStringPinyin = origStringPinyin.replace(/\n/g, "~ ");
	
	origStringPinyin = origStringPinyin.replace(/-/g, String.fromCharCode(8209));		// change all regular hyphens to unbreakable
	origStringPinyin = origStringPinyin.replace(/:/g, String.fromCharCode(2307));		// change all regular colons to visarga
	origStringPinyin = origStringPinyin.replace(/\n/g, "~ ");							// change all newline characters to ~
	
	ParseChinesePinyinAfterReplace(origStringPinyin); 
	
	concatstr = concatstr.replace(/-/g, String.fromCharCode(8209));
	concatstr = concatstr.replace(/~ /g, "\n");                   // Change special characters back to line breaks
	parseStringPinyin = concatstr;

	if($("#IsConjunctShow").is(':checked'))      
	{				
		// Do nothing, show the conjunct consonants explicitly
	}
	else 
	{
		parseStringPinyin = parseStringPinyin.replace(/‑/g,"");        // Remove the explicit conjunct characters String.fromCharCode(8209)
	}
	//  Breaking part code over
	document.getElementById("ipa-out").value = parseStringPinyin  ;
 } // end of Pinying_to_Ekalipi function
 
function ParseChinesePinyinAfterReplace(origStringPinyin)
{             
	var myString = origStringPinyin;
	for(i = 0; i < myString.length; i++)
	{                                      
		var incrementVal = EkaTTSParseChinesePinyin(i, myString);
		i= incrementVal[2];
	}
}

function EkaTTSParseChinesePinyin(i,myString) 
{
	currchar = myString[i] ;
	
	// checking for (wāng) 
	if (myString[i] =="w")
	{
		if(myString[i+1] =="ā" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wöŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wöŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wöŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wöŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (wēng)
			
		else if(myString[i+1] =="ē" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="é" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ě" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="è" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (wān)
			
		else if(myString[i+1] =="ā" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wn1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wn2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wn3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wn4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (wāi)
			
		else if(myString[i+1] =="ā" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "y1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "y2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "y3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "y4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (wēn)
			
		else if(myString[i+1] =="ē" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "vn1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="é" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "vn2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ě" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "vn3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="è" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "vn4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (wēi)
		
		else if(myString[i+1] =="ē" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wy1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="é" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wy2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ě" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wy3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="è" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wy4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (wā)
			
		else if(myString[i+1] =="ā")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wā1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
			else if(myString[i+1] =="á")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "wā2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ǎ")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "wā3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="à")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "wā4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			/* ----------------------------------------------------------------------------------------------------------- */
			// checking for (wō)
			
			else if(myString[i+1] =="o")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "wo0";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ō")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "wo1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ó")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "wo2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ǒ")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "wo3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ò")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "wo4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			/* ----------------------------------------------------------------------------------------------------------- */
			// checking for (wū)
				
			else if(myString[i+1] =="ū")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "uu1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ú")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "uu2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ǔ")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "uu3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ù")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "uu4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
	}// finish the "W" condition
	
	/* ---------------------------------------------------------------------------------------------------------------------- */
	// Start the "u" condition
	// checking for (uāng)
		
	else if (myString[i] =="u")
	{
		if(myString[i+1] =="ā" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (uān)
			
		else if(myString[i+1] =="ā" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wn1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wn2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wn3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wn4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (uāi)
			
		else if(myString[i+1] =="ā" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "y1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "y2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "y3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="i")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "y4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (uā)
		
		else if(myString[i+1] =="a")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wā0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ā")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wā1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="á")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wā2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ǎ")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wā3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="à")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wā4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (uō)
			
		else if(myString[i+1] =="ō")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wo1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ó")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wo2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ǒ")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wo3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ò")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wo4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (uī)
			
		else if(myString[i+1] =="ī")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wy1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="í")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wy2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ǐ")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wy3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ì")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wy4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
	}//finish the "u" Condition
	
	
	/* ---------------------------------------------------------------------------------------------------------------------- */

	// start the "i" condition
	// checking for (iōng)
		
	else if (myString[i] =="i")
	{
		if(myString[i+1] =="o" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ō" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ó" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ǒ" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ò" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (iāng)
			
		else if(myString[i+1] =="a" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eaŋ‑g0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ā" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eaŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eaŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eaŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eaŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
	}// finish the "i" condition
	
	/* ---------------------------------------------------------------------------------------------------------------------- */
	// checking for (iān)
		
	else if (myString[i] =="i")
	{
		if(myString[i+1] =="a" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "λn0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		if(myString[i+1] =="ā" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "λn1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "λn2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "λn3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "λn4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (iāo)
		
		else if(myString[i+1] =="a" && myString[i+2] =="o")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yå0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ā" && myString[i+2] =="o")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yå1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="o")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yå2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="o")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yå3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="o")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yå4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
	}
	/* ---------------------------------------------------------------------------------------------------------------------- */
	// checking for (āng)
		
		else if(myString[i] =="a" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "aŋ‑g0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ā" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "aŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="á" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "aŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ǎ" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "aŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="à" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "aŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
	/* ---------------------------------------------------------------------------------------------------------------------- */
	// checking for (ōng)
		
		else if(myString[i] =="o" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ō" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ó" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ǒ" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ò" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "öŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
	/* ---------------------------------------------------------------------------------------------------------------------- */
	// checking for (ēng)
		
		else if(myString[i] =="e" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "λŋ‑g0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ē" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "λŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="é" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "λŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ě" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "λŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="è" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "λŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		/* ---------------------------------------------------------------------------------------------------------------------- */
		// checking for (īng)
		
		else if(myString[i] =="i" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eeŋ‑g0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ī" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eeŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="í" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eeŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ǐ" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eeŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ì" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eeŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}	
		/* ---------------------------------------------------------------------------------------------------------------------- */
		// checking for (yuē)
			
		else if(myString[i] =="y" && myString[i+1] =="u" && myString[i+2] =="ē")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ū1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="y" && myString[i+1] =="u" && myString[i+2] =="é")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ū2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="y" && myString[i+1] =="u" && myString[i+2] =="ě")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ū3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="y" && myString[i+1] =="u" && myString[i+2] =="è")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ū4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}	
		
	/* ---------------------------------------------------------------------------------------------------------------------- */
	//start condition "ü"
	// checking for (üān)
		
	else if (myString[i] =="ü")
	{
		if(myString[i+1] =="ā" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wān1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wān2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wān3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wān4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (üē)
			
		else if(myString[i+1] =="ē")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ūy1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="é")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ūy2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ě")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ūy3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="è")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ūy4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
	}//finish the "ü" condition
	
	/* ---------------------------------------------------------------------------------------------------------------------- */
	// checking for (ēr)
		
		else if(myString[i] =="e" && myString[i+1] =="r" )
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ar0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="ē" && myString[i+1] =="r" )
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ar1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="é" && myString[i+1] =="r")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ar2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="ě" && myString[i+1] =="r")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ar3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="è" && myString[i+1] =="r")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ar4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		
	/* ---------------------------------------------------------------------------------------------------------------------- */
	// checking for (īn)
		
		else if(myString[i] =="ī" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "en0";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="ī" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "en1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="í" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "en2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="ǐ" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "en3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="ì" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "en4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		/* ------------------------------------------------------------------------------------------------------------------*/
		// checking for (ūn)
			
		else if(myString[i] =="ū" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "vn1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="ú" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "vn2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="ǔ" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "vn3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i] =="ù" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "vn4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		/* ---------------------------------------------------------------------------------------------------------------------- */
		else if(myString[i] =="ā")
		{
			if(myString[i+1] =="i")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "Δ1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="o")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "å1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="n")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ān1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ā1";
				concatstr = concatstr.concat(replchar);
				currtype="v";	
			}
		}
		else if(myString[i] =="á")
		{
			if(myString[i+1] =="i")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "Δ2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="o")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "å2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="n")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ān2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ā2";
				concatstr = concatstr.concat(replchar);
				currtype="v";	
			}
		}
		else if(myString[i] =="ǎ")
		{
			if(myString[i+1] =="i")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "Δ3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="o")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "å3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="n")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ān3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ā3";
				concatstr = concatstr.concat(replchar);
				currtype="v";	
			}
		}
		else if(myString[i] =="à")
		{
			if(myString[i+1] =="i")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "Δ4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="o")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "å4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="n")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ān4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ā4";
				concatstr = concatstr.concat(replchar);
				currtype="v";	
			}
		}
		/* ---------------------------------------------------------------------------------------------------------------------- */
		else if(myString[i] =="ē")
		{
			if(myString[i+1] =="i")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "λ1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="n")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "an1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "a1";
				concatstr = concatstr.concat(replchar);
				currtype="v";	
			}
		}
		else if(myString[i] =="é")
		{
			if(myString[i+1] =="i")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "λ2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="n")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "an2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "a2";
				concatstr = concatstr.concat(replchar);
				currtype="v";	
			}
		}
		else if(myString[i] =="ě")
		{
			if(myString[i+1] =="i")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "λ3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="n")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "an3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "a3";
				concatstr = concatstr.concat(replchar);
				currtype="v";	
			}
		}
		else if(myString[i] =="è")
		{
			if(myString[i+1] =="i")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "λ4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="n")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "an4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "a4";
				concatstr = concatstr.concat(replchar);
				currtype="v";	
			}
		}
/* -------------------------------------------------------------------------------------------------------------------------- */
	// checking for (y) condition
		
	else if(myString[i] =="y")
	{
		if(myString[i+1] =="u" && myString[i+2] =="ā" && myString[i+3] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wān1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="u" && myString[i+2] =="á" && myString[i+3] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wān2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="u" && myString[i+2] =="ǎ" && myString[i+3] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wān3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="u" && myString[i+2] =="à" && myString[i+3] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "wān4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ō" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yöŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ó" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yöŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ǒ" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yöŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ò" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yöŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		
		else if(myString[i] =="ī" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eeŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="í" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eeŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ǐ" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eeŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ì" && myString[i+1] =="n" && myString[i+2] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "eeŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}	
		else if(myString[i+1] =="ā" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yeaŋ‑g1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yeaŋ‑g2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yeaŋ‑g3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="n" && myString[i+3] =="g")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yeaŋ‑g4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 3;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (yūn)
			
		else if(myString[i+1] =="ū" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ween1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ú" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ween2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǔ" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ween3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ù" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ween4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ā" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yλn1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yλn2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yλn3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yλn4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ī" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yen1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="í" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yen2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ǐ" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yen3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i] =="ì" && myString[i+1] =="n")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yen4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ō" && myString[i+2] =="u")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yλu1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ó" && myString[i+2] =="u")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yλu2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǒ" && myString[i+2] =="u")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yλu3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ò" && myString[i+2] =="u")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yλu4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ā" && myString[i+2] =="o")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yå1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="á" && myString[i+2] =="o")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yå2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="ǎ" && myString[i+2] =="o")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yå3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		else if(myString[i+1] =="à" && myString[i+2] =="o")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "yå4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 2;
		}
		/* ----------------------------------------------------------------------------------------------------------- */
		// checking for (yū)
			
		else if(myString[i+1] =="ū")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "am1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ú")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "am2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ǔ")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "am3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ù")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "am4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		
		else if(myString[i+1] =="ā")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "yā1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="á")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "yā2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ǎ")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "yā3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="à")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "yā4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
		else if(myString[i+1] =="ē")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ay1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="é")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ay2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ě")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ay3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="è")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ay4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
		else if(myString[i+1] =="ī")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ee1";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="í")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ee2";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ǐ")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ee3";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
		else if(myString[i+1] =="ì")
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			replchar = "ee4";
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i + 1;
		}
	}
//----------------------------------------------------------------------------------------------------------------------------
	// Checking for (iā)
		
		else if(myString[i] =="i")
		{
			if(myString[i+1] =="a")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "yā0";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ā")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "yā1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="á")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "yā2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ǎ")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "yā3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="à")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "yā4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="e")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ay0";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ē")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ay1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="é")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ay2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ě")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ay3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="è")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "ay4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="u")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "λu0";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ū")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "λu1";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ú")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "λu2";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ǔ")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "λu3";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
			else if(myString[i+1] =="ù")
			{
				concatstr = concatstr.substring(0, concatstr.length-prValLen);
				replchar = "λu4";
				concatstr = concatstr.concat(replchar);
				currtype="v";
				i = i + 1;
			}
		}
		
		/* ---------------------------------------------------------------------------------------------------------------------- */
	else if(myString[i] =="ō" && myString[i+1] =="u")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "å1";
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 1;
	}
	else if(myString[i] =="ó" && myString[i+1] =="u")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "å2";
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 1;
	}
	else if(myString[i] =="ǒ" && myString[i+1] =="u")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "å3";
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 1;
	}
	else if(myString[i] =="ò" && myString[i+1] =="u")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "å4";
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 1;
	}

	/* -------------------------------------------------------------------------------------------------------------------------- */
	else if(currchar == "ī")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ā1";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if(currchar == "í")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ā2";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if(currchar == "ǐ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ā3";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if(currchar == "ì")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ā4";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	/* -------------------------------------------------------------------------------------------------------------------------- */
	else if(currchar == "ū")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "uu1";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if(currchar == "ú")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "uu2";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ǔ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "uu3";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ù")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "uu4";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	/* -------------------------------------------------------------------------------------------------------------------------- */
	else if (currchar == "ǖ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ū1";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ǘ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ū2";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ǚ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ū3";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ǜ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ū4";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	/* -------------------------------------------------------------------------------------------------------------------- */
	
	else if(myString[i] =="a" && myString[i+1] =="i")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "Δ0";
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 1;
	}
	else if(myString[i] =="a" && myString[i+1] =="n")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ān0";
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 1;
	}
	else if(myString[i] =="a" && myString[i+1] =="o")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "å0";
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 1;
	}
	else if(myString[i] =="e" && myString[i+1] =="i")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "λ0";
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 1;
	}
	else if(myString[i] =="e" && myString[i+1] =="n")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ān0";
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 1;
	}
	else if(myString[i] =="o" && myString[i+1] =="u")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "å0";
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 1;
	}
	//------------------------------------------------------------------------
	
	else if(currchar =="u")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "uu0";
		concatstr = concatstr.concat(replchar);
		currtype="v";
	}
	else if (currchar == "o")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ö0";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ō")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ö1";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ó")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ö2";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ǒ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ö3";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ò")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ö4";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	//---------------------------------------------------------------------------------------------------------------
	else if (currchar == "e")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "a0";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "i")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ee0";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}

	else if (currchar == "ǘ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ū2";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ǚ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ū3";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "ǜ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ū4";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "a")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ā0";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	
	/* -------------------------------------------------------------------------------------------------------------------- */
	else if (myString[i] =="z" && myString[i+1] =="h")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "č‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i= i + 1;
	}
	else if (myString[i] =="Z" && myString[i+1] =="h")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "Č‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
		i= i + 1;
	}
	else if (myString[i] =="c" && myString[i+1] =="h")
		
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "c‑hh";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
		i= i + 1;
	}
	else if (myString[i] =="C" && myString[i+1] =="h")	
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "C‑hh";
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i= i + 1;
	}
	else if (myString[i] =="s" && myString[i+1] =="h")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "s‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i= i + 1;
	}
	else if (myString[i] =="S" && myString[i+1] =="h")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "S‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i= i + 1;
	}
	else if (currchar == "b")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "b";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "B")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "B";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "p")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "p‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "P")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "P-h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "m")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "m";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "M")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "M";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "f")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "f";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "F")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "F";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "d")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ŧ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "D")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "Ŧ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "t")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ŧ‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "T")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "Ŧ‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "n")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "n";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "N")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "N";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "l")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "l";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "L")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "L";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "g")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ŧ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "G")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "Ŧ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "k")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "k‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "K")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "K‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "h")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "H")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "H";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "z")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "č";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "Z")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "Č";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "s")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "s";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "S")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "S";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "c")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "c‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "C")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "C‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}

	else if (currchar == "r")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "r";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "R")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "R";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "j")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "č";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "J")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "Č";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "q")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "č‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "Q")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "Č‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "x")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "s‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "X")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "S‑h";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	
	//---------------------------------------------------------------------------------------------------------------------------------
	// More keyboard special characters
	else if(myString[i] == "~")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "~ ";			//new line character
		currtype="s";
		concatstr = concatstr.concat(replchar);
	}
	
	else if(myString[i]==" ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = myString[i];
		currtype="s";
		concatstr = concatstr.concat(replchar);
	}
	else if(myString[i]==",")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = myString[i];
		currtype="s";
		concatstr = concatstr.concat(replchar);
	}
	else if(myString[i]==".")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = myString[i];
		currtype="s";
		concatstr = concatstr.concat(replchar);
	}
	else if(myString[i]=="?")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}

			/* else{
//				document.write("<br/>You entered Character at Position " + i + " is " + myString[i]);
//				document.write("<br /> It is neither an Ekalipi consonant,vowel or special allowed symbol. SKIPPED" );
				currchar = "u";
				console.log ("Letter not found. Add to parser  " + myString[i]);
			} */
	else
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = currchar;
		concatstr = concatstr.concat(replchar);
		currtype="c";	
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
//-----------------------------------------------------------------------------------------------------------------------------
	

	prValLen = prevchar.length;	
	return [currchar, currtype, i];		
	// Store values for the next iteration of the loop	 
	//prevchar = currchar;
}	

    
	