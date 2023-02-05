let bil = [1, 3, 5, 7, 9];


function kali(num) {
    return num * 2;
}

// console.log(kali(2));

let hasil = bil.map(kali);
document.getElementById("tampil").innerHTML = hasil;

// let out = '<table><thead></thead><tbody>'


// hasil.forEach(element => {
//     out +=`<tr><td>${element}</td></tr>`
// });

// out += "</tbody> </table>";

// document.querySelector("#tabel").innerHTML = out;

let siswa = [
    {nama : "yanto", sekolah: "smkn2buduran", kelas: "11RPL"},
    {nama : "rinto", sekolah: "smkn2buduran", kelas: "11rpl"},
    {nama : "wito", sekolah: "smkn2buduran", kelas: "11rpl"}
];
console.log(siswa);


out = `<thead><tr><th>Nama</th><th>sekolah</th><th>Kelas</th></tr></thead><tbody>`;
has = siswa.map(a => out += `<tr><td>${a.nama}</td><td>${a.sekolah}</td><td>${a.kelas}</td></tr>`);
out += "</tbody>";

document.querySelector("#tabel").innerHTML = out;


// let murid = siswa.map(item => {
//     return (item.nama, item.sekolah, item.kelas);
// });

// console.log(murid);

// function murid(item) {
//     console.log(item.nama, item.sekolah, item.kelas);
// }






