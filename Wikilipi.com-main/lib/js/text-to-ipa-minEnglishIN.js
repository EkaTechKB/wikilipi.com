'use strict';

var TextToIPA = {
//						location: './/ekaIPAdictEngIN.txt', 
					location: '.../ekalt2e/ekaIPAdictEngUS.txt', 
					//       location: './/lib//js//ipadict.txt', 
					// Probably should use json, but this dictionary will do  //need double quote here because it cannot find the source file.
					ipadict: {}, // Empty IPA dict, gets updated on window load

					// Parse array from read file to the dictionary
					parseDict: function (lines) 
					{
						console.log("beginning IPA parsing to dict...");

						for (var i = 0; i < lines.length; i++) 
						{
							var arr = lines[i].split(/\s+/g);
							this.ipadict[arr[0]] = arr[1];
						}
						console.log("done IPA parsing");
					},

					// Loads dictionary to object for lookups
					// MUST run when page is loaded, or this entire thing is useless
					loadDict: function () 
					{
						console.log('loading IPA dict...');

						var txtFile = new XMLHttpRequest();

						txtFile.open('GET', this.location, true);

						txtFile.onreadystatechange = function() 
						{
							if (txtFile.readyState == 4) 
							{  // document is ready to parse.
								if (txtFile.status == 200 || txtFile.status == 0) 
								{  // file is found
									TextToIPA.parseDict(txtFile.responseText.split("\n"));
									console.log('IPA dict found ...');
								}
							}
						}
						txtFile.send(null);
					},
					// Lookup a word in a dictionary
					// Returns array of type of word pronunciation and the word
					lookup: function (word) 
					{
						// It is possible to return undefined, so that case should not be ignored
						if ( typeof this.ipadict[word] != "undefined" ) 
						{
			 
							// Some words in english have multiple pronunciations (maximum of 4 in this dictionary)
							// TODO: I think there's a better way of doing this
							if ( typeof this.ipadict[word + "(1)"] != "undefined" ) 
							{
								if ( typeof this.ipadict[word + "(2)"] != "undefined" ) 
								{
									if ( typeof this.ipadict[word + "(3)"] != "undefined" ) 
									{
										console.log ("Word '" + word + "' has 4 pronunciations: ", 
										this.ipadict[word] + " OR " + this.ipadict[word + "(1)"] + " OR " + 
										this.ipadict[word + "(2)"] + " OR " + this.ipadict[word + "(3)"]);
										//	document.getElementById("err-out").value += "Word '" + word + "' has 4 pronunciations: "  +
										//	this.ipadict[word] + " OR " + this.ipadict[word + "(1)"] + " OR " + 
										//	this.ipadict[word + "(2)"] + " OR " + this.ipadict[word + "(3)"] + "\n" ;	
										return ["multi", this.ipadict[word]]
									} 
									else 
									{
										console.log ("Word '" + word + "' has 3 pronunciations: ", 
										this.ipadict[word] + " OR " + this.ipadict[word + "(1)"] + " OR " + 
										this.ipadict[word + "(2)"]);
										//	document.getElementById("err-out").value += "Word '" + word + "' has 3 pronunciations: " + 
										//	this.ipadict[word] + " OR " + this.ipadict[word + "(1)"] + " OR " + 
										//	this.ipadict[word + "(2)"] + "\n" ; 
										return ["multi", this.ipadict[word]]
									}
								} 
								else 
								{
									console.log ("Word '" + word + "' has 2 pronunciations: " + 
									this.ipadict[word] + " OR " + this.ipadict[word + "(1)"]);
									//  document.getElementById("err-out").value += "Word '" + word + "' has 2 pronunciations: " + 
									//	this.ipadict[word] + " OR " + this.ipadict[word + "(1)"] + "\n" ;  
									return ["multi", this.ipadict[word]]
								}
							} 
							else 
							{ 
								return ["normal", this.ipadict[word]]
							}
						} 
						else 
						{
							console.log ("Word '" + word + "' not found in dictionary- " + this.ipadict[word]);
//							document.getElementById("err-out").value += "Word '" + 	word + "' not found in EKA and IPA dictionaries- \n " ;
							// this.ipadict[word]  ;
							return [undefined, this.ipadict[word]]
						}
					}
				}
// Load dict
window.onload = TextToIPA.loadDict();
