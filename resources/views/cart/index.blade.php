@extends('layouts.base')
@section('body')

    <head>
        <link rel="stylesheet" href="{{ asset('css/cart.css') }}">
    </head>

    <style>
        .row {
            padding-top: 25px;
        }
    </style>

    <body class="has-drawer">

        <div class="container ccart ">
            <div class="row"
                style="background: white; margin-top:20px; box-shadow: 0px 0 30px rgba(68, 68, 68, 0.08); padding-bottom:20px;height: 100%;">
                <div class="searchbox">
                    <div class="d-flex justify-content-center px-5">
                        <div class="search">
                            <input type="text" class="search-input" placeholder="Search..." name="">
                            <a href="#" class="search-icon"> <i class="fa fa-search"></i> </a>
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

                                <ul>
                                    <input type="checkbox" value="service" id="filter-service" />
                                    <label for="filter-service">Services</label>
                                </ul>

                            </div>

                            {{-- <h3>CATEGORIES</h3>
                            <div class="checklist categories" id="categories">
                                <ul>
                                    <li><a id="componly" class="checkbox filter-component"><span></span>Components</a></li>
                                    <ul>
                                        <li><a href=""
                                                class="checkbox filter-component filter-GPU"><span></span>GPU</a></li>
                                        <li><a href=""
                                                class="checkbox filter-component filter-CPU"><span></span>CPU</a></li>
                                    </ul>
                                    <li><a id="servonly" class="checkbox filter-service"><span></span>Services</a></li>
                                </ul>
                            </div> --}}

                            <h3>PRICE RANGE</h3>

                            <button class="btn btn-primary cart" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Cart</button>

                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop"
                                aria-labelledby="offcanvasWithBackdropLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <p>.....</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-8">
                        <div class="row shp" id="compcontainer">
                            <h3>Components</h3>

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

                    <div class="col-12 col-sm-6 col-md-8" style="margin-left: 432px;margin-top: 5px;">
                        <div class="row shp" id="servcontainer">
                            <h3>Services</h3>

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

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </body>

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
@endsection
