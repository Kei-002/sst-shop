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

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/categories",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: "{}",
        success: function (data) {
            console.log("test");
            console.log(data);
            var s =
                '<option value="-1" disabled selected>Select Item Category</option>';
            for (var i = 0; i < data.length; i++) {
                s +=
                    '<option value="' +
                    data[i].id +
                    '">' +
                    data[i].category_name +
                    "</option>";
            }
            $("#catDropdown").html(s);
            // $("#ecatDropdown").html(s);
        },
    });

    $("#itemtable").DataTable({
        // scrollY: 200,
        // scrollX: true,
        ajax: {
            url: "http://localhost:5000/api/sst/items/",
            dataSrc: "",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        },
        dom: '<"top"<"left-col"B><"center-col"l><"right-col"f>>rtip',
        buttons: [
            {
                extend: "pdf",
                className: "addNewRecord",
            },
            {
                extend: "excel",
                className: "addNewRecord",
            },
            {
                text: "New Item",
                className: "addNewRecord",
                action: function (e, dt, node, config) {
                    $("#itemForm").trigger("reset");
                    $("#itemModal").modal("show");
                    // $('#itemupdate').hide();
                },
            },
        ],
        columns: [
            {
                data: "id",
            },
            {
                data: "item_name",
            },
            {
                data: "description",
            },
            {
                data: "category_name",
            },
            {
                data: "cost_price",
            },
            {
                data: "sell_price",
            },
            {
                data: "quantity",
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

    //             $("#cbody").append(tr);
    //         });
    //     },
    //     error: function () {
    //         console.log("AJAX load did not work");
    //         alert("error");
    //     },
    // });

    $("#itemSubmit").on("click", function (e) {
        e.preventDefault();
        var data = $("#itemForm")[0];
        console.log(data);
        let formData = new FormData(data);
        console.log(formData);
        for (var pair of formData.entries()) {
            console.log(pair[0] + "," + pair[1]);
        }

        $.ajax({
            type: "POST",
            url: "http://localhost:5000/api/sst/items/",
            data: formData,
            contentType: false,
            processData: false,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                $("#itemModal").modal("hide");
                var $itemtable = $("#itemtable").DataTable();
                // $itemtable.row.add(data.customer).draw(false);
                toastr.success("Item successfully added!");
                $itemtable.ajax.reload();
            },
            error: function (error) {
                console.log(error);
                toastr.error("Something went wrong");
            },
        });
    });

    $("#itemtable tbody").on("click", "a.deletebtn", function (e) {
        var table = $("#itemtable").DataTable();
        var id = $(this).data("id");
        var $row = $(this).closest("tr");

        console.log(id);
        e.preventDefault();
        bootbox.confirm({
            message: "Do You Want To Delete This Customer",
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
                        url: "http://localhost:5000/api/sst/items/" + id,
                        headers: {
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                                "content"
                            ),
                            Authorization:
                                "Bearer " + localStorage.getItem("token"),
                        },
                        dataType: "text",
                        contentType: "application/json",
                        success: function (data) {
                            console.log(data);
                            // bootbox.alert('success');
                            $row.fadeOut(4000, function () {
                                table.row($row).remove().draw(false);
                            });
                            toastr.success("Item successfully deleted!");
                        },
                        error: function (error) {
                            console.log(error);
                        },
                    });
            },
        });
    });

    $("#itemtable tbody").on("click", "a.editBtn", function (e) {
        e.preventDefault();
        $("#eitemModal").modal("show");
        var id = $(this).data("id");
        $.ajax({
            type: "GET",
            url: "http://localhost:5000/api/sst/categories",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },

            data: "{}",
            success: function (data) {
                var s =
                    '<option value="-1" disabled selected>Select Item Category</option>';
                for (var i = 0; i < data.length; i++) {
                    s +=
                        '<option value="' +
                        data[i].id +
                        '">' +
                        data[i].category_name +
                        "</option>";
                }
                $("#ecatDropdown").html(s);
            },
        });

        $.ajax({
            type: "GET",
            enctype: "multipart/form-data",
            processData: false, // Important!
            contentType: false,
            cache: false,
            url: "http://localhost:5000/api/sst/items/" + id,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                $("#eid").val(data[0].id);
                $("#eitem_name").val(data[0].item_name);
                $("#edesc").val(data[0].description);
                $("#ecost_price").val(data[0].cost_price);
                $("#esell_price").val(data[0].sell_price);
                $("#equantity").val(data[0].quantity);
                // $("#ephone").val(data[0].phone);
                $("#ecatDropdown").val(data[0].category_id);
            },
            error: function () {
                console.log("AJAX load did not work");
                alert("error");
            },
        });
    });

    $("#itemUpdate").on("click", function (e) {
        e.preventDefault();
        // var id = $(e.relatedTarget).attr("data-id");
        var id = $("#eid").val();
        console.log(id);

        // var crow = $("tr td:contains(" + id + ")").closest("tr");
        var table = $("#itemtable").DataTable();
        // var data = $("#updateform").serialize();
        var data = $("#eitemForm")[0];
        let formData = new FormData(data);
        // console.log("here");
        console.log(data);
        $.ajax({
            type: "PUT",
            cache: false,
            contentType: false,
            processData: false,
            enctype: "multipart/form-data",
            url: "http://localhost:5000/api/sst/items/" + id,
            data: formData,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                $("#eitemModal").modal("hide");
                // table.row(crow).data(data).invalidate().draw(false);
                toastr.success("Item successfully updated!");
                table.ajax.reload();
            },
            error: function (error) {
                console.log(error);
            },
        });
    });
});
