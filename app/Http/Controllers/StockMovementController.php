<?php

namespace App\Http\Controllers;

use App\Models\StockMovement;
use App\Models\Product;
use Illuminate\Http\Request;

class StockMovementController extends Controller
{
    /**
     * Exibe a lista de movimentações de estoque.
     */
    public function index()
    {
        $stockMovements = StockMovement::with('product', 'user')->latest()->get(); // Inclui produto e usuário na consulta
        return inertia('StockMovements/Index', ['stockMovements' => $stockMovements]);
    }

    /**
     * Exibe o formulário para registrar uma nova movimentação.
     */
    public function create()
    {
        $products = Product::all(); // Envia os produtos disponíveis para o formulário
        return inertia('StockMovements/Create', ['products' => $products]);
    }

    /**
     * Salva uma nova movimentação no banco de dados.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'type' => 'required|in:in,out', // Tipo de movimentação: entrada (in) ou saída (out)
            'quantity' => 'required|integer|min:1',
            'notes' => 'nullable|string|max:500',
        ]);

        $product = Product::findOrFail($validated['product_id']);

        if ($validated['type'] === 'out' && $product->quantity < $validated['quantity']) {
            return redirect()->back()->with('error', 'Quantidade insuficiente no estoque para saída.');
        }

        // Ajusta o estoque do produto
        if ($validated['type'] === 'in') {
            $product->increment('quantity', $validated['quantity']);
        } else {
            $product->decrement('quantity', $validated['quantity']);
        }

        // Cria a movimentação de estoque
        StockMovement::create([
            'product_id' => $validated['product_id'],
            'type' => $validated['type'],
            'quantity' => $validated['quantity'],
            'user_id' => auth()->id(), // Registra o usuário logado
            'notes' => $validated['notes'],
        ]);

        return redirect()->route('stock-movements.index')->with('success', 'Movimentação registrada com sucesso!');
    }

    /**
     * Exibe os detalhes de uma movimentação específica.
     */
    public function show(StockMovement $stockMovement)
    {
        $stockMovement->load('product', 'user'); // Carrega produto e usuário associado
        return inertia('StockMovements/Show', ['stockMovement' => $stockMovement]);
    }

    /**
     * Remove uma movimentação de estoque (opcional, pode ser restrito).
     */
    public function destroy(StockMovement $stockMovement)
    {
        // Opcionalmente, reverte o ajuste no estoque ao remover a movimentação
        $product = $stockMovement->product;

        if ($stockMovement->type === 'in') {
            $product->decrement('quantity', $stockMovement->quantity);
        } else {
            $product->increment('quantity', $stockMovement->quantity);
        }

        $stockMovement->delete();

        return redirect()->route('stock-movements.index')->with('success', 'Movimentação removida com sucesso!');
    }
}
