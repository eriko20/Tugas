let isi = document.querySelector("#isi");
isi.innerHTML="<h1>soto</h1>" + "<p> Deskripsi soto</p>" + '<img src="/images/" alt="">';

isi.innerHTML="<h1> rawon </h1>";
isi.innerHTML+="<p> Deskripsi rawon</p>";
isi.innerHTML+='<img src="images/apel.png" alt="">';


for (let i = 0; i < 10; i++) {
    // console.log(i);
    document.querySelector("#paragraf").innerHTML += "<h1>" + i + "</h1>";
}

let tabel = document.querySelector("#tabel");
// tabel.innerHTML= "<table>" 
//                 + "<thead><tr><th></th>nomer</tr></thead>"
//                 +"<tbody>"
//                 +"<tr><td>1</td></tr>"
//                 +"<tr><td>2</td></tr>"
//                 +"<tr><td>3</td></tr>"
//                 +"<tr><td>4</td></tr>"
//                 +"<tr><td>5</td></tr>"
//                 +"</tbody>"
//                 +"</table>"



    tabel.innerHTML= "<table>"
    tabel.innerHTML+="<thead><tr><th>nomer</th></tr></thead>"
    tabel.innerHTML+="<tbody>"
// tabel.innerHTML+="<tr><td>1</td></tr>"
// tabel.innerHTML+="<tr><td>2</td></tr>"
// tabel.innerHTML+="<tr><td>3</td></tr>"
// tabel.innerHTML+="</tbody>"
// tabel.innerHTML+= "</table>"

for (let  index= 0;   index < 8; index++) {
    tabel.innerHTML+= "<tr><td>" +index+ "</tr></td>"
    
}
    tabel.innerHTML += "</tbody></table>"
