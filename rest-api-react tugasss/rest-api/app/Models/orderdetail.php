<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class orderdetail extends Model
{
    use HasFactory;

    protected $fillable = ['idbarang','jumlah','harga','barang','idpelanggan','pelanggan','alamat'];
}
