@extends('layouts.base')
@section('body')

    <body>

        <div class="wrapper">
            <div class="contentWrapper">
                <div class="butWrapper">
                    <button class="tab-button active" data-id="customer">Customer</button>
                    <button class="tab-button" data-id="employee">Employee</button>
                    <button class="tab-button" data-id="item">Item</button>
                    <button class="tab-button" data-id="services">Services</button>
                    <button class="tab-button" data-id="shipper">Shipper</button>
                    <button class="tab-button" data-id="category">Category</button>
                </div>

                <div class="content active" id="customer">
                    <section class="order_details">
                        <div class="container">
                            <div class="order_details_table">
                                <h2>Customer Details</h2>
                                <div class="table-responsive">
                                    <table class="table" id="customertable">
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
                                        <tbody id="cbody">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="modal fade" id="customerModal" role="dialog" style="display:none">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Create New Customer</h4>

                                    <div class="modal-body">
                                        <form id="customerForm" action="#" method="#" enctype="multipart/form-data">
                                            @csrf
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Email</label>
                                                <input type="text" class="form-control " id="email" name="email">
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Password</label>
                                                <input type="password" class="form-control " id="pass"
                                                    name="pass"></text>
                                            </div>
                                            <div class="form-group">
                                                <label for="fname" class="control-label">First Name</label>
                                                <input type="text" class="form-control " id="fname" name="fname">
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Last Name</label>
                                                <input type="text" class="form-control " id="lname"
                                                    name="lname"></text>
                                            </div>

                                            <div class="form-group">
                                                <label for="address" class="control-label">Address</label>
                                                <input type="text" class="form-control" id="address"
                                                    name="addressline">
                                            </div>
                                            <div class="form-group">
                                                <label for="phone" class="control-label">Phone</label>
                                                <input type="text" class="form-control" id="phone" name="phone">
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Customer Image</label>
                                                <input type="file" class="form-control" id="img_path" name="uploads">
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="customerSubmit" type="submit" class="btn btn-primary">Save</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="ecustomerModal" role="dialog" style="display:none">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Edit Customer</h4>

                                    <div class="modal-body">
                                        <form id="ecustomerForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            <div class="form-group">
                                                <input type="hidden" class="form-control id" id="eid"
                                                    name="id">
                                            </div>
                                            <div class="form-group">
                                                <label for="fname" class="control-label">First Name</label>
                                                <input type="text" class="form-control " id="efname"
                                                    name="fname">
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Last name</label>
                                                <input type="text" class="form-control " id="elname"
                                                    name="lname"></text>
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Address</label>
                                                <input type="text" class="form-control" id="eaddress"
                                                    name="addressline">
                                            </div>
                                            <div class="form-group">
                                                <label for="phone" class="control-label">Phone</label>
                                                <input type="text" class="form-control" id="ephone"
                                                    name="phone">
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Customer Image</label>
                                                <input type="file" class="form-control" id="img_path"
                                                    name="uploads">
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="customerUpdate" type="submit" class="btn btn-primary">Update</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="content" id="employee">
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
                                        <form id="empForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            @csrf
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Email</label>
                                                <input type="text" class="form-control " id="email"
                                                    name="email">
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Password</label>
                                                <input type="password" class="form-control " id="pass"
                                                    name="pass"></text>
                                            </div>
                                            <div class="form-group">
                                                <label for="fname" class="control-label">First Name</label>
                                                <input type="text" class="form-control " id="fname"
                                                    name="fname">
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Last Name</label>
                                                <input type="text" class="form-control " id="lname"
                                                    name="lname"></text>
                                            </div>

                                            <div class="form-group">
                                                <label for="address" class="control-label">Address</label>
                                                <input type="text" class="form-control" id="address"
                                                    name="addressline">
                                            </div>
                                            <div class="form-group">
                                                <label for="phone" class="control-label">Phone</label>
                                                <input type="text" class="form-control" id="phone"
                                                    name="phone">
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Employee Image</label>
                                                <input type="file" class="form-control" id="img_path"
                                                    name="uploads">
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="empSubmit" type="submit" class="btn btn-primary">Save</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="eempModal" role="dialog" style="display:none">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Edit Employee</h4>

                                    <div class="modal-body">
                                        <form id="eempForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            <div class="form-group">
                                                <input type="hidden" class="form-control id" id="empid"
                                                    name="id">
                                            </div>
                                            <div class="form-group">
                                                <label for="fname" class="control-label">First Name</label>
                                                <input type="text" class="form-control " id="empfname"
                                                    name="fname">
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Last name</label>
                                                <input type="text" class="form-control " id="emplname"
                                                    name="lname"></text>
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Address</label>
                                                <input type="text" class="form-control" id="empadd"
                                                    name="addressline">
                                            </div>
                                            <div class="form-group">
                                                <label for="phone" class="control-label">Phone</label>
                                                <input type="text" class="form-control" id="empphone"
                                                    name="phone">
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Employee Image</label>
                                                <input type="file" class="form-control" id="img_path"
                                                    name="uploads">
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="empUpdate" type="submit" class="btn btn-primary">Update</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="content" id="item">
                    <section class="order_details">
                        <div class="container">
                            <div class="order_details_table">
                                <h2>Item Details</h2>
                                <div class="table-responsive">
                                    <table class="table" id="itemtable">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Item Name</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Cost Price</th>
                                                <th scope="col">Sell Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Edit</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody id="ibody">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="modal fade" id="itemModal" role="dialog" style="display:none">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Create New Item</h4>

                                    <div class="modal-body">
                                        <form id="itemForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            @csrf
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Item Name</label>
                                                <input type="text" class="form-control " id="item_name"
                                                    name="item_name">
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Description</label>
                                                <input type="text" class="form-control " id="desc"
                                                    name="desc"></text>
                                            </div>
                                            <div class="form-group">
                                                <label for="catDropdown">Categories</label>
                                                <select class="form-control" id="catDropdown"
                                                    name="catDropdown"></select>
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Cost Price</label>
                                                <input type="text" class="form-control " id="cost_price"
                                                    name="cost_price"></text>
                                            </div>

                                            <div class="form-group">
                                                <label for="address" class="control-label">Sell Price</label>
                                                <input type="text" class="form-control" id="sell_price"
                                                    name="sell_price">
                                            </div>
                                            <div class="form-group">
                                                <label for="phone" class="control-label">Stock</label>
                                                <input type="text" class="form-control" id="quantity"
                                                    name="quantity">
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Item Image</label>
                                                <input type="file" class="form-control" id="img_path"
                                                    name="uploads">
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="itemSubmit" type="submit" class="btn btn-primary">Save</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="eitemModal" role="dialog" style="display:none">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Edit Item Details</h4>

                                    <div class="modal-body">
                                        <form id="eitemForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            <div class="form-group">
                                                <input type="hidden" class="form-control id" id="eid"
                                                    name="id">
                                            </div>
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Item Name</label>
                                                <input type="text" class="form-control " id="eitem_name"
                                                    name="item_name">
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Description</label>
                                                <input type="text" class="form-control " id="edesc"
                                                    name="desc"></text>
                                            </div>
                                            <div class="form-group">
                                                <label for="catDropdown">Categories</label>
                                                <select class="form-control" id="ecatDropdown"
                                                    name="catDropdown"></select>
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Cost Price</label>
                                                <input type="text" class="form-control " id="ecost_price"
                                                    name="cost_price"></text>
                                            </div>

                                            <div class="form-group">
                                                <label for="address" class="control-label">Sell Price</label>
                                                <input type="text" class="form-control" id="esell_price"
                                                    name="sell_price">
                                            </div>
                                            <div class="form-group">
                                                <label for="phone" class="control-label">Stock</label>
                                                <input type="text" class="form-control" id="equantity"
                                                    name="quantity">
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Item Image</label>
                                                <input type="file" class="form-control" id="img_path"
                                                    name="uploads">
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="itemUpdate" type="submit" class="btn btn-primary">Update</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="content" id="category">
                    <section class="order_details">
                        <div class="container">
                            <div class="order_details_table">
                                <h2>Category Details</h2>
                                <div class="table-responsive">
                                    <table class="table" id="cattable">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Category Name</th>
                                                <th scope="col">Edit</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody id="cbody">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="modal fade" id="catModal" role="dialog" style="display:none">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Create New Category</h4>

                                    <div class="modal-body">
                                        <form id="catForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            @csrf
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Category Name</label>
                                                <input type="text" class="form-control " id="category_name"
                                                    name="category_name">
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="catSubmit" type="submit" class="btn btn-primary">Save</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="ecatModal" role="dialog" style="display:none">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Edit category</h4>

                                    <div class="modal-body">
                                        <form id="ecatForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            <div class="form-group">
                                                <input type="hidden" class="form-control id" id="catid"
                                                    name="id">
                                            </div>
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Category Name</label>
                                                <input type="text" class="form-control " id="ecategory_name"
                                                    name="category_name">
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="catUpdate" type="submit" class="btn btn-primary">Update</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="content" id="services">
                    <section class="order_details">
                        <div class="container">
                            <div class="order_details_table">
                                <h2>Service Details</h2>
                                <div class="table-responsive">
                                    <table class="table" id="servicetable">
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
                                        <form id="serviceForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            @csrf
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Service Name</label>
                                                <input type="text" class="form-control " id="service_name"
                                                    name="service_name">
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Service Description</label>
                                                <input type="text" class="form-control " id="description"
                                                    name="description"></text>
                                            </div>
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Price</label>
                                                <input type="text" class="form-control " id="price"
                                                    name="price">
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Service Image</label>
                                                <input type="file" class="form-control" id="img_path"
                                                    name="uploads">
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="serviceSubmit" type="submit" class="btn btn-primary">Save</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="eserviceModal" role="dialog" style="display:none">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Edit Customer</h4>

                                    <div class="modal-body">
                                        <form id="eserviceForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            <div class="form-group">
                                                <input type="hidden" class="form-control id" id="eserid"
                                                    name="id">
                                            </div>
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Service Name</label>
                                                <input type="text" class="form-control " id="eservice_name"
                                                    name="eservice_name">
                                            </div>
                                            <div class="form-group">
                                                <label for="lname" class="control-label">Description</label>
                                                <input type="text" class="form-control " id="edescription"
                                                    name="edescription"></text>
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Price</label>
                                                <input type="text" class="form-control" id="eprice"
                                                    name="eprice">
                                            </div>
                                            <div class="form-group">
                                                <label for="address" class="control-label">Service Image</label>
                                                <input type="file" class="form-control" id="img_path"
                                                    name="uploads">
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="serviceUpdate" type="submit" class="btn btn-primary">Update</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="content" id="shipper">
                    <section class="order_details">
                        <div class="container">
                            <div class="order_details_table">
                                <h2>Shipper Details</h2>
                                <div class="table-responsive">
                                    <table class="table" id="shippertable">
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

                    <div class="modal fade" id="shipModal" role="dialog" style="display:none">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Create New Category</h4>

                                    <div class="modal-body">
                                        <form id="shipForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            @csrf
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Shipper Name</label>
                                                <input type="text" class="form-control " id="shipper_name"
                                                    name="shipper_name">
                                                <label for="fname" class="control-label">Phone</label>
                                                <input type="text" class="form-control " id="phone"
                                                    name="phone">
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="shipSubmit" type="submit" class="btn btn-primary">Save</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="eshipModal" role="dialog" style="display:none">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Edit category</h4>

                                    <div class="modal-body">
                                        <form id="eshipForm" action="#" method="#"
                                            enctype="multipart/form-data">
                                            <div class="form-group">
                                                <input type="hidden" class="form-control id" id="shipid"
                                                    name="id">
                                            </div>
                                            <div class="form-group">
                                                <label for="fname" class="control-label">Shipper Name</label>
                                                <input type="text" class="form-control " id="eshipper_name"
                                                    name="eshipper_name">
                                                <label for="fname" class="control-label">Shipper Phone</label>
                                                <input type="text" class="form-control " id="shipphone"
                                                    name="shipphone">
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
                                    <button id="shipUpdate" type="submit" class="btn btn-primary">Update</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <script src="js/styles.js"></script>
                <script src="js/shipper.js"></script>
                <script src="js/service.js"></script>
                <script src="js/category.js"></script>
                <script src="js/item.js"></script>
                <script src="js/employee.js"></script>
                <script src="js/customer.js"></script>


            </div>
        </div>

    </body>
@endsection
