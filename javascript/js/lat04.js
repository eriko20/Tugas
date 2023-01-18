// Nama : Muhammad Eriko
// kelas : 11 Rpl
// Absen : 21

// Fungsi FLOOR.MATH 
// membulatkan angka ke bawah ke bilangan bulat atau kelipatan terdekat dari signifikansi yang ditentukan, 
// dengan bilangan bulat negatif dibulatkan mendekati atau menjauh dari nol, 
// bergantung pada modenya.

let tampil = document.querySelector("#belajar");

function zodiak() {
    let bln = document.getElementsByName("bln")[0].value;
    let tgl = document.getElementsByName("tgl")[0].value;
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil - "zodiak belum dibuat";
        if (bln == 1) {
            hasil = "capricorn";
            if (tgl > 21 ) {
                hasil = "aquarius";
            }
        }
        if (bln == 2) {
            hasil = "aquarius";
            if (tgl > 18 && tgl < 30) {
                hasil = "pisces";
            }
        }
        if (bln == 3) {
            hasil = "pisces";
            if (tgl > 18 && tgl < 30) {
                hasil = "aries";
            }
        }
        if (bln == 4) {
            hasil = "aries";
            if (tgl > 18 && tgl < 31) {
                hasil = "taurus"; 
            }
        }
        if (bln == 5) {
            hasil = "Taurus";
            if (tgl > 18 && tgl < 31) {
                hasil = "Gemini"; 
            }
        }
        if (bln == 6) {
            hasil = "Gemini";
            if (tgl > 18 && tgl < 31) {
                hasil = "Cancer"; 
            }
        }
        if (bln == 7) {
            hasil = "cancer";
            if (tgl > 18 && tgl < 31) {
                hasil = "Leo"; 
            }
        }
        if (bln == 8) {
            hasil = "Leo";
            if (tgl > 18 && tgl < 31) {
                hasil = "Virgo"; 
            }
        }
        if (bln == 9) {
            hasil = "Virgo";
            if (tgl > 18 && tgl < 31) {
                hasil = "Libra"; 
            }
        }
        if (bln == 10) {
            hasil = "Libra";
            if (tgl > 18 && tgl < 31) {
                hasil = "Scorpio"; 
            }
        }
        if (bln == 11) {
            hasil = "Scorpio";
            if (tgl > 18 && tgl < 31) {
                hasil = "sagitarius"; 
            }
        }
        if (bln == 12) {
            hasil = "Sagitarius";
            if (tgl > 18 && tgl < 31) {
                hasil = "Capcorn"; 
            }
        }
    }
    tampil.innerHTML=hasil;
}



function lulus() {
    let nilai = document.getElementById("nilai").value;
    if (nilai >= 0 && nilai <= 100) {
        if (nilai >= 80) {
            tampil.innerHTML = "lulus";
        } else {
            tampil.innerHTML = "tidak lulus";
        }
    }else {
        tampil.innerHTML = "Invalid sayang";
    }
}

function bilangan() {
    let angka = document.getElementById("angka").value;
    function terbilang(angka) {
    
        var bilne=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
        if(angka < 12){
            return bilne[angka];
        }else if(angka < 20){
            return terbilang(angka-10)+" belas";
        }else if(angka < 100){
            return terbilang(Math.floor(angka/10))+" puluh "+terbilang(angka%10);
        }else if(angka < 200){
            return "seratus "+terbilang(angka-100);
        }else if(angka < 1000){
            return terbilang(Math.floor(angka/100))+" ratus "+terbilang(angka%100);
        }else if(angka < 2000){
            return "seribu "+terbilang(angka-1000);
        }else if(angka < 1000000){
            return terbilang(Math.floor(angka/1000))+" ribu "+terbilang(angka%1000);
        }else if(angka < 1000000000){
            return terbilang(Math.floor(angka/1000000))+" juta "+terbilang(angka%1000000);
        }else if(angka < 1000000000000){
            return terbilang(Math.floor(angka/1000000000))+" milyar "+terbilang(angka%1000000000);
        }else if(angka < 1000000000000000){
            return terbilang(Math.floor(angka/1000000000000))+" trilyun "+terbilang(angka%1000000000000);
        }    
    }
    tampil.innerHTML = terbilang(angka);
}

function prima() {
    let angka = document.getElementById("number").value;
    let pembagi = 0;
    for (let i = 0; i <= angka; i++) {
        if (angka % i == 0) {
            pembagi++;
        }
    }
    if (pembagi == 2) {
        tampil.innerHTML = "Prima";
    } else {
        tampil.innerHTML = "Bukan Prima";
    }
}

klik.onclick = function () {
    hasil(70);
}

function hasil(a) {
    tampil.innerHTML = a;
}


