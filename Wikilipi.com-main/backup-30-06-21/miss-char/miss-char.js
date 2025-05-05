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

function loadData() {
  //call api get data
  $.ajax({
    url: "https://wikilipi.com/miss-char/get-miss-char.php",
    dataType: "json",
    data: JSON.stringify(rParams),
    type: "POST",
    jsonpCallback: "callback", // this is not relevant to the POST anymore
    success: function (response) {
      $("#example").DataTable({
        order: [[1, "desc"]],
        ordering: false,
        data: response.rows,
        destroy: true,
        columns: [
          { data: "SrNo", className: "text-center", width: "20%" },
          { data: "MissingChar", className: "text-center", width: "50%" },
          { data: "CharStatus", width: "20%", className: "text-center" },
          {
            data: null,
            sortable: false,
            render: function (o) {
              if (rParams.status == "A") {
                return "";
              } else {
                var data = {};
                data.SrNo = o.SrNo;
                return (
                  '<button id="' +
                  o.SrNo +
                  '" class="btn btn-primary" onclick="onDeleteClick(this)" type="submit">Delete</button>'
                );
              }
            },
          }
        ],
      });
    },
    error: function (xhr, status, error) {
      alert("error", status);
    },
  });
}

function onDeleteClick(element) {
  var dataParams = {};
  dataParams.srNo = element.id
  $.ajax({
    url: "https://wikilipi.com/miss-char/delete-miss-char.php",
    dataType: "json",
    data: JSON.stringify(dataParams),
    type: "POST",
    jsonpCallback: "callback", // this is not relevant to the POST anymore
    success: function (response) {
      $("#example").DataTable().clear();
      $("#example").DataTable().destroy();
      loadData();
      alert("Deleted successfully : " + element.id);
    },
    error: function (xhr, status, error) {
      alert(error, status);
    },
  });
}
