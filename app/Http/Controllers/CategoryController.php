<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Exibe a lista de categorias.
     */
    public function index()
    {
        $categories = Category::all(); // Obtém todas as categorias
        return inertia('main/uikit/categories/Index', ['categories' => $categories]);
    }

    /**
     * Exibe o formulário para criar uma nova categoria.
     */
    public function create()
    {
        return Inertia::render('main/uikit/categories/Create');
    }

    /**
     * Salva uma nova categoria no banco de dados.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:categories,name',
            'description' => 'nullable|string|max:500',
        ]);

        Category::create($validated);

        return redirect()->route('categories.index')->with('success', 'Categoria criada com sucesso!');
    }

    /**
     * Exibe os detalhes de uma categoria específica.
     */
    public function show(Category $category)
    {
        return inertia('main/uikit/categories/Show', ['category' => $category]);
    }

    /**
     * Exibe o formulário para editar uma categoria específica.
     */
    public function edit(Category $category)
    { // Busca a categoria pelo ID
        return Inertia::render('main/uikit/categories/EditCategory', [
            'category' => $category, // Envia a categoria para o frontend
        ]);
    }

    /**
     * Atualiza uma categoria no banco de dados.
     */
    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:categories,name,' . $category->id,
            'description' => 'nullable|string|max:500',
        ]);

        $category->update($validated);

        return redirect()->route('categories.index')->with('success', 'Categoria atualizada com sucesso!');
    }

    /**
     * Remove uma categoria do banco de dados.
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->route('categories.index')->with('success', 'Categoria removida com sucesso!');
    }
}
