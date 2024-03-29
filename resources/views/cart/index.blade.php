@extends('layouts.base')
@section('body')

    <head>
        <link rel="stylesheet" href="{{ asset('css/cart.css') }}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.5.0/pagination.min.js"
            integrity="sha512-To905O3HNAHQVrN6xCie4dwDWV0OO3lwZl4rqtCvf+4lfkbx9XlyLmSiLosdi1WWBcW+VMy4Lmu/M10R+FsOPA=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.5.0/pagination.css"
            integrity="sha512-TH+vnrhByFI2RzNvaHSqt6EwoJ9Bp+yGAGTWp84qTuTx315ebnypxtyGHpli55Rm4N4J+N/0W9xAL2b5RZ2ZSA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <style>
        .row {
            padding-top: 25px;
        }

        .pay-btn {
            margin-bottom: 20px;
            border: none;
            background: #22b877;
            font-size: 19px;
            font-size: 1.2rem;
            color: #fff;
            cursor: pointer;
            -webkit-transition: all .2s ease;
            transition: all .2s ease;
            width: 100%;
            margin-bottom: 0px;
        }

        .pay-btn:hover {
            background: #22a877;
            color: #eee;
            -webkit-transition: all .2s ease;
            transition: all .2s ease;
        }

        .float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 40px;
            right: 40px;
            background-color: rgb(0, 163, 204);
            color: #FFF;
            border-radius: 50px;
            text-align: center;
            box-shadow: 2px 2px 3px #999;
        }

        .my-float {
            margin-top: 22px;
        }

        .full-width {
            width: 100px;
        }

        #itemCount {
            position: absolute;
            display: none;
            top: -10px;
            left: -10px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: red;
            color: white;
            text-align: center;
        }

        $delete-red: red;

        body {
            margin: 32px;
        }

        .btnn {
            display: flex;
            align-items: center;
            background: none;
            border: 1px solid lighten(gray, 24%);
            height: 48px;
            padding: 0 24px 0 16px;
            letter-spacing: .25px;
            border-radius: 24px;
            cursor: pointer;

            &:focus {
                outline: none;
            }

            .mdi {
                margin-right: 8px;
            }
        }

        .btn-delete {
            font-size: 16px;
            color: red;

            >.mdi-delete-empty {
                display: none;
            }

            &:hover {
                background-color: lighten(red, 48%);

                >.mdi-delete-empty {
                    display: block;
                }

                >.mdi-delete {
                    display: none;
                }
            }



            &:focus {
                box-shadow: 0 0 0 4px lighten(red, 40%);
            }
        }
    </style>

    <body class="has-drawer">

        <div class="container ccart ">

            <a class="float cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop">
                <i class="fa-solid fa-cart-shopping my-float"></i>
                <span id="itemCount"></span>
            </a>

            <div class="row"
                style="background: white; margin-top:20px; box-shadow: 0px 0 30px rgba(68, 68, 68, 0.08); padding-bottom:20px;height: 100%;">
                <div class="searchbox">
                    <div class="d-flex justify-content-center px-5">
                        <div class="search">
                            <input type="text" id="autocomplete_search" class="form-control search-input"
                                placeholder="Search..." />
                            <span id="search_result"></span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 col-md-4">
                        <div id="sidebar">

                            <h3>CATEGORIES</h3>
                            <div class="checklist categories" id="filters">
                                <ul>
                                    <input type="checkbox" value="CPU" id="filter-CPU" />
                                    <label for="filter-CPU">CPU</label>
                                </ul>
                                <ul>
                                    <input type="checkbox" value="GPU" id="filter-GPU" />
                                    <label for="filter-GPU">GPU</label>
                                </ul>

                                {{-- <ul>
                                    <input type="checkbox" value="service" id="filter-service" />
                                    <label for="filter-service">Services</label>
                                </ul> --}}

                            </div>


                            <div class="offcanvas offcanvas-start items-services" tabindex="-1" id="offcanvasWithBackdrop"
                                aria-labelledby="offcanvasWithBackdropLabel">
                                <div class="offcanvas-header">
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body ccartbody">
                                    <div class="section-title">
                                        <span>Components</span>
                                        <h2>Components</h2>
                                    </div>

                                    <div class="table-responsive">
                                        <table class="table table-borderless">
                                            <tbody id="cart-items">


                                                {{-- Items --}}

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <hr>
                                {{-- <div class="offcanvas-body scartbody">
                                    <div class="section-title">
                                        <span>Services</span>
                                        <h2>Services</h2>
                                    </div>

                                    <div class="table-responsive">
                                        <table class="table table-borderless">
                                            <tbody id="cart-services">
                                                



                                            </tbody>
                                        </table>
                                    </div>

                                </div> --}}
                                <div class="offcanvas-footer">
                                    <span id="cartTotal"></span>
                                    <button type="button" class='pay-btn' id="checkout"
                                        onclick="location.href='{{ url('/checkout') }}';">Checkout</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-8">
                        <div class="row shp" id="compcontainer">
                            <h3>Components</h3>
                            <div id="pagination-test">

                            </div>

                            {{-- <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                                <div class="card text-white card-has-bg click-col"
                                    style="background-image:url('https://source.unsplash.com/600x900/?tech,street');">
                                    <div class="card-img-overlay d-flex flex-column">
                                        <div class="card-body">
                                            <small class="card-meta mb-2">Thought Leadership</small>
                                            <h4 class="card-title mt-0 "><a class="text-white" herf="#">Goverment
                                                    Lorem
                                                    Ipsum Sit Amet Consectetur dipisi?</a></h4>

                                        </div>
                                        <div class="d-grid gap-2 col-4">
                                            <button type="submit" class="btn btn-primary float-end" aria-label="Right Align">
                                                <span class="fa-solid fa-cart-shopping" aria-hidden="true"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>  
                            </div> --}}

                        </div>
                    </div>

                    {{-- <div class="col-12 col-sm-6 col-md-8" style="margin-left: 432px;margin-top: 5px;">
                        <div class="row shp" id="servcontainer">
                            <h3>Services</h3> --}}

                    {{-- <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                                <div class="card text-white card-has-bg click-col"
                                    style="background-image:url('https://source.unsplash.com/600x900/?tech,street');">
                                    <div class="card-img-overlay d-flex flex-column">
                                        <div class="card-body">
                                            <small class="card-meta mb-2">Thought Leadership</small>
                                            <h4 class="card-title mt-0 "><a class="text-white" herf="#">Goverment
                                                    Lorem
                                                    Ipsum Sit Amet Consectetur dipisi?</a></h4>

                                        </div>
                                    </div>
                                </div>
                            </div> --}}

                    {{-- </div>
                    </div> --}}

                </div>
            </div>
        </div>

        <script src="{{ asset('js/cart.js') }}"></script>

        <script>
            $('.categories a span').each(function(i, el) {
                $(el).append('<span class="x"></span><span class="y"></span>');

                $(el).parent().on('click', function() {
                    if ($(this).hasClass('checked')) {
                        $(el).find('.y').removeClass('animate');
                        setTimeout(function() {
                            $(el).find('.x').removeClass('animate');
                        }, 50);
                        $(this).removeClass('checked');
                        return false;
                    }

                    $(el).find('.x').addClass('animate');
                    setTimeout(function() {
                        $(el).find('.y').addClass('animate');
                    }, 100);
                    $(this).addClass('checked');
                    return false;
                });
            });
        </script>

        <script>
            function load_data(query = '') {
                fetch('http://localhost:5000/api/sst/shop/get_data?search_query=' + query + '').then(function(response) {

                    return response.json();

                }).then(function(responseData) {

                    var html = '<ul class="list-group">';

                    if (responseData.length > 0) {
                        for (var count = 0; count < responseData.length; count++) {
                            var regular_expression = new RegExp('(' + query + ')', 'gi');

                            html +=
                                '<a href="#" class="list-group-item list-group-item-action" onclick="get_text(this)">' +
                                responseData[count].item_name.replace(regular_expression,
                                    '<span class="text-primary fw-bold">$1</span>') + '</a>';
                        }
                    } else {
                        html += '<a href="#" class="list-group-item list-group-item-action disabled">No Data Found</a>';
                    }

                    html += '</ul>';

                    document.getElementById('search_result').innerHTML = html;

                });
            }

            var search_element = document.getElementById("autocomplete_search");

            search_element.onkeyup = function() {

                if (!$(search_element).val()) {

                    $('#search_result').html(""); //to empty the result list
                    return; //return is to abort the operation

                } else {
                    var query = search_element.value;

                    load_data(query);
                }

            };





            function get_text(event) {
                var item_name = event.textContent;

                console.log(item_name);

                document.getElementById('autocomplete_search').value = item_name;

                document.getElementById('search_result').innerHTML = '';
            }
        </script>

    </body>
@endsection
