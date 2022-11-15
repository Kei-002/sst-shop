<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Items;

class Stocks extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'quantity'
    ];

    public function item()
    {
        return $this->hasOne(Items::class);
    }
}
