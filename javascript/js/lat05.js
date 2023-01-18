function perkalian(a,b) {
    return a * b;
}
console.log(perkalian(3,5));

let kali = (a, b) => a * b;
console.log(kali(2,4));

let zodiak = (tgl,bln) => {
    let hasil = "zodiak salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil - "zodiak belum dibuat";
        if (bln == 1) {
            hasil = "capricorn";
            if (tgl > 18 && tgl < 30 ) {
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
    return hasil;
}
console.log(zodiak(1,12));


let lulus = nilai => {
    if (nilai >=0 && nilai <=100) {
        if (nilai >= 80) {
            console.log("lulus");
        }else{
            console.log("Tidak Lulus");
        }
    }else{
        console.log("Invalid Sayang");
    }
}
lulus(90);

let terbilang = angka => {
    var Terbilang=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];

    if(angka < 12){

        return Terbilang[angka];

    }else if(angka < 20){

        return terbilang(angka-10)+" belas";

    }else if(angka < 100){

        return terbilang(Math.floor(parseInt(angka)/10))+" puluh "+terbilang(parseInt(angka)%10);

    }else if(angka < 200){

        return "seratus "+terbilang(parseInt(angka)-100);

    }else if(angka < 1000){

        return terbilang(Math.floor(parseInt(angka)/100))+" ratus "+terbilang(parseInt(angka)%100);

    }else if(angka < 2000){

        return "seribu "+terbilang(parseInt(angka)-1000);

    }else if(angka < 1000000){

        return terbilang(Math.floor(parseInt(angka)/1000))+" ribu "+terbilang(parseInt(angka)%1000);

    }else if(angka < 1000000000){

        return terbilang(Math.floor(parseInt(angka)/1000000))+" juta "+terbilang(parseInt(angka)%1000000);

    }else if(angka < 1000000000000){

        return terbilang(Math.floor(parseInt(angka)/1000000000))+" milyar "+terbilang(parseInt(angka)%1000000000);

    }else if(angka < 1000000000000000){

        return terbilang(Math.floor(parseInt(angka)/1000000000000))+" trilyun "+terbilang(parseInt(angka)%1000000000000);

    }
}
console.log(terbilang(1234567));

let prima = bilangan => {
    var bagi= 0;
    for(var i = 2; i<= Math.floor(bilangan/2); i++) {
    bagi++
    if (bilangan % i === 0) {
        return false
    } 
    }
    return true
}
console.log(prima(2));











































































// let hasil = "salah";
// if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
//     let hasil = "zodiak belum di buat";
//     if (bln == 1) {
//         hasil = "aquarius";
//         if (tgl > 18 && tgl < 30) {
//             hasil = "pisces";
//         }
//     }
//     if (bln == 2) {
//         hasil = "aquarius";
//         if (tgl > 18 && tgl < 30) {
//             hasil = "pisces";
//         }
//     }
// }else{
//     hasil = "zodiak tidak ada";
// }
// return hasil;