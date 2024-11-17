<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Exibe a lista de papéis (roles).
     */
    public function index()
    {
        $roles = Role::all(); // Obtém todos os papéis
        return inertia('Roles/Index', ['roles' => $roles]);
    }

    /**
     * Exibe o formulário para criar um novo papel.
     */
    public function create()
    {
        return inertia('Roles/Create');
    }

    /**
     * Salva um novo papel no banco de dados.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:roles,name',
            'description' => 'nullable|string|max:500',
        ]);

        Role::create($validated);

        return redirect()->route('roles.index')->with('success', 'Papel criado com sucesso!');
    }

    /**
     * Exibe os detalhes de um papel específico.
     */
    public function show(Role $role)
    {
        return inertia('Roles/Show', ['role' => $role]);
    }

    /**
     * Exibe o formulário para editar um papel específico.
     */
    public function edit(Role $role)
    {
        return inertia('Roles/Edit', ['role' => $role]);
    }

    /**
     * Atualiza um papel no banco de dados.
     */
    public function update(Request $request, Role $role)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:roles,name,' . $role->id,
            'description' => 'nullable|string|max:500',
        ]);

        $role->update($validated);

        return redirect()->route('roles.index')->with('success', 'Papel atualizado com sucesso!');
    }

    /**
     * Remove um papel do banco de dados.
     */
    public function destroy(Role $role)
    {
        $role->delete();

        return redirect()->route('roles.index')->with('success', 'Papel removido com sucesso!');
    }
}
