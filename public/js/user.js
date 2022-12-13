$(document).ready(function () {
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
                        "<a href='#' class='deletebtn' data-id=" +
                        data.id +
                        "><i class='fa-sharp fa-solid fa-arrows-rotate'></a></i>"
                    );
                },
            },
        ],
    });

});
