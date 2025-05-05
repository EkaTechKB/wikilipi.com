$(document).ready(function () {
    //$('#loading').removeClass();
    $(document).on('click', '#save_word', function () {
        var rParams = {};
       var english = $('#english').val();
       var ekalipi = $('#ekalipi').val();
       var other = $('#other').val();
       var count = $('#count').val();
       var country = $('#country').val();
       
        rParams.english = english.toLowerCase();
        rParams.ekalipi = ekalipi.toLowerCase();
        rParams.other = other.toLowerCase();
        rParams.count = count.toLowerCase();
        rParams.country = country.toUpperCase();
       // $('#loading').addClass('overlayloader');
        $.ajax({
            url: 'http://www.wikilipi.com/worddb/post_api/save_word.php',
            data: JSON.stringify(rParams),
            type: 'POST',
            success: function (response) {
                //$('#loading').removeClass();
                if (response.status == 0) {
                    // $("#myModal").modal();
                    // $('#english').val("");
                    // $('#ekalipi').val("");
                    // $('#other').val("");
                    // $('#count').val("");
                    // $('#country').val("");
                    // var modal = $('#myModal');
                    // modal.find('.modal-body').text('Insert successfully...');
                    // modal.find('.modal-title').text('SUCCESS');                     
                    // $("#myModal").modal();
                    showSnackbar();

                } else {
                    // var modal = $('#myModal');
                    // modal.find('.modal-body').text('Error while inserting...');
                    // modal.find('.modal-title').text('ERROR');                     
                    // $("#myModal").modal();
                    showSnackbar();
                }
            }, error: function (xhr, status, error) {
            },
        });
        return false;
    });

    function showSnackbar() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    
    function nospaces(t){

        if(t.value.match(/\s/g)){
        
        
        t.value=t.value.replace(/\s/g,'');
        
        }
        
        }
});