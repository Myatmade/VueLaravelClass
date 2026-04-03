<?php

// use App\Http\Controllers\ViewController;
// use App\Http\Controllers\TodoController;

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/aboutus', [ViewController::class, 'aboutUs']);

// Route::get('/todos', [TodoController::class, 'index']);

    $numbers = collect([1, 2, 3, 4, 5]);
    $updatedArray = $numbers->concat([9,10]);

    // dd($updatedArray);

    $doubledNumbers = $numbers->map(function ($number) {
        return $number * 2;
    })->filter(function ($n){
        if($n % 2 == 0){
            return $n;
        }else{
            return false;
        }
    });

    // dd($doubledNumbers);

    $users = collect([
        ['name' => 'John', 'age' => 25],
        ['name' => 'Jane', 'age' => 30],
        ['name' => 'Doe', 'age' => 22],
    ]);

    $users->each(function ($user){
        echo $user['name'];
    });

    // dd($users->where('age','>', 24));
    // dd($users->sortBy('age'));
    

    return view ('welcome');
});

