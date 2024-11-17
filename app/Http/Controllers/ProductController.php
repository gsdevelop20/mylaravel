<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Exibe a lista de produtos.
     */
    public function index()
    {
        $products = Product::with('category')->get(); // Inclui a categoria no resultado
        return inertia('Products/Index', ['products' => $products]);
    }

    /**
     * Exibe o formulário para criar um novo produto.
     */
    public function create()
    {
        $categories = Category::all(); // Envia categorias para o formulário
        return inertia('Products/Create', ['categories' => $categories]);
    }

    /**
     * Salva um novo produto no banco de dados.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:500',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'category_id' => 'required|exists:categories,id',
        ]);

        Product::create($validated);

        return redirect()->route('products.index')->with('success', 'Produto criado com sucesso!');
    }

    /**
     * Exibe os detalhes de um produto específico.
     */
    public function show(Product $product)
    {
        $product->load('category'); // Carrega a categoria associada
        return inertia('Products/Show', ['product' => $product]);
    }

    /**
     * Exibe o formulário para editar um produto específico.
     */
    public function edit(Product $product)
    {
        $categories = Category::all(); // Envia categorias para o formulário de edição
        return inertia('Products/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }

    /**
     * Atualiza um produto no banco de dados.
     */
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:500',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'category_id' => 'required|exists:categories,id',
        ]);

        $product->update($validated);

        return redirect()->route('products.index')->with('success', 'Produto atualizado com sucesso!');
    }

    /**
     * Remove um produto do banco de dados.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('products.index')->with('success', 'Produto removido com sucesso!');
    }
}
