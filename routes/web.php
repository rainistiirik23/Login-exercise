<?php

use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('index');
Route::post('/logIn', [UsersController::class, 'verifyUser'])->name('login');
