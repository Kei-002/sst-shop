@extends('layouts.base')
@section('body')
    <!DOCTYPE html>
    <!-- Created By CodingNepal - www.codingnepalweb.com -->
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SST</title>

        <link rel="stylesheet" href="css/styles.css">
        <!-- Bootstrap CSS -->
        {{-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> --}}

        <!--fontawesome-->
        {{-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"> --}}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="{{ asset('styles/aos/aos.css') }}">
        <link rel="stylesheet" href="{{ asset('styles/glightbox/css/glightbox.min.css') }}">
        <link rel="stylesheet" href="{{ asset('styles/swiper/swiper-bundle.min.css') }}">

    </head>

    <body>

        {{-- <header class="header">

        <div class="header-inner">
            <div class="container-fluid px-lg-5">
                <nav class="navbar navbar-expand-lg my-navbar">
                    <a class="navbar-brand" href="#"><span class="logo">
                            <img src="img/sstlogo1.png" class="img-fluid port"
                                style="width:30px; margin:-3px 0px 0px 0px;">SST</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fas fa-bars"
                                style="margin:5px 0px 0px 0px;"></i></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Functions
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ url('/customer-index') }}">Customer</a>
                                    <a class="dropdown-item" href="{{ url('/employee-index') }}">Employee</a>
                                    <a class="dropdown-item" href="{{ url('/ship-index') }}">Shipper</a>
                                    <a class="dropdown-item" href="{{ url('/category-index') }}">Category</a>
                                    <a class="dropdown-item" href="{{ url('/item-index') }}">Items</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Enterprice</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pricing
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Resources</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <button class="header-btn my-2 my-sm-0" type="submit">Login</button>
                        </form>
                    </div>
                </nav>

            </div>
        </div>


    </header>

    <section class="content-banner">

        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-12">
                    <div class="banner-con text-center">
                        <p class="first-title">SangSang Tek</p>
                        <p class="banner-des">Computer Components And Services Web App!</p>
                    </div>
                </div>
            </div>
        </div>

    </section> --}}

        <!-- start features Area -->
        <section class="features-area section_gap">
            <div class="container">
                <div class="row features-inner">
                    <!-- single features -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src="{{ asset('img/features/f-icon1.png') }}" alt="">
                                <h6>Free Delivery</h6>
                                <p>Free Shipping on all order</p>
                            </div>
                        </div>
                    </div>
                    <!-- single features -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src="{{ asset('img/features/f-icon2.png') }}" alt="">
                                <h6>Return Policy</h6>
                                <p>Free Shipping on all order</p>
                            </div>
                        </div>
                    </div>
                    <!-- single features -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src="{{ asset('img/features/f-icon3.png') }}" alt="">
                                <h6>24/7 Support</h6>
                                <p>Free Shipping on all order</p>
                            </div>

                        </div>
                    </div>
                    <!-- single features -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src="{{ asset('img/features/f-icon4.png') }}" alt="">
                                <h6>Secure Payment</h6>
                                <p>Free Shipping on all order</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end features Area -->

        <!-- ======= Portfolio Section ======= -->
        <section id="portfolio" class="portfolio section-bg">
            <div class="container">
                <div class="section-title">
                    <span>Services</span>
                    <h2>Services</h2>
                </div>

                <div class="row portfolio-container">
                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/banner.jpg') }}" class="img-fluid port" alt="" />
                            <div class="portfolio-info">
                                <h4>Factory</h4>
                                <p>Factory</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="{{ asset('img/banner.jpg') }}" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="TEST DATA"><i class="bi bi-arrows-fullscreen"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/sstlogo.png') }}" class="img-fluid port" alt="" />
                            <div class="portfolio-info">
                                <h4>Train Tracks</h4>
                                <p>Train Tracks</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="{{ asset('img/sstlogo.png') }}" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Train Tracks"><i
                                        class="bi bi-arrows-fullscreen"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/common-banner.jpg') }}" class="img-fluid port" alt="" />
                            <div class="portfolio-info">
                                <h4>Stadium</h4>
                                <p>Stadium</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="{{ asset('img/common-banner.jpg') }}" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Stadium"><i class="bi bi-arrows-fullscreen"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/common-banner.jpg') }}" class="img-fluid port" alt="" />
                            <div class="portfolio-info">
                                <h4>Power Lines</h4>
                                <p>Power Lines</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="{{ asset('img/common-banner.jpg') }}" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Power Lines"><i
                                        class="bi bi-arrows-fullscreen"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/common-banner.jpg') }}" class="img-fluid port" alt="" />
                            <div class="portfolio-info">
                                <h4>Artificial Intelligence</h4>
                                <p>AI</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="{{ asset('img/common-banner.jpg') }}" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Artificial Intelligence"><i
                                        class="bi bi-arrows-fullscreen"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/common-banner.jpg') }}" class="img-fluid port" alt="" />
                            <div class="portfolio-info">
                                <h4>Virtual Reality</h4>
                                <p>VR</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="{{ asset('img/common-banner.jpg') }}" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Virtual Reality"><i
                                        class="bi bi-arrows-fullscreen"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/common-banner.jpg') }}" class="img-fluid port" alt="" />
                            <div class="portfolio-info">
                                <h4>Drones</h4>
                                <p>Drones</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="{{ asset('img/common-banner.jpg') }}" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Drones"><i class="bi bi-arrows-fullscreen"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/common-banner.jpg') }}" class="img-fluid port" alt="" />
                            <div class="portfolio-info">
                                <h4>Bridges</h4>
                                <p>Bridges</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="{{ asset('img/common-banner.jpg') }}" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Bridges"><i
                                        class="bi bi-arrows-fullscreen"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="{{ asset('img/common-banner.jpg') }}" class="img-fluid port" alt="" />
                            <div class="portfolio-info">
                                <h4>Modern House</h4>
                                <p>Modern House</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="{{ asset('img/common-banner.jpg') }}" data-gallery="portfolioGallery"
                                    class="portfolio-lightbox" title="Modern House"><i
                                        class="bi bi-arrows-fullscreen"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Portfolio Section -->

        {{-- <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
        </script>

        <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
        <script type="text/javascript">
            $(function() {
                var navbar = $('.header-inner');
                $(window).scroll(function() {
                    if ($(window).scrollTop() <= 40) {
                        navbar.removeClass('navbar-scroll');
                    } else {
                        navbar.addClass('navbar-scroll');
                    }
                });
            });
        </script> --}}

        <script src="{{ asset('styles/aos/aos.js') }}"></script>
        <script src="{{ asset('styles/glightbox/js/glightbox.min.js') }}"></script>
        <script src="{{ asset('styles/swiper/swiper-bundle.min.js') }}"></script>
        <script src="{{ asset('js/styles.js') }}"></script>


    </body>

    </html>
@endsection
