function onPlaySoundClick() {
    //showPleaseWait();
    var rParams = {};
    rParams.ekaText = $("#output-div").text().trim();;
    $.ajax({
        url: apiUrl + '/ekaTTS.php',
        dataType: "json",
        data: JSON.stringify(rParams),
        type: 'POST',
        jsonpCallback: 'callback', // this is not relevant to the POST anymore
        success: function (response) {
            //Get filter file list which are available
            var fileList = response.files.filter(element => element.isFileExists == true);
            loadAllCharactorSounds(response.files);
            playCharactor(0, response.files[0].fileUrl, fileList);
        }, error: function (xhr, status, error) {
            alert("Error while fetching data");
        },
    });
}

function loadAllCharactorSounds(fileList) {
    for (i = 0; i < fileList.length; i++) {
        document.getElementById("ErrMsg").value +=
            "file " + fileList[i].fileUrl.substring(23) + " is " + fileList[i].isFileExists + " exists\n";
        if (fileList[i].isFileExists) {
            var mySound = soundManager.createSound({
                id: fileList[i].fileUrl,
                url: fileList[i].fileUrl,
                onload: function () {
                    soundManager._writeDebug(this.id + " loaded");
                },
            });
        }
    }
}

function playCharactor(index, indexOfData, fileList) {
    console.log("playing data ", indexOfData);
    soundManager.play(indexOfData, {
        loops: 1,
        multiShotEvents: true,
        onfinish: function () {
            soundManager.pause();
            //var index = responseData.indexOf(idstring);
            if (fileList[index + 1] !== undefined) {
                playCharactor(index + 1, fileList[index + 1].fileUrl, fileList);
            } else {
                console.log("finished.");
                //hidePleaseWait();
            }
        },
    });
}