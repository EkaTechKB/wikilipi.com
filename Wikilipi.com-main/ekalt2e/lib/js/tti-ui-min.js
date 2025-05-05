var funname;
// UI Wrapper for TextToIPA 
var uimin = {
    // Dislays error message if a word isn't in the IPA dictionary
	undefMsg: "Some words you have entered cannot be found in the IPA dictionary.",
    
	// Displays error message if a word has multiple pronunciations
	multiMsg: "Some words you have entered have multiple pronunciations in english. These differences are seperated with 'OR'",
    
	// currently displayed error messages 
	currErrMsg: "",
    currMulMsg: "",
	
	//-->Normal Function or Basic Function  	
    // ResetErrMsgs function goes here. which display the current error messages
    resetErrMsgs: function()
	{
		this.currErrMsg = "";
		this.currMulMsg = "";
	},
    
	// UpdateMsgs Function goes here . Update the DOM to show the current error messages
    updateMsgs: function()
	{
		document.getElementById("err-out").innerHTML = "<p>" + this.currErrMsg + " " + this.currMulMsg + "</p>";
	},
	
    // Output the converted IPA text to the DOM 
    updateTextarea: function(IPAText)
	{
		document.getElementById("ipa-out").value = IPAText
		
	},
	updateipabox: function(dbgText){
		document.getElementById("ipa-box").value = dbgText
	},
	
	//TODO: Strip and reinsert punctuation
	// Convert language from a form and output the IPA from TextToIPA to another form
	
	
	//--> Main Function
	convert: function(language, flagLang, word_not_found){
		// Reset the error messages
		this.resetErrMsgs();
		// Resulting array of IPA text words
		var langConditions = false;
		var IPAText = [];
		var dbgText = [];
		// Get the input 
		if( typeof word_not_found !== 'undefined'){
			var origText = word_not_found;
		}else{
			var origText = document.getElementById("ipa-in").value;
		}
		
		//Replace "\n" to "~"
		var englishTextRep = origText.replace(/\n/g, "~ ");
		// Create an array of individual words
		var englishText = englishTextRep.split(/\s+/g);
		
		
		// Process each individual word
        for (var i = 0; i < englishText.length; i++){
			var singWordString = englishText [i];
			var wordlen = singWordString.length;
			var sendWordforParse = "";
			var sentWordforIPA = "";
			var ipaParse = "";
			
		// Separate word into prefix main word and suffix
		
			//  Prefix 
			var strForward = singWordString;
			var indexToSearchFrom = 0;
			var preIndexLen = 0;
			var preIndex = strForward.substring(indexToSearchFrom).search(/[A-Za-z0-9]/);
			var wordPrefix = ""			
			if  (preIndex > 0) 
			{
				wordPrefix = strForward.substr(0, preIndex);
				preIndexLen = preIndex;
			}	
			
			// Suffix	
			var strReverse = strForward.split('').reverse().join(''); // 'lkjhgfdsa'
			//split() returns an array on which reverse() and join() can be applied
			var indexToSearchFrom = 0;
			var postIndexLen = 0;
			var postIndex = strReverse.substring(indexToSearchFrom).search(/[A-Za-z0-9]/);
			var wordSuffix = "";
			var wordSuffixReverse = "";
			if  (postIndex > 0)
			{
				wordSuffixReverse = strReverse.substring(0, postIndex);
				wordSuffix = wordSuffixReverse.split('').reverse().join(''); 
				postIndexLen = postIndex;
			}
			
			// Main Word	
			//--> Note - substr instead of substring gives the right result here
			var singWordNetLength = (wordlen - preIndexLen - postIndexLen);
			singWordString = strForward.substr(preIndexLen,singWordNetLength);
			
			// See if the first letter of the main word is a capital letter
			var ucaseFlag = "N";
			if (typeof singWordString[0] !== 'undefined') 
			{
                if  (singWordString[0] === singWordString[0].toUpperCase())
				{
			  	    ucaseFlag = "Y";
				} 
				else
				{
					//console.log ("type of b[0] is undefined. b is " + b);
				}
			}
			funname = "Parse";
			funname += language;
			// Does main word contain any alphabetic characters?	
		    //--> Its For English Language
			if (flagLang)
            {
                if (/[A-Za-z]/.test(singWordString)) 
			    { // If main word is not all uppercase	
				    if ((singWordString !== singWordString.toUpperCase()) || (singWordNetLength == 1)) 
                    {	
						// word contain lower case alphabetic characters	   
					    sentWordforIPA = singWordString.toLowerCase();
					    // call the external function text-to-eka	
					    var	IPAWordArr = TextToEKA.lookup(sentWordforIPA);
					    // If the word is not found in the IPA dictionary, look for it in the EKA dictionary
					    if (typeof IPAWordArr[0] !== "undefined")
					    {
						    // Use the EKA word
						    ipaParse = IPAWordArr[1];
						    sendWordforParse =  IPAWordArr[1];
					    }	
					    else
                        {
							// call the external function text-to-ipa	
						    IPAWordArr = TextToIPA.lookup(sentWordforIPA);	 
						    if (typeof IPAWordArr[0] !== "undefined") 
                            {						
							    ipaParse = IPAWordArr[1];
							    window[funname](ipaParse); 
							    sendWordforParse = concatstr;
							    concatstr ="";
							    prevtype = "";
						    }  
						    else
                            {		
								// Push plain text instead of IPA or EKA
							    ipaParse = sentWordforIPA;
								window[funname](sentWordforIPA); 
								sendWordforParse = "[" + concatstr + "]";sendWordforParse = "[" + concatstr + "]";
								concatstr = "";
								prevtype = "";
						    }
					    }		
					
					    if (ucaseFlag === "Y")
                        {	
						    var firstLetter = sendWordforParse.charAt(0);
						    var uppercaseFirstLetter = sendWordforParse.charAt(0).toUpperCase();
						    var stringWithoutFirstLetter = sendWordforParse.slice(1);
						    sendWordforParse = uppercaseFirstLetter + stringWithoutFirstLetter;
					    }	
					    IPAText.push(wordPrefix + sendWordforParse + wordSuffix);
					    dbgText.push(wordPrefix + ipaParse + wordSuffix); 
				    }	
				    else
                    {
						IPAText.push(wordPrefix +singWordString+ wordSuffix);
						dbgText.push(wordPrefix +singWordString+ wordSuffix);
				    }
                
                } 
            } 
            else
            {
                sentWordforIPA = singWordString; 					// temporary code
                
                var	IPAWordArr = TextToEKA.lookup(sentWordforIPA);
				// If the word is not found in the IPA dictionary, look for it in the EKA dictionary
				if (typeof IPAWordArr[0] !== "undefined")
				{
					// Use the EKA word
					ipaParse = IPAWordArr[1];
					sendWordforParse =  IPAWordArr[1];
				}	
				else
                {
					IPAWordArr = TextToIPA.lookup(sentWordforIPA);	 
					if (typeof IPAWordArr[0] !== "undefined") 
                    {						
						ipaParse = IPAWordArr[1];
						//window[funname](ipaParse); 
						sendWordforParse = sentWordforIPA;
						concatstr ="";
						prevtype = "";
					}  
					else
                    {		
						// Push plain text instead of IPA or EKA
						ipaParse = sentWordforIPA;
						window[funname](sentWordforIPA); 
						sendWordforParse = concatstr ;
						concatstr = "";
						prevtype = "";
					}
				}		
                IPAText.push(wordPrefix + sendWordforParse + wordSuffix);
				dbgText.push(wordPrefix + ipaParse + wordSuffix);    
			}
        
		}
		
        // Turn the array to a sentence, and update the DOMbox
		// Add an extra space after the word  
		IPAText = IPAText.join(" "); 
		// Replace "~" to "\n"
		IPAText = IPAText.replace(/~/g , "\n");
		// 8209 is for unbreakable hyphen
	   //This is normally used when we convert marathi into ekalipi. eg->[लक्षात ठेवा  ]    To [lak-s-hāŧ t-hλwā]
		IPAText = IPAText.replace(/-/g, String.fromCharCode(8209)); 
		
		if($("#IsStressShow").is(':checked'))      
		{				
			// Do nothing, show the stress chars in the output
		}
		else 
		{
			// Remove the stress characters 
			IPAText = IPAText.replace(/ˈ/g,"");                   
		}
		
		  
		if($("#IsConjunctShow").is(':checked'))      
		{				
			// Do nothing, show the conjunct consonants explicitly
		}
		else 
		{
			// Remove the explicit conjunct characters i.e unbreakable hyphen (-)
			IPAText = IPAText.replace(/‑/g,"");        
		}
		
		dbgText = dbgText.join(" ");
		dbgText = dbgText.replace(/~/g , "\n");
		dbgText = dbgText.replace(/-/g, String.fromCharCode(8209));
		
		console.log("English Text is:" + englishText);
		console.log("</br> dbg Value is: " + dbgText);

		if(word_not_found != undefined){
			return IPAText;
		}else{
			this.updateTextarea(IPAText);
			this.updateipabox(dbgText);
			this.updateMsgs();
		}

    }
}