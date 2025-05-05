var ins = "Đes kan-vartar kān-vart-s tλk-s-t retan en Rowman s-k-rep-t tu Λklepee s-k-rep-t. Et ez en-tλn-dad tu ases-t yu en rλden tλk-s-t w-ret-t-tλn bāy ađarz. Tu rāyt đa tλk-s-t yarsλl-f, yu s-hud larn @n-d yus đa Λklepee kebör-d. P-lez rev-yu đa āwt-put för āccurācy.rλpor-t λne λrarz tu admin@ekalipi.org. En-k-lud đa en-put, āwt-put @n-d λrar mλsajaz en đa emλyl. Đa kan-vartar yusaz a kas-tam p-row-nan-seλys-han dek-s-hanλre kan-tλynen En-g-les-h Rowman s-k-rep-t ward-z @n-d đλr En-dean En-g-les-h p-row-nan-seλys-han ek-wevalan-t-s w-reetλn en đa Λklepee s-k-rep-t. Ward-z nāt fāwn-d en đa kas-tam dek-s-hanλre bat fāwn-d en đa b@kap B-retes-h En-g-les-h dek-s-hanλre ār λn-k-lowz-d en karle b-r@kat-s. Ward-z nāt fāwn-d en eđar dek-s-hanλre ār s-hown en s-k-wλr b-r@kat-s";
var placeholderOut = "åtput goz heer!";
var insMarathi = "Tāeep karā keŋwā uparok‑ŧ majakuur k‑s‑hλŧ‑rāŧ marāt‑hee đλwanāgaree köpee‑pλs‑t karā. Mag Ekalipi uŧ‑pāđan pāhaл‑yāsāt‑hee bataл \"Convert\" k‑lek karā. Köpee‑pλs‑t karā, punarāwalokan āлe acuukaŧā āutaput sm‑pāđeŧ karā. Uŧ‑pāđan kamee bābaŧeeŧ hoeel. Werāmacen‑h jaŧan kλlλlee āhλ. Kanawar‑tar CMU s‑hab‑đalλk‑han s‑hb‑đkos‑h wāparaŧλ. Ŧ‑yāmuφλ uc‑cār amλrekan eŋg‑rajee pālan karaлλ apλk‑s‑heŧ āhλ. Āpaл koлaŧ‑yāhee ŧ‑rutee ād‑haφal‑yās admin@ekalipi.org eemλl karā. ee‑mλl mađ‑h‑yλ enaput, āutaput āлe ŧ‑rutee sn‑đλs‑h samāwλs‑h āhλ.";
// Note - insteadof regular hyphen, we use an unbreakable hyphen. Unicode value decimal 8209.
// Noteinstead of apostrophe, we use thestress character symbol. Unicode value decimal 712. 
var unicode =  encodeURI(ins);
var json = {
	"English US":{ 	"lang":"English US",
									"lipi":"Roman",
									"placeHolder":"Write Text Here!",
									"placeholderOut": decodeURI(placeholderOut),
									"conjunct" : " Conjunct Consonants( ‑ )",
									"stress" : " Stress Characters ( ˈ )",
									"sampleText" : "S@m‑pal tλk‑s‑t: Kāpe @n‑d pλys‑t en‑tu en‑put bāk‑s abav @n‑d k‑lek Kān‑vart.\n Wλr@z rλkag‑nes‑han av đa en‑heran‑t deg‑nate @n‑d av đa ek‑wal @n‑d enλyl‑yanabal rāyt‑s av öl mλm‑barz av đa h‑yuman f@male ez đa fāw‑n‑dλys‑han av f‑redam, jas‑tas @n‑d pes en đa warl‑d",
									"instructions" : "This converter converts text written in Roman script to Ekalipi script. \n It is intended to assist you in reading text written by others. \n To write the text yourself, you should learn and use the EKalipi keyboard. \n Please review the output for accuracy. Report any errors to admin@ekalipi.org. \n Include the input, output and error messages in the email. \n The converter uses a custom pronunciation dictionary containing \n English Roman script words and their Indian English pronunciation \n equivalents wriiten in the Ekalipi script. \n Words not found in the custom dictionary but found in the backup British \n English dictionary are enclosed in curly brackets. \n Words not found in either dictionary are shown in square brackets \"[ ]\". \n Please ensure that the input text is spelt correctly. \n Use of a spell checker is highly recommended. \n Stresss characters are not a part of the core Ekalipi platform. \n The option is provided as a pronunciation aid. \n By default, conjunct consonants are shown without emdded hyphens. \n Although it does make the text appear more \"Englishlike\", it reduces \n the acuracy of the pronunciation. \n Whenever possible, please check the \"conjunct consonants\" box.",
									"instructionsEka" : decodeURI(ins)
								},
			
	"Marathi": { 		"lang":"Marathi",
									"lipi":"Devnagari",
									"placeHolder":" देवनागरी वाक्य ",
									"placeholderOut": " एकलिपी परिवर्तन ",            
									"conjunct" : " Conjunct Consonants ( ‑ )",
									"sampleText" : "nmunā mjkuur : enput bök‑smđ‑h‑yλ k‑hāleel wāk‑y köpee āлe pλs‑t krā āлe ruupān‑ŧr krл‑yāsāt‑hee \"kn‑wr‑t\" btл wr k‑lek krā. \n \n s‑wrāj‑y hā māzā jn‑mseđ‑đ‑h hk‑k āhλ āлe ŧo mee meφwлārč! \n \n ........ lokmān‑y bāφ gŋgāđ‑hr teφk",
									"instructions" :" टाईप करा किंवा उपरोक्त मजकूर क्षेत्रात मराठी देवनागरी कॉपी-पेस्ट करा. \n मग Ekalipi उत्पादन पाहण्यासाठी बटण \"convert\" क्लिक करा. \n कॉपी-पेस्ट करा, पुनरावलोकन आणि अचूकता आउटपुट संपादित करा. \n उत्पादन कमी बाबतीत होईल. विरामचिन्ह जतन केलेली आहे. \n कनवर्टर CMU शब्दलेखन शब्दकोश वापरते. \n त्यामुळे उच्चार अमेरिकन इंग्रजी पालन करणे अपेक्षित आहे. \n आपण कोणत्याही त्रुटी आढळल्यास admin@ekalipi.org ईमेल करा. \nई-मेल मध्ये इनपुट, आउटपुट आणि त्रुटी संदेश समावेश आहे.",
									"instructionsEka" : decodeURI(insMarathi)
							},

	"Spanish(Alpha)":  { "lang":"Spanish(Alpha)",
								"lipi":"Latin",
								"placeHolder":"Write Text Here!",
								"placeholderOut": decodeURI(placeholderOut),
								"conjunct" : " Conjunct Consonants ( ‑ )",
								"sampleText" :"Texto de ejemplo: copie y pegue en el cuadro de entrada de arriba y haga clic en Convertir. ",
								"instructions" :" Este convertidor convierte el texto escrito en escritura romana a la escritura Ekalipi. Su objetivo es ayudarle a leer el texto escrito por otros. Para escribir el texto usted mismo, debe aprender y usar el teclado EKalipi. Revise la salida para verificar la precisión. Reporte cualquier error a admin@ekalipi.org. ncluir los mensajes de entrada, salida y error en el correo electrónico. El convertidor utiliza un diccionario de pronunciación personalizado que contiene Palabras de la escritura romana inglesa y su pronunciación india inglesa equivalentes escritos en el script Ekalipi. Palabras que no se encuentran en el diccionario personalizado pero que se encuentran en la copia de seguridad británica",
								"instructionsEka" : " "
							}
};

