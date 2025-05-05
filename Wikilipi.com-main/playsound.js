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
            var fileList = response.files;
            var fileListExists = loadAllCharactorSounds(fileList);
            if (response.files && response.files[0] && response.files[0].fileUrl) {
                playCharactor(0, response.files[0].fileUrl, fileListExists);
            }
        }, error: function (xhr, status, error) {
            alert("Error while fetching data" + error);
        },
    });
}

function onPlaySound(textToPlay) {
    var rParams = {};
    rParams.ekaText = textToPlay;
    $.ajax({
        url: apiUrl + '/ekaTTS.php',
        dataType: "json",
        data: JSON.stringify(rParams),
        type: 'POST',
        jsonpCallback: 'callback', // this is not relevant to the POST anymore
        success: function (response) {
            var fileList = response.files;
            var fileListExists = loadAllCharactorSounds(fileList);
            if (response.files && response.files[0] && response.files[0].fileUrl) {
                playCharactor(0, response.files[0].fileUrl, fileListExists);
            }
        }, error: function (xhr, status, error) {
            alert("Error while fetching data" + error);
        },
    });
}

function loadAllCharactorSounds(fileList) {
    var fileListExistsList = [];
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

            fileListExistsList.push(fileList[i]);
        }
    }

    return fileListExistsList;
}

function playCharactor(index, indexOfData, responseData) {
    console.log("playing data ", indexOfData);
    soundManager.play(indexOfData, {
        loops: 1,
        multiShotEvents: true,
        onfinish: function () {
            soundManager.pause();
            //var index = responseData.indexOf(idstring);
            if (responseData[index + 1] !== undefined) {
                playCharactor(index + 1, responseData[index + 1].fileUrl, responseData);
            } else {
                console.log("finished.");
                //hidePleaseWait();
            }
        },
    });
}