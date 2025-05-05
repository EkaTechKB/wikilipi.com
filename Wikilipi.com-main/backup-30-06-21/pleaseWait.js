/**
 * Displays overlay with "Please wait" text. Based on bootstrap modal. Contains animated progress bar.
 */
function showPleaseWait() {
    if (document.querySelector("#pleaseWaitDialog") == null) {
        var modalLoading = '<div class="modal" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false" role="dialog">\
            <div class="modal-dialog">\
                <div class="modal-content">\
                    <div class="modal-header">\
                        <h4 class="modal-title">Please wait...</h4>\
                    </div>\
                    <div class="modal-body">\
                        <div>\
                        playing is in progress\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>';
        $(document.body).append(modalLoading);
    }

    $("#pleaseWaitDialog").modal("show");
}

/**
 * Hides "Please wait" overlay. See function showPleaseWait().
 */
function hidePleaseWait() {
    $("#pleaseWaitDialog").modal("hide");
}