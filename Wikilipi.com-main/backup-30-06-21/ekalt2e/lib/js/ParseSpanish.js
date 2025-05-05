var prevchar = " ";      
var currchar = ""; 
var charBeingProcessed = "";	
var  currtype = " "; 
var ccVal = " ";
var prevtype = "";			

function ParseSpanish(sentWordforIPA)
{
	var lang = $("#langFor").children("option:selected").val();
	selectLangArray(lang);
	var sentWordforReplace = sentWordforIPA;
	Chale_Chalo(array_one, sentWordforReplace);
}	
							
function ParseSpanish(ipaParse)
{        
	var myString = ipaParse;
	
	var concatstr = "";
	
	//var myString = document.getElementById("js-ipa-submit").value;
	inplen = myString.length;
	//	document.write("Entered String is:" + myString);
	//	document.write("<br/>Entered String length is:" + inplen);
	var result = "";
	
	for(i = 0; i < myString.length; i++)
	        {    
				var incrementVal = EkaTTSParseSpanish(i, myString);
		        i = incrementVal[2];                                  
			
			}
	    }
function EkaTTSParseSpanish(i,myString)
         {
					currchar = myString[i] ;
					skipchar = "n";
					
			// ipa vowels
			
		if (myString[i] =="e"&& myString[i+1]=="ˈ"&& myString[i+2]=="z") 
		{
			currchar = "is";
			ccVal ="is";			//ʌ  	latin small letter turned v
			currtype="v";
			i=i+2;
		}
		else if(myString[i] == "s" && myString[i+1] == "h")
		{
		    currchar = myString[i];
			ccVal = "so";			
			currtype= "v";
			i =i+1;
		}
		
		else if(myString[i] == "c" && myString[i+1] == "h")
		{
		    currchar = myString[i];
			ccVal = "c-hλ";			
			currtype= "v";
			i =i+1;
		}
		else if(myString[i] == "l" && myString[i+1] == "l")
		{
		    currchar = myString[i];
			ccVal = "λyāy";			
			currtype="v";
			i =i+1;
		}
		else if(myString[i] == "r" && myString[i+1] == "r")
		{
		    currchar = myString[i];
			ccVal = "λr-rāy";			
			currtype="v";
			i =i+1;
		}
		else if(myString[i]=="a")
		{
			currchar = myString[i];
			ccVal="ā";				
			currtype="v";
		}
		else if(myString[i]=="á")
		{
			currchar = myString[i];
			ccVal="ā";				
			currtype="v";
		}
		else if(myString[i]=="b")
		{
			currchar = myString[i];
			ccVal="be";				
			currtype="c";
		}
		else if(myString[i]=="c")
		{
			currchar = myString[i];
			ccVal="k";				
			currtype="c";
		}
		else if(myString[i]=="d")
		{
			currchar = myString[i];
			ccVal="d";				
			currtype="c";
		}
		else if(myString[i]=="e")
		{
			currchar = myString[i];
			ccVal="λ";				
			currtype="v";
		}
		else if(myString[i]=="f")
		{
			currchar = myString[i];
			ccVal="āy-fāy";				
			currtype="c";
		}
		else if(myString[i]=="g")
		{
			currchar = myString[i];
			ccVal="hλy";				
			currtype="c";
		}
		else if(myString[i]=="h")
		{
			currchar = myString[i];
			ccVal="āy-chāy";				
			currtype="c";
		}
		else if(myString[i]=="i")
		{
			currchar = myString[i];
			ccVal="e";				
			currtype="v";
		}
		else if(myString[i]=="í")
		{
			currchar = myString[i];
			ccVal="e";				
			currtype="v";
		}
		else if(myString[i]=="j")
		{
			currchar = myString[i];
			ccVal="ho";				
			currtype="c";
		}
		else if(myString[i]=="k")
		{
			currchar = myString[i];
			ccVal="k";				
			currtype="c";
		}
		else if(myString[i]=="l")
		{
			currchar = myString[i];
			ccVal="l";				
			currtype="c";
		}
		else if(myString[i]=="m")
		{
			currchar = myString[i];
			ccVal="m";				
			currtype="c";
		}
		else if(myString[i]=="n")
		{
			currchar = myString[i];
			ccVal="n";				
			currtype="c";
		}
		else if(myString[i]=="ñ")
		{
			currchar = myString[i];
			ccVal="λnyāy";				
			currtype="c";
		}
		else if(myString[i]=="o")
		{
			currchar = myString[i];
			ccVal="o";				
			currtype="o";
		}
		else if(myString[i]=="p")
		{
			currchar = myString[i];
			ccVal="p";				
			currtype="c";
		}
		else if(myString[i]=="q")
		{
			currchar = myString[i];
			ccVal="ku";				
			currtype="c";
		}
		else if(myString[i]=="r")
		{
			currchar = myString[i];
			ccVal="rā";				
			currtype="c";
		}
		else if(myString[i]=="s")
		{
			currchar = myString[i];
			ccVal="s";				
			currtype="c";
		}
		else if(myString[i]=="t")
		{
			currchar = myString[i];
			ccVal="tλy";				
			currtype="c";
		}
		else if(myString[i]=="u")
		{
			currchar = myString[i];
			ccVal="ö";				
			currtype="v";
		}
		else if(myString[i]=="v")
		{
			currchar = myString[i];
			ccVal="v";				
			currtype="c";
		}
		else if(myString[i]=="w")
		{
			currchar = myString[i];
			ccVal="oobāy dob-lāy";				
			currtype="c";
		}
		else if(myString[i]=="x")
		{
			currchar = myString[i];
			ccVal="λkes-s";				
			currtype="c";
		}
		else if(myString[i]=="y")
		{
			currchar = myString[i];
			ccVal="y";			//"λλ-g-rλλ-āygh"	
			currtype="c";
		}
		else if(myString[i]=="z")
		{
			currchar = myString[i];
			ccVal="ŧ-hλyta";				
			currtype="c";
		}
		else if(myString[i] =="!"){
			currchar = myString[i];  
			ccVal=String.fromCharCode(451);			//ǃ
			currtype="c";
		}
		else if(myString[i] == "~")
		{
			currchar = myString[i];
			ccVal = "\n";			//new line character
			currtype="s";
			}
			else if(myString[i]==" "){
				currchar = " ";
				ccVal=" ";
				currtype= "b";
			}
			else if(myString[i]==","){
				//document.write("<br/>You entered String is " + myString[i]);
				//document.write("<br /> Not Recognised character" );
					 currchar = ",";
					 ccVal= ",";
					 currtype= "s";
				}
				else if(myString[i]=="."){
				//document.write("<br/>You entered String is " + myString[i]);
				//document.write("<br /> Not Recognised character" );
					currchar = ".";
					ccVal=".";
					currtype= "f";
				}
				else if(myString[i]==":"){
				//document.write("<br/>You entered String is " + myString[i]);
				//document.write("<br /> Not Recognised character" );
					 currchar = ":";
					 ccVal= ":";
					 currtype= "s";
				}
				else if(myString[i]==";"){
				//document.write("<br/>You entered String is " + myString[i]);
				//document.write("<br /> Not Recognised character" );
					 currchar = ";";
					 ccVal= ";";
					 currtype= "s";
				}
				else if(myString[i]=="'"){
				//document.write("<br/>You entered String is " + myString[i]);
				//document.write("<br /> Not Recognised character" );
					 currchar = "'";
					 ccVal= "'";							//	apostrophe
					 currtype= "s";
				}
				else if(myString[i]=="-"){
				//document.write("<br/>You entered String is " + myString[i]);
				//document.write("<br /> Not Recognised character" );
					 currchar = "-";
					 ccVal= "-";		                 // hyphen-minus		 
					 currtype= "s";
				}
				else if(myString[i]=="("){
				//document.write("<br/>You entered String is " + myString[i]);
				//document.write("<br /> Not Recognised character" );
					 currchar = "(";
					 ccVal= "(";							 
					 currtype= "s";
				}
				else if(myString[i]==")"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = ")";
						 ccVal= ")";							 
						 currtype= "s";
					}
					else if(myString[i]=="“"){
						//document.write("<br/>You entered String is " + myString[i]);
						//document.write("<br /> Not Recognised character" );
							 currchar = "“";
							 ccVal= "“";
							 currtype= "s";
						}
						else if(myString[i]=="”"){
						//document.write("<br/>You entered String is " + myString[i]);
						//document.write("<br /> Not Recognised character" );
							 currchar = "”";
							 ccVal= "”";
							 currtype= "s";
						}
						else if(myString[i]=="—"){
						//document.write("<br/>You entered String is " + myString[i]);
						//document.write("<br /> Not Recognised character" );
							 currchar = "—";
							 ccVal= "—";
							 currtype= "s";
						}
						else if(myString[i]=="Ɔ"){
						//document.write("<br/>You entered String is " + myString[i]);
						//document.write("<br /> Not Recognised character" );
							 currchar = "Ɔ";
							 ccVal= "ö";				// ö
							 currtype= "s";
						}
						else if(myString[i]=="@"){
						//document.write("<br/>You entered String is " + myString[i]);
						//document.write("<br /> Not Recognised character" );
							 currchar = "@";
							 ccVal= "@";				 
							 currtype= "s";
						}
			// An unexpected character was entered
					else{
//					     ipa-err = ("You entered Character at Position " + i + " is " + myString[i]);
// 					     this.updateMsgs(ipa-err);
			     	    // console.log("<br/>You entered Character at Position " + i + " is " + myString[i]);
						 document.getElementById("err-out").value += myString[i]+ " This Character is not Found \n" ;
//		   				document.write(" It is neither an Ekalipi consonant,vowel or special allowed symbol. SKIPPED" );
						currchar = myString[i];
						ccVal=myString[i];
						currtype= "s";
//						skipchar = "y";
					}

 //					return (currchar, currtype, skipchar);
 //     function EkaTTSConcatCreate(i, inplen, currtype, prevtype, ccVal) {		
				// bypass certain special charactersunrecognized character
				// bypass certain special charactersunrecognized character
					if (skipchar == "y") { 
					}
					else if (currtype == "b") { 
						concatstr = concatstr.concat(ccVal);
					}  
					// a consonant preceded by a dash (hyphen)
					//else if (currtype == "c" && prevtype == "c") {
						//concatstr= concatstr.concat("-").concat(ccVal); 
					//} 
					// a consonant preceded by a dash (hyphen)
					else if (currtype == "c" && prevtype == "c") {
							if($("#IsConjunctShow").is(':checked'))      {				// Show hyphens for conjunct consonants
								concatstr= concatstr.concat("-").concat(ccVal);
							}  else
							{	
								concatstr = concatstr.concat(ccVal);
							}
					} 
					else{
				    	concatstr = concatstr.concat(ccVal);
					}
					if  (i == inplen - 1)	{
					    if  (concatstr !== "") {
//							document.write("</br>concat string is: " + concatstr + " " +"\n</br>"); 
					    }
					}
					
// Store values for the next iteration of the loop	
					prevtype = currtype; 
				//	prValLen = prevchar.length;	
					return [currchar, currtype, i]; 

					 
		}
	
		
                	  