// set the default language to EnglishUS
$(document).ready(function(){
	langClear();
	selectLang("English US");
	$("#langFor").change(function () {
    var optionSelected = $("option:selected", this);
		var valueSelected = this.value;
		selectLang(this.value);
	});
});

var flagLang,langKey;

function selectLang(lang)
{
  $.each( json, function( key, val ) {
	if(key == lang)
	{
		$("#lang").text(lang);
		$("#lipi").text(val["lipi"]);
		$("#sampleText").html(val["sampleText"].replace(/\n/g, "<br />"));

		if(val["stress"]!= undefined)
		{
			$("#stressYes").show();
			$("#stress").text(val["stress"]);
		}
		else
		$("#stressYes").hide();

		$('#ipa-in').val("");
		$('#ipa-out').val("");
		$('#err-out').val("");
		$('#ipa-box').val("");
		$("#conjunct").text(val["conjunct"]);
		$("#instructions").text(val["instructions"]);
		$("#instructionsEka").text(val["instructionsEka"]);
		$(".placeholder").attr('placeholder',val["placeholderOut"]);
		$(".placeholderOut").attr('placeholder',val["placeHolder"]);
	}
	});  	

	switch(lang)
	{
		case "English US" :
							TextToIPA.ipadict={};

							TextToEKA.loadDict(".//ekaEKAdictEngUS.txt");
							TextToIPA.loadDict(".//ekaIPAdictEngUS.txt");
							flagLang = true;
							langKey = "EnglishUS";
							break;

		case "Marathi" : 
							TextToIPA.ipadict={};

							TextToEKA.loadDict(".//ekaEKAdictMarathi.txt");
							TextToIPA.loadDict(".//ekaIPAdictMarathi.txt");
							flagLang = false;
							langKey = "Marathi";
							break;

		case "Spanish(Alpha)" :
							TextToIPA.ipadict={};

							TextToEKA.loadDict(".//ekaEKAdictSpanish.txt");
							TextToIPA.loadDict(".//ekaIPAdictSpanish.txt");
							flagLang = true;
							langKey = "Spanish";
							break;
	}
}

function selectLangConvert()
{
	var e = document.getElementById("langFor");
	var langSelected = e.options[e.selectedIndex].text;	

	console.log("++++++",langKey,flagLang);
	setTimeout(()=>{uimin.convert(langKey,flagLang);},1000);
}

function langClear()
{
	var e = document.getElementById("langFor");
	var langSelected = e.options[e.selectedIndex].text;	
	selectLang(langSelected);
}