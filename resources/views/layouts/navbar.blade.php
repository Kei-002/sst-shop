<style>
    .content-banner {
        background: url('{{ asset('img/banner.jpg') }}') no-repeat;
    }
</style>


<header class="header">

    <div class="header-inner">
        <div class="container-fluid px-lg-5">
            <nav class="navbar navbar-expand-lg my-navbar">
                <a class="navbar-brand" href="{{ url('/') }}"><span class="logo">
                        <img src="img/sstlogo1.png" class="img-fluid"
                            style="width:30px; margin:-3px 0px 0px 0px;">SST</span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fas fa-bars" style="margin:5px 0px 0px 0px;"></i></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        {{-- <li class="nav-item dropdown">
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
                                <a class="dropdown-item" href="{{ url('/services-index') }}">Services</a>
                            </div>
                        </li> --}}
                        <li class="nav-item" id="adminLinks">
                            <a class="nav-link" href="{{ url('/admin') }}">Admin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('/shop') }}">Shop</a>
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
                            <a class="nav-link" href="#">Resources</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0" action="{{ url('/login') }}">
                        <button id="loginButton" class="header-btn my-2 my-sm-0" type="submit">Login</button>
                    </form>
                    <button id="logoutButton" class="header-btn my-2 my-sm-0">Logout</button>
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

</section>


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
{{-- 
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
</script> --}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
    integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
</script>

{{-- <script src="https://code.jquery.com/jquery-3.5.1.js"></script> --}}
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
</script>

 <script src="js/logout.js"></script>


