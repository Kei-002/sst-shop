$(document).ready(function () {
    $("#loginSubmit").on("click", function (e) {
        // console.log("test");
        e.preventDefault();
        var data = $("#loginForm")[0];
        // console.log("this", data);
        let formData = new FormData(data);
        // console.log("this1", formData);
        for (var pair of formData.entries()) {
            console.log(pair[0] + "," + pair[1]);
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
                localStorage.setItem("token", data.accessToken);
                // $("#catModal").modal("hide");
                // var $cattable = $("#cattable").DataTable();
                // $cattable.row.add(data.customer).draw(false);
                toastr.success("Succesfully Logged in");
                // $cattable.ajax.reload();
            },
            error: function (error) {
                console.log(error.responseJSON);
                toastr.info(error.responseJSON.Message);
            },
        });
    });

    $("#registerSubmit").on("click", function (e) {
        // console.log("test");
        e.preventDefault();
        var data = $("#registerForm")[0];
        // console.log("this", data);
        let formData = new FormData(data);
        // console.log("this1", formData);
        for (var pair of formData.entries()) {
            console.log(pair[0] + "," + pair[1]);
        }
        console.log("this2");

        $.ajax({
            type: "POST",
            url: "http://localhost:5000/api/sst/register/",
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
                toastr.success(
                    "Succesfully Created your account. Verify your email address"
                );
                // $cattable.ajax.reload();
            },
            error: function (error) {
                console.log(error);
            },
        });
    });

    $("#loginGoogle").on("click", function (e) {
        // console.log("test");
        e.preventDefault();
        // window.open(
        //     "http://localhost:5000/api/sst/login/google",
        //     "",
        //     "width=500,height=900"
        // );
        location.href = "http://localhost:5000/api/sst/login/google";

        // $.ajax({
        //     type: "GET",
        //     url: "http://localhost:5000/api/sst/login/google",
        //     success: function (data) {
        //         console.log(data);
        //         toastr.success("Succesfully Logged in");
        //     },
        //     error: function (error) {
        //         console.log(error);
        //     },
        // });
    });

    $("#loginFacebook").on("click", function (e) {
        // console.log("test");
        e.preventDefault();
        // window.open(
        //     "http://localhost:5000/api/sst/login/google",
        //     "",
        //     "width=500,height=900"
        // );
        location.href = "http://localhost:5000/api/sst/login/facebook";

        // $.ajax({
        //     type: "GET",
        //     url: "http://localhost:5000/api/sst/login/google",
        //     success: function (data) {
        //         console.log(data);
        //         toastr.success("Succesfully Logged in");
        //     },
        //     error: function (error) {
        //         console.log(error);
        //     },
        // });
    });
});
