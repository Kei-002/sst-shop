$(document).ready(function () {
    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-bottom-right",
        preventDuplicates: true,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
    };

    // $("button.restorebtn").attr("disabled", true);

    $("#userstable").DataTable({
        ajax: {
            url: "http://localhost:5000/api/sst/users",
            dataSrc: "",
        },
        dom: '<"top"<"left-col"B><"center-col"l><"right-col"f>>rtip',
        buttons: [{
                extend: "pdf",
                className: "addNewRecord",
            },
            {
                extend: "excel",
                className: "addNewRecord",
            },
        ],
        columns: [{
                data: "id",
            },
            {
                data: "email",
            },
            {
                data: "created_at",
            },
            {
                data: "status",
            },
            {
                data: null,
                render: function (data, type, row) {
                    return (
                        "<a href='#' class='deletebtn' data-id=" +
                        data.id +
                        "><i class='fa-solid fa-user-minus'></a></i>"
                    );
                },
            },
            {
                data: null,
                render: function (data, type, row) {
                    return (
                        "<a href='#' class='restorebtn' data-id=" +
                        data.id +
                        " disabled><i class='fa-sharp fa-solid fa-arrows-rotate'></a></i>"
                        // "<button href='#' class='restorebtn' data-id=" +
                        // data.id +
                        // "><i class='fa-sharp fa-solid fa-arrows-rotate'></button></i>"
                    );
                },
            },
        ],
    });

    $("#userstable tbody").on("click", "a.deletebtn", function (e) {
        var table = $("#userstable").DataTable();
        var id = $(this).data("id");
        var $row = $(this).closest("tr");
        var but = $("button.restorebtn");

        console.log(id);
        e.preventDefault();
        bootbox.confirm({
            message: "Do You Want To Delete This Category?",
            buttons: {
                confirm: {
                    label: "Yes",
                    className: "btn-success",
                },
                cancel: {
                    label: "No",
                    className: "btn-danger",
                },
            },
            callback: function (result) {
                console.log(result);
                if (result)
                    $.ajax({
                        type: "DELETE",
                        url: "http://localhost:5000/api/sst/users/" + id,
                        headers: {
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                                "content"
                            ),
                        },
                        dataType: "text",
                        contentType: "application/json",
                        success: function (data) {
                            console.log(data);
                            // bootbox.alert('success');
                            // $row.fadeOut(4000, function () {
                            //     table.row($row).remove().draw(false);
                            // });
                            // but.attr("disabled", false);
                            // bootbox.alert(data.success);

                            toastr.success("Account deactivated");
                            table.ajax.reload();
                            // but.removeAttr("disabled");
                        },
                        error: function (error) {
                            console.log(error);
                            toastr.warning("Something went wrong");
                        },
                    });
            },
        });
    });

    $("#userstable tbody").on("click", "a.restorebtn", function (e) {
        var table = $("#userstable").DataTable();
        var id = $(this).data("id");
        var $row = $(this).closest("tr");
        var but = $("a.deletebtn");

        console.log(id);
        e.preventDefault();
        bootbox.confirm({
            message: "Do You Want To Restore This User?",
            buttons: {
                confirm: {
                    label: "Yes",
                    className: "btn-success",
                },
                cancel: {
                    label: "No",
                    className: "btn-danger",
                },
            },
            callback: function (result) {
                console.log(result);
                if (result)
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:5000/api/sst/users/restore/" + id,
                        headers: {
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                                "content"
                            ),
                        },
                        dataType: "text",
                        contentType: "application/json",
                        success: function (data) {
                            console.log(data);
                            but.attr("disabled", true);

                            toastr.success("Account restored and activated");
                            table.ajax.reload();
                        },
                        error: function (error) {
                            console.log(error);
                            toastr.warning("Something went wrong");
                        },
                    });
            },
        });
    });
});
