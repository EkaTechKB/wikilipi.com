var pageNumber=1;
$(document).ready(function () {
    bindData('', pageNumber);
});


function onBtNext() {
    $('#loading').addClass('overlayloader');  
    pageNumber = pageNumber + 1;          
    bindData('', pageNumber);
 }

 function onBtnPrev() {
   
    pageNumber = pageNumber - 1;         
    if (pageNumber > 0) {
        $('#loading').addClass('overlayloader');   
        bindData('', pageNumber);
    } else {
        var modal = $('#myModal');
        modal.find('.modal-body').text('No preious page found.');
        modal.find('.modal-title').text('Failed');                     
        $("#myModal").modal();
    }
 }

 function onSearch() {
    $('#loading').addClass('overlayloader');  
    var input = $('#inputdefault').val();   
    pageNumber = 1;       
    bindData(input, pageNumber);
 }

 function onAddWord() {
      var modal = $('#myModalSave');            
      $("#myModalSave").modal();
    //showSnackbar("ssss");
 }

 function showSnackbar(msg) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

 function bindData(query, page) {
    var rParams = {};
    rParams.rp = 20;
    rParams.sortname = 'C_ENGLISH';
    rParams.query=query;
    rParams.qtype='';
    rParams.page = page;

    $.ajax({
        url: 'https://wikilipi.com/worddb/post_api/getword_pagination.php',
        dataType: "json",       
        data: JSON.stringify(rParams),
        type: 'POST',
        jsonpCallback: 'callback', // this is not relevant to the POST anymore
        success: function (response) {

            $('#loading').removeClass();
           // if (response.status == 0) {
                $('#table').bootstrapTable('destroy');
                 $('#table').bootstrapTable({
                     data: response.rows,
                     pagination: false,
                     striped: false,
                     search: false,
                     pageSize:20,
                     showRefresh: false
                 });
                 $('#table').fadeIn();
                 $('#wordcount').text("Number of available words :" + response.total)
                 
           
        }, error: function (xhr, status, error) {
            $('#loading').removeClass();
            var x = $("#snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            alert(error, status)
        },
    });
 }

 function printerDiv(divID) {
    //Get the HTML of div
    
    var divElements = document.getElementById(divID).innerHTML;
    
    //Get the HTML of whole page
    var oldPage = document.body.innerHTML;
    
    //Reset the pages HTML with divs HTML only
    
         document.body.innerHTML = 
    
         "<html><head><title></title></head><body>" + 
         divElements + "</body>";
    
    
    
    //Print Page
    window.print();
    
    //Restore orignal HTML
    document.body.innerHTML = oldPage;
    
    }