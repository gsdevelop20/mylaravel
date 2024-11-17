<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockMovement extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'product_id',
        'type', // 'in' for addition or 'out' for subtraction
        'quantity',
        'user_id',
        'notes',
    ];

    /**
     * Define o relacionamento com o produto.
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Define o relacionamento com o usuário responsável.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
