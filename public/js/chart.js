// const { add } = require("lodash");

$(document).ready(function () {
    // const ctx = document.getElementById("titleChart");
    var ctx_items = document.getElementById("itemsChart");
    // var salesChart;
    var itemChart = new Chart(ctx_items, {
        type: "bar",
        data: {
            labels: [],
            datasets: [
                {
                    label: "# of Votes",
                    data: [],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1,
                },
            },
        },
    });

    var ctx_sales = document.getElementById("salesChart");
    var salesChart = new Chart(ctx_sales, {
        type: "line",
        data: {
            labels: [],
            datasets: [
                {
                    label: "Overall Sales",
                    data: [],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1,
                },
            },
        },
    });

    // Ajax call for chart ITEM data
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/chart/items",
        // data: "json",
        contentType: false,
        processData: false,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        dataType: "json",
        xhrFields: {
            withCredentials: true,
        },
        credentials: "include",
        success: function (data) {
            $.each(data, function (key, value) {
                console.log(key, value);
                addData(itemChart, value.item_name, value.totalItems);
            });

            // re-render the chart
        },
        error: function (error) {},
    });

    var oneDay = 10 * 24 * 60 * 60 * 1000;
    // Ajax call for chart SALES data
    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/chart/sales",
        // data: "json",
        contentType: false,
        processData: false,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        dataType: "json",
        xhrFields: {
            withCredentials: true,
        },
        credentials: "include",
        success: function (data) {
            $.each(data, function (key, value) {
                console.log(key, value);
                var englishDate = new Date(value.created_at).toDateString();
                addData(salesChart, englishDate, value.totalSales);
            });
            // $(function () {
            //     $("#slider-range").slider({
            //         range: true,
            //         min: 0,
            //         max: 500,
            //         values: [75, 300],
            //         slide: function (event, ui) {
            //             console.log(ui);
            //         },
            //     });
            // });
        },
        error: function (error) {},
    });

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/chart/dates",
        // data: "json",
        contentType: false,
        processData: false,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        dataType: "json",
        xhrFields: {
            withCredentials: true,
        },
        credentials: "include",
        success: function (data) {
            console.log(data[0].minDate);
            const minDate =
                new Date(data[0].minDate.split("T")[0]).getTime() - oneDay;
            const maxDate =
                new Date(data[0].maxDate.split("T")[0]).getTime() + oneDay;
            console.log(minDate, maxDate);

            $(function () {
                $("#slider-range").slider({
                    range: true,
                    min: minDate,
                    max: maxDate,
                    step: 10 * 24 * 60 * 60 * 100,
                    // values: [minDate, maxDate],
                    slide: debounce(function (event, ui) {
                        var low = $(this).slider("values", 0);
                        var high = $(this).slider("values", 1);
                        const firstDate = new Date(low);
                        const secondDate = new Date(high);
                        $.ajax({
                            type: "GET",
                            url:
                                "http://localhost:5000/api/sst/chart/filtersales/" +
                                firstDate.toISOString().split("T")[0] +
                                "/" +
                                secondDate.toISOString().split("T")[0],
                            // data: {},
                            contentType: false,
                            processData: false,
                            headers: {
                                "X-CSRF-TOKEN": $(
                                    'meta[name="csrf-token"]'
                                ).attr("content"),
                                Authorization:
                                    "Bearer " + localStorage.getItem("token"),
                            },
                            dataType: "json",
                            xhrFields: {
                                withCredentials: true,
                            },
                            credentials: "include",
                            success: function (data) {
                                console.log(data);
                                // salesChart.destroy();
                                // drawSalesChart(ctx_sales);

                                // var englishDate = new Date(
                                //     value.created_at
                                // ).toDateString();
                                // $.each(data, function (key, value) {
                                //     console.log(key, value);
                                //     removeData(salesChart);
                                // });
                                clearData(salesChart);
                                $.each(data, function (key, value) {
                                    var englishDate = new Date(
                                        value.created_at
                                    ).toDateString();
                                    console.log(key, value);
                                    addData(
                                        salesChart,
                                        englishDate,
                                        value.totalSales
                                    );
                                });
                            },
                            error: function (error) {},
                        });
                        // const low1 = new Date(low);
                        // const high1 = new Date(high);
                        // console.log(low1, high1);
                    }, 100),
                });
            });
        },
        error: function (error) {},
    });

    // function drawSalesChart(ctx) {
    //     salesChart = new Chart(ctx, {
    //         type: "line",
    //         data: {
    //             labels: [],
    //             datasets: [
    //                 {
    //                     label: "Overall Sales",
    //                     data: [],
    //                     borderWidth: 1,
    //                 },
    //             ],
    //         },
    //         options: {
    //             scales: {
    //                 y: {
    //                     beginAtZero: true,
    //                     stepSize: 1,
    //                 },
    //             },
    //         },
    //     });
    // }

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    function clearData(chart) {
        chart.data.labels = [];
        chart.data.datasets[0].data = [];
        chart.update();
    }

    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

    // function updateData(chart, label, data) {
    //     chart.data.labels.push(label);
    //     chart.data.datasets.forEach((dataset) => {
    //         dataset.data.push(data);
    //     });
    //     chart.update();
    // }

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

    $("#clear").on("click", () => {
        removeData(itemChart);
    });
});
