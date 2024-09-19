<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function verifyUser(Request $request)
    {

        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',

        ]);

        $user = User::where('email', $request->input('email'))->get();

        if (empty($user)) {

            return Inertia::location(route('index', [
                'statuscode' => 401,
                'statusMessage' => 'Email or passowrd is incorrect',
            ]));
        }

        if ($user[0]->password == $request->input('password')) {
            return Inertia::render('Welcome', [
                'statuscode' => 200,
                'statusMessage' => 'You have successfuly logged in',
            ]);

        }
        return Inertia::render('Welcome', [
            'statuscode' => 401,
            'statusMessage' => 'Email or passowrd is incorrect',
        ]);
    }
}
