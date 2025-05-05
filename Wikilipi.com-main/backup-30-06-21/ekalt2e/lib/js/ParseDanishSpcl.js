var concatstr = "";                                                         
var prevchar = " ";      
var currchar = ""; 
var prevtype = " "; 
var  currtype = " "; 
var ccVal = " ";

function ParseDanish(sentWordforIPA)
{					
	var origString = sentWordforIPA  ;
    var text_size = sentWordforIPA.length ;
	var origString = origString;
	
	origString = origString.replace(/\n/g, "~ ");
	
	origString = origString.replace(/-/g, String.fromCharCode(8209));		// change all regular hyphens to unbreakable
	origString = origString.replace(/:/g, String.fromCharCode(2307));		// change all regular colons to visarga
	origString = origString.replace(/\n/g, "~ ");							// change all newline characters to ~
	
	ParseDanishAfterReplace(origString); 
	
	concatstr = concatstr.replace(/-/g, String.fromCharCode(8209));
	concatstr = concatstr.replace(/~ /g, "\n");                   // Change special characters back to line breaks
	parseString = concatstr;

	if($("#IsConjunctShow").is(':checked'))      
	{				
		// Do nothing, show the conjunct consonants explicitly
	}
	else 
	{
		parseString = parseString.replace(/‑/g,"");        // Remove the explicit conjunct characters String.fromCharCode(8209)
	}
	//  Breaking part code over
	document.getElementById("ipa-out").value = parseString ;
} 	

function ParseDanishAfterReplace(origString)
{        
	var myString = origString;
	inplen = myString.length;
	var result = "";	
	for(i = 0; i < myString.length; i++) 
	{                                      
		EkaTTSParseDanish(i, myString);
	}
}
		
