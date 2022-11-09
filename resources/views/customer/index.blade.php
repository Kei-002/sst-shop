{{-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous">
    </script>

    <script src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.5.2/bootbox.min.js"
        integrity="sha512-RdSPYh1WA6BF0RhpisYJVYkOyTzK4HwofJ3Q7ivt/jkpW6Vc8AurL1R+4AUcvn9IwEKAPm/fk7qFZW3OuiUDeg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="js/customer.js"></script>

</head> --}}

@extends('layouts.base')
@section('body')

<body>
    <div id="customers" class="container">
        <div class="card" style="background-color: #222227;
        box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.4);">
            <div class="card-header" style="font-size: 2rem;color: white;">
                Customers
            </div>
            <div class="card-body" style="background-color: #292930;">
                <button type="button" class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#myModal">Add New
                    Customer
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                <div class="card" style="margin-top: 10px">
                    <div class="table-responsive">
                        <table id="ctable" class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>Fname</th>
                                    <th>Lname</th>
                                    <th>address</th>
                                    <th>phone</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody id="cbody">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="myModal" role="dialog" style="display:none">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Create new customer</h4>

                    <div class="modal-body">
                        <form id="cform" action="#">
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
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Edit customer</h4>

                    <div class="modal-body">
                        <form id="updateform" action="#">
                            {{-- <input type="hidden" name="user_id" id="euserid"> --}}
                            {{-- <div class="form-group">
                                <label for="title" class="control-label">UserId</label>
                                <input type="text" class="form-control" id="euserid" name="user_id">
                            </div> --}}
                            
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

                        </form>
                    </div>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                    <button id="updatebtn" type="submit" class="btn btn-primary">Save</button>
                </div>

            </div>
        </div>
    </div>

</body>
@endsection