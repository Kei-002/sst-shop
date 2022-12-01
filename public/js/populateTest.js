$(document).ready(function () {
    // $("#serviceContainer").load(getServices());

    // function getServices() {
    // var serviceHtml =
    //     '<div class="col-lg-4 col-md-6 portfolio-item filter-app">';
    // serviceHtml += '<div class="portfolio-wrap imgServ">';
    // // serviceHtml += '<img class="img-fluid port" id="servicePhoto"alt="" />';
    // serviceHtml += '<div class="portfolio-info" id="portInfo">';
    // serviceHtml += '<h4 id="serviceName"></h4>';
    // serviceHtml += '<p id="serviceDesc"></p>';
    // serviceHtml += "</div>";
    // serviceHtml += '<div class="portfolio-links" id="portLink">';
    // serviceHtml += "</div>";
    // serviceHtml += "</div>";
    // serviceHtml += "</div>";
    // $(".portfol:first").hide();

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/services/",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $.each(data, function (key, value) {
                console.log(key, value);
                var id = value.id;
                var serviceName = value.service_name;
                var serviceDesc = value.description;
                // let descs = serviceName + "\n" + serviceDesc;
                var serviceImg = value.img_path;



                var cont = $("#serviceContainer");
                // var tr = $("<tr>");
                var start = $('<div class="col-lg-4 col-md-6">')
                var gallery = $('<a data-fancybox="gallery" href="' + serviceImg + '" data-caption="' + serviceName + '">')
                var imgsrc = $('<img class="img-fluid port"/>').attr('src', serviceImg)
                // var infoDiv = $('<div class="portfolio-info">');
                // var wrapDiv = $('<div class="portfolio-wrap">');
                // var linksDiv = $('<div class="portfolio-links">');
                // var insideA = $('<div class="portfolio-links">');

                start.append($('<div class="portfolio-wrap portfolio-item">'));
                // wrapDiv.append($('<img class="img-fluid port" alt=""  />').attr('src', serviceImg))
                // start.append($("<div>").html(value.service_name));
                // infoDiv.append($("<h4>").html(serviceName));
                // start.append($('<h4>').html(value.service_name));
                // infoDiv.append($('<p>').html(serviceDesc));
                // start.append($('<a data-fancybox="gallery" href="' + serviceImg + '" data-caption="' + serviceName + '"'))
                start.append(gallery)
                gallery.append(imgsrc)
                // start.append(wrapDiv)
                // infoDiv.appendTo(wrapDiv)
                // linksDiv.appendTo(wrapDiv)


                cont.append(start);
            });


        },
        error: function () {
            console.log("AJAX load did not work");
            alert("error");
        },
    });
    // }
});
