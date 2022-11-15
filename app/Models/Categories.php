<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Items;

class Categories extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'category_name'
    ];

    public function items()
    {
        return $this->hasMany(Items::class);
    }
}
