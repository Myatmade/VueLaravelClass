<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodoController extends Controller
{
public function index() {    
    $todos = [
        'Go to the store',
        'Go to the bank',
    ];
    return view('todos', [
        'todos' => $todos
    ]);
}
}
