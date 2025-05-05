var concatstr = "";                                                         
var prevchar = "";      
var currchar = "";       
var prevtype = ""; 
var currtype = ""; 
var ccVal="";
var prValLen ="";
	
function ParseFrench(sentWordforIPA)
{
	var lang = $("#langFor").children("option:selected").val();
	var sentWordforReplace = sentWordforIPA;
	selectLangArray(lang);
	Chale_Chalo(array_one, sentWordforReplace);
}

function ParseFrenchAfterReplace(origString)
{        
	var myString = origString ;
	for(i = 0; i < myString.length; i++)
	{                                      
		var incrementVal = EkaTTSParseFrench(i, myString);
		alert(i)
		i = incrementVal[2];
	}	      
}		

function EkaTTSParseFrench(i,myString) 
{
	replchar = "";
	concatstr="";
	currchar = myString[i] ;
	var skipchar = "";
	var fstcharLC = myString[i].toLowerCase();
	var seccharLC = "";
	var thirdcharLC = "";
	var fourthcharLC = "";
	var fifthcharLC = "";
// If start of string; set prev char to null	
	var myStringLen = myString.length;
	if (i == 0)
	{	
		prevcharLC ="";
	}
	else
	{
		prevcharLC = myString[i-1];
	}
// if we are at the end of the string	
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
	if (i >= myStringLen - 3)
	{
		fourthcharLC = "";
	}
	else
	{		
		fourthcharLC = myString[i+3].toLowerCase();
	}	
	if (i >= myStringLen - 4)
	{
		fifthcharLC = "";
	}
	else
	{		
		fifthcharLC = myString[i+4].toLowerCase();
	}			
	
	// Fifth,Fourth,Third,Second level dipthongs
	// replace dipthong "sence" then move four character ahead
	if(fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="s"  && fourthcharLC =="s"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧes";
		}	
		else
		{	
			replchar = "Ŧes";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="a" && seccharLC =="p"  && thirdcharLC =="r"  && fourthcharLC =="è"  && fifthcharLC =="s")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āprλ";
		}	
		else
		{	
			replchar = "Āprλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 4;
	}
	else if(fstcharLC =="t" && seccharLC =="o"  && thirdcharLC =="i"  && fourthcharLC =="r"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧuār";
		}	
		else
		{	
			replchar = "Ŧuār";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="b"  && fourthcharLC =="r"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ārb-r";
		}	
		else
		{	
			replchar = "Ārb-r";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 4;
	}
	else if(fstcharLC =="b" && seccharLC =="r"  && thirdcharLC =="i"  && fourthcharLC =="s"  && fifthcharLC =="s")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "b-res";
		}	
		else
		{	
			replchar = "B-res";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 4;
	}
	else if(fstcharLC =="v" && seccharLC =="ê"  && thirdcharLC =="q"  && fourthcharLC =="u"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "vλk";
		}	
		else
		{	
			replchar = "Vλk";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 4;
	}
	else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="g"  && fourthcharLC =="o"  && fifthcharLC =="t")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ā-rgo";
		}	
		else
		{	
			replchar = "Ā-rgo";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 4;
	}
	else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="i"  && fourthcharLC =="d"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ā-ređ";
		}	
		else
		{	
			replchar = "Ā-ređ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="m"  && fourthcharLC =="e"  && fifthcharLC =="r")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ā-rmλ";
		}	
		else
		{	
			replchar = "Ā-rmλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 4;
	}
	else if(fstcharLC =="r" && seccharLC =="e"  && thirdcharLC =="r"  && fourthcharLC =="i"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "r-er";
		}	
		else
		{	
			replchar = "R-er";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="q"  && fourthcharLC =="u"  && fifthcharLC =="é")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ā-rkλ";
		}	
		else
		{	
			replchar = "Ā-rkλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 4;
	}
	else if(fstcharLC =="g" && seccharLC =="r"  && thirdcharLC =="a"  && fourthcharLC =="n"  && fifthcharLC =="d")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "g-rön";
		}	
		else
		{	
			replchar = "G-rön";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="p" && seccharLC =="e"  && thirdcharLC =="t"  && fourthcharLC =="i"  && fifthcharLC =="t")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "pe-te";
		}	
		else
		{	
			replchar = "Pe-te";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="l" && seccharLC =="o"  && thirdcharLC =="s"  && fourthcharLC =="e"  && fifthcharLC =="r")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "lo-sλ";
		}	
		else
		{	
			replchar = "Lo-sλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="f" && seccharLC =="a"  && thirdcharLC =="n"  && fourthcharLC =="t"  && fifthcharLC =="s")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "fönŧs";
		}	
		else
		{	
			replchar = "Fönŧs";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="s" && seccharLC =="e"  && thirdcharLC =="n"  && fourthcharLC =="i"  && fifthcharLC =="c")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "söne-k";
		}	
		else
		{	
			replchar = "Söne-k";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="a"  && fourthcharLC =="u"  && fifthcharLC =="t")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "s-hou";
		}	
		else
		{	
			replchar = "S-hou";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="c"  && fourthcharLC =="l"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧe-kl";
		}	
		else
		{	
			replchar = "Ŧe-kl";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="l" && seccharLC =="a"  && thirdcharLC =="i"  && fourthcharLC =="r"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "lλr";
		}	
		else
		{	
			replchar = "Lλr";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="s"  && fourthcharLC =="a"  && fifthcharLC =="n")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧezon";
		}	
		else
		{	
			replchar = "Ŧezon";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="a" && seccharLC =="s"  && thirdcharLC =="p"  && fourthcharLC =="h"  && fifthcharLC =="y")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āsp-he";
		}	
		else
		{	
			replchar = "Āsp-he";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i + 4;
	}
	else if(fstcharLC =="x" && seccharLC =="i"  && thirdcharLC =="a"  && fourthcharLC =="n"  && fifthcharLC =="t")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "k-seön-t";
		}	
		else
		{	
			replchar = "k-seön-t";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="m" && seccharLC =="i"  && thirdcharLC =="l"  && fourthcharLC =="e"  && fifthcharLC =="r")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "melλ";
		}	
		else
		{	
			replchar = "Melλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="a" && seccharLC =="s"  && thirdcharLC =="s"  && fourthcharLC =="i"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āse";
		}	
		else
		{	
			replchar = "Āse";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="t" && seccharLC =="a"  && thirdcharLC =="n"  && fourthcharLC =="c"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧöns";
		}	
		else
		{	
			replchar = "Ŧöns";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i + 4;
	}
	else if(fstcharLC =="s" && seccharLC =="i"  && thirdcharLC =="s"  && fourthcharLC =="t"  && fifthcharLC =="é")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "sestλ";
		}	
		else
		{	
			replchar = "Sestλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 4;
	}
	else if(fstcharLC =="t" && seccharLC =="a"  && thirdcharLC =="n"  && fourthcharLC =="t"  && fifthcharLC =="e")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧönŧ";
		}	
		else
		{	
			replchar = "Ŧönt";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 4;
	}
	else if(fstcharLC =="o" && seccharLC =="r"  && thirdcharLC =="t"  && fourthcharLC =="i"  && fifthcharLC =="r")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "orŧer";
		}	
		else
		{	
			replchar = "Orŧer";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 4;
	}
	else if(fstcharLC =="o" && seccharLC =="u"  && thirdcharLC =="p"  && fourthcharLC =="i"  && fifthcharLC =="r")		//			5	
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "oup-r";
		}	
		else
		{	
			replchar = "Oup-r";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 4;
	}
	else if(fstcharLC =="b" && seccharLC =="o"  && thirdcharLC =="n"  && fourthcharLC =="n"  && fifthcharLC =="e")		//5				
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "bon-n";
		}	
		else
		{	
			replchar = "Bon-n";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 4;
	}
	else if(fstcharLC =="s" && seccharLC =="e"  && thirdcharLC =="n"  && fourthcharLC =="c"  && fifthcharLC =="e")	//5						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "söŋs";
		}	
		else
		{	
			replchar = "Söŋs";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 4;
	}
	else if(fstcharLC =="m" && seccharLC =="i"  && thirdcharLC =="n"  && fourthcharLC =="a"  && fifthcharLC =="l")		//5					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "menāl";
		}	
		else
		{	
			replchar = "Menāl";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 4;
	}
	else if(fstcharLC =="g" && seccharLC =="u"  && thirdcharLC =="ï"  && fourthcharLC =="t"  &&  fifthcharLC =="é")	//5					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "guetλ";
		}	
		else
		{	
			replchar = "Guetλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 4;
	}
	else if(fstcharLC =="m" && seccharLC =="e"  && thirdcharLC =="n"  && fourthcharLC =="t")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "mo";
		}	
		else
		{	
			replchar = "Mo";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="e" && seccharLC =="a"  && thirdcharLC =="u"  && fourthcharLC =="x")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "o";
		}	
		else
		{	
			replchar = "O";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="a"  && thirdcharLC =="n"  && fourthcharLC =="d")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "bönd";
		}	
		else
		{	
			replchar = "Bönd";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="a"  && thirdcharLC =="t"  && fourthcharLC =="t") //4							
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "baŧ";
		}	
		else
		{	
			replchar = "Baŧ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="m" && seccharLC =="i"  && thirdcharLC =="n"  && fourthcharLC =="a")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "m-enā";
		}	
		else
		{	
			replchar = "M-enā";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="o"  && fourthcharLC =="n")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "se-o";
		}	
		else
		{	
			replchar = "Se-o";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="r" && seccharLC =="a"  && thirdcharLC =="n"  && fourthcharLC =="t")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "rönt";
		}	
		else
		{	
			replchar = "Rönt";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="s" && seccharLC =="a"  && thirdcharLC =="n"  && fourthcharLC =="t")		//4				
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "son";
		}	
		else
		{	
			replchar = "Son";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}	
	else if(fstcharLC =="j" && seccharLC =="o"  && thirdcharLC =="u"  && fourthcharLC =="r")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "j-ur";
		}	
		else
		{	
			replchar = "J-ur";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="n" && seccharLC =="é"  && thirdcharLC =="g"  && fourthcharLC =="a")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "nλga";
		}	
		else
		{	
			replchar = "nλga";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="o"  && thirdcharLC =="i"  && fourthcharLC =="e")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "buw-a";
		}	
		else
		{	
			replchar = "Buw-a";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="o"  && thirdcharLC =="i"  && fourthcharLC =="s")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "bu-ā";
		}	
		else
		{	
			replchar = "Bu-ā";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="d" && seccharLC =="a"  && thirdcharLC =="n"  && fourthcharLC =="t")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "đ-on";
		}	
		else
		{	
			replchar = "Ɖ-on";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="o"  && thirdcharLC =="r"  && fourthcharLC =="d")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "bord";
		}	
		else
		{	
			replchar = "Bord";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="g" && seccharLC =="è"  && thirdcharLC =="n"  && fourthcharLC =="e")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "j-en";
		}	
		else
		{	
			replchar = "J-en";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="v"  && fourthcharLC =="e")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧ-ev";
		}	
		else
		{	
			replchar = "Ŧ-ev";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="s" && seccharLC =="o"  && thirdcharLC =="l"  && fourthcharLC =="u")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "solu";
		}	
		else
		{	
			replchar = "Solu";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="i" && seccharLC =="s"  && thirdcharLC =="m"  && fourthcharLC =="e")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "esm";
		}	
		else
		{	
			replchar = "Esm";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="v" && seccharLC =="o"  && thirdcharLC =="i"  && fourthcharLC =="r")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "vuār";
		}	
		else
		{	
			replchar = "Vuār";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="t" && seccharLC =="r"  && thirdcharLC =="a"  && fourthcharLC =="c")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "trak";
		}	
		else
		{	
			replchar = "trak";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}	
	else if(fstcharLC =="a" && seccharLC =="b"  && thirdcharLC =="l"  && fourthcharLC =="e")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āb-l";
		}	
		else
		{	
			replchar = "Āb-l";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="t" && seccharLC =="u"  && thirdcharLC =="e"  && fourthcharLC =="r")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧ-yuλ";
		}	
		else
		{	
			replchar = "Ŧ-yuλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="e"  && thirdcharLC =="n"  && fourthcharLC =="t")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "sen";
		}	
		else
		{	
			replchar = "sen";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="t" && seccharLC =="e"  && thirdcharLC =="l"  && fourthcharLC =="l")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧel";
		}	
		else
		{	
			replchar = "Ŧel";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="b"  && thirdcharLC =="r"  && fourthcharLC =="i")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ā-bre";
		}	
		else
		{	
			replchar = "Ā-bre";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="s"  && fourthcharLC =="s")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧes";
		}	
		else
		{	
			replchar = "Ŧes";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="c"  && thirdcharLC =="o"  && fourthcharLC =="m")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "kom";
		}	
		else
		{	
			replchar = "kom";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="c"  && thirdcharLC =="o"  && fourthcharLC =="r")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "kor";
		}	
		else
		{	
			replchar = "kor";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="c"  && thirdcharLC =="o"  && fourthcharLC =="u")		//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "kou";
		}	
		else
		{	
			replchar = "Kou";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="e" && seccharLC =="t"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ete";
		}	
		else
		{	
			replchar = "Ete";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="i"  && thirdcharLC =="d"  && fourthcharLC =="e")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "seđ";
		}	
		else
		{	
			replchar = "Seđ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="ô"  && thirdcharLC =="t"  && fourthcharLC =="é")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "kotλ";
		}	
		else
		{	
			replchar = "Kotλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="q" && seccharLC =="u"  && thirdcharLC =="i"  && fourthcharLC =="t")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ket";
		}	
		else
		{	
			replchar = "Ket";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if( fstcharLC =="a" && seccharLC =="m"  && thirdcharLC =="a"  && fourthcharLC =="s")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āmā";
		}	
		else
		{	
			replchar = "Āmā";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="z" && seccharLC ==" o"  && thirdcharLC =="n"  && fourthcharLC =="e")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "z-on";
		}	
		else
		{	
			replchar = "Z-on";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="y" && seccharLC =="s"  && thirdcharLC =="t"  && fourthcharLC =="e")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "est";
		}	
		else
		{	
			replchar = "est";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="m"  && thirdcharLC =="i"  && fourthcharLC =="e")	//4				
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āme";
		}	
		else
		{	
			replchar = "Āme";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="d" && seccharLC =="i"  && thirdcharLC =="r"  && fourthcharLC =="e")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "đ-er";
		}	
		else
		{	
			replchar = "Ɖ-er";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="â" && seccharLC =="t"  && thirdcharLC =="r"  && fourthcharLC =="e")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āŧr";
		}	
		else
		{	
			replchar = "Āŧr";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="p" && seccharLC =="u"  && thirdcharLC =="t"  && fourthcharLC =="a")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "p-yu-ŧa";
		}	
		else
		{	
			replchar = "P-yu-ŧa";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="u" && seccharLC =="s"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "y-usλ";
		}	
		else
		{	
			replchar = "Y-usλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="ç" && seccharLC =="a"  && thirdcharLC =="i"  && fourthcharLC =="s")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "sλ";
		}	
		else
		{	
			replchar = "sλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="m"  && thirdcharLC =="m"  && fourthcharLC =="e")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āme";
		}	
		else
		{	
			replchar = "āme";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="o" && seccharLC =="n"  && thirdcharLC =="d"  && fourthcharLC =="a")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "öndā";
		}	
		else
		{	
			replchar = "öndā";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="a"  && fourthcharLC =="l")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ān-ā-l";
		}	
		else
		{	
			replchar = "Ān-ā-l";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="è"  && thirdcharLC =="t"  && fourthcharLC =="e")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "baŧ";
		}	
		else
		{	
			replchar = "baŧ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="a"  && thirdcharLC =="l"  && fourthcharLC =="e")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "kāl";
		}	
		else
		{	
			replchar = "kāl";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="y" && seccharLC =="s"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "esλ";
		}	
		else
		{	
			replchar = "esλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="i"  && fourthcharLC =="e")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "c-he";
		}	
		else
		{	
			replchar = "c-he";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="i"  && thirdcharLC =="n"  && fourthcharLC =="q")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "s-ānk";
		}	
		else
		{	
			replchar = "S-ānk";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="d"  && fourthcharLC =="a")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āndā";
		}	
		else
		{	
			replchar = "āndā";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="l"  && thirdcharLC =="o"  && fourthcharLC =="u")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ā-lu";
		}	
		else
		{	
			replchar = "Ā-lu";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="g" && seccharLC =="y"  && thirdcharLC =="n"  && fourthcharLC =="e")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "jen";
		}	
		else
		{	
			replchar = "Jen";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="e"  && fourthcharLC =="c")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ānk";
		}	
		else
		{	
			replchar = "Ānk";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="g"  && thirdcharLC =="o"  && fourthcharLC =="n")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ā-gon";
		}	
		else
		{	
			replchar = "Ā-gon";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="l"  && thirdcharLC =="g"  && fourthcharLC =="i")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āl-g-e";
		}	
		else
		{	
			replchar = "Āl-g-e";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="t"  && fourthcharLC =="é")	//4					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āntλ";
		}	
		else
		{	
			replchar = "Āntλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="t"  && fourthcharLC =="h")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ānŧh";
		}	
		else
		{	
			replchar = "Ānŧh";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="p" && seccharLC =="o"  && thirdcharLC =="l"  && fourthcharLC =="o")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "po-lo";
		}	
		else
		{	
			replchar = "po-lo";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="t" && seccharLC =="é"  && thirdcharLC =="r"  && fourthcharLC =="i")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧλre";
		}	
		else
		{	
			replchar = "Ŧλre";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="o" && seccharLC =="g"  && thirdcharLC =="u"  && fourthcharLC =="e")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "o-je";
		}	
		else
		{	
			replchar = "O-je";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="t"  && fourthcharLC =="i")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ante";
		}	
		else
		{	
			replchar = "Ante";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="r"  && thirdcharLC =="o"  && fourthcharLC =="u")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "bru";
		}	
		else
		{	
			replchar = "Bru";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="m" && seccharLC =="i"  && thirdcharLC =="s"  && fourthcharLC =="t")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "mes-t";
		}	
		else
		{	
			replchar = "Mes-t";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="v" && seccharLC =="r"  && thirdcharLC =="e"  && fourthcharLC =="s")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "vre-s";
		}	
		else
		{	
			replchar = " Vre-s";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="o" && seccharLC =="n"  && thirdcharLC =="i"  && fourthcharLC =="d")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ode";
		}	
		else
		{	
			replchar = "Ode";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="m" && seccharLC =="a"  && thirdcharLC =="i"  && fourthcharLC =="e")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "mā-ee";
		}	
		else
		{	
			replchar = "Mā-ee";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="o" && seccharLC =="r"  && thirdcharLC =="a"  && fourthcharLC =="k")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "or-k";
		}	
		else
		{	
			replchar = "Or-k";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="s" && seccharLC =="é"  && thirdcharLC =="m"  && fourthcharLC =="i")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "sλme";
		}	
		else
		{	
			replchar = "Sλme";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="t" && seccharLC =="o"  && thirdcharLC =="n"  && fourthcharLC =="y")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧon-y";
		}	
		else
		{	
			replchar = "Ŧon-y";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="u"  && fourthcharLC =="s")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āns";
		}	
		else
		{	
			replchar = "Āns";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="x"  && fourthcharLC =="i")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "öxe";
		}	
		else
		{	
			replchar = "Öxe";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="o"  && thirdcharLC =="û"  && fourthcharLC =="t")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ut";
		}	
		else
		{	
			replchar = "Ut";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="p" && seccharLC =="a"  && thirdcharLC =="i"  && fourthcharLC =="s")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "pλs";
		}	
		else
		{	
			replchar = "Pλs";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="p" && seccharLC =="h"  && thirdcharLC =="a"  && fourthcharLC =="s")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "p-hās";
		}	
		else
		{	
			replchar = "P-hās";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="u"  && thirdcharLC =="l"  && fourthcharLC =="t")	//4	cult					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "kqlt";
		}	
		else
		{	
			replchar = "Kqlt";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="t" && seccharLC =="o"  && thirdcharLC =="i"  && fourthcharLC =="e")	//4	toie					
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧua";
		}	
		else
		{	
			replchar = "Ŧua";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="p" && seccharLC =="l"  && thirdcharLC =="a"  && fourthcharLC =="n")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "p-lön";
		}	
		else
		{	
			replchar = "P-lön";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="p" && seccharLC =="l"  && thirdcharLC =="a"  && fourthcharLC =="t")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "p-lā";
		}	
		else
		{	
			replchar = "P-lā";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="p" && seccharLC =="l"  && thirdcharLC =="o"  && fourthcharLC =="m")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "p-löm";
		}	
		else
		{	
			replchar = "P-löm";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="p" && seccharLC =="o"  && thirdcharLC =="c"  && fourthcharLC =="a")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "poka";
		}	
		else
		{	
			replchar = "Poka";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="p" && seccharLC =="o"  && thirdcharLC =="g"  && fourthcharLC =="é")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "pojλ";
		}	
		else
		{	
			replchar = "Pojλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="p" && seccharLC =="o"  && thirdcharLC =="l"  && fourthcharLC =="l")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "pol";
		}	
		else
		{	
			replchar = "Pol";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="o" && seccharLC =="n"  && thirdcharLC =="n"  && fourthcharLC =="é")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "onλ";
		}	
		else
		{	
			replchar = "Onλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="a"  && thirdcharLC =="t"  && fourthcharLC =="i")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "kā-te";
		}	
		else
		{	
			replchar = "Kā-te";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="a"  && thirdcharLC =="t"  && fourthcharLC =="s")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "bāŧ-s";
		}	
		else
		{	
			replchar = "Bāŧ-s";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="t"  && thirdcharLC =="t"  && fourthcharLC =="o")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āŧ-o";
		}	
		else
		{	
			replchar = "Āŧ-o";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="d" && seccharLC =="i"  && thirdcharLC =="q"  && fourthcharLC =="u")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "dek-ā";
		}	
		else
		{	
			replchar = "Dek-ā";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="d" && seccharLC =="o"  && thirdcharLC =="m"  && fourthcharLC =="e")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "đom";
		}	
		else
		{	
			replchar = "Ɖom";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="r" && seccharLC =="a"  && thirdcharLC =="t"  && fourthcharLC =="i")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "rāŧ";
		}	
		else
		{	
			replchar = "Raŧ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="î"  && thirdcharLC =="m"  && fourthcharLC =="é")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "b-emλ";
		}	
		else
		{	
			replchar = "B-emλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="j"  && thirdcharLC =="e"  && fourthcharLC =="c")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "bjek";
		}	
		else
		{	
			replchar = "Bjek";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="j"  && thirdcharLC =="u"  && fourthcharLC =="r")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "b-jor";
		}	
		else
		{	
			replchar = "B-jor";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="e"  && thirdcharLC =="r"  && fourthcharLC =="r")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "b-er";
		}	
		else
		{	
			replchar = "B-er";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="o"  && thirdcharLC =="m"  && fourthcharLC =="i")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "b-ome";
		}	
		else
		{	
			replchar = "B-ome";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="o"  && thirdcharLC =="n"  && fourthcharLC =="d")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "bon-d";
		}	
		else
		{	
			replchar = "Bon-d";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="o" && seccharLC =="l"  && thirdcharLC =="i"  && fourthcharLC =="r")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ol-er";
		}	
		else
		{	
			replchar = "Ol-er";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="n" && seccharLC =="a"  && thirdcharLC =="b"  && fourthcharLC =="l")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "nab-l";
		}	
		else
		{	
			replchar = "Nab-l";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="e"  && thirdcharLC =="m"  && fourthcharLC =="é")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "b-emλ";
		}	
		else
		{	
			replchar = "B-emλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="a"  && fourthcharLC =="t")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "āraŧ";
		}	
		else
		{	
			replchar = "Āraŧ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="b"  && fourthcharLC =="a")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ārbā";
		}	
		else
		{	
			replchar = "Ārbā";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="l" && seccharLC =="è"  && thirdcharLC =="t"  && fourthcharLC =="e")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "lλŧ";
		}	
		else
		{	
			replchar = "Lλŧ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="t" && seccharLC =="r"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ŧ-rλ";
		}	
		else
		{	
			replchar = "Ŧ-rλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="b"  && fourthcharLC =="o")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ā-rbo";
		}	
		else
		{	
			replchar = "Ā-rbo";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="o" && seccharLC =="r"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "orλ";
		}	
		else
		{	
			replchar = "Orλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="v";
		i = i+ 3;
	}
	else if(fstcharLC =="o" && seccharLC =="s"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "osλ";
		}	
		else
		{	
			replchar = "Osλ";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="r" && seccharLC =="e"  && thirdcharLC =="c"  && fourthcharLC =="s")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "res";
		}	
		else
		{	
			replchar = "res";
		}	
		concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if( fstcharLC =="s" && seccharLC =="e"  && thirdcharLC =="a"  && fourthcharLC =="u")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "s-o";
		}	
		else
		{	
			replchar = "s-o";
		}	
			concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if( fstcharLC =="u" && seccharLC =="s"  && thirdcharLC =="t"  && fourthcharLC =="e")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "u-sŧ";
		}	
		else
		{	
			replchar = "U-sŧ";
		}	
			concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="c"  && fourthcharLC =="a")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "ā-rka";
		}	
		else
		{	
			replchar = "ā-rka";
		}	
			concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if( fstcharLC =="c" && seccharLC =="a"  && thirdcharLC =="d"  && fourthcharLC =="e")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "kađ";
		}	
		else
		{	
			replchar = "Kađ";
		}	
			concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="b" && seccharLC =="o"  && thirdcharLC =="u"  && fourthcharLC =="t")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "buŧ";
		}	
		else
		{	
			replchar = "buŧ";
		}	
			concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="u" && seccharLC =="t"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
	{	
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		if (myString[i] == fstcharLC)
		{
			replchar = "uŧλ";
		}	
		else
		{	
			replchar = "Uŧλ";
		}	
			concatstr = concatstr.concat(replchar);
		currtype="c";
		i = i+ 3;
	}
	else if(fstcharLC =="c" && seccharLC =="i"  && thirdcharLC =="e"  && fourthcharLC =="l")	//4						
	{	

			if (myString[i] == fstcharLC)
			{
				replchar = "s-λl";
			}	
			else
			{	
				replchar = "S-λl";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
	}
	else if( fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="a"  && fourthcharLC =="ï")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "kae";
			}	
			else
			{	
				replchar = "Kae";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
	else if(fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="é"  && fourthcharLC =="o")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ko";
			}	
			else
			{	
				replchar = "Ko";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="e"  && fourthcharLC =="v")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "s-hv";
			}	
			else
			{	
				replchar = "S-hv";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="i"  && fourthcharLC =="c")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "s-he";
			}	
			else
			{	
				replchar = "S-he";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="i"  && fourthcharLC =="f")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "shef";
			}	
			else
			{	
				replchar = "Shef";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="f" && seccharLC =="a"  && thirdcharLC =="u"  && fourthcharLC =="x")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "f-o";
			}	
			else
			{	
				replchar = "F-o";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="i"  && fourthcharLC =="p")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "s-hep";
			}	
			else
			{	
				replchar = "S-hep";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="t" && seccharLC =="e"  && thirdcharLC =="c"  && fourthcharLC =="t")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "tλk";
			}	
			else
			{	
				replchar = "Tλk";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="t" && seccharLC =="u"  && thirdcharLC =="r"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ŧur";
			}	
			else
			{	
				replchar = "Ŧur";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="i" && seccharLC =="v"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "evλ";
			}	
			else
			{	
				replchar = "Evλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="i" && seccharLC =="v"  && thirdcharLC =="e"  && fourthcharLC =="s")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "evs";
			}	
			else
			{	
				replchar = "Evs";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="i" && seccharLC =="q"  && thirdcharLC =="u"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "e-k";
			}	
			else
			{	
				replchar = "E-k";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="c"  && fourthcharLC =="t")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ārkŧ";
			}	
			else
			{	
				replchar = "Ārkŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="d"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-rd";
			}	
			else
			{	
				replchar = "Ā-rd";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="d"  && fourthcharLC =="i")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-rde";
			}	
			else
			{	
				replchar = "Ā-rde";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="l" && seccharLC =="l"  && thirdcharLC =="o"  && fourthcharLC =="n")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "y-on";
			}	
			else
			{	
				replchar = "Y-on";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="d"  && fourthcharLC =="o")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ārdū";
			}	
			else
			{	
				replchar = "Ārdū";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="o" && seccharLC =="i"  && thirdcharLC =="s"  && fourthcharLC =="e")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ūaz";
			}	
			else
			{	
				replchar = "Ūaz";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="g"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-rj";
			}	
			else
			{	
				replchar = "Ā-rj";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="g" && seccharLC =="e"  && thirdcharLC =="n"  && fourthcharLC =="t")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "j-en";
			}	
			else
			{	
				replchar = "J-en";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="e" && seccharLC =="n"  && thirdcharLC =="t"  && fourthcharLC =="é")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "öntλ";
			}	
			else
			{	
				replchar = "Öntλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="g" && seccharLC =="i"  && thirdcharLC =="l"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "jel";
			}	
			else
			{	
				replchar = "Jel";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="e" && seccharLC =="u"  && thirdcharLC =="s"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "os";
			}	
			else
			{	
				replchar = "Os";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="g"  && fourthcharLC =="u")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-rgu";
			}	
			else
			{	
				replchar = "Ā-rgu";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="d" && seccharLC =="i"  && thirdcharLC =="t"  && fourthcharLC =="é")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "đetλ";
			}	
			else
			{	
				replchar = "ƉetΛ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="t" && seccharLC =="r"  && thirdcharLC =="o"  && fourthcharLC =="c")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ŧor-k";
			}	
			else
			{	
				replchar = "ŧor-k";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="i"  && fourthcharLC =="s")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-res";
			}	
			else
			{	
				replchar = "Ā-res";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="c" && seccharLC =="a"  && thirdcharLC =="r"  && fourthcharLC =="t")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "k-raŧ";
			}	
			else
			{	
				replchar = "K-raŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="m"  && fourthcharLC =="a")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-rmā";
			}	
			else
			{	
				replchar = "Ā-rmā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="g" && seccharLC =="n"  && thirdcharLC =="a"  && fourthcharLC =="c")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ŋak";
			}	
			else
			{	
				replchar = "Ŋak";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="m"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ārm";
			}	
			else
			{	
				replchar = "Ārm";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="m" && seccharLC =="è"  && thirdcharLC =="r"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "mλr";
			}	
			else
			{	
				replchar = "Mλr";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="p" && seccharLC =="è"  && thirdcharLC =="r"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "pλr";
			}	
			else
			{	
				replchar = "Pλr";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="m"  && fourthcharLC =="é")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-rmλ";
			}	
			else
			{	
				replchar = "Ā-rmλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if( fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="m"  && fourthcharLC =="i")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-rme";
			}	
			else
			{	
				replchar = "Ā-rme";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="m" && seccharLC =="i"  && thirdcharLC =="s"  && fourthcharLC =="t")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "mes-ŧ";
			}	
			else
			{	
				replchar = "Mes-ŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="c"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ŧis";
			}	
			else
			{	
				replchar = "Ŧis";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="m" && seccharLC =="u"  && thirdcharLC =="r"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "m-ur";
			}	
			else
			{	
				replchar = "M-ur";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="r" && seccharLC =="i"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "reλ";
			}	
			else
			{	
				replchar = "Reλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="r" && seccharLC =="i"  && thirdcharLC =="r"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "rer";
			}	
			else
			{	
				replchar = "Rer";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if( fstcharLC =="b" && seccharLC =="a"  && thirdcharLC =="z"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "bā-z";
			}	
			else
			{	
				replchar = "Bā-z";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="m" && seccharLC =="a"  && thirdcharLC =="t"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "mā-ŧ";
			}	
			else
			{	
				replchar = "Mā-ŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="m" && seccharLC =="a"  && thirdcharLC =="t"  && fourthcharLC =="i")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "mā-ŧe";
			}	
			else
			{	
				replchar = "Mā-ŧe";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="ô"  && thirdcharLC =="m"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "r-om";
			}	
			else
			{	
				replchar = "R-om";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="p" && seccharLC =="e"  && thirdcharLC =="n"  && fourthcharLC =="t")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "p-en";
			}	
			else
			{	
				replchar = "P-en";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="r"  && fourthcharLC =="a")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-rā";
			}	
			else
			{	
				replchar = "Ā-rā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="e"  && fourthcharLC =="m")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "s-hm";
			}	
			else
			{	
				replchar = "S-hm";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="p" && seccharLC =="i"  && thirdcharLC =="e"  && fourthcharLC =="d")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "peđ";
			}	
			else
			{	
				replchar = "Peđ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "chλr";
			}	
			else
			{	
				replchar = "Chλr";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="g"  && fourthcharLC =="e")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "öng";
			}	
			else
			{	
				replchar = "Öng";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="e"  && thirdcharLC =="s"  && fourthcharLC =="t")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "rλst";
			}	
			else
			{	
				replchar = "rλst";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="r"  && thirdcharLC =="ê"  && fourthcharLC =="t")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "reŧ";
			}	
			else
			{	
				replchar = "reŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="h"  && thirdcharLC =="e"  && fourthcharLC =="s")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "r-hs";
			}	
			else
			{	
				replchar = "r-hs";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="g" && seccharLC =="o"  && thirdcharLC =="û"  && fourthcharLC =="t")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "gou-ŧ";
			}	
			else
			{	
				replchar = "Gou-ŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="p" && seccharLC =="a"  && thirdcharLC =="y"  && fourthcharLC =="s")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "pāe";
			}	
			else
			{	
				replchar = "Pāe";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="l" && seccharLC =="o"  && thirdcharLC =="s"  && fourthcharLC =="é")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "lo-sλ";
			}	
			else
			{	
				replchar = "Lo-sλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="e" && seccharLC =="n"  && thirdcharLC =="f"  && fourthcharLC =="a")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "önfā";
			}	
			else
			{	
				replchar = "Önfā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="s" && seccharLC =="a"  && thirdcharLC =="i"  && fourthcharLC =="s")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "sλ";
			}	
			else
			{	
				replchar = "Sλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="i"  && thirdcharLC =="v"  && fourthcharLC =="a")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "re-vā";
			}	
			else
			{	
				replchar = "Re-vā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="i"  && thirdcharLC =="v"  && fourthcharLC =="é")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "revλ";
			}	
			else
			{	
				replchar = "Revλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="i"  && thirdcharLC =="v"  && fourthcharLC =="i")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "reve";
			}	
			else
			{	
				replchar = "Reve";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="o"  && thirdcharLC =="g"  && fourthcharLC =="a")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "rogā";
			}	
			else
			{	
				replchar = "Rogā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="o"  && thirdcharLC =="n"  && fourthcharLC =="d")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ron";
			}	
			else
			{	
				replchar = "Ron";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="o"  && thirdcharLC =="s"  && fourthcharLC =="a")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "rosā";
			}	
			else
			{	
				replchar = "Rosā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="t" && seccharLC =="è"  && thirdcharLC =="r"  && fourthcharLC =="e")	//4						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "tλr";
			}	
			else
			{	
				replchar = "Tλr";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="t" && seccharLC =="h"  && thirdcharLC =="o"  && fourthcharLC =="r")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ŧ-hor";
			}	
			else
			{	
				replchar = "Ŧ-hor";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="c"  && fourthcharLC =="u")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ŧiku";
			}	
			else
			{	
				replchar = "Ŧiku";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="c" && seccharLC =="u"  && thirdcharLC =="l"  && fourthcharLC =="a")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "kulā";
			}	
			else
			{	
				replchar = "Kulā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="c" && seccharLC =="u"  && thirdcharLC =="l"  && fourthcharLC =="é")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "kulλ";
			}	
			else
			{	
				replchar = "Kulλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="f" && seccharLC =="i"  && thirdcharLC =="c"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "fes";
			}	
			else
			{	
				replchar = "Fes";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="d" && seccharLC =="o"  && thirdcharLC =="n"  && fourthcharLC =="c")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "đon-k";
			}	
			else
			{	
				replchar = "Ɖon-k";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="s" && seccharLC =="e"  && thirdcharLC =="u"  && fourthcharLC =="r")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ser";
			}	
			else
			{	
				replchar = "Ser";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="c" && seccharLC =="è"  && thirdcharLC =="t"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "s-λŧ";
			}	
			else
			{	
				replchar = "S-λŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="c" && seccharLC =="é"  && thirdcharLC =="t"  && fourthcharLC =="i")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "sλte";
			}	
			else
			{	
				replchar = "Sλte";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="s"  && thirdcharLC =="p"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ās-p";
			}	
			else
			{	
				replchar = "Ās-p";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="s"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ŧes";
			}	
			else
			{	
				replchar = "Ŧes";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="i"  && thirdcharLC =="s"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "āse";
			}	
			else
			{	
				replchar = "Āse";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="f" && seccharLC =="i"  && thirdcharLC =="c"  && fourthcharLC =="i")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "fese";
			}	
			else
			{	
				replchar = "fese";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="t"  && fourthcharLC =="i")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ārte";
			}	
			else
			{	
				replchar = "Ārte";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="m"  && fourthcharLC =="u")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ārmu";
			}	
			else
			{	
				replchar = "Ārmu";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="u"  && fourthcharLC =="m")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-rum";
			}	
			else
			{	
				replchar = "Ā-rum";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="s"  && thirdcharLC =="c"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "āse";
			}	
			else
			{	
				replchar = "Āse";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="s"  && thirdcharLC =="a"  && fourthcharLC =="p")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "āsāp";
			}	
			else
			{	
				replchar = "Āsāp";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="s"  && thirdcharLC =="p"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "āspλ";
			}	
			else
			{	
				replchar = "Āspλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="r" && seccharLC =="i"  && thirdcharLC =="t"  && fourthcharLC =="é")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "retλ";
			}	
			else
			{	
				replchar = "Retλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="s"  && thirdcharLC =="p"  && fourthcharLC =="h")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "āsf";
			}	
			else
			{	
				replchar = "Āsf";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="p" && seccharLC =="h"  && thirdcharLC =="x"  && fourthcharLC =="y")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "fie";
			}	
			else
			{	
				replchar = "Fie";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="x" && seccharLC =="i"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "zλ";
			}	
			else
			{	
				replchar = "Zλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="s"  && thirdcharLC =="p"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "āspe";
			}	
			else
			{	
				replchar = "Āspe";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="s" && seccharLC =="o"  && thirdcharLC =="i"  && fourthcharLC =="r")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "sūar";
			}	
			else
			{	
				replchar = "Sūar";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="s" && seccharLC =="i"  && thirdcharLC =="d"  && fourthcharLC =="u")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "sidū";
			}	
			else
			{	
				replchar = "Sidū";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="u" && seccharLC =="i"  && thirdcharLC =="t"  && fourthcharLC =="é")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "utλ";
			}	
			else
			{	
				replchar = "Utλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="s" && seccharLC =="s"  && thirdcharLC =="i"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "see";
			}	
			else
			{	
				replchar = "See";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="s" && seccharLC =="s"  && thirdcharLC =="i"  && fourthcharLC =="é")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "seλ";
			}	
			else
			{	
				replchar = "Seλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="é" && seccharLC =="g"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "λgλ";
			}	
			else
			{	
				replchar = "Λgλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="s"  && thirdcharLC =="s"  && fourthcharLC =="i")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "āse";
			}	
			else
			{	
				replchar = "Āse";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="t" && seccharLC =="a"  && thirdcharLC =="n"  && fourthcharLC =="t")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ŧönŧ";
			}	
			else
			{	
				replchar = "Tönŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="v"  && thirdcharLC =="e"  && fourthcharLC =="c")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-vek";
			}	
			else
			{	
				replchar = "Ā-vek";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="g" && seccharLC =="n"  && thirdcharLC =="e"  && fourthcharLC =="r")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ŋλ";
			}	
			else
			{	
				replchar = "Ŋλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="s"  && thirdcharLC =="s"  && fourthcharLC =="o")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "ā-so";
			}	
			else
			{	
				replchar = "Ā-so";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="s" && seccharLC =="o"  && thirdcharLC =="i"  && fourthcharLC =="f")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "sūaf";
			}	
			else
			{	
				replchar = "Sūaf";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="s" && seccharLC =="o"  && thirdcharLC =="m"  && fourthcharLC =="m")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "som";
			}	
			else
			{	
				replchar = "Som";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="m" && seccharLC =="i"  && thirdcharLC =="l"  && fourthcharLC =="a")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "melā";
			}	
			else
			{	
				replchar = "Melā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="m" && seccharLC =="a"  && thirdcharLC =="n"  && fourthcharLC =="t")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "mönŧ";
			}	
			else
			{	
				replchar = "Mönŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="p" && seccharLC =="l"  && thirdcharLC =="i"  && fourthcharLC =="r")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "p-l-r";
			}	
			else
			{	
				replchar = "p-l-r";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="e" && seccharLC =="l"  && thirdcharLC =="l"  && fourthcharLC =="e")	//4						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "λl";
			}	
			else
			{	
				replchar = "Λl";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 3;
		}
		else if(fstcharLC =="e" && seccharLC =="i"  && thirdcharLC =="n"  && fourthcharLC =="[bcdfghjklmnpqrstvwx]")	//4 //special						
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "@";
			}	
			else
			{	
				replchar = "@";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="o" && seccharLC =="i"  && thirdcharLC =="n"  && fourthcharLC =="[bcdfghjklmnpqrstvwx]")	//4	//special					
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ū-ā";
			}	
			else
			{	
				replchar = "Ū-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="u"  && thirdcharLC =="x")	//3					
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "o";
			}	
			else
			{	
				replchar = "o";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="m"  && thirdcharLC =="[bcdfghjklmnpqrstvwx]")	//3	// special				
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "@";
			}	
			else
			{	
				replchar = "@";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="[bcdfghjklmnpqrstvwx]")	//3 //special			
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ö";
			}	
			else
			{	
				replchar = "Ö";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="c"  && thirdcharLC =="[aoubcdfghjklmnpqrstvwx]")	//3					
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
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="c"  && thirdcharLC =="[eiy]")	//3					
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
		else if(fstcharLC =="e" && seccharLC =="u"  && thirdcharLC =="x")	//3					
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "a";
			}	
			else
			{	
				replchar = "A";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="i" && seccharLC =="l"  && thirdcharLC =="s")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "el";
			}	
			else
			{	
				replchar = "El";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="d" && seccharLC =="o"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "đön";
			}	
			else
			{	
				replchar = "Ɖön";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="n" && seccharLC =="e"  && thirdcharLC =="é")	//3					
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "nλ";
			}	
			else
			{	
				replchar = "Nλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="s" && seccharLC =="e"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "sλ";
			}	
			else
			{	
				replchar = "Sλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="r"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧ-r";
			}	
			else
			{	
				replchar = "Ŧ-r";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="u"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧ-ū";
			}	
			else
			{	
				replchar = "Ŧ-ū";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="b"  && thirdcharLC =="c")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ā bλ cλ";
			}	
			else
			{	
				replchar = "Ā Bλ Cλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="è"  && thirdcharLC =="s")	//3						
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
		else if(fstcharLC =="m" && seccharLC =="e"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "mö";
			}	
			else
			{	
				replchar = "Mö";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="n" && seccharLC =="a"  && thirdcharLC =="l")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "nā-l";
			}	
			else
			{	
				replchar = "Nā-l";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="y"  && thirdcharLC =="e")	//3						
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
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="b"  && thirdcharLC =="é")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "bλ";
			}	
			else
			{	
				replchar = "Bλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="s" && seccharLC =="s"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "s";
			}	
			else
			{	
				replchar = "S";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧer";
			}	
			else
			{	
				replchar = "Ŧer";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="o"  && thirdcharLC =="i")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "bu-ā";
			}	
			else
			{	
				replchar = "Bu-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="o"  && thirdcharLC =="î")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "bu-ā";
			}	
			else
			{	
				replchar = "Bu-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="l" && seccharLC =="i"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ler";
			}	
			else
			{	
				replchar = "Ler";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="i" && seccharLC =="o"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "eön";
			}	
			else
			{	
				replchar = "Eön";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="l"  && thirdcharLC =="é")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "b-lλ";
			}	
			else
			{	
				replchar = "B-lλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="l"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "b-l";
			}	
			else
			{	
				replchar = "B-l";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="d" && seccharLC =="e"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "đλ";
			}	
			else
			{	
				replchar = "Ɖλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="o"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "bor";
			}	
			else
			{	
				replchar = "Bor";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="v" && seccharLC =="i"  && thirdcharLC =="a")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ve-ā";
			}	
			else
			{	
				replchar = "Ve-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="r"  && thirdcharLC =="i")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "b-re";
			}	
			else
			{	
				replchar = "B-re";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="è" && seccharLC =="r"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λr";
			}	
			else
			{	
				replchar = "λr";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="u"  && thirdcharLC =="s")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "b-yus";
			}	
			else
			{	
				replchar = "B-yus";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="o"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "koŧ";
			}	
			else
			{	
				replchar = "Koŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="r"  && thirdcharLC =="o")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "b-ro";
			}	
			else
			{	
				replchar = "B-ro";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="e" && seccharLC =="n"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ön";
			}	
			else
			{	
				replchar = "Ön";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="o" && seccharLC =="l"  && thirdcharLC =="u")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "o-lu";
			}	
			else
			{	
				replchar = "O-lu";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="e"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "bλ";
			}	
			else
			{	
				replchar = "Bλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="i"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="r" && seccharLC =="d"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "r-đ";
			}	
			else
			{	
				replchar = "R-đ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="i" && seccharLC =="t"  && thirdcharLC =="é")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e-ŧλ";
			}	
			else
			{	
				replchar = "E-ŧλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="s" && seccharLC =="i"  && thirdcharLC =="f")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "sef";
			}	
			else
			{	
				replchar = "sef";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="s" && seccharLC =="i"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "sān";
			}	
			else
			{	
				replchar = "Sān";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="i"  && thirdcharLC =="o")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "beo";
			}	
			else
			{	
				replchar = "Beo";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="b" && seccharLC =="i"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "be";
			}	
			else
			{	
				replchar = "Be";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="i"  && thirdcharLC =="a")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "se-ā";
			}	
			else
			{	
				replchar = "Se-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="a"  && thirdcharLC =="p")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "kap";
			}	
			else
			{	
				replchar = "Kap";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="c"  && thirdcharLC =="c")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "āk";
			}	
			else
			{	
				replchar = "Āk";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="é" && seccharLC =="l"  && thirdcharLC =="é")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λlλ";
			}	
			else
			{	
				replchar = "Λlλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="u"  && thirdcharLC =="é")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧ-yuλ";
			}	
			else
			{	
				replchar = "Ŧ-yuλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="e" && seccharLC =="o"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e-on";
			}	
			else
			{	
				replchar = "E-on";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="e"  && thirdcharLC =="d")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "seđ";
			}	
			else
			{	
				replchar = "Seđ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="é"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧλ";
			}	
			else
			{	
				replchar = "Ŧλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="n" && seccharLC =="e"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "nλ";
			}	
			else
			{	
				replchar = "Nλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="e"  && thirdcharLC =="l")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧλl";
			}	
			else
			{	
				replchar = "Ŧλl";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="m"  && thirdcharLC =="a")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "āmā";
			}	
			else
			{	
				replchar = "Āmā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ön";
			}	
			else
			{	
				replchar = "Ön";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="e" && seccharLC =="u"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e-r";
			}	
			else
			{	
				replchar = "E-r";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="p" && seccharLC =="l"  && thirdcharLC =="i")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ple";
			}	
			else
			{	
				replchar = "Ple";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="s" && seccharLC =="s"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "s-e";
			}	
			else
			{	
				replchar = "S-e";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="o"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "kor";
			}	
			else
			{	
				replchar = "Kor";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="é" && seccharLC =="o"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λon";
			}	
			else
			{	
				replchar = "λon";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="h"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "c-h";
			}	
			else
			{	
				replchar = "c-h";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="o" && seccharLC =="i"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ūar";
			}	
			else
			{	
				replchar = "Ūar";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="l" && seccharLC =="e"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "lλ";
			}	
			else
			{	
				replchar = "Lλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="r" && seccharLC =="i"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "rer";
			}	
			else
			{	
				replchar = "Rer";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="r"  && thirdcharLC =="o")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "kro";
			}	
			else
			{	
				replchar = "Kro";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="g"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "a-j";
			}	
			else
			{	
				replchar = "A-j";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="r" && seccharLC =="o"  && thirdcharLC =="i")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "r-uā";
			}	
			else
			{	
				replchar = "R-uā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="u" && seccharLC =="p"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "upe";
			}	
			else
			{	
				replchar = "Upe";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="e" && seccharLC =="i"  && thirdcharLC =="l")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ā-e";
			}	
			else
			{	
				replchar = "Ā-e";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="r"  && thirdcharLC =="u")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "kr-ū";
			}	
			else
			{	
				replchar = "Kr-ū";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="l" && seccharLC =="i"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ler-h";
			}	
			else
			{	
				replchar = "Ler-h";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="é"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "c-λr-h";
			}	
			else
			{	
				replchar = "C-λr-h";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="n"  && thirdcharLC =="d")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ānđ";
			}	
			else
			{	
				replchar = "Ānđ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="r" && seccharLC =="n"  && thirdcharLC =="é")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "rnλ";
			}	
			else
			{	
				replchar = "Rnλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="h" && seccharLC =="u"  && thirdcharLC =="i")	//3						
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
			i = i+ 2;
		}
		else if(fstcharLC =="m" && seccharLC =="i"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "men";
			}	
			else
			{	
				replchar = "Men";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="c"  && thirdcharLC =="o")		//3			
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ko";
			}	
			else
			{	
				replchar = "Ko";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="i" && seccharLC =="d"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e-đ";
			}	
			else
			{	
				replchar = "E-đ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="i" && seccharLC =="t"  && thirdcharLC =="é")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "eŧλ";
			}	
			else
			{	
				replchar = "Eŧλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="y" && seccharLC =="t"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "eλŧ";
			}	
			else
			{	
				replchar = "Eλŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="p" && seccharLC =="t"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "pŧe";
			}	
			else
			{	
				replchar = "Pŧe";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="q" && seccharLC =="u"  && thirdcharLC =="i")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "k-e";
			}	
			else
			{	
				replchar = "K-e";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="d" && seccharLC =="e"  && thirdcharLC =="s")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "đλ";
			}	
			else
			{	
				replchar = "Ɖλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="l" && seccharLC =="e"  && thirdcharLC =="s")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "lλ";
			}	
			else
			{	
				replchar = "Lλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="m" && seccharLC =="o"  && thirdcharLC =="i")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "mu-ā";
			}	
			else
			{	
				replchar = "Mu-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="m" && seccharLC =="o"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "mon";
			}	
			else
			{	
				replchar = "Mon";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="m" && seccharLC =="e"  && thirdcharLC =="s")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "mλ";
			}	
			else
			{	
				replchar = "Mλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="o"  && thirdcharLC =="i")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧuā";
			}	
			else
			{	
				replchar = "Ŧuā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="o"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧon";
			}	
			else
			{	
				replchar = "Ŧon";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="e"  && thirdcharLC =="s")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧλ";
			}	
			else
			{	
				replchar = "Ŧλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="s" && seccharLC =="o"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "son";
			}	
			else
			{	
				replchar = "Son";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="s" && seccharLC =="e"  && thirdcharLC =="s")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "sλ";
			}	
			else
			{	
				replchar = "Sλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="s" && seccharLC =="o"  && thirdcharLC =="i")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "s-ūā";
			}	
			else
			{	
				replchar = "S-ūā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="q" && seccharLC =="u"  && thirdcharLC =="e")	//3						
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
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="i"  && thirdcharLC =="f")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧef";
			}	
			else
			{	
				replchar = "Ŧef";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="t"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "kŧe";
			}	
			else
			{	
				replchar = "Kŧe";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="x"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ā-k-s";
			}	
			else
			{	
				replchar = "Ā-k-s";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="x" && seccharLC =="e"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "k-s-λ";
			}	
			else
			{	
				replchar = "K-s-λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="z" && seccharLC =="u"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "zor";
			}	
			else
			{	
				replchar = "Zor";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="z" && seccharLC =="t"  && thirdcharLC =="è")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "z-ŧ";
			}	
			else
			{	
				replchar = "Z-ŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="z" && seccharLC =="e"  && thirdcharLC =="m")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "zem";
			}	
			else
			{	
				replchar = "Zem";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="l" && seccharLC =="é"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "lλ";
			}	
			else
			{	
				replchar = "Lλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="m" && seccharLC =="u"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "muŧ";
			}	
			else
			{	
				replchar = "Muŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="z" && seccharLC =="a"  && thirdcharLC =="l")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "z-āl";
			}	
			else
			{	
				replchar = "Z-āl";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="x" && seccharLC =="i"  && thirdcharLC =="o")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "k-so";
			}	
			else
			{	
				replchar = "K-so";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="v" && seccharLC =="o"  && thirdcharLC =="u")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "vu";
			}	
			else
			{	
				replchar = "vu";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="r" && seccharLC =="i"  && thirdcharLC =="l")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "rel";
			}	
			else
			{	
				replchar = "Rel";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="i" && seccharLC =="s"  && thirdcharLC =="é")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "esλ";
			}	
			else
			{	
				replchar = "Esλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="a"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "kāŧ";
			}	
			else
			{	
				replchar = "Kāŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="v" && seccharLC =="i"  && thirdcharLC =="s")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ves";
			}	
			else
			{	
				replchar = "ves";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="g" && seccharLC =="l"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "gle";
			}	
			else
			{	
				replchar = "gle";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="n" && seccharLC =="u"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "nu";
			}	
			else
			{	
				replchar = "nu";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="r" && seccharLC =="e"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "rλ";
			}	
			else
			{	
				replchar = "Rλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="r" && seccharLC =="u"  && thirdcharLC =="i")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ru-e";
			}	
			else
			{	
				replchar = "Ru-e";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="i" && seccharLC =="a"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ān";
			}	
			else
			{	
				replchar = "Ān";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="r"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ā-r";
			}	
			else
			{	
				replchar = "Ā-r";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="o" && seccharLC =="s"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "o-s";
			}	
			else
			{	
				replchar = "O-s";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="o" && seccharLC =="u"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "o-r";
			}	
			else
			{	
				replchar = "O-r";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="d" && seccharLC =="é"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "đλŧ";
			}	
			else
			{	
				replchar = "Ɖλŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="c"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ākŧ";
			}	
			else
			{	
				replchar = "Ākt";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="d" && seccharLC =="é"  && thirdcharLC =="f")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "đλf";
			}	
			else
			{	
				replchar = "Ɖλf";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="a"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "kār";
			}	
			else
			{	
				replchar = "Kār";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="d" && seccharLC =="i"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "đ-e";
			}	
			else
			{	
				replchar = "Ɖ-e";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="t" && seccharLC =="ô"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧo";
			}	
			else
			{	
				replchar = "Ŧo";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="r" && seccharLC =="a"  && thirdcharLC =="l")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "rāl";
			}	
			else
			{	
				replchar = "Rāl";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="o" && seccharLC =="r"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "o-r";
			}	
			else
			{	
				replchar = "O-r";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="o" && seccharLC =="n"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ön";
			}	
			else
			{	
				replchar = "Ön";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="o" && seccharLC =="u"  && thirdcharLC =="s")	//3						
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
			i = i+ 2;
		}
		else if(fstcharLC =="e" && seccharLC =="s"  && thirdcharLC =="t")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "Λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 2;
		}
		else if(fstcharLC =="i" && seccharLC =="v"  && thirdcharLC =="e")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ev";
			}	
			else
			{	
				replchar = "Ev";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="o" && seccharLC =="n"  && thirdcharLC =="s")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ön";
			}	
			else
			{	
				replchar = "Ön";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="i" && seccharLC =="e"  && thirdcharLC =="z")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "eλ";
			}	
			else
			{	
				replchar = "eλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="r" && seccharLC =="a"  && thirdcharLC =="i")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "rλ";
			}	
			else
			{	
				replchar = "Rλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="r" && seccharLC =="a"  && thirdcharLC =="s")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "rā";
			}	
			else
			{	
				replchar = "Rā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="c" && seccharLC =="o"  && thirdcharLC =="n")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "kon";
			}	
			else
			{	
				replchar = "Kon";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="l" && seccharLC =="e"  && thirdcharLC =="z")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "lλ";
			}	
			else
			{	
				replchar = "Lλ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="e" && seccharLC =="u"  && thirdcharLC =="r")	//3						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "er";
			}	
			else
			{	
				replchar = "er";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 3;
		}
		else if(fstcharLC =="a" && seccharLC =="m"  && thirdcharLC =="i")	//3			
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ā-me";
			}	
			else
			{	
				replchar = "Ā-me";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="e" && seccharLC =="m"  && thirdcharLC =="[bp]")	//3			//SpecIaL
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ö";
			}	
			else
			{	
				replchar = "Ö";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="e" && seccharLC =="n"  && thirdcharLC =="[bcdfghjklmnpqrst]")	//3			//SpecaIaL
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ö";
			}	
			else
			{	
				replchar = "Ö";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="g" && seccharLC =="e"  && thirdcharLC =="[aou]")	//3			//SpecIaL
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "j";
			}	
			else
			{	
				replchar = "j";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="g" && seccharLC =="u"  && thirdcharLC =="[eiï]")	//3			//special
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "g-u";
			}	
			else
			{	
				replchar = "g-u";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="[bcdfghjklmnpqrstvwx]" && seccharLC =="i"  && thirdcharLC =="ng")	//3	//special		
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e-ŋ";
			}	
			else
			{	
				replchar = "E-ŋ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="[aeouy]" && seccharLC =="l"  && thirdcharLC =="l")	//3			//specail
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
			i = i+ 2;
		}
		else if(fstcharLC =="o" && seccharLC =="u"  && thirdcharLC =="[bcdfghjklmnpqrsille]")	//3		//special	
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
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="o" && seccharLC =="y"  && thirdcharLC =="[aeiou]")	//3			//special
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "u-ā";
			}	
			else
			{	
				replchar = "U-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="[aeiou]" && seccharLC =="s"  && thirdcharLC =="[aeiou]")	//3		//specail	
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "z";
			}	
			else
			{	
				replchar = "Z";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="s" && seccharLC =="c"  && thirdcharLC =="[ei]")	//3			//specail
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "s";
			}	
			else
			{	
				replchar = "S";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="[bcdfghjklmnpqrstvwx]" && seccharLC =="u"  && thirdcharLC =="[bcdfghjklpqrstvwx]")	//3		//specail	
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
			i = i+ 2;
		}
		else if(fstcharLC =="[bcdfghjklmnpqrstvwx]" && seccharLC =="u"  && thirdcharLC =="[aeioumn]")	//3			//special
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
			i = i+ 2;
		}
		else if(fstcharLC =="u" && seccharLC =="n"  && thirdcharLC =="[bcdfghjklmnpqrstvwx]")	//3			//special
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "a"; //nasel sound
			}	
			else
			{	
				replchar = "A";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="u" && seccharLC =="m"  && thirdcharLC =="[pb]")	//3			//special
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "a"; //nasel sound
			}	
			else
			{	
				replchar = "A";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="[bcdfghjklmnpqrstvwx]" && seccharLC =="y"  && thirdcharLC =="[bcdfghjklpqrstvwx]")	//3			//special
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e";
			}	
			else
			{	
				replchar = "E";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 2;
		}
		else if(fstcharLC =="a" && seccharLC =="i")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="d" && seccharLC =="u")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "đū";
			}	
			else
			{	
				replchar = "Ɖū";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="a" && seccharLC =="s")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="j" && seccharLC =="e")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "j";
			}	
			else
			{	
				replchar = "J";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="t" && seccharLC =="u")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧ-yu";
			}	
			else
			{	
				replchar = "Ŧ-yu";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="i" && seccharLC =="l")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "el";
			}	
			else
			{	
				replchar = "El";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="s")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "o-s";
			}	
			else
			{	
				replchar = "O-s";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="a" && seccharLC =="u")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="l" && seccharLC =="e")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="l" && seccharLC =="a")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "lā";
			}	
			else
			{	
				replchar = "Lā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="l" && seccharLC =="à")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "lā";
			}	
			else
			{	
				replchar = "Lā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="e" && seccharLC =="n")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ön";
			}	
			else
			{	
				replchar = "Ön";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="e" && seccharLC =="s")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λs";
			}	
			else
			{	
				replchar = "Λs";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="g" && seccharLC =="e")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "j";
			}	
			else
			{	
				replchar = "J";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="g" && seccharLC =="i")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "je";
			}	
			else
			{	
				replchar = "Je";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="ç" && seccharLC =="u")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "su";
			}	
			else
			{	
				replchar = "su";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="ç" && seccharLC =="â")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "sā";
			}	
			else
			{	
				replchar = "sā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="ç" && seccharLC =="o")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "so";
			}	
			else
			{	
				replchar = "so";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="a" && seccharLC =="î")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "Λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="v" && seccharLC =="u")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "vū";
			}	
			else
			{	
				replchar = "Vū";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="v" && seccharLC =="a")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "vā";
			}	
			else
			{	
				replchar = "Vā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="s" && seccharLC =="i")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "se";
			}	
			else
			{	
				replchar = "Se";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="c" && seccharLC =="e")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "s";
			}	
			else
			{	
				replchar = "S";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="j" && seccharLC =="'")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "j";
			}	
			else
			{	
				replchar = "J";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="t" && seccharLC =="'")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧ";
			}	
			else
			{	
				replchar = "Ŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="s" && seccharLC =="'")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "s";
			}	
			else
			{	
				replchar = "S";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="e" && seccharLC =="z")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "Λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="u")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="ù")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="i")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ūā";
			}	
			else
			{	
				replchar = "Ūa";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="e" && seccharLC =="é")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "Λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="i" && seccharLC =="r")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "er";
			}	
			else
			{	
				replchar = "Er";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="e" && seccharLC =="r")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "Λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="r" && seccharLC =="e")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "r";
			}	
			else
			{	
				replchar = "R";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="p" && seccharLC =="u")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "pū";
			}	
			else
			{	
				replchar = "Pū";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="p" && seccharLC =="i")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "pe";
			}	
			else
			{	
				replchar = "pe";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="g" && seccharLC =="u")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "g-ū";
			}	
			else
			{	
				replchar = "G-ū";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="a" && seccharLC =="n")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ön";
			}	
			else
			{	
				replchar = "Ön";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="e" && seccharLC =="m")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ön";
			}	
			else
			{	
				replchar = "Ön";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="a" && seccharLC =="m")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ön";
			}	
			else
			{	
				replchar = "Ön";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="i" && seccharLC =="n")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ān";
			}	
			else
			{	
				replchar = "Ān";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="u" && seccharLC =="n")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ān";
			}	
			else
			{	
				replchar = "Ān";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="i" && seccharLC =="m")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ān";
			}	
			else
			{	
				replchar = "Ān";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="n")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ö";
			}	
			else
			{	
				replchar = "Ö";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="m")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ö";
			}	
			else
			{	
				replchar = "Ö";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="e" && seccharLC =="t")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "Λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="a" && seccharLC =="y")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "Λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="b" && seccharLC =="b")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="b" && seccharLC =="h")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="c" && seccharLC =="a")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "k-ā";
			}	
			else
			{	
				replchar = "K-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="k" && seccharLC =="o")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "k-o";
			}	
			else
			{	
				replchar = "K-o";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="c" && seccharLC =="œ")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "k-a";
			}	
			else
			{	
				replchar = "K-a";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="c" && seccharLC =="e")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "s-e";
			}	
			else
			{	
				replchar = "S-e";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="c" && seccharLC =="i")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "s-e";
			}	
			else
			{	
				replchar = "S-e";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="c" && seccharLC =="h")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="c" && seccharLC =="k")	//2						
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
		else if(fstcharLC =="d" && seccharLC =="d")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "đ";
			}	
			else
			{	
				replchar = "Ɖ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="d" && seccharLC =="h")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "đ";
			}	
			else
			{	
				replchar = "Ɖ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="e" && seccharLC =="e")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e";
			}	
			else
			{	
				replchar = "E";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="e" && seccharLC =="i")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "Λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="e" && seccharLC =="y")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e";
			}	
			else
			{	
				replchar = "E";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="f" && seccharLC =="f")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="g" && seccharLC =="a")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "g-ā";
			}	
			else
			{	
				replchar = "G-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="g" && seccharLC =="o")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "g-o";
			}	
			else
			{	
				replchar = "G-o";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="g" && seccharLC =="y")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "j-e";
			}	
			else
			{	
				replchar = "j-e";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="k" && seccharLC =="h")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="d" && seccharLC =="e")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "đ";
			}	
			else
			{	
				replchar = "Ɖ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="l" && seccharLC =="h")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="m" && seccharLC =="m")	//2						
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
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="n" && seccharLC =="n")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="o")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="e")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "u-ā";
			}	
			else
			{	
				replchar = "U-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="ê")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "u-ā";
			}	
			else
			{	
				replchar = "U-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="œ" && seccharLC =="u")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "a";
			}	
			else
			{	
				replchar = "A";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="î")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "u-ā";
			}	
			else
			{	
				replchar = "u-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="û")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="o" && seccharLC =="y")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "u-ā";
			}	
			else
			{	
				replchar = "U-ā";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="p" && seccharLC =="p")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "p";
			}	
			else
			{	
				replchar = "P";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="p" && seccharLC =="h")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="q" && seccharLC =="u")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="r" && seccharLC =="r")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="r" && seccharLC =="h")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "r-h";
			}	
			else
			{	
				replchar = "r-h";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="s" && seccharLC =="h")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="s" && seccharLC =="s")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "s";
			}	
			else
			{	
				replchar = "S";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="t" && seccharLC =="t")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧ";
			}	
			else
			{	
				replchar = "Ŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="t" && seccharLC =="h")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧ";
			}	
			else
			{	
				replchar = "Ŧ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="w" && seccharLC =="h")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "w";
			}	
			else
			{	
				replchar = "W";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="x" && seccharLC =="h")	//2						
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
			i = i+ 1;
		}
		else if(fstcharLC =="z" && seccharLC =="z")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "z";
			}	
			else
			{	
				replchar = "z";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="a" && seccharLC =="c")	//2						
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "ak";
			}	
			else
			{	
				replchar = "Ak";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="g" && seccharLC =="[eiy]")	//2						//special char
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "j";
			}	
			else
			{	
				replchar = "J";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
			i = i+ 1;
		}
		else if(fstcharLC =="g" && seccharLC =="[aoubcdfghjklmnpqrstvwx]")	//2		//special char				
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
			i = i+ 1;
		}
		else if(fstcharLC =="i" && seccharLC =="[bcdfghjklmnpqrstvwx]")	//2		//specail char				
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
			i = i+ 1;
		}
		else if(fstcharLC =="i" && seccharLC =="[aeiou]")	//2					//specail char	
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e";
			}	
			else
			{	
				replchar = "E";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="ï" && seccharLC =="[bcdfghjklmnpqrstvwx]")	//2			//specail char			
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e";
			}	
			else
			{	
				replchar = "E";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="ï" && seccharLC =="[aeiou]")	//2			//specail char			
		{	

			if (myString[i] == fstcharLC)
			{
				replchar = "e";
			}	
			else
			{	
				replchar = "E";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
		else if(fstcharLC =="ï" && seccharLC =="[aeiou]")	//2			//special char			
		{	
			if (myString[i] == fstcharLC)
			{
				replchar = "e";
			}	
			else
			{	
				replchar = "E";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="v";
			i = i+ 1;
		}
				
	// French Special charecters 
	
	/* ---------------------------------------------------------------------------------------------------------------------- */
	// Ekalipi Consonants
	
		else if(fstcharLC =="ç")
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "s";
			}	
			else
			{	
				replchar = "s";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if( fstcharLC =="œ")				
		{	
			if (myString[i] == fstcharLC)
			{	
				replchar = "e";
			}
			else
			{
				replchar = "E";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}	
		else if(fstcharLC =="é") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "λ";
			}	
			else
			{	
				replchar = "Λ";
			}	
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		
		else if(fstcharLC =="â")
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
			currtype="c";
		}
		
		else if(fstcharLC =="ê") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "e";
			}	
			else
			{	
				replchar = "E";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="î") 
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
			currtype="c";
		}
	
		else if(fstcharLC =="ô") 
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
			currtype="c";
		}
		
		else if(fstcharLC =="û") 
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
			currtype="c";
		}
		else if(fstcharLC =="à") 
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
		else if(fstcharLC=="è") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "a";
			}	
			else
			{	
				replchar = "A";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		
		else if(fstcharLC =="ë") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "e";
			}	
			else
			{	
				replchar = "E";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		
		else if(fstcharLC =="ï")
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "e";
			}	
			else
			{	
				replchar = "e";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
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
			currtype="c";
		}
		else if(fstcharLC =="ù") 
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
			currtype="c";
		}
		// french alphabets and vowels 
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
		
		else if(fstcharLC =="c")											// (Rule 1)
		{
			replchar = "g";
			if ((seccharLC == "e")|| (seccharLC == "i") || (seccharLC == "y"))
			{	
				replchar = "se";
				i = i + 1;
			}
						// Replace with French consonant list	
			else if (/[bcdfghjklmnpqrstvwxyz]/.test(seccharLC)) 
			{
				replchar = "k";
			}
			else if ((seccharLC == "a") || (seccharLC == "o") || (seccharLC == "œ")||(seccharLC == "u") )
			{
				replchar = "k";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="d") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "d";
			}	
			else
			{	
				replchar = "D";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
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
				replchar = "j";
			}	
			else
			{	
				replchar = "J";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="h") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "ø";
			}	
			else
			{	
				replchar = "Ø";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="j") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "z";
			}	
			else
			{	
				replchar = "Z";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="k") 
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
		else if(fstcharLC =="l") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "l";
			}	
			else
			{	
				replchar = "l";
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
			currtype="c";
		}
		else if(fstcharLC =="n") 
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
				replchar = "p";
			}	
			else
			{	
				replchar = "P";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="q") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "q";
			}	
			else
			{	
				replchar = "Q";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="r") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "r";
			}	
			else
			{	
				replchar = "R";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="s") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "s";
			}	
			else
			{	
				replchar = "S";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="t") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "ŧ";
			}	
			else
			{	
				replchar = "Ŧ";
			}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="v") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "w";
			}	
			else
			{	
				replchar = "W";
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
				replchar = "k-s";
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
				replchar = "z";
			}	
			else
			{	
				replchar = "Z";
		 	}
			concatstr = concatstr.concat(replchar);
			currtype="c";
		}
		else if(fstcharLC =="a") 
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
		else if(fstcharLC =="e") 
		{
			if (myString[i] == fstcharLC)
			{
				replchar = "a";
			}	
			else
			{	
				replchar = "A";
			}
			concatstr = concatstr.concat(replchar);
			currtype="v";
		}
		else if(fstcharLC =="i") 
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
		    concatstr = concatstr.substring(0, concatstr.length-prValLen);
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
//				document.write("<br/>You entered Character at Position " + i + " is " + myString[i]);
//				document.write("<br /> It is neither an Ekalipi consonant,vowel or special allowed symbol. SKIPPED" );
			currchar = "u";
			console.log ("Letter not found. Add to parser  " + myString[i]);
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
	
		if (skipchar == "y") { }
		else if (currtype == "b") 
		{ 
			concatstr = concatstr.concat(replchar);
		}  
	// a consonant preceded by a dash (hyphen)
	//else if (currtype == "c" && prevtype == "c") {
		//concatstr= concatstr.concat("-").concat(ccVal); 
	//} 
	// a consonant preceded by a dash (hyphen)
		else if (currtype == "c" && prevtype == "c") 
		{
			concatstr= concatstr.concat("-").concat(replchar);
			}

	//else{
	//	concatstr = concatstr.concat(replchar);
	//}

//	prevchar = currchar;
	prevtype = currtype;
	prValLen = prevchar.length;	
	return [currchar, currtype, i];		
	// Store values for the next iteration of the loop	 
}