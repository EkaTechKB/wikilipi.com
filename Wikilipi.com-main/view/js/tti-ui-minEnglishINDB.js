'use strict';

// UI Wrapper for TextToIPA
var uimin = {
				// Error message if a word isn't in the IPA dictionary
	
				undefMsg: "Some words you have entered cannot be found in the IPA dictionary.",
				// Error/Warning message if a word has multiple pronunciations
				multiMsg: "Some words you have entered have multiple pronunciations in english. These differences are seperated with 'OR'",
				// Currently displayed error messages
	
				currErrMsg: "",
				currMulMsg: "",
	 
				append: function()
				{
					var fs = require('fs');
 
					var data = "\n Append the data to txt file..";
 
					// append data to file
					fs.appendFileSync('saveErrorMsg.txt',data, 'utf8');
					console.log("Data is appended to file successfully.")
				},	
	
				// Reset the currently displayed error messages
				resetErrMsgs: function() 
				{
					this.currErrMsg = "";
					this.currMulMsg = "";
				},
				// Update the DOM to show the current error messages
				updateMsgs: function() 
				{
					document.getElementById("err-out").innerHTML = "<p>" + this.currErrMsg + " " + this.currMulMsg + "</p>";
					/*var fso = new ActiveXObject("Scripting.FileSystemObject");
					var fh = fso.OpenTextFile("D:\\data.txt", 8, false, 0);
						fh.WriteLine( this.currErrMsg + '/n');
						fh.Close();*/
				},
				// Output the converted IPA text to the DOM
	 
				updateTextarea: function(IPAText) 
				{
					document.getElementById("search_field").value = IPAText
				},
				updateipabox: function(dbgText) 
				{
					document.getElementById("ipa-box").value = dbgText
				},
	
				//TODO: Strip and reinsert punctuation
				// Convert english from a form and output the IPA from TextToIPA to another form
				convert: function()
				{
					// Reset the error messages
					this.resetErrMsgs();
					// Resulting array of IPA text words
					var IPAText = [];
					var dbgText = [];
	
					// Get the input from a form
					var origText = document.getElementById("ipa-in").value;
					var englishTextRep = origText.replace(/\n/g, "~ ");
					// Create an array of individual words
					var englishText = englishTextRep.split(/\s+/g);
		
					// Process each individual word
					for (var i = 0; i < englishText.length; i++) 
					{
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
						// split() returns an array on which reverse() and join() can be applied
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
						// Note - substr instead of substring gives the right result here
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
								//	console.log ("type of b[0] is undefined. b is " + b);
							}
						}
			
						// Does main word contain any alphabetic characters?	
						if (/[A-Za-z]/.test(singWordString)) 
						{
							// If main word is not all uppercase	
							if ((singWordString !== singWordString.toUpperCase()) || (singWordNetLength == 1))
							{	
								// characters are alphabetic	   
								sentWordforIPA = singWordString.toLowerCase();
								// call the external function text-to-eka	
			
	<?php
	

					include_once("../post_api/db-config.php");
					$sentWordforIPA = "<script language=javascript>document.write(sentWordforIPA);</script>";
					
					$sendWordforParse = "<script language=javascript>document.write(sendWordforParse);</script>";
					
					$sql1 = "SELECT * FROM EKA_WORD_TABLE WHERE C_ENGLISH='$sentWordforIPA'";
	
					$result = mysqli_query($conn, $sql1);
					if (mysqli_num_rows($result) > 0) 
					{
						while($row = mysqli_fetch_assoc($result))
						{
							$sendWordforParse = $row['C_EKALIPI'];
						}
						<script type="text/javascript">
							sendWordforParse = <?php echo $sendWordforParse ?>; 
							console.log(sendWordforParse);
						</script>
					}
					else 
					{		
						// word not found in database
						<script type="text/javascript">
							ipaParse = sentWordforIPA;
							ParseEnglishIN(sentWordforIPA);
							sendWordforParse = "[" + concatstr + "]";
							concatstr = "";
							prevtype = "";
						</script>
					}
					
					<script type="text/javascript">									
		
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
					dbgText.push(wordPrefix + singWordString + wordSuffix);
				}
			} 
			else 
			{
				IPAText.push(wordPrefix +singWordString+ wordSuffix);
				dbgText.push(wordPrefix + singWordString + wordSuffix);
			}	
		}
		// Turn the array to a sentence, and update the DOMbox
		// Add an extra space after the word  
		IPAText = IPAText.join(" "); 
		IPAText = IPAText.replace(/~/g , "\n");
		IPAText = IPAText.replace(/-/g, String.fromCharCode(8209));
							
		if($("#IsStressShow").is(':checked'))      
		{				
			// Do nothing, show the stress chars in the output
		}
		else 
		{
			IPAText = IPAText.replace(/ˈ/g,"");                   // Remove the stress characters 
		}
					
		if($("#IsConjunctShow").is(':checked'))      
		{				
			IPAText = IPAText.replace(/‑/g,"");        // Remove the explicit conjunct characters String.fromCharCode(8209)
		}
		else 
		{
			//IPAText = IPAText.replace(/‑/g,"");        // Remove the explicit conjunct characters String.fromCharCode(8209)
		}

		dbgText = dbgText.join(" ");
		dbgText = dbgText.replace(/~/g , "\n");
		dbgText = dbgText.replace(/-/g, String.fromCharCode(8209));
		
		console.log("English Text is:" + englishText);
		console.log("</br> dbg Value is: " + dbgText);
					
					
		this.updateTextarea(IPAText);
		this.updateipabox(dbgText);		   
		this.updateMsgs();
					

					
	}	
}
