@extends('layouts.base')
@section('body')
    <style>
        .row {
            padding-top: 15px;
        }
    </style>

    <body>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-8">
                    {{-- .col-12 .col-sm-6 .col-md-8 --}}

                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="https://picsum.photos/200" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                the card's content.</p>
                        </div>
                    </div>

                </div>
                <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            </div>
        </div>

    </body>
@endsection
