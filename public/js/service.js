$(document).ready(function () {
    // $("#customerbtn").on("click", function (e) {
    //     e.preventDefault();
    //     $("#items").hide("slow");
    //     $("#customers").show();
    // });

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    $("#servicetable").DataTable({
        ajax: {
            url: "http://localhost:5000/api/sst/services/",
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
            {
                text: "New Service",
                className: "addNewRecord",
                action: function (e, dt, node, config) {
                    $("#serviceForm").trigger("reset");
                    $("#serviceModal").modal("show");
                    // $('#itemupdate').hide();
                },
            },
        ],
        columns: [{
                data: "id",
            },
            {
                data: "service_name",
            },

            {
                data: "description",
            },
            {
                data: "price",
            },
            {
                data: null,
                render: function (data, type, JsonResultRow, row) {
                    return (
                        '<img src="' +
                        data.img_path +
                        '" height="50px" width="50px">'
                    );
                },
            },
            {
                data: null,
                render: function (data, type, row) {
                    return (
                        "<a href='#' class='editBtn' id='editbtn' data-id=" +
                        data.id +
                        "><i class='fa-solid fa-pen' aria-hidden='true' style='font-size:24px' ></i></a>"
                    );
                },
            },
            {
                data: null,
                render: function (data, type, row) {
                    return (
                        "<a href='#' class='deletebtn' data-id=" +
                        data.id +
                        "><i class='fa-solid fa-trash-can' style='font-size:24px; color:red;'></a></i>"
                    );
                },
            },
        ],
    });

    // $.ajax({
    //     type: "GET",
    //     url: "/api/customer",
    //     dataType: "json",
    //     success: function (data) {
    //         console.log(data);
    //         $.each(data, function (key, value) {
    //             console.log(value);
    //             var id = value.id;
    //             var tr = $("<tr>");
    //             tr.append($("<td>").html(id));
    //             tr.append($("<td>").html(value.fname));
    //             tr.append($("<td>").html(value.lname));
    //             tr.append($("<td>").html(value.addressline));
    //             tr.append($("<td>").html(value.phone));
    //             tr.append(
    //                 "<td align='center'><a href='#' data-bs-toggle='modal' data-bs-target='#editModal' id='editbtn' data-id=" +
    //                 id +
    //                 "><i class='fa-regular fa-pen-to-square' aria-hidden='true' style='font-size:24px;' ></a></i></td>"
    //             );
    //             tr.append(
    //                 "<td><a href='#'  class='deletebtn' data-id=" +
    //                 id +
    //                 "><i  class='fa-solid fa-trash' style='font-size:24px; color:red' ></a></i></td>"
    //             );

    //             $("#sbody").append(tr);
    //         });
    //     },
    //     error: function () {
    //         console.log("AJAX load did not work");
    //         alert("error");
    //     },
    // });

    $("#serviceSubmit").on("click", function (e) {
        e.preventDefault();
        var data = $("#serviceForm")[0];
        console.log(data);
        let formData = new FormData(data);
        console.log(formData);
        for (var pair of formData.entries()) {
            console.log(pair[0] + "," + pair[1]);
        }

        $.ajax({
            type: "POST",
            url: "http://localhost:5000/api/sst/services/",
            data: formData,
            contentType: false,
            processData: false,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                $("#serviceModal").modal("hide");
                var $servicetable = $("#servicetable").DataTable();
                // $servicetable.row.add(data.customer).draw(false);
                toastr.success("Service successfully added!");
                $servicetable.ajax.reload();
            },
            error: function (error) {
                console.log(error);
                toastr.error(error, "Oh no!")
            },
        });
    });

    $("#servicetable tbody").on("click", "a.deletebtn", function (e) {
        var table = $("#servicetable").DataTable();
        var id = $(this).data("id");
        var $row = $(this).closest("tr");

        console.log(id);
        e.preventDefault();
        bootbox.confirm({
            message: "Do You Want To Delete This Service?",
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
                        url: "http://localhost:5000/api/sst/services/" + id,
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
                            $row.fadeOut(4000, function () {
                                table.row($row).remove().draw(false);
                            });
                            toastr.success("Service successfully deleted!");
                        },
                        error: function (error) {
                            console.log(error);
                            toastr.error(error, "Somethings wrong :/");
                        },
                    });
            },
        });
    });

    $("#servicetable tbody").on("click", "a.editBtn", function (e) {
        e.preventDefault();
        $("#eserviceModal").modal("show");
        var id = $(this).data("id");

        $.ajax({
            type: "GET",
            enctype: 'multipart/form-data',
            processData: false, // Important!
            contentType: false,
            cache: false,
            url: "http://localhost:5000/api/sst/services/" + id,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                    "content"
                ),
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                $("#eserid").val(data[0].id);
                $("#eservice_name").val(data[0].service_name);
                $("#edescription").val(data[0].description);
                $("#eprice").val(data[0].price);
            },
            error: function () {
                console.log("AJAX load did not work");
                alert("error");
            },
        });
    });

    $("#serviceUpdate").on("click", function (e) {
        e.preventDefault();
        // var id = $(e.relatedTarget).attr("data-id");
        var id = $("#eserid").val();
        console.log(id);

        var crow = $("tr td:contains(" + id + ")").closest("tr");
        var table = $("#servicetable").DataTable();
        // var data = $("#updateform").serialize();
        var data = $('#eserviceForm')[0];
        let formData = new FormData(data);

        console.log(data);
        $.ajax({
            type: "PUT",
            cache: false,
            contentType: false,
            processData: false,
            enctype: 'multipart/form-data',
            url: "http://localhost:5000/api/sst/services/" + id,
            data: formData,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                $("#eserviceModal").modal("hide");
                // table.row(crow).data(data).invalidate().draw(false);
                toastr.success("Service successfully updated!");
                table.ajax.reload();
            },
            error: function (error) {
                console.log(error);
            },
        });
    });

});
