document.querySelector("#paragraf").innerHTML = "Saya Belajar js";
// document.querySelector("#content").innerHTML = "<h1> Ganti isi </h1>";

let tanggal = 3;
let bulan = 1;
let hasil = "salah";
if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 12) {
    hasil = "tanggal benar bulan benar";
    if (bulan == 1) {
        hasil = "aquarius";
        if (tanggal > 20 ) {
            hasil = "pisces";
        }
    }
    if (bulan == 2) {
        hasil = "pisces";
        if (tanggal > 20) {
            hasil = "aries";
        }
    }
    if (bulan == 3) {
        hasil = "aries";
        if (tanggal > 20) {
            hasil = "taurus";
        }
    }
}
// console.log(hasil);

document.querySelector("#paragraf").innerHTML ="<h1>" + hasil + "</h1>";