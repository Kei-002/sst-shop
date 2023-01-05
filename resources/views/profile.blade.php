@extends('layouts.base')
@section('body')

    <head>

        <link rel="stylesheet" href="{{ asset('css/cart.css') }}">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

        <style>
            .profile-head {
                transform: translateY(5rem)
            }

            .cover {
                background-image: url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
                background-size: cover;
                background-repeat: no-repeat
            }

            #phone {
                position: absolute;
                top: 78px;
                right: 400px;
            }
        </style>

    </head>

    <body>

        <div class="row py-5 px-4">
            <div class="col-md-5 mx-auto">
                <!-- Profile widget -->
                <div class="bg-white shadow rounded overflow-hidden">
                    <div class="px-4 pt-0 pb-4 cover">
                        <div class="media align-items-end profile-head">
                            <div class="profile mr-3"><img
                                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                    alt="..." width="130" class="rounded mb-2 img-thumbnail"><a href="#"
                                    class="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>
                            <div class="media-body mb-5 text-white">
                                <h4 class="mt-0 mb-0">Mark Williams</h4>
                                <p class="small mb-4" id="address"> <i class="fas fa-map-marker-alt mr-2"></i>New York</p>
                                <p class="small mb-4" id="phone"> <i class="fas fa-phone mr-2"></i> 0192321</p>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3" style="margin-top: 60px;">
                        <h5 class="mb-0">Component Transaction History</h5>
                        <div class="p-4 rounded shadow-sm bg-light">
                            <div class="table-responsive">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Component Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Purchased Date</th>
                                        </tr>
                                    </thead>
                                    <tbody id="totalBody">
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>$2103</td>
                                            <td>2022-22-02</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="px-4 py-3" style="margin-top: 60px;">
                        <h5 class="mb-0">Services Transaction History</h5>
                        <div class="p-4 rounded shadow-sm bg-light">
                            <div class="table-responsive">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Service Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Availed Date</th>
                                        </tr>
                                    </thead>
                                    <tbody id="totalBody">
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>$2103</td>
                                            <td>2022-22-02</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </body>
@endsection
