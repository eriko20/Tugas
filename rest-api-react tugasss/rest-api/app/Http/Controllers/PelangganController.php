<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePelangganRequest;
use App\Http\Resources\V1\PelangganCollection;
use App\Http\Resources\V1\PelangganResource;
use App\Models\Pelanggan;
use Illuminate\Http\Request;

class PelangganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new PelangganCollection(Pelanggan::all());
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
    public function store(StorePelangganRequest $request)
    {
        Pelanggan::create($request->validated());
        return response()->json("Pelanggan Created");
    }

    /**
     * Display the specified resource.
     */
    public function show(Pelanggan $pelanggan)
    {
        return new PelangganResource($pelanggan);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pelanggan $pelanggan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pelanggan $pelanggan)
    {
        $data = $request->validate([
            "pelanggan" => "required",
            "alamat" => "required",
            "telp" => "required",
        ]);

        $pelanggan->update($data);

        return response()->json("pelanggan Updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pelanggan $pelanggan)
    {
        $pelanggan->delete();
        return response()->json("Pelanggan Deleted");
    }
}
