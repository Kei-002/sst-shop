@extends('layouts.base')
@section('body')
    <style>
        /* .banner {
                                                                                background: url('{{ asset('img/common-banner.jpg') }}') no-repeat;
                                                                            } */
    </style>

    <body>

        <section class="order_details">
            <div class="container">
                <div class="order_details_table">
                    <h2>Service Details</h2>
                    <div class="table-responsive">
                        <table class="table" id="stable">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Service Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image</th>
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

        <div class="modal fade" id="serviceModal" role="dialog" style="display:none">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Create New Service</h4>

                        <div class="modal-body">
                            <form id="sform" action="#" method="#" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="fname" class="control-label">Service Name</label>
                                    <input type="text" class="form-control " id="service_name" name="service_name">
                                </div>
                                <div class="form-group">
                                    <label for="lname" class="control-label">Service Description</label>
                                    <input type="text" class="form-control " id="description" name="description"></text>
                                </div>
                                <div class="form-group">
                                    <label for="fname" class="control-label">Price</label>
                                    <input type="text" class="form-control " id="price" name="price">
                                </div>
                                <div class="form-group">
                                    <label for="address" class="control-label">Service Image</label>
                                    <input type="file" class="form-control" id="img_path" name="uploads">
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
                        <h4 class="modal-title">Edit Customer</h4>

                        <div class="modal-body">
                            <form id="updateform" action="#" method="#" enctype="multipart/form-data">
                                <div class="form-group">
                                    <input type="hidden" class="form-control id" id="eid" name="id">
                                </div>
                                <div class="form-group">
                                    <label for="fname" class="control-label">Service Name</label>
                                    <input type="text" class="form-control " id="eservice_name" name="eservice_name">
                                </div>
                                <div class="form-group">
                                    <label for="lname" class="control-label">Description</label>
                                    <input type="text" class="form-control " id="edescription"
                                        name="edescription"></text>
                                </div>
                                <div class="form-group">
                                    <label for="address" class="control-label">Price</label>
                                    <input type="text" class="form-control" id="eprice" name="eprice">
                                </div>
                                <div class="form-group">
                                    <label for="address" class="control-label">Service Image</label>
                                    <input type="file" class="form-control" id="img_path" name="uploads">
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



        <script src="js/service.js"></script>

    </body>
@endsection
