var table = "";
var rParams = {};


$(document).ready(function () {
  rParams.status = "P"
  loadData();
});

function handlePending(myRadio) {
  rParams.status = "P";
  $("#example").DataTable().clear();
  $("#example").DataTable().destroy();
  loadData();
}

function handleApproved(myRadio) {
  rParams.status = "A";
  $("#example").DataTable().clear();
  $("#example").DataTable().destroy();
  loadData();
}

function saveToMainDatabase(data) {
  var rParams = {};
  var english = data.split(",")[1];
  var ekalipi = data.split(",")[2];
  var other ="";
  var count = 0;
  var country = data.split(",")[3];
  
   rParams.english = english.toLowerCase();
   rParams.ekalipi = ekalipi.toLowerCase();
   rParams.other = other.toLowerCase();
   $.ajax({
       url: 'https://wikilipi.com/worddb/post_api/save_word.php',
       data: JSON.stringify(rParams),
       type: 'POST',
       success: function (response) {
           if (response.status == 0) {
              console.log("saved in main database")
           } else {
              //  alert('Error while inserting new word. please check');
              console.log("Error while saving in main database.")
           }
       }, error: function (xhr, status, error) {
       },
   }); 
}

function statusClick(element) {
  if (rParams.status == "A") {
    return;
  }
  var dataParams = {};
  dataParams.status = "A";
  dataParams.cTime = element.id.split(",")[0];
  saveToMainDatabase(element.id);
  $.ajax({
    url: "https://wikilipi.com/contribution/save-contribution.php",
    dataType: "json",
    data: JSON.stringify(dataParams),
    type: "POST",
    jsonpCallback: "callback", // this is not relevant to the POST anymore
    success: function (response) {
      $("#example").DataTable().clear();
      $("#example").DataTable().destroy();
      loadData();
      alert("Accepted successfully : " + element.id);
    },
    error: function (xhr, status, error) {
      alert(error, status);
    },
  });
}

function loadData() {
  //rParams.status = "P";
  //call api get data
  $.ajax({
    url: "https://wikilipi.com/contribution/get-contribution.php",
    dataType: "json",
    data: JSON.stringify(rParams),
    type: "POST",
    jsonpCallback: "callback", // this is not relevant to the POST anymore
    success: function (response) {
      $("#example").DataTable({
        order: [[4, "desc"]],
        ordering: false,
        data: response.rows,
        destroy: true,
        columns: [
          { data: "C_ENGLISH", className: "text-center", width: "20%" },
          { data: "C_EKALIPI", className: "text-center", width: "20%" },
          { data: "C_COUNTRY", width: "20%", className: "text-center" },
          { data: "C_TIME", className: "text-center", width: "20%" },
          { data: "foldername", className: "text-center", width: "20%" },
          { data: "email", className: "text-center", width: "20%" },
          { data: "approved", width: "20%", className: "text-center" },
          {
            data: null,
            sortable: false,
            render: function (o) {
              if (rParams.status == "A") {
                return "";
              } else {
                var data = {};
                data.cTime = o.C_TIME;
                return (
                  '<button id="' +
                   o.C_TIME +',' + o.C_ENGLISH  +',' + o.C_EKALIPI +',' + o.C_COUNTRY +
                  '" class="btn btn-primary" onclick="statusClick(this)" type="submit">Accept</button>'
                );
              }
            },
          },
        ],
      });
    },
    error: function (xhr, status, error) {
      alert("error", status);
    },
  });
}
