$(document).ready(function () {
    var cartDisplay = $("#cart");
    var totalDisplay = $("#totalBody");
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
            totalDisplay.empty();
            console.log(data);
            toastr.success(data);

            // var totalFront = $("#totalBody")

            var totalz = $(`<tr>
                                    <td>
                                        <h2 style="font-weight: 900">Total</h2>
                                    </td>
                                    <td>
                                        <h2 id="total" style="font-weight: 300">$ ${data.totalPrice}</h2>
                                    </td>
                                </tr>`);

            $.each(data.cartItems, function (key, value) {
                console.log("key ", key, "val ", value.item.item_name);
                var itemID = value.item.id;
                var item_name = value.item.item_name;
                var price = value.price;
                var totalPrice = value.totalPrice;
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
                totalz.appendTo(totalDisplay);
            });
        },
        error: function (e) {
            console.log("AJAX load did not work", e);
            alert("error", e.message);
        },
    });

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    $(document).on(
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
                    $("#total").text("$ " + data.totalPrice);
                },
                error: function (e) {
                    console.log("AJAX load did not work", e);
                    alert("error", e.message);
                },
            });
        }
        // 3 milliseconds
    );

    // $(document).on(
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
    //     30 // 3 milliseconds
    // );
});
