var prevchar = " ";      
var currchar = ""; 
var  currtype = " "; 
var ccVal = " ";
					
function ParseEKA2EnglishUS(ipaParse)
{        
	var myString = ipaParse;
	var concatstr = "";
	var prevtype = "";
			
	//var myString = document.getElementById("js-ipa-submit").value;
	inplen = myString.length;
	//	document.write("Entered String is:" + myString);
	//	document.write("<br/>Entered String length is:" + inplen);
	var result = "";
					
	for(i = 0; i < myString.length; i++) 
	{                                      
		EkaTTSParseEKA2EnglishUS(i, myString);
	}
}

function EkaTTSParseEKA2EnglishUS(i,myString) 
{
	currchar = myString[i] ;
	skipchar = "n";
					
	// ipa vowels
			
	if (myString[i] == "a")
	{
		currchar = myString[i];
		ccVal = a;			//ʌ  	latin small letter turned v
		currtype="v";
	}
	else if(myString[i] == "@")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(230);			//æ      latin small letter ae
		currtype="v";
	}
	else if(myString[i] == "@")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(198);			//Æ      latin capital letter Æ
		currtype="v";
	}
	else if(myString[i] == "u")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(616);			//ɨ  In Portugal and Africa only. Not in Brazil.
		currtype="v";
	}
	else if(myString[i] == "ū")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(649);			//ʉ used in Russian and in Swedish
		currtype="v";
	}
	else if(myString[i] == "uø")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(623);			//ɯ found in Vietnamese and Japanese
		currtype="v";
	}
	else if(myString[i] == "ua")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(248);			//Dutch and German
		currtype="v";
	}
	else if(myString[i] == "ya")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(339);			//Dutch, French and German
		currtype="v";
	}
	else if(myString[i] == "a")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(601);			    //English schwa
		currtype="v";
	}
	else if(myString[i] == String.fromCharCode(8491))
	{
		currchar = myString[i];
		ccVal = String.fromCharCode(8491);			//capital å
		currtype="v";
	}
	else if(myString[i] == "ā")
	{
		currchar = myString[i];
		ccVal ="a";			//a
		currtype="v";
	}
	else if(myString[i] == "e")
	{
		currchar = myString[i];
		ccVal ="i";			//i    done
		currtype="v";
	}
	else if(myString[i] == "λ")
	{
		currchar = myString[i];
		ccVal = "e";			//e
		currtype="v";
	}
	else if(myString[i] == "o")
	{
		currchar = myString[i];
		ccVal = "o";			//o
		currtype="v";
	}
	else if(myString[i] == "u")
	{
		currchar = myString[i];
		ccVal = "u";			//u    	latin small letter u
		currtype="v";
	}
	else if(myString[i] == "y")
	{
		currchar = myString[i];
		ccVal = "y";			//y
		currtype="v";
	}
	else if(myString[i] == "e")
	{
		currchar = myString[i];
		ccVal ="i";			//ɪ̈      	latin letter small capital i
		currtype="v";
	}
	else if(myString[i] == "u")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(650);			//ʊ̈
		currtype="v";
	}
	else if(myString[i] == "λ")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(600);			//ɘ
		currtype="v";
	}
	else if(myString[i] == 'λ')
	{
		currchar = myString[i];
		ccVal = String.fromCharCode(629);			//ɵ
		currtype="v";
	} 
	else if(myString[i] == "a")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(612);			//ɤ
		currtype="v";
	} 
	else if(myString[i] == "a")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(601);			//ə        	latin small letter schwa
		currtype="v";
	} 
	else if(myString[i] == "λ")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(603);			//ɛ     	latin small letter open e
		currtype="v";
	} 
	else if(myString[i] == "a")
	{
		currchar = myString[i];
		ccVal =String.fromCharCode(604);			//ɜ      	latin small letter reversed open e
		currtype="v";
	}
					else if(myString[i] == String.fromCharCode(606)){
					currchar = myString[i];
					ccVal ="a";			//ɞ
					currtype="v";
					}
					else if(myString[i] == String.fromCharCode(596)){
					currchar = myString[i];
					ccVal ="ö";			//ɔ      	latin small letter open o
					currtype="v";
					}
					else if(myString[i] == String.fromCharCode(592)){
					currchar = myString[i];
					ccVal ="ā";			//ɐ
					currtype="v";
					}
					else if(myString[i] == String.fromCharCode(630)){
					currchar = myString[i];
					ccVal ="a";			//ɶ
					currtype="v";
					}
					else if(myString[i] == String.fromCharCode(593)){
					currchar = myString[i];
					ccVal ="ā";			//ɑ    	latin small letter alpha
					currtype="v";
					}
					else if(myString[i] == String.fromCharCode(256)){
					currchar = myString[i];
					ccVal ="Ā";			//capital ā
					currtype="v";
					}
					else if(myString[i] == String.fromCharCode(594)){
					currchar = myString[i];
					ccVal ="ö";			//ɒ
					currtype="v";
					}
			// Ekalipi Consonants
				 
					else if(myString[i]==String.fromCharCode(679)){
						currchar = myString[i];
						ccVal="c";             //ʧ		latin small letter tesh digraph    
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(625)){
						currchar = myString[i];
						ccVal="m";				//ɱ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(627)){
						currchar = myString[i];
						ccVal="n";				//ɳ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(626)){
						currchar = myString[i];
						ccVal="n-n";				//ɲ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(331)){
						currchar = myString[i];
						ccVal="ŋ";				//ŋ       latin small letter  n
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(648)){
						currchar = myString[i];
						ccVal="t";				//ʈ	
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(598)){
						currchar = myString[i];
						ccVal="d";				//ɖ	
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(607)){
						currchar = myString[i];
						ccVal="ɉ";				//ɟ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(673)){
						currchar = myString[i];
						ccVal="f-f";				//ʡ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(660)){
						currchar = myString[i];
						ccVal="ā";				//ʔ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(632)){
						currchar = myString[i];
						ccVal="p-h";				//ɸ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(946)){
						currchar = myString[i];
						ccVal="v";				//β
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(952)){
						currchar = myString[i];
						ccVal="ŧ-h";				//θ    	greek small letter theta
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(643)){
						currchar = myString[i];
						ccVal="s-h";				//ʃ     	latin small letter esh
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(642)){
						currchar = myString[i];
						ccVal="s-hā";				//ʂ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(656)){
						currchar = myString[i];
						ccVal="ɉ";				//ʐ from Vietnamese
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(736)){
						currchar = myString[i];
						ccVal="r-r?";				//ɣ ɉn spanɉsh. Other languages have different sounds
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(651)){
						currchar = myString[i];
						ccVal="v";				//ʋ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(633)){
						currchar = myString[i];
						ccVal="r";				//ɹ     
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(635)){
						currchar = myString[i];
						ccVal="r";				//ɻ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(624)){
						currchar = myString[i];	
						ccVal="v";				//ɰ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(674)){
						currchar = myString[i];
						ccVal="ā";				//ʢ from Latin and Arabic. Needs more analysis
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(11377)){
						currchar = myString[i];
						ccVal="w";				//ⱱ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(638)){
						currchar = myString[i];
						ccVal="ār";				//ɾ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(637)){
						currchar = myString[i];
						ccVal="d";				//ɽ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(620)){
						currchar = myString[i];
						ccVal="s-h";				//ɬ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(622)){
						currchar = myString[i];
						ccVal="z";				//ɮ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(654)){
						currchar = myString[i];
						ccVal="y";				//ʎ
						currtype="c";
					}
					else if(myString[i]==String.fromCharCode(634)){
						currchar = myString[i];
						ccVal="l";				//ɺ      latin small letter esh
						currtype="c";
					}
					// Decimal code for capital  phi.
					else if(myString[i]==String.fromCharCode(658)){
						currchar = myString[i];  
						ccVal="z-h";					//ʒ
						currtype="c";
					}	
					else if(myString[i] == String.fromCharCode(676)){
						currchar = myString[i];  
						ccVal="j";					//ʤ       	latin small letter dezh digraph
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(602)){
						currchar = myString[i];  
						ccVal="ar";					//ɚ          latin small letter schwa with hook
						currtype="v";  
					}
					else if(myString[i] == String.fromCharCode(240)){
						currchar = myString[i];  
						ccVal="đ";					//ð         	latin small letter eth (it should be đ-h)
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(393)){
						currchar = myString[i];  
						ccVal="Ɖ";					//Ɖ         	capital đ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(596)){
						currchar = myString[i];  
						ccVal="o";					//o
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(675)){
						currchar = myString[i];  
						ccVal="j";                  // ʣ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(112)){
						currchar = myString[i];  
						ccVal="p";			//p̪        
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(98)){
						currchar = myString[i];  
						ccVal="b";			//b̪
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(359)){
						currchar = myString[i];  
						ccVal="ŧ";								//t̪ 
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(358)){
						currchar = myString[i];  
						ccVal="Ŧ";								// capital ŧ̪ 
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(595)){
						currchar = myString[i];  
						ccVal="bā";								//ɓ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(599)){
						currchar = myString[i];  
						ccVal="đ";								//ɗ̪
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(110)){
						currchar = myString[i];  
						ccVal="n";								//n̪
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(613)){
						currchar = myString[i];  
						ccVal="w";								//ɥ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(448)){
						currchar = myString[i];  
						ccVal="ā";								//ǀ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(451)){
						currchar = myString[i];  
						ccVal="!";			//ǃ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(450)){
						currchar = myString[i];  
						ccVal="ā";			//ǂ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(449)){
						currchar = myString[i];  
						ccVal=String.fromCharCode(449);			//ǁ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(107)){
						currchar = myString[i];  
						ccVal=String.fromCharCode(107);			//k͡p
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(609)){
						currchar = myString[i];  
						ccVal=String.fromCharCode(609);			//ɡ͡b
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(644)){
						currchar = myString[i];  
						ccVal="j";								//ʄ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(608)){
						currchar = myString[i];  
						ccVal="g";								//ɠ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(667)){
						currchar = myString[i];  
						ccVal="g";								//ʛ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(109)){
						currchar = myString[i];  
						ccVal="m";								//ŋ͡m
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(865)){
						currchar = myString[i];  
						ccVal="m";								//ŋ͡m
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(597)){
						currchar = myString[i];  
						ccVal="s-h";								//ɕ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(657)){
						currchar = myString[i];  
						ccVal="z-h";				//ʑ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(611)){
						currchar = myString[i];  
						ccVal="g";									//ɣ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(641)){
						currchar = myString[i];  
						ccVal="r";				//ʁ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(295)){
						currchar = myString[i];  
						ccVal="h";									//ħ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(661)){
						currchar = myString[i];  
						ccVal="r";				//ʕ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(614)){
						currchar = myString[i];  
						ccVal="h";									//ɦ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(653)){
						currchar = myString[i];  
						ccVal="w";				//ʍ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(653)){
						currchar = myString[i];  
						ccVal=String.fromCharCode(653);				//ʍ
						currtype="c";
					}
					else if(myString[i] == String.fromCharCode(720)){
						currchar = myString[i];  
						ccVal="ː";									//ː
						currtype="c";
					}
						
					
					else if(myString[i] == "p"){
					currchar = myString[i];
					ccVal = "p";			//p         latin small letter p
					currtype="c";
					}
					else if(myString[i] == "s"){
					currchar = myString[i];
					ccVal = "s";			//s         latin small letter s  
					currtype="c";
					}
					else if(myString[i] == String.fromCharCode(106)){
					currchar = myString[i];
					ccVal = "y";					 //j      latin small letter j
					currtype="c";
					}
					else if(myString[i] == "w"){
					currchar = myString[i];
					ccVal = "w";			//w       latin small letter w
					currtype="c";
					}
					else if(myString[i] == "j"){
					currchar = myString[i];
					ccVal = "j";			//j         
					currtype="c";
					}
					else if(myString[i] == "r"){
					currchar = myString[i];
					ccVal = "r";			//IPA letter r
					currtype="c";
					}
					else if(myString[i] == "t"){
					currchar = myString[i];
					ccVal = "t";			//t     latin small letter t
					currtype="c";
					}
					else if(myString[i] == "d"){
					currchar = myString[i];
					ccVal = "d";			//d        	latin small letter d
					currtype="c";
					}
					else if(myString[i] == "f"){
					currchar = myString[i];
					ccVal = "f";			//f			latin small letter f
					currtype="c";
					}
					else if(myString[i] == "g"){
					currchar = myString[i];  
					ccVal = "g";			//g     latin small letter g
					currtype="c";
					}
					else if(myString[i] == "h"){
					currchar = myString[i];
					ccVal = "h";			//h    latin small letter h
					currtype="c";
					}
					else if(myString[i] == "k"){
					currchar = myString[i];
					ccVal = "k";			//k      latin small letter k (it should be k-h)
					currtype="c";
					}
					else if(myString[i] == "l"){
					currchar = myString[i];
					ccVal = "l";			//l     latin small letter l
					currtype="c";
					}
					else if(myString[i] == "z"){
					currchar = myString[i];
					ccVal = "z";			//z        latin small letter z
					currtype="c";
					}
					else if(myString[i] == "x"){
					currchar = myString[i];
					ccVal = "k-h";			//x
					currtype="c";
					}
					else if(myString[i] == "v"){
					currchar = myString[i];
					ccVal = "v";			//v      latin small letter v
					currtype="c";
					}
					else if(myString[i] == "b"){
					currchar = myString[i];
					ccVal = "b";			//b      latin small letter b
					currtype="c";
					}
					else if(myString[i] == "n"){
					currchar = myString[i];
					ccVal = "n";			//n       latin small letter n
					currtype="c";
					}
					else if(myString[i] == "m"){
					currchar = myString[i];
					ccVal = "m";			//m        latin small letter m   
					currtype="c";
					}
					//  Special newline character inserted in the code in tti-ui-min          					
					else if(myString[i] == "~"){
					currchar = myString[i];
					ccVal = "\n";			//new line character
					currtype="s";
					}
					
			// More keyboard special characters
					else if(myString[i] == String.fromCharCode(712)){
							currchar = myString[i];
							if($("#IsStressShow").is(':checked'))      {				// Show stress chars
								ccVal = String.fromCharCode(712);					 // prime stress
								ccVal = ccVal;	
							} else {
								ccVal = "";                                          // ignore this character
								}
							currtype="s";
					}			
					else if(myString[i] == String.fromCharCode(716)){
							currchar = myString[i]; 
							if($("#IsStressShow").is(':checked'))      {				// Show stress chars
								ccVal=String.fromCharCode(716);                  // secondary stress
								ccVal = ccVal;	
							} else {
								ccVal = "";                                         // ignore this character
								}
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
					else if(myString[i]=="Ɑ"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Ɑ";
						 ccVal= "Ā";							 
						 currtype= "s";
					}
					else if(myString[i]=="Ʃ"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Ʃ";
						 ccVal= "S-h";							 
						 currtype= "s";
					}
					else if(myString[i]=="Θ"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Θ";
						 ccVal= "ŧ-h";							 
						 currtype= "s";
					}
					else if(myString[i]==")"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = ")";
						 ccVal= ")";							 
						 currtype= "s";
					}
					else if(myString[i]=="Ʌ"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Ʌ";
						 ccVal= "Ʌ";
						 currtype= "s";
					}
					else if(myString[i]=="Ð"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Ð";
						 ccVal= "Ð";
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
					else if(myString[i]=="Å"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Å";
						 ccVal= "Å";				 
						 currtype= "s";
					}
					else if(myString[i]=="Δ"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Δ";
						 ccVal= "Δ";				 
						 currtype= "s";
					}
					else if(myString[i]=="Ö"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Ö";
						 ccVal= "Ö";				// ö
						 currtype= "s";
					}
					else if(myString[i]=="Ū"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Ū";
						 ccVal= "Ū";				 
						 currtype= "s";
					}
					else if(myString[i]=="Ø"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Ø";
						 ccVal= "Ø";				 
						 currtype= "s";
					}
					else if(myString[i]=="Ɉ"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Ɉ";
						 ccVal= "Ɉ";				 
						 currtype= "s";
					}
					else if(myString[i]=="Л"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Л";
						 ccVal= "Л";				 
						 currtype= "s";
					}
					else if(myString[i]=="Ф"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Ф";
						 ccVal= "Ф";				 
						 currtype= "s";
					}
					else if(myString[i]=="Č"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = "Č";
						 ccVal= "Č";				 
						 currtype= "s";
					}
					else if(myString[i]==String.fromCharCode(42926)){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						 currchar = String.fromCharCode(42926);
						 ccVal= "E";				 
						 currtype= "s";
					}
					else if (/[A-Za-z0-9]/.test(myString[i])) {	  
							currchar = myString[i];
							ccVal = myString[i];
							currtype= "f";  
					} 
					else if(myString[i]=="?"){
					//document.write("<br/>You entered String is " + myString[i]);
					//document.write("<br /> Not Recognised character" );
						currchar = "?";
						ccVal="?";
						currtype= "q";
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

					 
		}
	
		
                	  



