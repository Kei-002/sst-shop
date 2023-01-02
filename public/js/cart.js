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
                var serv = value.service_name;
                var categoryName = value.category_name;

                var cont = $("#compcontainer");
                var start = $(
                    `<div class="col-sm-12 col-md-6 col-lg-4 mb-4 item filter-${categoryName}">`
                );
                var card = $(
                    `<div class="card text-white card-has-bg click-col filter-${categoryName}" style="background-image:url('${itemImg}');background-size: cover;background-position: center;">
                        <div class="card-img-overlay d-flex flex-column">
                            <div class="card-body">
                                <small class="card-meta mb-2">$ ${itemPrice} </small>
                                <h4 class="card-title mt-0 "><input type="hidden" id="${id}" name="${id}" value="${id}" />
                                    <a class="text-white" herf="#">${item}</a>
                                </h4>
                            </div>
                            <div class='d-grid gap-2 col-4'>
                                <a href='#' class='btn btn-primary float-end addtocart' data-id="${id}">
                                    <i class='fa-solid fa-cart-shopping' aria-hidden='true'></i>
                                </a>
                            </div>
                        </div>
                    </div>`
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
                var serv = value.service_name;

                var contt = $("#servcontainer");

                var startt = $(
                    `<div class="col-sm-12 col-md-6 col-lg-4 mb-4 item filter-service">`
                );
                var cardd = $(
                    `<div class="card text-white card-has-bg click-col" style="background-image:url(' ${itemImg}');background-size: cover;background-position: center;">
                        <div class="card-img-overlay d-flex flex-column">
                            <div class="card-body">
                                <small class="card-meta mb-2">$ ${servPrice}</small>
                                <h4 class="card-title mt-0 ">
                                    <input type="hidden" class="servid" data-id="${id}" id="${id}" name="${id}" value="${id}" />
                                    <a class="text-white" herf="#">${serv}</a>
                                </h4>
                            </div>
                            <div class='d-grid gap-2 col-4'>
                                <a href='#' class='btn btn-primary float-end addtocart' data-id="${id}">
                                    <i class='fa-solid fa-cart-shopping' aria-hidden='true'></i>
                                </a>
                            </div>
                        </div>
                    </div>`
                );

                startt.append(cardd);

                contt.append(startt);
            });
        },
        error: function () {
            console.log("AJAX load did not work");
            alert("error");
        },
    });

    // Filtering items through checkbox
    $("#filters :checkbox").click(function () {
        var re = new RegExp(
            $("#filters :checkbox:checked")
                .map(function () {
                    return this.value;
                })
                .get()
                .join("|")
        );
        $("div .item").each(function () {
            var $this = $(this);
            $this[
                re.source != "" && re.test($this.attr("class"))
                    ? "show"
                    : "hide"
            ]();
        });
    });

    $(document).on("click", ".addtocart", function (e) {
        e.preventDefault();

        var id = $(this).data("id");
        $.ajax({
            type: "GET",
            url: "http://localhost:5000/api/sst/shop/add/" + id,
            dataType: "json",
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            credentials: "include",
            success: function (data) {
                toastr.success(data);
            },
            // error: function (e) {
            //     console.log("AJAX load did not work", e);
            //     alert("error", e.message);
            // },
        });
    });

    $(".cart").on("click", (e) => {
        e.preventDefault();
        toastr.success("test cart");
        $.ajax({
            type: "GET",
            url: "http://localhost:5000/api/sst/shop/cart",
            contentType: false,
            processData: false,
            dataType: "json",
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            credentials: "include",
            success: function (data) {
                console.log(data);
                toastr.success(data);
            },
            error: function (e) {
                console.log("AJAX load did not work", e);
                alert("error", e.message);
            },
        });
    });
});
