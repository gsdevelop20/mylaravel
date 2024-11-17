<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
        'category_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'price' => 'float',
        'quantity' => 'integer',
    ];

    /**
     * Define o relacionamento com a categoria.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Define o relacionamento com as movimentações de estoque.
     */
    public function stockMovements()
    {
        return $this->hasMany(StockMovement::class);
    }
}
