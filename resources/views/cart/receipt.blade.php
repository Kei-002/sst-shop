@extends('layouts.base')
@section('body')

    <head>
        <link rel="stylesheet" href="{{ asset('css/cart.css') }}">
    </head>

    <style media="print">
        @page {
            size: auto;
            margin: 0;

        }

        #gg {
            display: none;
        }

        #app {
            display: none;
        }

        @media print {
            .noPrint {
                display: none;
            }
        }
    </style>

    <body>

        <div class="container" style="margin-top: 40px; margin-bottom: 20px;">
            <div class="card">
                <div class="row">
                    <div class="col-12">

                        <div class="invoice p-3 mb-3">

                            <div class="row">
                                <div class="col-12">
                                    <h4>
                                        <img class="lugu" src="{{ asset('img/sstlogo.png') }}" alt="sst logo"
                                            style="width:50px;border-radius: 50%;border: 2px solid #555"> SangSangTek
                                        <small class="float-right">Date: TEST</small>
                                    </h4>
                                </div>

                            </div>

                            <div class="row invoice-info">
                                <div class="col-sm-4 invoice-col">
                                    From
                                    <address>
                                        <strong>SangSangTek</strong><br>
                                        123 Taguig City<br>
                                        Philippines<br>
                                        Phone: (123) 123-5432<br>
                                        Email: sst.admin@admin.com
                                    </address>
                                </div>

                                <div class="col-sm-4 invoice-col profile-col">
                                    To
                                    {{-- <address>
                                        <strong>TEST</strong><br>
                                        795 Folsom Ave, Suite 600<br>
                                        San Francisco, CA 94107<br>
                                        Phone:TEST<br>

                                    </address> --}}
                                </div>

                                <div class="col-sm-4 invoice-col">
                                    <b>Invoice #2023-TEST</b><br>
                                    <br>
                                    <b>Order ID:</b> TEST<br>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-12 table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Qty</th>
                                                <th>Component</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody id="item-body">
                                            {{-- <tr>
                                                <td>TEST</td>
                                                <td>TEST</td>
                                                <td>$TEST</td>
                                            </tr> --}}

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            {{-- 
                            <div class="row">
                                <div class="col-12 table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Qty</th>
                                                <th>Service</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>TEST</td>
                                                <td>TEST</td>
                                                <td>$TEST</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div> --}}



                            <div class="table-responsive">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th style="width:90%">Total:</th>
                                            <td id="totalPrice">$TEST</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>



                    <div class="row no-print">
                        <div class="col-12">

                            <button type="submit" name="submit" id="gg" class="btn btn-success" value="submit"
                                onclick="myFunction(); window.print(); "><i class="fa fa-print"></i> Print</a></button>

                        </div>
                    </div>

                </div>

            </div>

        </div>

        <script>
            function myFunction() {
                var element = document.getElementById("hider");
                var elementt = document.getElementById("sectioncontent");
                element.classList.add("noPrint");
                elementt.classList.add("noPrint");
            }
        </script>
        <script src="{{ asset('js/receipt.js') }}"></script>
    </body>
@endsection
