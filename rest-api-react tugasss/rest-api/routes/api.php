<?php

use App\Http\Controllers\Api\V1\SkillController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\OrderdetailController;
use App\Http\Controllers\PelangganController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('skills', SkillController::class);
    Route::apiResource('products', ProductController::class);
    Route::apiResource('categories', CategoriesController::class);
    Route::apiResource('pelanggan', PelangganController::class);
    Route::apiResource('order', OrderdetailController::class);
});
