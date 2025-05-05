                                                var concatstr = "";                                                         
						var prevchar = "";      
						var currchar = "";       
						var prevtype = ""; 
						var currtype = ""; 
						var ccVal="";
						var prVal="";
						
						
		// Array of sound ids (used by the chain function)
					    var ekalist = new Array();
					    
				
				 function EkaTTSMain(){
                                                  
					var myString = document.getElementById("search_field").value;
					inplen = myString.length;
					console.log("Entered String is:" + myString);
					console.log("<br/>Entered String length is:" + inplen);
					document.getElementById("ErrMsg").value +=  "Conversion in progress.."  ; 
	
				// Returned value from EkaTTSInsertSound
                    var result = "";	
<!--var i = 0-->
            	
		
<!--Parsing logic starts here
	// We use the Unicode value if the character is not recognixed by
	// Notepad++, the browser or contains a special character (like \)
	// Upper case letters are converted to lower case.
	//Note - I think this should be a separate called function and 
	// only the function call should go here.
	// Begin Parsing of input here -->
				
			for(i = 0; i < myString.length; i++) {                                      
		 	    EkaTTSParse(i, myString);
			    EkaTTSConcatCreate(i, inplen, currtype, ccVal);
<!--EkaTTSConcatCreate(i, inplen, currtype, ccVal, concatstr, prVal, prevtype); -->
			}
				document.getElementById("ErrMsg").value +=  "\nSound Files Loaded."  ;
				chain(ekalist[0]);
		}

			function EkaTTSConcatCreate(i, inplen, currtype, ccVal) {
			
			// OUTPUT logic begins here 
			function EkaTTSInsertSound(concatstr, i, ekalist){
	
				cncFile = "/MySounds/" + concatstr;
				cncFile = cncFile.concat(".mp3");
				var result = "";
	

			function doesFileExist(urlToFile) {

				var xhr = new XMLHttpRequest();
				xhr.open('HEAD', urlToFile, false);
				xhr.send();
     
				if (xhr.status == "404") {
					return false;
				} else {
					return true;
		        }
			}
    
	
			result = doesFileExist(cncFile);
			if (result == true) {
				//document.getElementById("ErrMsg").value += "\n file " + cncFile + " exists";
				console.log ( "\n file " + cncFile + " exists");
				var idstring = ekalist.push("eka" + i);
				console.log("<br> new ekalist is : " + ekalist ); 
		
			var d = cncFile;                  
			var mySound1 = soundManager.createSound({
				id: "eka" + i,
				url : d,
				onload: function() {
					soundManager._writeDebug(this.id + ' loaded');
						this.play();
				}
		
			})
			} else {
				document.getElementById("ErrMsg").value += "\nfile " + cncFile + " not found - not loaded";
				//console.log ("\nfile " + cncFile + " not found - not loaded")
       }
	}
   
					if (currtype == "u") { }
		// bypass unrecognized character
					
					// a consonant preceded by a dash (hyphen)
					else if (currtype == "c") {
					        if (prevtype == "d") {		
	//							concatstr= concatstr.concat(ccVal); 
					         } 
					// A consonant preceded by a non-dash character 
					        else if (prevtype == "c" || prevtype == "v" || prevtype == "s" || prevtype == "n" || prevtype == "u") {	
								if (concatstr !== "") {
								console.log("</br>concat string is " + concatstr+"\n</br>");
								EkaTTSInsertSound(concatstr, i, ekalist);
								}						       
								concatstr = "";
							}
						concatstr = concatstr.concat(ccVal);
					}
					// A vowel
					else if (currtype == "v") {
							if (prevtype == "s" || prevtype == "u") {	
								if (concatstr !== "") {
								console.log("</br>concat string is " + concatstr+"\n</br>");
									EkaTTSInsertSound(concatstr, i, ekalist);
								}						       
								concatstr = "";
							}
						concatstr = concatstr.concat(ccVal); 
					}
					// A dash preceded by a consonant
					else if (currtype == "d") {
					         if (prevtype == "c") {
   						         concatstr= concatstr.concat(ccVal); 
                             }								 
					     }
					// The Ekalipi null character
					else if (currtype == "n" ) {
						concatstr = concatstr.concat(ccVal);
					}	
		// A special character 
					else if (currtype == "s") {
						        if (concatstr !== "") {
									console.log("</br>concat string is " + concatstr+"\n</br>" );
									EkaTTSInsertSound(concatstr, i, ekalist);
						        }    
						concatstr = "";
						if  (currchar !== " ") {
						    concatstr = concatstr.concat(ccVal);
					    }
					}
		
					
		
		
		
					
					if  (i == inplen - 1)	{
					    if  (concatstr !== "") {
							console.log("</br>concat string is " + concatstr+"\n</br>"); 
//Bump up the eka id by 1 so that we do not create a duplicate. A duplicate id puts the chain function in an infinite loop.							गलजताल
							EkaTTSInsertSound(concatstr, i+1, ekalist);
					    }
					}
// Store values for the next iteration of the loop	
						   prevchar = currchar;
						   prVal    = ccVal;
						   prevtype = currtype;   
					       return (concatstr, prevtype, prVal);
                }	  
            function EkaTTSParse(i,myString) {
					currchar = myString[i] ;
	
					
			// Ekalipi vowels
					// unicode decimal for Aa. 
				if (myString[i] ==String.fromCharCode(257)){
					currchar = myString[i];
					ccVal = String.fromCharCode(257);
					currtype= "v";
					}
					// unicode decimal for  Capital letter Aa 
					else if(myString[i]==String.fromCharCode(256)){
						currchar = myString[i];
						ccVal = String.fromCharCode(257);
						currtype= "v";
					}
					else if(myString[i]=="@"){
						currchar = myString[i];
						ccVal = "@";
						currtype= "v";
					}
					// unicode decimal for Au.
					else if (myString[i]==String.fromCharCode(229)){
						currchar = myString[i];
						ccVal = String.fromCharCode(229);
						currtype= "v";
					}
					//unicode for decimal for Capital Au
					else if(myString[i]==String.fromCharCode(8491)){
						currchar = myString[i];
						ccVal=String.fromCharCode(229);
						currtype= "v";
					}
					// unicode decimal for Capital Delta Ai. 
					else if(myString[i]==String.fromCharCode(916)){
					    currchar = myString[i];
						ccVal=String.fromCharCode(916);
						currtype= "v";
					}
					// Decimal code for soft t.
					else if(myString[i]==String.fromCharCode(359)){
						currchar = myString[i]; 
						ccVal = String.fromCharCode(359); 
						currtype= "c";
					}
					//Decimal code for capital T
					else if(myString[i]==String.fromCharCode(358)){
						currchar = myString[i]; 
						ccVal = String.fromCharCode(359); 
						currtype= "c";
					}
					// unicode decimal for ö.
					else if(myString[i]==String.fromCharCode(246)){
						currchar = myString[i];  
						ccVal = String.fromCharCode(246);  
						currtype= "v";
					}
					// unicode decimal for capital Ö.
					else if(myString[i]==String.fromCharCode(214)){
						currchar = myString[i];
						ccVal = String.fromCharCode(246);  						
						currtype= "v";
					}
					// unicode decimal for u line above.
					else if(myString[i]==String.fromCharCode(363)){
						currchar = myString[i];
						ccVal = String.fromCharCode(363);
						currtype= "v";
					} 
					// unicode decimal for capital u w?th line above.
					else if(myString[i]==String.fromCharCode(362)){
						currchar = myString[i];
						ccVal = String.fromCharCode(363);
						currtype= "v";
					} 
					 
					else if(myString[i]=="λ"){
						currchar = myString[i];
						ccVal="λ";
						currtype= "v";
					}
					// Decimal code for  ø
					else if(myString[i]==String.fromCharCode(248)){
						currchar = myString[i];
						ccVal = String.fromCharCode(248);
						currtype= "n";
					}
					else if(myString[i]==String.fromCharCode(216)){
						currchar = myString[i];
						ccVal = String.fromCharCode(248);
						currtype= "n";
					}
					else if(myString[i]=="a"){
						currchar =myString[i];
						ccVal="a";
						currtype= "v";
					}
					else if(myString[i]=="A"){
						currchar =myString[i];
						ccVal="a";
						currtype= "v";
					}
					else if(myString[i]=="e"){
						currchar =myString[i]; 
						ccVal="e";
						currtype= "v";
					} 
					else if(myString[i]=="E"){
						currchar = myString[i]; 
						ccVal="e";
						currtype= "v";
					}
					else if(myString[i]=="o"){
						currchar = myString[i]; 
						ccVal="o";
						currtype= "v";
					}
					else if(myString[i]=="O"){
						currchar = myString[i];
						ccVal="o";
						currtype= "v";
					}
					else if(myString[i]=="u"){
						currchar = myString[i]; 
						ccVal="u";
						currtype= "v";
					} 
					else if(myString[i]=="U"){
						currchar = myString[i];  
						ccVal="u";
						currtype= "v";
					}
					else if(myString[i]=="-"){
						currchar = myString[i];  
						ccVal="-";
						currtype= "d";
					} 
					// change unbreakable hyphen back to regular hyphen
					else if(myString[i]==String.fromCharCode(8209)){
						currchar = myString[i];  
						ccVal="-";
						currtype= "d";
					} 
					  
			// Ekalipi Consonants
					// Decimal code for soft d.
					else if(myString[i]==String.fromCharCode(273)){
						currchar = myString[i]; 
						ccVal=String.fromCharCode(273);
						currtype= "c";
					}
					// Decimal code for soft Capital d.
					else if(myString[i]==String.fromCharCode(393)){
						currchar = myString[i];
						ccVal=String.fromCharCode(273);
						currtype= "c";
					}

					else if(myString[i]=="w"){
						currchar = myString[i];
						ccVal="w";
						currtype= "c";
					}
					else if(myString[i]=="W"){
						currchar = myString[i];
						ccVal="w";
						currtype= "c";
					}
					else if(myString[i]=="r"){
						currchar =myString[i]; 
						ccVal="r";
						currtype= "c";
					}
					else if (myString[i]=="R"){
						currchar =myString[i]; 
						ccVal="r";
						currtype= "c";
					}
					else if(myString[i]=="t"){
						currchar = myString[i];  
						ccVal="t";
						currtype= "c";
					}
					else if(myString[i]=="T"){
						currchar = myString[i];
						ccVal="t";
						currtype= "c";
					}
					else if(myString[i]=="y"){
						currchar = myString[i]; 
						ccVal="y";
						currtype= "c";
					}
					else if(myString[i]=="Y"){
						currchar = myString[i];  
						ccVal="y";
						currtype= "c";
					}
					// Decimal code for soft j.
					  else if(myString[i]==String.fromCharCode(585)){
						currchar = myString[i];  
						ccVal=String.fromCharCode(585);
						currtype= "c";
					}
					// Decimal code for soft capital j.
					else if(myString[i]==String.fromCharCode(584)){
						currchar = myString[i];
						ccVal=String.fromCharCode(585);
						currtype= "c";
					}
					else if(myString[i]=="p"){
						currchar = myString[i];
						ccVal="p";
						currtype= "c";
					}
					else if(myString[i]=="P"){
						currchar = myString[i];
						ccVal="p";
						currtype= "c";
					}
					// Decimal code for hard n.
					else if(myString[i]==String.fromCharCode(1083)){
						currchar = myString[i];
						ccVal=String.fromCharCode(1083);
						currtype= "c";
					}
					// Decimal code for hard capital Nn
					else if(myString[i]==String.fromCharCode(1051)){
						currchar = myString[i];
						ccVal=String.fromCharCode(1083);
						currtype= "c";
					}
					// Decimal code for small phi.
					else if(myString[i]==String.fromCharCode(966)){
						currchar = myString[i];
						ccVal=String.fromCharCode(966);
						currtype= "c";
					}
					// Decimal code for capital  phi.
					else if(myString[i]==String.fromCharCode(1060)){
						currchar = myString[i];
						ccVal=String.fromCharCode(966);
						currtype= "c";
					}	
					else if(myString[i]=="s"){
						currchar = myString[i];
						ccVal="s";
						currtype= "c";
					}
					else if(myString[i]=="S"){
						currchar = myString[i];  
						ccVal="s";
						currtype= "c";
					}
					else if(myString[i]=="d"){
						currchar = myString[i]; 
						ccVal="d";
						currtype= "c";
					}
					else if(myString[i]=="D"){
						currchar = myString[i];				
						ccVal="d";
						currtype= "c";
					}
					else if(myString[i]=="f"){
						currchar = myString[i];
						ccVal="f";
						currtype= "c";
					}
					else if(myString[i]=="F"){
						currchar = myString[i];											 
						ccVal="f";
						currtype= "c";
					}
					else if(myString[i]=="g"){
						currchar = myString[i];  
						ccVal="g";
						currtype= "c";
					}
					else if(myString[i]=="G"){
						currchar = myString[i];
						ccVal="g";
						currtype= "c";
					}
					else if(myString[i]=="h"){
						currchar = myString[i];
						ccVal="h";
						currtype= "c";
					}
					else if(myString[i]=="H"){
						currchar = myString[i]; 
						ccVal="h";
						currtype= "c";
					}
					else if(myString[i]=="j"){
						currchar = myString[i]; 
						ccVal="j";
						currtype= "c";
					}
					else if(myString[i]=="J"){
						currchar = myString[i];
						ccVal="j";
						currtype= "c";
					}
					else if(myString[i]=="k"){
						currchar = myString[i];
						ccVal="k";
						currtype= "c";
					}
					else if(myString[i]=="K"){
						currchar = myString[i];
						ccVal="k";
						currtype= "c";
					}
					else if(myString[i]=="l"){
						currchar = myString[i]; 
						ccVal="l";
						currtype= "c";
					}
					else if(myString[i]=="L"){
						currchar = myString[i];
						ccVal="l";
						currtype= "c";
					}
					else if(myString[i]=="z"){
						currchar = myString[i];
						ccVal="z";
						currtype= "c";
					}
					else if(myString[i]=="Z"){
						currchar = myString[i];
						ccVal="z";
						currtype= "c";
					}
					// Decimal code for soft c.
					else if(myString[i]==String.fromCharCode(269)){
						currchar = myString[i]; 
						ccVal=String.fromCharCode(269); 
						currtype= "c";
					}
					// Decimal code for Capital c.
					else if(myString[i]==String.fromCharCode(268)){
						currchar = myString[i];
						ccVal=String.fromCharCode(269); 
						currtype= "c";
					}
					else if(myString[i]=="c"){
						currchar = myString[i];
						ccVal="c";
						currtype= "c";
					}
					else if(myString[i]=="C"){
						currchar = myString[i];
						ccVal="c";
						currtype= "c";
					}
					else if(myString[i]=="v"){
						currchar = myString[i]; 
						ccVal="v";						
						currtype= "c";
					}
					else if(myString[i]=="V"){
						currchar = myString[i];
						ccVal="v";
						currtype= "c";
					}
					else if(myString[i]=="b"){
						currchar = myString[i];
						ccVal="b";
						currtype= "c";
					}
					else if(myString[i]=="B"){
						currchar = myString[i];
						ccVal="b";
						currtype= "c";
					}
					else if(myString[i]=="n"){
						currchar = myString[i]; 
						ccVal="n";
						currtype= "c";
					}
					else if(myString[i]=="N"){
						currchar = myString[i]; 
						ccVal="n";
						currtype= "c";
					}
					else if(myString[i]=="m"){
						currchar = myString[i];
						ccVal="m";
						currtype= "c";
					}
					else if(myString[i]=="M"){
						currchar = myString[i];
						ccVal="m";
						currtype= "c";
					}
			// Non-Ekalipi characters	
					else if(myString[i]=="="){
						currchar = myString[i];
						ccVal="=";
						currtype= "s";
					}
					else if(myString[i]=="_"){
						currchar = myString[i];
						ccVal="_";
						currtype= "s";
					}
					else if(myString[i]=="+"){
						currchar = myString[i];
						ccVal="+";
						currtype= "s";
					}
			// Non-Ekalipi characters found on a qwerty	keyboard
					else if(myString[i]=="q"){
						currchar = myString[i]; 
						ccVal = "k-yu";
						currtype= "c";
					}
					else if(myString[i]=="Q"){
						currchar = myString[i];
						 ccVal = "k-yu"; 
						 currtype= "c";
					}
					else if(myString[i]=="i"){
						currchar = myString[i]; 
						ccVal="String.fromCharCode(257) + y";
						currtype= "c";
					}
					else if(myString[i]=="I"){
						currchar = myString[i]; 
						ccVal="(String.fromCharCode(257)) + y";
						currtype= "c";
					}
			// More keyboard special characters
					else if(myString[i]==" "){
						currchar = myString[i];
						ccVal="blank";
						currtype= "s";
					}
					else if(myString[i]==","){
					//console.log("<br/>You entered String is " + myString[i]);
					//console.log("<br /> Not Recognised character" );
						 currchar = myString[i];
						 ccVal="comma";
						 currtype= "s";
					}
					else if(myString[i]=="."){
					//console.log("<br/>You entered String is " + myString[i]);
					//console.log("<br /> Not Recognised character" );
						currchar = myString[i];
						ccVal="fullstop";
						currtype= "s";
					}
					else if(myString[i]=="?"){
					//console.log("<br/>You entered String is " + myString[i]);
					//console.log("<br /> Not Recognised character" );
						currchar = myString[i];
						ccVal="quest";
						currtype= "s";
					}
			// An unexpected character was entered
					else{
						console.log("<br/>You entered Character at Position " + i + " is " + myString[i]);
						console.log("<br /> It is neither an Ekalipi consonant,vowel or special allowed symbol. SKIPPED" );
						currchar = "u";
					}
					return (currchar, ccVal, currtype);
				}	

				var chain = function (idstring) {                                           
			soundManager.play(idstring, { 
			 multiShotEvents: true,
			onfinish: function () {
			var index = ekalist.indexOf(idstring);
			if (ekalist[index + 1] !== undefined) {
				chain(ekalist[index + 1]);
							}
						}
					});
				};   
				
				
				
				