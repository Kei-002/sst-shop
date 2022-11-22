<?php

namespace App\Http\Controllers;

use DB;
use File;
use View;
use App\Models\User;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customers = Customer::orderBy('fname')->get();
        return response()->json($customers);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $account = new User;
        $account->email = $data["email"];
        $account->password = bcrypt($data["pass"]);
        $account->role = "customer";
        $account->save();

        $customer = new Customer;
        $customer->user_id = $account->id;
        $customer->fname = $data["fname"];
        $customer->lname = $data["lname"];
        $customer->addressline = $data["addressline"];
        $customer->phone = $data["phone"];
        // $customer = Customer::create($request->all());
        $files = $request->file('uploads');

        $customer->img_path = 'images/'.time().'-'.$files->getClientOriginalName();
        $customer->save();

        $data = array('status' => 'saved');
        // Storage::disk('public')->put('images/'.time().'-'.$files->getClientOriginalName(), file_get_contents($files));
        Storage::put('public/images/'.time().'-'.$files->getClientOriginalName(), file_get_contents($files));

        return response()->json(["success" => "Customer Created Successfully.", "item" => $customer, "status" => 200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $customer = Customer::Find($id);
        return response()->json($customer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $customer = Customer::find($id);
        $customer = $customer->update($request->all());
        return response()->json($customer);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::findOrFail($id);
        $account = User::findOrFail($customer->user_id);
        $account->delete();
        return response()->json(["success" => "customer deleted successfully.", "status" => 200]);
    }
}
