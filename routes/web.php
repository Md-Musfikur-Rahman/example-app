<?php

use App\Http\Middleware\CheckRole;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        $user = auth()->user();
        
        if ($user->isAdmin()) {
            return Inertia::render('dashboard/AdminDashboard');
        } elseif ($user->isOwner()) {
            return Inertia::render('dashboard/OwnerDashboard');
        } else {
            return Inertia::render('dashboard/TenantDashboard');
        }
    })->name('dashboard');

    // Admin routes
    Route::middleware('role:admin')->prefix('admin')->group(function () {
        // Add admin-specific routes here
    });

    // Property owner routes
    Route::middleware('role:owner')->prefix('owner')->group(function () {
        // Add owner-specific routes here
    });

    // Tenant routes
    Route::middleware('role:tenant')->prefix('tenant')->group(function () {
        // Add tenant-specific routes here
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
