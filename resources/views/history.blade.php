@extends('layouts.base')
@section('body')

    <head>
        <link rel="stylesheet" href="{{ asset('css/cart.css') }}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

    </head>

    <body>

        <div class="container" style="margin-top: 5%">
            <div class="card">
                <div class="card-body">

                    <div class="section-title" style="margin-top: 20px;">
                        <span>Customer Transactions</span>
                        <h2>Customer Transactions</h2>
                    </div>


                    <div class="searchbox">
                        <div class="d-flex justify-content-center px-5">
                            <div class="search" style="margin-bottom: 20px;">
                                <input type="text" id="csearch" class="form-control search-input"
                                    placeholder="Search..." />
                            </div>
                        </div>
                    </div>


                    <table class="table table-bordered">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Customer</th>
                                <th scope="col">Component Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Status</th>
                                <th scope="col">Shipper</th>
                                <th scope="col">Transaction Date</th>
                            </tr>
                        </thead>
                        <tbody id="records_table">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <script>
            function load_data(query = '') {
                fetch('http://localhost:5000/api/sst/history/chistory?search_query=' + query + '').then(function(response) {

                    return response.json();

                }).then(function(responseData) {

                    var trHTML = '';
                    $.each(responseData, function(i, item) {
                        trHTML += '<tr><td>' + item.cName + '</td><td>' + item.item_name + '</td><td>' +
                            item.quantity +
                            '</td> <td>' + item.status + '</td><td>' + item.shipper_name + '</td><td>' + item
                            .odate +
                            '</td></tr>';
                    });
                    $('#records_table').append(trHTML);

                });
            }

            var search_element = document.getElementById("csearch");

            search_element.onkeyup = function() {

                if (!$(search_element).val()) {

                    $('#records_table').html(""); //to empty the result list
                    return; //return is to abort the operation

                } else {
                    var query = search_element.value;

                    load_data(query);
                }

            };
        </script>

    </body>
@endsection
