@extends('layouts.base')
@section('body')
    {{-- <style>
        .banner {
            background: url('{{ asset('img/common-banner.jpg') }}') no-repeat;
        }

        .order_details_table {
            background: #afb7c9 !important;
        }
    </style> --}}

    <body>

        <section class="order_details">
            <div class="container">
                <div class="order_details_table">
                    <h2>Employee Details</h2>
                    <div class="table-responsive">
                        <table class="table" id="emptable">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">LastName</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody id="ebody">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <div class="modal fade" id="employeeModal" role="dialog" style="display:none">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Create New employee</h4>

                        <div class="modal-body">
                            <form id="eform" action="#" method="#" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="fname" class="control-label">Email</label>
                                    <input type="text" class="form-control " id="email" name="email">
                                </div>
                                <div class="form-group">
                                    <label for="lname" class="control-label">Password</label>
                                    <input type="password" class="form-control " id="pass" name="pass"></text>
                                </div>
                                <div class="form-group">
                                    <label for="fname" class="control-label">First Name</label>
                                    <input type="text" class="form-control " id="fname" name="fname">
                                </div>
                                <div class="form-group">
                                    <label for="lname" class="control-label">Last Name</label>
                                    <input type="text" class="form-control " id="lname" name="lname"></text>
                                </div>

                                <div class="form-group">
                                    <label for="address" class="control-label">Address</label>
                                    <input type="text" class="form-control" id="address" name="addressline">
                                </div>
                                <div class="form-group">
                                    <label for="phone" class="control-label">Phone</label>
                                    <input type="text" class="form-control" id="phone" name="phone">
                                </div>
                                <div class="form-group">
                                    <label for="address" class="control-label">Employee Image</label>
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
                        <h4 class="modal-title">Edit Employee</h4>

                        <div class="modal-body">
                            <form id="updateform" action="#" method="#" enctype="multipart/form-data">
                                <div class="form-group">
                                    <input type="hidden" class="form-control id" id="eid" name="id">
                                </div>
                                <div class="form-group">
                                    <label for="fname" class="control-label">First Name</label>
                                    <input type="text" class="form-control " id="efname" name="fname">
                                </div>
                                <div class="form-group">
                                    <label for="lname" class="control-label">Last name</label>
                                    <input type="text" class="form-control " id="elname" name="lname"></text>
                                </div>
                                <div class="form-group">
                                    <label for="address" class="control-label">Address</label>
                                    <input type="text" class="form-control" id="eaddress" name="addressline">
                                </div>
                                <div class="form-group">
                                    <label for="phone" class="control-label">Phone</label>
                                    <input type="text" class="form-control" id="ephone" name="phone">
                                </div>
                                <div class="form-group">
                                    <label for="address" class="control-label">Employee Image</label>
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


        <script src="js/employee.js"></script>

    </body>
@endsection
