$(document).ready(function () {
    // $("#serviceContainer").load(getServices());

    // function getServices() {
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/services/",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $.each(data, function (key, value) {
                console.log(key, value);
                var id = value.item_id;
                var tr = $("<tr>");
                var start = $('<div class="col-lg-4 col-md-6 portfolio-item filter-app">')
                var infoDiv = $('<div class="portfolio-info">');
                var linksDiv = $('<div class="portfolio-links">');
                // var insideA = $('<div class="portfolio-links">');
                var cont = $("#serviceContainer");
                start.append($('<div class="portfolio-wrap">'));
                start.append($('<img class="img-fluid port" alt=""  />').attr('src', value.img_path))
                // start.append($("<div>").html(value.service_name));
                infoDiv.append($("<h4>").html(value.service_name));
                // start.append($('<h4>').html(value.service_name));
                infoDiv.append($('<p>').html(value.description));
                start.append(infoDiv)

                // start.append($('</div'));
                // tr.append($("<td>").html(value.description));
                // tr.append($("<td>").html(value.cost_price));
                // tr.append($("<td>").html(value.sell_price));
                // tr.append($("<td>").html(value.title));
                // tr.append($("<td>").html(value.imagePath));
                // tr.append(
                //     "<td align='center'><a href='#' data-bs-toggle='modal' data-bs-target='#editModal' id='editbtn' data-id=" +
                //         id +
                //         "><i class='fa fa-pencil' aria-hidden='true' style='font-size:24px' ></a></i></td>"
                // );
                // tr.append(
                //     "<td><a href='#'  class='deletebtn' data-id=" +
                //         id +
                //         "><i  class='fa fa-trash' style='font-size:24px; color:red' ></a></i></td>"
                // );

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
