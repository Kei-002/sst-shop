<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::resource('customer', 'CustomerController');
Route::view('/customer-index', 'customer.index');
Route::view('/employee-index', 'employee.index');
Route::view('/item-index', 'item.index');
Route::view('/category-index', 'category.index'); 
Route::view('/ship-index', 'shipper.index'); 
Route::view('/services-index', 'services.index'); 

Route::view('/admin', 'admin.admin'); 

