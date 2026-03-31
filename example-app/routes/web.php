<?php

use App\Http\Controllers\ViewController;
use App\Http\Controllers\TodoController;

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/aboutus', [ViewController::class, 'aboutUs']);

Route::get('/todos', [TodoController::class, 'index']);