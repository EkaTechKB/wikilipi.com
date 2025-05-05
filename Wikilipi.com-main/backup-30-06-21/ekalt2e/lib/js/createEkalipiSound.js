function createEkalipiSound(concatstr, i, ekalist){
	
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
        var idstring = ekalist.push("eka" + i);
	    var d = cncFile;                  
	    var mySound1 = soundManager.createSound({
		    id: "eka" + i,
		    url : d,
		    onload: function() {
		        soundManager._writeDebug(this.id + ' loaded');
		        this.play();
		    }
		})
		               document.write ("<br/>file " + cncFile + " found and loaded");
	} else {
		               document.write ("<br/>file " + cncFile + " not found - not loaded");
    }
}
