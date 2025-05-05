$(document).ready(function () {
    $('#loading').removeClass();
    var type = getUrlParameter("type");
    if (type) {

        if ($('#type_' + type).length == 0) {
            $('#type_coming_soon').show();
        } else {
            $('#type_' + type).show();
        }
    } else {
        $('#type_no_help').show();
    }
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

});