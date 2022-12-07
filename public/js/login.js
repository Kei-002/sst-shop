$(document).ready(function () {
    $("#login").on("click", function (e) {
        console.log("test");
        e.preventDefault();
        var data = $("#loginForm")[1];
        console.log("this", data);
        let formData = new FormData(data);
        console.log("this1", formData);
        for (var pair of formData.entries()) {
            console.log("test", pair[0] + "," + pair[1]);
        }
        console.log("this2");

        $.ajax({
            type: "POST",
            url: "http://localhost:5000/api/sst/login/",
            data: formData,
            contentType: false,
            processData: false,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                // $("#catModal").modal("hide");
                // var $cattable = $("#cattable").DataTable();
                // $cattable.row.add(data.customer).draw(false);
                toastr.success("Succesfully Logged in");
                // $cattable.ajax.reload();
            },
            error: function (error) {
                console.log(error);
            },
        });
    });
});
