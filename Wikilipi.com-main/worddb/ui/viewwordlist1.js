var lastSyncTime ="0";
var srno=0;


$(document).ready(function () {
    bindData();
});


function onBtNext() {
    // gridOptions.api.paginationGoToNextPage();
    
    $('#loading').addClass('overlayloader');            

    bindData();
 }

 function bindData() {
    var rParams = {};
    rParams.lastSyncTime = lastSyncTime;
    rParams.srno = srno;
    $.ajax({
        url: 'http://www.wikilipi.com/worddb/post_api/getwordsbysrn1.php',
        dataType: "json",       
        data: JSON.stringify(rParams),
        type: 'POST',
        jsonpCallback: 'callback', // this is not relevant to the POST anymore
        success: function (response) {

            $('#loading').removeClass();
            if (response.status == 0) {
                $('#table').bootstrapTable('destroy');
                 $('#table').bootstrapTable({
                     data: response.data,
                     pagination: true,
                     pageSize: 100,
                     search: true,
                     showRefresh: true,
                 });

                 srno = response.data[response.data.length - 1].srn

            } else {
            
            }
        }, error: function (xhr, status, error) {
        },
    });
 }