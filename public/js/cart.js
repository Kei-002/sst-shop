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
            xhrFields: { withCredentials: true },
            credentials: "include",
            success: function (data) {
                toastr.success(data + " successfully added to cart");
            },
            error: function (e) {
                console.log("AJAX load did not work", e);
                alert("error", e.message);
            },
        });
    });

    $(".cart").on("click", (e) => {
        e.preventDefault();
        toastr.success("test cart");
        var cartDisplay = $("#cart-items");
        $.ajax({
            type: "GET",
            url: "http://localhost:5000/api/sst/shop/cart",
            contentType: false,
            processData: false,
            dataType: "json",
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            xhrFields: { withCredentials: true },
            credentials: "include",
            success: function (data) {
                cartDisplay.empty();
                console.log(data.cartItems);
                console.log("Nah");
                toastr.success(data);
                $.each(data.cartItems, function (key, value) {
                    // value = value.cartItems;
                    // console.log("key ", key, "val ", value.item.item_name);
                    var itemID = value.item.id;
                    var item_name = value.item.item_name;
                    var price = value.price;
                    var quantity = value.quantity;
                    var img_path = value.item.img_path;
                    var category = value.item.category.category_name;
                    var cartItems = $(` <tr>
                                <td>
                                    <img src='${img_path}' class='full-width'></img>
                                </td>
                                <td>
                                    <br> <span class='thin'>${category}</span>
                                    <br> ${item_name}<br> <span class='thin small'>$${price}
                                        <div class="form-outline" style="width: 5rem;">
                                            <input min="1" max="10" type="number"
                                                id="typeNumber" class="form-control" data-id="${itemID}" value="${quantity}"/>
                                        </div>
                                        <br><br>
                                    </span><br>
                                </td>
                            </tr>`);
                    cartItems.appendTo(cartDisplay);
                });
            },
            error: function (e) {
                console.log("AJAX load did not work", e);
                alert("error", e.message);
            },
        });
    });

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    // function debounce(func, wait, immediate) {
    //     var timeout;
    //     return function () {
    //         var context = this,
    //             args = arguments;
    //         var later = function () {
    //             timeout = null;
    //             if (!immediate) func.apply(context, args);
    //         };
    //         var callNow = immediate && !timeout;
    //         clearTimeout(timeout);
    //         timeout = setTimeout(later, wait);
    //         if (callNow) func.apply(context, args);
    //     };
    // }

    // $(".items-services").on(
    //     "change",
    //     "#typeNumber",
    //     debounce(function (e) {
    //         e.preventDefault();

    //         var id = $(this).data("id");
    //         var quantity = $(this).val();
    //         $.ajax({
    //             type: "GET",
    //             url:
    //                 "http://localhost:5000/api/sst/shop/update/" +
    //                 id +
    //                 "/" +
    //                 quantity,
    //             dataType: "json",
    //             headers: {
    //                 "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
    //                     "content"
    //                 ),
    //             },
    //             xhrFields: { withCredentials: true },
    //             credentials: "include",
    //             success: function (data) {
    //                 toastr.success(data + " quantity changed successfully");
    //             },
    //             error: function (e) {
    //                 console.log("AJAX load did not work", e);
    //                 alert("error", e.message);
    //             },
    //         });
    //     }),
    //     250 // 3 milliseconds
    // );
    $(".items-services").on(
        "change",
        "#typeNumber",
        function (e) {
            e.preventDefault();

            var id = $(this).data("id");
            var quantity = $(this).val();
            console.log(quantity, id);
            $.ajax({
                type: "GET",
                url:
                    "http://localhost:5000/api/sst/shop/update/" +
                    id +
                    "/" +
                    quantity,
                dataType: "json",
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                xhrFields: { withCredentials: true },
                credentials: "include",
                success: function (data) {
                    toastr.success(
                        data.item_name + " quantity changed successfully"
                    );
                },
                error: function (e) {
                    console.log("AJAX load did not work", e);
                    alert("error", e.message);
                },
            });
        }
        // 3 milliseconds
    );
});
