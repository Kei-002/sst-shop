$(document).ready(function () {

    var profileDiv = $(".profile-info");
    var customerItems = $("#totalBody");

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/profile",
        data: "json",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        xhrFields: {
            withCredentials: true,
        },
        credentials: "include",
        success: function (data) {
            console.log("test");
            profileDiv.empty();
            customerItems.empty();
            var profileData = $(`
                <h4 class="mt-0 mb-0">${data.customer.fname} ${data.customer.lname}</h4>
                <p class="small mb-4" id="address"> <i class="fas fa-map-marker-alt mr-2"></i>${data.customer.addressline}</p>
                <p class="small mb-4" id="phone"> <i class="fas fa-phone mr-2"></i>${data.customer.phone}</p>
            `);
            //ewan
            profileData.appendTo(profileDiv);
            $(".profile img").attr("src", data.customer.img_path);
            var counter = 1;
            // Items
            $.each(data.transactions, function (key, value) {
                console.log(key, value);
                var itemData = $(`
                <tr>
                    <th scope="row">${counter}</th>
                    <td>${value.item_name}</td>
                    <td>$${value.sell_price}</td>
                    <td>${value.created_at}</td>
                </tr>
            `);
                counter++;
                itemData.appendTo(customerItems);
            });

            // $("#pagination-container").pagination({
            //     dataSource: [1, 2, 3, 4, 5, 6, 7],
            //     pageSize: 3,
            //     autoHidePrevious: true,
            //     autoHideNext: true,
            //     callback: function (data, pagination) {
            //         // template method of yourself
            //         var html = template(data);
            //         dataContainer.html(html);
            //     },
            // });
        },
        error: function (err) {
            console.error(err);
            throw err;
        },
    });

});
