@extends('layouts.base')
@section('body')
    {{-- <style>
        .banner {
            background: url('{{ asset('img/common-banner.jpg') }}') no-repeat;
        }
    </style> --}}

    <body>

        <section class="order_details">
            <div class="container">
                <div class="order_details_table">
                    <h2>Shipper Details</h2>
                    <div class="table-responsive">
                        <table class="table" id="stable">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Shipper Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody id="sbody">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <div class="modal fade" id="sModal" role="dialog" style="display:none">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Create New Category</h4>

                        <div class="modal-body">
                            <form id="sform" action="#" method="#" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="fname" class="control-label">Shipper Name</label>
                                    <input type="text" class="form-control " id="shipper_name" name="shipper_name">
                                    <label for="fname" class="control-label">Phone</label>
                                    <input type="text" class="form-control " id="phone" name="phone">
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                        <button id="myFormSubmit" type="submit" class="btn btn-primary">Save</button>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal fade" id="editModal" role="dialog" style="display:none">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit category</h4>

                        <div class="modal-body">
                            <form id="updateform" action="#" method="#" enctype="multipart/form-data">
                                <div class="form-group">
                                    <input type="hidden" class="form-control id" id="eid" name="id">
                                </div>
                                <div class="form-group">
                                    <label for="fname" class="control-label">Shipper Name</label>
                                    <input type="text" class="form-control " id="eshipper_name" name="eshipper_name">
                                    <label for="fname" class="control-label">Shipper Name</label>
                                    <input type="text" class="form-control " id="ephone" name="ephone">
                                </div>
                            </form>
                        </div>

                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                        <button id="myFormUpdate" type="submit" class="btn btn-primary">Update</button>
                    </div>

                </div>
            </div>
        </div>


        <script src="js/shipper.js"></script>

    </body>
@endsection
