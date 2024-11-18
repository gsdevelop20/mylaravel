<?php

namespace App\Http\Middleware;

use App\Models\Role;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    const ROLES = [
        1 => 'admin',
        2 => 'user',
    ];

    public function handle(Request $request, Closure $next, $role)
    {
        // Verifique a role do usuário

        if (!Auth::check()) {
            return redirect()->route('login');
        }

        if (Role::find(Auth::user()->role)->name === $role) {
            return $next($request);
        }

        // Se não tiver a role, redireciona
        return redirect()->route('dashboard');  // Ou onde você quiser redirecionar
    }
}
