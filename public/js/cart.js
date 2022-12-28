$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/shop/sitems",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $.each(data, function (key, value) {
                console.log(key, value);
                var id = value.id;
                var itemPrice = value.sell_price;
                var item = value.item_name;
                var itemImg = value.img_path;
                var servPrice = value.price;
                var serv = value.service_name

                var cont = $("#compcontainer");
                var start = $('<div class="col-sm-12 col-md-6 col-lg-4 mb-4">');
                var card = $(
                    '<div class="card text-white card-has-bg click-col" style="background-image:url('+ itemImg +');background-size: cover;background-position: center;"><div class="card-img-overlay d-flex flex-column"><div class="card-body"><small class="card-meta mb-2">$ ' + itemPrice + ' </small><h4 class="card-title mt-0 "><input type="hidden" id="'+ id +'" name="'+ id +'" value="'+ id +'" /><a class="text-white" herf="#">' + item + '</a></h4></div></div></div>'
                );

                start.append(card);
                cont.append(start);


            });
        },
        error: function () {
            console.log("AJAX load did not work");
            alert("error");
        },
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/shop/sservices",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $.each(data, function (key, value) {
                console.log(key, value);
                var id = value.id;
                var itemImg = value.img_path;
                var servPrice = value.price;
                var serv = value.service_name

                var contt = $("#servcontainer");

                var startt = $('<div class="col-sm-12 col-md-6 col-lg-4 mb-4">');
                var cardd = $(
                    '<div class="card text-white card-has-bg click-col" style="background-image:url('+ itemImg +');background-size: cover;background-position: center;"><div class="card-img-overlay d-flex flex-column"><div class="card-body"><small class="card-meta mb-2">$ ' + servPrice + ' </small><h4 class="card-title mt-0 "><input type="hidden" id="'+ id +'" name="'+ id +'" value="'+ id +'" /><a class="text-white" herf="#">' + serv + '</a></h4></div></div></div>'
                );

                startt.append(cardd);

                contt.append(startt)

            });
        },
        error: function () {
            console.log("AJAX load did not work");
            alert("error");
        },
    });


    $("#componly").on("click", function (e) {
        e.preventDefault();
        var serv = document.getElementById("servcontainer");
        // console.log("Service Hide!");
        $('#servcontainer').toggle();
    });

    
    $("#servonly").on("click", function (e) {
        e.preventDefault();
        var serv = document.getElementById("compcontainer");
        // console.log("Service Hide!");
        if ($('#compcontainer').toggle()) {
            $('#servcontainer').css('margin-top', '-505px');
        } 
        if (!$('#servonly').not(":checked")) {
            $('#servcontainer').css('margin-top', '5px');
        }
       
        
    });

    // }
});
