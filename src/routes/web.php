<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Mail;

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
    return view('welcome');
});

Route::get('/store', function () {
    Redis::set('name', 'Taylor');
});

Route::get('/show', function () {
    return Redis::get('name');
});

Route::get('/send-email', function () {
    Mail::to('andaman@testmail.com')->send(new \App\Mail\TestMail());
});
