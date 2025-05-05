$(document).ready(function () {
    $('#loading').removeClass();
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
        $('#loading').addClass('loader');
        $.ajax({
            url: 'http://www.wikilipi.com/worddb/post_api/save_word.php',
            data: JSON.stringify(rParams),
            type: 'POST',
            success: function (response) {
                $('#loading').removeClass();
                if (response.status == 0) {
                    $("#myModal").modal();
                    $('#english').val("");
                    $('#ekalipi').val("");
                    $('#other').val("");
                    $('#count').val("");
                    $('#country').val("");
                } else {
                    alert('Error while inserting new word. please check');
                }
            }, error: function (xhr, status, error) {
            },
        });
        return false;
    });

    
});