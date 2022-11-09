<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory;
    // use softDeletes;

    protected $guarded = ['id'];
    public static $rules = [
        'customer_name' => 'required',
        'addressline' => 'required',
        'phone' => 'digits_between:3,8',
        'img_path' => 'required'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