function EkaTTSParseDanish(i,myString) 
{
	currchar = myString[i] ;
	skipchar = "n";
					
	// ipa Danish vowels
	if (myString[i] == String.fromCharCode(230))
	{
		currchar = myString[i];
		ccVal ="@";			//a,æ    double symobols show the double ipa symobls and same unicode
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(776))
	{
		currchar = myString[i];
		ccVal ="ā";			//ɑ,ɑː
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(97))
	{
		currchar = myString[i];
		ccVal ="ā";			//ɑ,ɑː
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(594))
	{
		currchar = myString[i];
		ccVal ="ö";			//ʌ	,ɒ,ɒː
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(603))
	{
		currchar = myString[i];
		ccVal ="a";			//æ,æː
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(618))
	{
		currchar = myString[i];
		ccVal ="e";			//e,eː
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(101))
	{
		currchar = myString[i];
		ccVal ="e";			//ɛ,ɛː	
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(105))
	{
		currchar = myString[i];
		ccVal ="e";			    //i,iː
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(111))
	{
		currchar = myString[i];
		ccVal = "u";			//o,oː,ɔ,ɔː,œ,œː  798   some ipa symbols have same unicode like 111 and 798
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(248))
	{
		currchar = myString[i];
		ccVal = "b";			//ø,œ,øː,œː
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(630))
	{
		currchar = myString[i];
		ccVal = "o";			//ɶ,ɶː
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(117))
	{
		currchar = myString[i];
		ccVal = "u";			//u,uː
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(121))
	{
		currchar = myString[i];
		ccVal = "y";			//y,yː
		currtype="v";
	}
	
	//Danish unstressed only
	else if(myString[i] == String.fromCharCode(592))
	{
		currchar = myString[i];
		ccVal = "u";			//ɐ
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(601))
	{
		currchar = myString[i];
		ccVal = "a";			//ə																																												
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(618))
	{
		currchar = myString[i];
		ccVal = "?";			//ɪ																																										
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(650))
	{
		currchar = myString[i];
		ccVal = "v";			//ʊ																																										
		currtype="v";
	}
	
	// Ekalipi Consonants
	else if(myString[i]==String.fromCharCode(112))
	{
		currchar = myString[i];
		ccVal="b";             //b̥,pʰ
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(633))
	{
		currchar = myString[i];
		ccVal="l";				//ð
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(809))
	{
		currchar = myString[i];
		ccVal="n";				//ð̩
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(102))
	{
		currchar = myString[i];
		ccVal="f";				//f
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(107))
	{
		currchar = myString[i];
		ccVal="g";				//ɡ̊
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(104))
	{
		currchar = myString[i];
		ccVal="h";				//h
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(106))
	{
		currchar = myString[i];
		ccVal="y";				//j
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(107))
	{
		currchar = myString[i];
		ccVal="k";				//kʰ
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(108))
	{
		currchar = myString[i];
		ccVal="l";				//l
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(809))
	{
		currchar = myString[i];
		ccVal="l";				//l̩,m̩,n̩,ŋ̍
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(109))
	{
		currchar = myString[i];
		ccVal="l";				//m
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(809))
	{
		currchar = myString[i];
		ccVal="l";				//m̩,l̩,n̩,ŋ̍
		currtype="c";
	}
	else if(myString[i]=="n")
	{
		currchar = myString[i];
		ccVal="n";				//n
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(331))
	{
		currchar = myString[i];
		ccVal="n";				//ŋ
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(641))
	{
		currchar = myString[i];
		ccVal="r";				//ʁ
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(115))
	{
		currchar = myString[i];
		ccVal="s";				//s
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(597))
	{
		currchar = myString[i];
		ccVal="s-h";				//ɕ
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(678))
	{
		currchar = myString[i];
		ccVal="z-yā";				//tˢ
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(680))
	{
		currchar = myString[i];
		ccVal="z";				//tɕ
		currtype="c";
	}
	else if(myString[i]==String.fromCharCode(651))
	{
		currchar = myString[i];
		ccVal="v";				//ʋ
		currtype="c";
	}			
	
	// More keyboard special characters
	else if(myString[i] == String.fromCharCode(712))
	{
		currchar = myString[i];
		ccVal = "",                                          // ignore this character
 		currtype="s";
	}
	else if(myString[i] == String.fromCharCode(716))
	{
		currchar = myString[i];  
		ccVal=String.fromCharCode(716);                  // secondary stress
		skipchar="y";
		currtype="s";
	}
	else if(myString[i]==" ")
	{
		currchar = " ";
		ccVal=" ";
		currtype= "b";
	}
	else if(myString[i]==",")
	{
		currchar = ",";
		ccVal= ",";
		currtype= "s";
	}
	else if(myString[i]==".")
	{
		currchar = ".";
		ccVal=".";
		currtype= "f";
	}
	else if(myString[i]=="?")
	{
		currchar = "?";
		ccVal="?";
		currtype= "q";
	}
	
	// An unexpected character was entered
	else
	{
		console.log("<br/>You entered Character at Position " + i + " is " + myString[i]);
//		   				document.write(" It is neither an Ekalipi consonant,vowel or special allowed symbol. SKIPPED" );
		currchar = myString[i];
		ccVal=myString[i];
		currtype= "s";
//						skipchar = "y";
	}
//					return (currchar, currtype, skipchar);
 //       function EkaTTSConcatCreate(i, inplen, currtype, prevtype, ccVal) {		
				// bypass certain special charactersunrecognized character
	if (skipchar == "y") { }
	else if (currtype == "b") 
	{ 
		concatstr = concatstr.concat(ccVal);
	}  
	// a consonant preceded by a dash (hyphen)
	else if (currtype == "c" && prevtype == "c") 
	{
		concatstr= concatstr.concat("-").concat(ccVal); 
	} 
	else{
		concatstr = concatstr.concat(ccVal);
	}
	if  (i == inplen - 1)
	{
		if  (concatstr !== "") 
		{
//							document.write("</br>concat string is: " + concatstr + " " +"\n</br>"); 
		}
	}
					
// Store values for the next iteration of the loop	
	prevtype = currtype;  
//					return (concatstr, prevtype);
					 
}
	
		
                	  



