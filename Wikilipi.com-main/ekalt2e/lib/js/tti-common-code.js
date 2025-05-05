$(document).ready(function(){
	
var langFor = "English US";
$('#langFor').innerHTML = langFor;
	
var textHtml = '<ul class="nav navbar-nav pull-middle">';
textHtml =+ '<li><a href="lib/js/index.html"><strong>Home</strong></a></li>';
textHtml =+ '<li><a href="lib/js/EkaTxt2Spch.html" target="_blank" title="Ekalipi Text to Speech">TTS</a></li>';
textHtml =+ '<li><a href="lib/js/TTIEnglishUS.html" target="_blank" title="Language Text to Ekalipi Converter">LT2E </a></li>';
textHtml =+ '<li><a href="lib/js/ekalipiFontwebKeyboard2.html" target="_blank" title="Type and Hear">Web Keyboard</a></li>';
textHtml =+ '<li><a href="lib/js/coolstuff.html" target="_blank" title="* Difficult English Words* Countries">CoolStuff</a></li>';
textHtml =+ '<li><a href="lib/js/downloads.html" target="_blank">Downloads</a></li>';
textHtml =+ '<li><a href="lib/js/about.html" target="_blank">About</a></li>';  
textHtml =+ '<li><a href="lib/js/contact.html" target="_blank">Contact</a></li>';
textHtml =+ '<li><a class="page-scroll" href="lib/js/signup.html" target="_blank">Sign Up</a></li>';
textHtml =+ '</ul>';
$('#navbartext').innerHTML = textHtml;  

var selectTextHtml ='<select name="select" onchange="window.location=this.options[this.selectedIndex].value" style="margin-left: 36px;">';
selectTextHtml =+ '<option value="./index.htm" selected="">select a language</option>';
selectTextHtml =+ '<option value="./TTIEnglishUS.html" target="_blank">English US</option>';
selectTextHtml =+ '<option value="./TTIEnglishUK.html" target="_blank">English UK</option>';
selectTextHtml =+ '<option value="./TTIEnglishIN.html" target="_blank">English Indian</option>';
selectTextHtml =+ '<option value="./TTIMarathi.html" target="_blank">Marathi</option>';
selectTextHtml =+ '<option value="./TTIHindi.html" target="_blank">Hindi</option>';
selectTextHtml =+ '<option value="./TTISanskrit.html" target="_blank">Sanskrit</option>';
selectTextHtml =+ '<option value="./TTIChinesePinyin.html" target="_blank">Chinese(Pinyin)(Alpha)</option>';
selectTextHtml =+ '<option value="./TTIChinese.html" target="_blank">Chinese(Simplified)(Alpha)</option>';
selectTextHtml =+ '<option value="./TTIGerman.html" target="_blank">German (Alpha)</option>';
selectTextHtml =+ '<option value="./TTIKannada.html" target="_blank">Kannada(Alpha)</option>';
selectTextHtml =+ '<option value="./TTITamil.html" target="_blank">Tamil(Alpha)</option>';
selectTextHtml =+ '<option value="./TTITelugu.html" target="_blank">Telugu(Alpha)</option>';
selectTextHtml =+ '<option value="./TTIDanishSpcl.html" target="_blank">Danish(Future)</option>';
selectTextHtml =+ '<option value="./TTIBengali.html" target="_blank">Bengali(Alpha)</option>';
selectTextHtml =+ '<option value="./TTIGujrati.html" target="_blank">Gujarati(Alpha)</option>';
selectTextHtml =+ '<option value="./TTIMalayalam.html" target="_blank">Malayalam(Alpha)</option>';
selectTextHtml =+ '<option value="./TTIKokani.html" target="_blank">Konkani (Alpha)</option>';
selectTextHtml =+ '<option value="./TTIPunjabi.html" target="_blank">Punjabi (Alpha)</option>';
selectTextHtml =+ '<option value="./TTIUrdu.html" target="_blank">Urdu(Future)</option>';
selectTextHtml =+ '<option value="./TTISindhi.html" target="_blank">Sindhi(Future)</option>';
selectTextHtml =+ '<option value="./TTIOdia.html" target="_blank">Odia(Future)</option>';
selectTextHtml =+ '<option value="./TTIAssamese.html" target="_blank">Assamese(Future)</option>';
selectTextHtml =+ '<option value="./TTIDogri.html" target="_blank">Dogri(Future)</option>';
selectTextHtml =+ '<option value="./TTIKashmiri.html" target="_blank">Kashmiri(Future)</option>';
selectTextHtml =+ '<option value="./TTIManipuri.html" target="_blank">Manipuri(Future)</option>';
selectTextHtml =+ '<option value="./TTINepali.html" target="_blank">Nepali(Future)</option>';
selectTextHtml =+ '<option value="./TTISantali.html" target="_blank">Santali(Future)</option>';
selectTextHtml =+ '<option value="./TTITulu.html" target="_blank">Tulu(Future)</option>';
selectTextHtml =+ '<option value="./TTIBodo.html" target="_blank">Bodo(Future)</option>';
selectTextHtml =+ '</select>';

$('#txtSelectOption').innerHTML = selectTextHtml; 
});