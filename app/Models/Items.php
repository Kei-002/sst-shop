<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Categories;
use App\Models\Stocks;

class Items extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'item_name', 'description', 'cost_price', 'sell_price'
    ];


    public function category()
    {
        return $this->hasOne(Categories::class);
    }

    public function stock()
    {
        return $this->hasOne(Stocks::class);
    }
}
