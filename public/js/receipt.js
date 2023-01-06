$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/shop/checkoutinfo",
        contentType: false,
        processData: false,
        dataType: "json",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        xhrFields: {
            withCredentials: true
        },
        credentials: "include",
        success: function (data) {
            // cartDisplay.empty();
            // totalDisplay.empty();
            console.log(data);
            // toastr.success(data);

            var profileFront = $(".profile-col")

            // var totalz = $(`<tr>
            //                         <td>
            //                             <h2 style="font-weight: 900">Total</h2>
            //                         </td>
            //                         <td>
            //                             <h2 id="total" style="font-weight: 300">$ ${data.totalPrice}</h2>
            //                         </td>
            //                     </tr>`);
            // totalz.appendTo(totalDisplay);
            var custInfo = $(`
                                <address>
                                <strong>${data.customer.fname} ${data.customer.lname}</strong><br>
                                ${data.customer.addressline}<br>
                                Phone: ${data.customer.phone}<br>`);

            custInfo.appendTo(profileFront);
            var itemBody = $("#item-body")

            $.each(data.cartItems, function (key, value) {
                console.log("key ", key, "val ", value.item.item_name);
                var itemID = value.item.id;
                var item_name = value.item.item_name;
                var price = value.price;
                var totalPrice = value.totalPrice;
                var quantity = value.quantity;
                var subtotal = quantity * price;
                var img_path = value.item.img_path;
                var category = value.item.category.category_name;
                var cartItems = $(` <tr>
                                    <td>${quantity}</td>
                                    <td>${item_name}</td>
                                    <td>$${subtotal}</td>
                                </tr>`);
                cartItems.appendTo(itemBody);
            });

            $("#totalPrice").text(data.totalPrice)

        },
        error: function (e) {
            console.log("AJAX load did not work", e);
            alert("error", e.message);
        },
    });




})
