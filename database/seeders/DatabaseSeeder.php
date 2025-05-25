<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Run the role seeder first
        $this->call(RoleSeeder::class);

        // Create admin user with specific credentials
        $this->call(AdminUserSeeder::class);

        // Create a property owner
        $owner = User::factory()->create([
            'name' => 'Property Owner',
            'email' => 'owner@example.com',
            'password' => Hash::make('password'),
        ]);

        // Assign owner role
        $ownerRole = Role::where('name', 'owner')->first();
        $owner->roles()->attach($ownerRole);

        // Create a tenant
        $tenant = User::factory()->create([
            'name' => 'Tenant User',
            'email' => 'tenant@example.com',
            'password' => Hash::make('password'),
        ]);

        // Assign tenant role
        $tenantRole = Role::where('name', 'tenant')->first();
        $tenant->roles()->attach($tenantRole);
    }
}
