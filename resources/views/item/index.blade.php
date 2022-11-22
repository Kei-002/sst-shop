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
                    <h2>Item Details</h2>
                    <div class="table-responsive">
                        <table class="table" id="itable">
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
                            <form id="iform" action="#" method="#" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="fname" class="control-label">Item Name</label>
                                    <input type="text" class="form-control " id="item_name" name="item_name">
                                </div>
                                <div class="form-group">
                                    <label for="lname" class="control-label">Description</label>
                                    <input type="text" class="form-control " id="desc" name="desc"></text>
                                </div>
                                <div class="form-group">
                                    <label for="catDropdown">Categories</label>
                                    <select class="form-control" id="catDropdown"
                                        name="catDropdown"></select>
                                </div>
                                <div class="form-group">
                                    <label for="lname" class="control-label">Cost Price</label>
                                    <input type="text" class="form-control " id="cost_price" name="cost_price"></text>
                                </div>

                                <div class="form-group">
                                    <label for="address" class="control-label">Sell Price</label>
                                    <input type="text" class="form-control" id="sell_price" name="sell_price">
                                </div>
                                <div class="form-group">
                                    <label for="phone" class="control-label">Stock</label>
                                    <input type="text" class="form-control" id="quantity" name="quantity">
                                </div>
                                <div class="form-group">
                                    <label for="address" class="control-label">Item Image</label>
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
                        <h4 class="modal-title">Edit Item Details</h4>

                        <div class="modal-body">
                            <form id="updateform" action="#" method="#" enctype="multipart/form-data">
                                <div class="form-group">
                                    <input type="hidden" class="form-control id" id="eid" name="id">
                                </div>
                                <div class="form-group">
                                    <label for="fname" class="control-label">Item Name</label>
                                    <input type="text" class="form-control " id="eitem_name" name="item_name">
                                </div>
                                <div class="form-group">
                                    <label for="lname" class="control-label">Description</label>
                                    <input type="text" class="form-control " id="edesc" name="desc"></text>
                                </div>
                                <div class="form-group">
                                    <label for="catDropdown">Categories</label>
                                    <select class="form-control" id="ecatDropdown"
                                        name="catDropdown"></select>
                                </div>
                                <div class="form-group">
                                    <label for="lname" class="control-label">Cost Price</label>
                                    <input type="text" class="form-control " id="ecost_price" name="cost_price"></text>
                                </div>

                                <div class="form-group">
                                    <label for="address" class="control-label">Sell Price</label>
                                    <input type="text" class="form-control" id="esell_price" name="sell_price">
                                </div>
                                <div class="form-group">
                                    <label for="phone" class="control-label">Stock</label>
                                    <input type="text" class="form-control" id="equantity" name="quantity">
                                </div>
                                <div class="form-group">
                                    <label for="address" class="control-label">Item Image</label>
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


        <script src="js/item.js"></script>

    </body>
@endsection
