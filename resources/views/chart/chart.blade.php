@extends('layouts.base')
@section('body')

    <head>

        <link rel="stylesheet" href="{{ asset('css/cart.css') }}">
        {{-- <link rel="stylesheet" href="{{ asset('js/jquery-ui-1.13.2/jquery-ui.css') }}"> --}}

        {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.1.1/chart.js"
            integrity="sha512-64PuQoA1/rGxeXwhWJRNZl25TjBPhQWeQ6x8h6UC54gQT7xFvTio//dLKg2MiAc3/4Tf+uoLKPzl+QuX87fssA=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script> --}}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"
            integrity="sha512-cmWevKhVdrmcSQujnTmu7/vx8+vZHZaB/31156dH0QB456wDedM+ec2tIP36ktso0LoW0IksvbL/5seNqAPvOQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.css"
            integrity="sha512-BaI5sEcdsa/A34Q9MIU6UmEpNaKISLVvBmnbctWYH0IDfgkh7mUMpES8YO38QnuNNaSHjkH+ueW6Sj054QhKTw=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />

        <style>
            .container-fluid {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                /* fraction*/
                position: relative;
            }
        </style>

    </head>

    <body>

        <div class="container-fluid">
            {{-- <div class="f">
                <canvas id="titleChart"></canvas>
            </div> --}}

            <div class="row">
                {{-- <button id="clear"></button> --}}
                <div class="s">
                    <canvas id="salesChart"></canvas>
                </div>
                <div id="slider-range"></div>

            </div>

            <div class="row">
                <div class="t">
                    <canvas id="itemsChart"></canvas>
                </div>
            </div>

        </div>
        {{-- <script src="js/jquery-ui-1.13.2/jquery-ui.js"></script> --}}
        <script src="js/chart.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    </body>
@endsection
