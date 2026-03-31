<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewController extends Controller
{
    public function aboutUs() {
        $company = "Erika's Company";
        $name = "Erika";
        return view('aboutus', [
            'company' => $company,
            'myName' => $name
        ]);
    }
    //
}
