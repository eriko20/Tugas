<?php

require_once "koneksi.php";

$data = stripslashes(file_get_contents("php://input"));
$dataorder = json_decode($data, true);

$idorder = $dataorder['idorder'];
$idbarang = $dataorder['idbarang'];
$jumlah = 1;
$harga = $dataorder['harga'];
$barang = $dataorder['barang'];
$idpelanggan = $dataorder['idpelanggan'];
$pelanggan = $dataorder['pelanggan'];
$alamat = $dataorder['alamat'];



$sql = "INSERT INTO tblorderdetail VALUES ('',$idorder,$idbarang,$jumlah,$harga,'$barang',$idpelanggan,'$pelanggan','$alamat')";
$result = mysqli_query($con, $sql);

echo "berhasil";

