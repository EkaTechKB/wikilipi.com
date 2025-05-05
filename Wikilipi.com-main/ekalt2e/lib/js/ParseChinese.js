var concatstr = "";                                                         
var prevchar = "";      
var currchar = "";       
var prevtype = ""; 
var currtype = ""; 
var ccVal="";
var prValLen ="";
var stressIndic = "n";

//Chinese pronunciation rules obtained from this website http://www.chinese-tools.com/learn/characters/list.html
var processed_text = '' ;					
function ParseChinese(sentWordforIPA)
{
	var lang = $("#langFor").children("option:selected").val();
	selectLangArray(lang);
var array_one_length = array_one.length ; 
var modified_substring = sentWordforIPA

//*************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//*************************************************************
    var text_size = sentWordforIPA.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 60000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (sentWordforIPA.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

      modified_substring = sentWordforIPA.substring ( sthiti1, sthiti2 )  ;

      Replace_Symbols( ) ;

      var processed_text = processed_text + modified_substring ;
	  
	  ParseChineseAfterReplace(processed_text); 
	  concatstr = concatstr.replace(/-/g, String.fromCharCode(8209));
	  processed_text = concatstr;
		var concatstrPinyin = concatstr;
		concatstr = "";
		document.getElementById("ipa-box").value = concatstrPinyin;  
//  Breaking part code over

    }
		Pinying_to_Ekalipi(processed_text);

 //--------------------------------------------------

 function Replace_Symbols( )
    {

		if ( modified_substring != "" )  // if string to be converted is non-blank then no need of any processing.
        {
         for(input_symbol_idx = 0;   input_symbol_idx < array_one_length-1 ;    input_symbol_idx = input_symbol_idx + 2 )

            {
             indx = 0  ;  // index of the symbol being searched for replacement
             
             while (indx != -1 ) //whie-00
                {
                 modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx + 1] )
                 indx = modified_substring.indexOf( array_one[input_symbol_idx] )
				 console.log("indx " + indx);
                 console.log ("input symbol indx " + input_symbol_idx);
				 console.log ("character in array " + array_one [input_symbol_idx]);
                } // end of while-00 loop
            } // end of for loop
		} //end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols

 } // end of Devanagari_to_IPA function

 //----------------------------------------
 function Pinying_to_Ekalipi(processed_text)
{					
	var origStringPinyin = processed_text;
    var text_size = processed_text.length ;
	//var origStringPinyin = origStringPinyin;
	
	origStringPinyin = origStringPinyin.replace(/\n/g, "~ ");
	
	origStringPinyin = origStringPinyin.replace(/-/g, String.fromCharCode(8209));		// change all regular hyphens to unbreakable
	origStringPinyin = origStringPinyin.replace(/:/g, String.fromCharCode(2307));		// change all regular colons to visarga
	origStringPinyin = origStringPinyin.replace(/\n/g, "~ ");							// change all newline characters to ~
	
	ParseChinesePinyin(origStringPinyin); 
	
	concatstr = concatstr.replace(/-/g, String.fromCharCode(8209));
	concatstr = concatstr.replace(/~ /g, "\n");                   // Change special characters back to line breaks
	parseStringPinyin = concatstr;

	if($("#IsConjunctShow").is(':checked'))      
	{				
		// Do nothing, show the conjunct consonants explicitly
	}
	else 
	{
		parseStringPinyin = parseStringPinyin.replace(/‑/g,"");        // Remove the explicit conjunct characters String.fromCharCode(8209)
	}
	//  Breaking part code over
	document.getElementById("ipa-out").value = parseStringPinyin  ;
 } // end of Pinying_to_Ekalipi function
 
function ParseChineseAfterReplace(origString)
{             
	var myString = origString;
	for(i = 0; i < myString.length; i++)
	{                                      
		var incrementVal = EkaTTSParseChinese(i, myString);
		i= incrementVal[2];
	}
}

