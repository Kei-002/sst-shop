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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

        <style>
            section:nth-of-type(even) {
                background-image: linear-gradient(335deg, #13547a 0%, #80d0c7 100%);
                color: white;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
        </style>


    </head>

    <body>

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

                <div class="row portfolio-container" id="serviceContainer">
                    {{-- Test --}}
                    {{-- <div class="col-lg-4 col-md-6 portfol">
                        <div class="portfolio-wrap">
                            <img src="" class="img-fluid port" id="servicePic" alt="" />
                            <div class="portfolio-info">
                                <h4 id="serviceName"></h4>
                                <p id="serviceDesc"></p>
                            </div>
                            <div class="portfolio-links">
                                <a href="" data-gallery="portfolioGallery" id="serviceLink"
                                    class="portfolio-lightbox" title="TEST DATA"><i class="bi bi-arrows-fullscreen"></i></a>
                            </div>
                        </div>
                    </div> --}}
                    {{-- end Test --}}
                    {{-- <div class="col-lg-4 col-md-6 cardimg">
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
                    </div> --}}
                    {{-- <div class="col-lg-4 col-md-6">
                        <div class="portfolio-wrap portfolio-item ">
                            <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200" data-caption="First image">
                                <img src="https://lipsum.app/id/60/200x150" class="img-fluid port" />
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-wrap portfolio-item ">
                            <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200" data-caption="First image">
                                <img src="https://lipsum.app/id/60/200x150" class="img-fluid port" />
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-wrap portfolio-item ">
                            <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200" data-caption="First image">
                                <img src="https://lipsum.app/id/60/200x150" class="img-fluid port" />
                            </a>
                        </div>
                    </div> --}}
                </div>
            </div>
        </section>


        <section>
            <div class="container">
                <p>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.

                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
                    search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                </p>
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
        <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
        <script>
            // Customization example
            Fancybox.bind('[data-fancybox="gallery"]', {
                infinite: false
            });
        </script>

        <script src="{{ asset('js/styles.js') }}"></script>
        <script src="{{ asset('js/populateTest.js') }}"></script>

    </body>

    </html>
@endsection
