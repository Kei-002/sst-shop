$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/shop/shipper/",
        data: "{}",
        success: function (data) {
            console.log("test");
            //ewan
        },
    });

});
