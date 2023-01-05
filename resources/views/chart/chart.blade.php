@extends('layouts.base')
@section('body')

    <head>

        <link rel="stylesheet" href="{{ asset('css/cart.css') }}">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.1.1/chart.min.js"
            integrity="sha512-MC1YbhseV2uYKljGJb7icPOjzF2k6mihfApPyPhEAo3NsLUW0bpgtL4xYWK1B+1OuSrUkfOTfhxrRKCz/Jp3rQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        <style>
            .container-fluid {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                /* fraction*/
            }
        </style>

    </head>

    <body>

        <div class="container-fluid">
            <div class="f">
                <canvas id="titleChart"></canvas>
            </div>

            <div class="s">
                <canvas id="salesChart"></canvas>
            </div>

            <div class="t">
                <canvas id="itemsChart"></canvas>
            </div>
        </div>

    </body>
@endsection
