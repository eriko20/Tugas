let buah = ["mangga", "jambu", "jeruk", "duren", "Apel  "];

console.log(buah);

// document.getElementById("tampil").innerHTML = buah;

// buah.forEach(function (tampil) {
//     console.log(tampil);
// });

buah.forEach(a =>{
    console.log(a);
});


let element = tampil => function (element) {
    console.log(element);
}
let kali = (a, b) => {
    console.log(a, b);
}
let tampil = a => {
    console.log(a);
}
kali(1, 2);
tampil("Cuki")

// function kali(a,b) {
//     return a * b;
// }

// function tampil(a) {
//     return a;
// }
// console.log(kali(2,3));

// console.log(tampil(2));


// let siswa = [
// {
//     nama : "Yanto",
//     sekolah : "SMKN 2 BUDURAN",
//     kelas : "11 RPL"
// },
// {
//     nama : "susii",
//     sekolah : "SMKN 2 BUDURAN",
//     kelas : "11 RPL"
// }
// ];
// console.log(siswa);
// console.log(siswa.nama);

let siswa = '{ "siswa" : [' +
'{ "nama":"Yanto" , "Sekolah":"Sdn smkn 2 buduran" },' +
'{ "nama":"Peter" , "Sekolah":"Jones" } ]}';

const obj = JSON.parse(siswa);
// console.log(obj);

// document.getElementById("tampil").innerHTML = obj.siswa[0].nama;

obj.siswa.forEach(i => {
    console.log(i);
    document.getElementById("tampil").innerHTML += i.nama + " "+ i.Sekolah + "<br>" ;    
});