function EkaTTSParseChinese(i,myString) 
{
	currchar = myString[i];
	
	if (currchar == "诶")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "a";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "伊")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "i";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "吾")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "u";
		concatstr = concatstr.concat(replchar);
		currtype="v";	
	}
	else if (currchar == "吧")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ba";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "八")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "bā";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "爸")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "bā";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "百")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "bǎi";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "北")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "běi";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "不")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "bù";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "大")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "dài";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "岛")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "dǎo";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "的")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "dí";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "弟")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "dì";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "地")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "de";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "东")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "dōng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "都")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "dōu";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "对")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "duì";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "多")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "duō";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "儿")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "ér";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "二")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "èr";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "方")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "fāng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "港")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "gǎng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "哥")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "gē";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "个")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "gè";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "关")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "guān";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "贵")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "guì";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "国")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "guó";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "过")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "guò";
		concatstr = concatstr.concat(replchar);
		currtype="c";
	}

	else if (currchar == "海")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "hǎi";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "好")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "hǎo";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "很")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "hěn";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "会")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "huì";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "家")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "jiā";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "见")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "jiàn";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "叫")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "jiào";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "姐")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "jiě";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "京")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "jīng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "九")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "jiǔ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "可")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "kě";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "老")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "lǎo";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "李")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "lǐ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "零")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "líng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "六")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "liù";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "吗")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "mǎ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "妈")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "mā";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "么")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "me";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "没")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "méi";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "美")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "měi";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "妹")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "mèi";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "们")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "men";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "名")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "míng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "明")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "míng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "哪")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "nǎ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "那")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "nèi";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "南")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "nán";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "你")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "nǐ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "您")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "nín";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "朋")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "péng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "七")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "qī";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "起")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "qǐ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "千")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "qiān";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}else if (currchar == "去")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "qù";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}else if (currchar == "人")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "rén";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}else if (currchar == "认")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "rèn";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "日")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "rì";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "三")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "sān";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "上")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "shàng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "谁")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "shéi";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "什")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "shén";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "生")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "shēng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "师")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "shī";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "十")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "shí";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "识")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "shí";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "是")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "shì";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "四")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "sì";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "他")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "tā";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "她")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "tā";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "台")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "tái";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "天")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "tiān";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "湾")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "wān";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "万")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "wàn";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "王")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "wáng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}else if (currchar == "我")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "wǒ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}else if (currchar == "五")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "wǔ";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}else if (currchar == "西")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xī";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "息")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xí";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "系")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xì";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "先")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xiān";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "香")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xiāng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "想")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xiǎng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "小")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xiǎo";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "谢")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xiè";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "姓")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xìng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "休")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xiū";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "学")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "xué";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "也")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "yě";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "一")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "yī";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "亿")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "yì";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "英")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "yīng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "友")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "yǒu";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "月")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "yuè";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "再")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "zài";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "张")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "zhāng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "这")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "zhè";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "中")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "zhōng";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	else if (currchar == "字")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "zì";
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
	//---------------------------------------------------------------------------------------------------------------------------------
	// More keyboard special characters
	else if(myString[i] == "~")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = "~ ";			//new line character
		currtype="s";
		concatstr = concatstr.concat(replchar);
	}
	
	else if(myString[i]==" ")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = myString[i];
		currtype="s";
		concatstr = concatstr.concat(replchar);
	}
	else if(myString[i]==",")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = myString[i];
		currtype="s";
		concatstr = concatstr.concat(replchar);
	}
	else if(myString[i]==".")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = myString[i];
		currtype="s";
		concatstr = concatstr.concat(replchar);
	}
	else if(myString[i]=="?")
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = myString[i];
		concatstr = concatstr.concat(replchar);
		currtype="s";
	}

/*	else {
//				document.write("<br/>You entered Character at Position " + i + " is " + myString[i]);
//				document.write("<br /> It is neither an Ekalipi consonant,vowel or special allowed symbol. SKIPPED" );
				currchar = "u";
				console.log ("Letter not found. Add to parser  " + myString[i]);
			} */
	else
	{
		concatstr = concatstr.substring(0, concatstr.length-prValLen);
		replchar = currchar;
		concatstr = concatstr.concat(replchar);
		currtype="c";	
	}
				
	//---------------------------------------------------------------------------------------------------------------------		
		
if (currchar == String.fromCharCode(8209)) 				//if current character is non-breaking hyphen(8209). 
	{
		stressIndic = "y";
		if ((/[ŧđwrtyɉpлφsdfghjklzčcvbnm]/.test(nextchar)) || (/[. ?!,:| ]/.test(currchar)))
		{ 
		// do nothing 
		} 
		else 
		{
			concatstr = concatstr.substring(0, concatstr.length-prValLen);
			concatstr = concatstr.concat("ø");
			if (stressIndic == "y")      		// Syllable ended, any conjunct consonants found?
			{				
				// Show high stress character
				concatstr = concatstr.concat(String.fromCharCode(712));
				stressIndic = "n";
			}
		}
	} 
//-----------------------------------------------------------------------------------------------------------------------------
	

	prValLen = prevchar.length;	
	return [currchar, currtype, i];		
	// Store values for the next iteration of the loop	 
	//prevchar = currchar;
}	

    
	