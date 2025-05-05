$(document).ready(function () {
    var rParams = {};
    rParams.lastSyncTime = "0";

    $.ajax({
        url: 'http://www.wikilipi.com/worddb/post_api/getwords.php',
        dataType: "json",       
        data: JSON.stringify(rParams),
        type: 'POST',
        jsonpCallback: 'callback', // this is not relevant to the POST anymore
        success: function (response) {

            $('#loading').removeClass();            
            if (response.status == 0) {
                 $('#table').bootstrapTable({
                     data: response.data
                 });

            } else {
            
            }
        }, error: function (xhr, status, error) {
        },
    });
});