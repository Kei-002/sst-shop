$(document).ready(function () {
     if (localStorage.getItem("token")) {
         showLogout();
     } else {
         showLogin();
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
             xhrFields: { withCredentials: true },
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
         showLogin();
     });

     function showLogin() {
         // if (!localStorage.getItem("token")) {
         $("#loginButton").show();
         $("#adminLinks").hide();
         $("#logoutButton").hide();
         $("#profileButton").hide();
         // } else {
         //     $("#loginButton").hide();
         //     $("#adminLinks").show();
         //     $("#logoutButton").show();
         //     $("#profileButton").show();
         // }
     }

     function showLogout() {
         $("#adminLinks").show();
         $("#logoutButton").show();
         $("#profileButton").show();
         $("#loginButton").hide();
     }
});
