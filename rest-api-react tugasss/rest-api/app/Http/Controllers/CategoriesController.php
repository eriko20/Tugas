<?php

namespace App\Http\Controllers;

use App\Models\categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = categories::all();
        return response()->json($categories);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "categories" => "required"
        ]);

        categories::create($data);
        return response()->json("Categories created");
    }

    /**
     * Display the specified resource.
     */
    public function show(categories $categories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(categories $categories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, categories $categories, $category)
    {
        $data = $request->validate([
            "categories" => "required",
        ]);

        $cats = categories::where('id', $category)->update($request->all());

        if ($cats) {
            return response()->json([
                'updated'
            ]);
        }else {
            return response()->json([
                'failed'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(categories $categories,$category)
    {
        $cats = categories::where('id', $category)->delete();

        if ($cats) {
            return response()->json([
                'Deleted'
            ]);
        }else {
            return response()->json([
                'failed'
            ]);
        }
    }
}
