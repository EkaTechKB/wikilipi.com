function EkaTTSInsertSound(concatstr, i, ekalist) {
  cncFile = "https://www.ekalipi.org/MySounds/" + concatstr;
  cncFile = cncFile.concat(".mp3");
  var result = "";

  function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", urlToFile, true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send();

    if (xhr.status == "404") {
      return false;
    } else {
      return true;
    }
  }

  result = doesFileExist(cncFile);
  if (result == true) {
    document.write("\n file " + cncFile + " exists");
    var idstring = ekalist.push("eka" + i);
    document.write("<br> new ekalist is : " + ekalist);

    var d = cncFile;
    var mySound1 = soundManager.createSound({
      id: "eka" + i,
      url: d,
      onload: function () {
        soundManager._writeDebug(this.id + " loaded");
        this.play();
      },
    });
  } else {
    document.write("\nFile " + cncFile + " not found - not loaded");
  }
}
function PlaySoundForAlphabets(alphabets) {
  if (alphabets == "\\") {
    // Handle Special case of "\"
    alphabets = "08A_";
  } else if (alphabets == "ф") {
    alphabets = "LL";
  }
  onPlaySound(alphabets);
}
