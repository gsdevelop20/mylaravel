<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    public function run()
    {
        Role::insert([
            ['name' => 'Admin', 'description' => 'Administrador do sistema'],
            ['name' => 'User', 'description' => 'Usuário padrão'],
        ]);
    }
}
