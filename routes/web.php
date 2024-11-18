<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StockMovementController;
use App\Http\Controllers\RoleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})
    ->name('dashboard');
//    ->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware(['role:admin'])->group(function () {
        Route::resource('categories', CategoryController::class);
        Route::get('/categories/{category?}/edit', [CategoryController::class, 'edit'])->name('categories.edit');
    });

    Route::resource('products', ProductController::class);
    Route::get('/products/{product?}/edit', [ProductController::class, 'edit'])->name('products.edit');

    Route::resource('stock-movements', StockMovementController::class)->except(['edit', 'update']);
    Route::resource('roles', RoleController::class);
});

Route::get('/uikit/button', function () {
    return Inertia::render('main/uikit/button/page');
})->name('button');

Route::get('/gabriel', function () {
    return Inertia::render('main/uikit/gabriel/page');
})->name('gabriel');


require __DIR__ . '/auth.php';
