@extends('layouts.base')
@section('body')

    <head>
        <link rel="stylesheet" href="{{ asset('css/cart.css') }}">

        <style>
            .container {
                margin-top: 20px;
            }

            .credit-card-image {
                display: block;
                max-height: 80px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 35px;
                margin-bottom: 15px;
                border-radius: 50%;
            }

            .input-field {
                width: 100%;
            }

            .pay-btn {
                margin-bottom: 20px;
                border: none;
                background: #22b877;
                border-radius: 10px;
                font-size: 19px;
                font-size: 1.2rem;
                color: #fff;
                cursor: pointer;
                -webkit-transition: all .2s ease;
                transition: all .2s ease;
            }

            .pay-btn:hover {
                background: #22a877;
                color: #eee;
                -webkit-transition: all .2s ease;
                transition: all .2s ease;
            }

            #name,
            #address,
            #phone {
                background-color: rgba(121, 118, 118, 0.342);
                border-radius: 10px;
            }

            .price {
                color: #4488dd;
            }

            .thin {
                font-weight: 400;
            }

            .small {
                font-size: 12px;
                font-size: .8rem;
            }

            .full-width {
                width: 150px;
            }
        </style>

    </head>

    <body>

        <div class="container card">

            <div class="row justify-content-center">

                <div class="col-12 col-sm-6 col-md-8">

                    <div class="section-title" style="margin-top: 10px;">
                        <span>Checkout Summary</span>
                        <h2>Checkout Summary</h2>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-borderless">
                            <tbody id="cart">
                                {{-- Items here --}}

                            </tbody>
                        </table>
                    </div>

                    <div>
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <tbody id="totalBody">
                                    <tr>
                                        <td>
                                            <h2 style="font-weight: 900">Total</h2>
                                        </td>
                                        <td>
                                            <h2 id="total" style="font-weight: 300">$</h2>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div class="col-6 col-md-4">

                    <div class="section-title" style="margin-top: 10px;">
                        <span>Customer</span>
                        <h2>Customer Details</h2>
                    </div>

                    <div id="customer_img">
                        <div id="customer_info">

                        </div>

                        <div class="form-group">
                            <label for="shipDrop">Shippers</label>
                            <select class="form-control" id="shipDrop" name="shipDrop"></select>
                        </div>

                        <br>

                        <div>
                            <button type="button" class='pay-btn'>Checkout</button>
                        </div>


                    </div>
                </div>

            </div>

        </div>
        <script src="{{ asset('js/checkout.js') }}"></script>
    </body>
@endsection
