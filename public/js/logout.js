$(document).ready(function () {
    if (localStorage.getItem("token")) {
        $("#loginButton").hide();
        $("#adminLinks").show();
        $("#logoutButton").show();
    } else {
        $("#loginButton").show();
        $("#adminLinks").hide();
        $("#logoutButton").hide();
    }

    $("#logoutButton").on("click", function (e) {
        $.ajax({
            type: "POST",
            url: "http://localhost:5000/api/sst/logout/",
            // data: formData,
            contentType: false,
            processData: false,

            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                // "Access-Control-Allow-Origin": "*",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                localStorage.removeItem("token");
                toastr.success("Succesfully Logged out");
                // window.location("http://localhost:8000/");
            },
            error: function (error) {
                console.log(error);
                // toastr.info(error);
            },
        });
        // window.location.href = "http://localhost:8000/";
        $("#loginButton").show();
        $("#logoutButton").hide();
        $("#adminLinks").hide();
    });
});
