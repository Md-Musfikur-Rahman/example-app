<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'admin',
                'display_name' => 'Administrator',
                'description' => 'Super admin with full system access',
            ],
            [
                'name' => 'owner',
                'display_name' => 'Property Owner',
                'description' => 'Property owner with management capabilities',
            ],
            [
                'name' => 'tenant',
                'display_name' => 'Tenant',
                'description' => 'Tenant with limited access to property information',
            ],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
