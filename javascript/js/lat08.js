// let Url = "./ajax.php";
let url = "https://dummyjson.com/products/1";

function getData() {
    let out;
    $.ajax({
        type: "get",
        url: url,
        data: "contentType",
        dataType: "json",
        success: function (response) {
            console.log(response.title);
            // $.each(response.products, function (key, val) {
            //     out += `<tr>
            //      <td>${val.title}</td>
            //      <td>${val.description}</td>
            //      </tr>`
            // });

            // res = response.products.map(a => out += `<tr>
            //     <td>${a.title}</td>
            //     <td>${a.description}</td>
            //     </tr>` );

            response.forEach(a => {
                out += `<tr>
                <td>${a.title}</td>
                <td>${a.description}</td>
                </tr>`;
            });

            document.querySelector("#dummyjson").innerHTML = response.title;
        }
    });
}

// function getData() {
//     let out = `<thead>
//     <tr>
//     <th>IdBuah</th>
//     <th>Buah</th>
//     <th>Harga</th>
//     <th>Deskripsi</th>
//     <th>Gambar</th>
//     </tr>
//     </thead>
//     <table>`;

//     $.ajax({
//         type: "get",
//         url: Url,
//         data: "contentType",
//         cache: false,
//         dataType: "json",
//         success: function (response) {
//             console.log(response)
//             $.each(response, function (key, val) {
//                 out += `<tr>
//                  <td>${val.idbuah}</td>
//                  <td>${val.buah}</td>
//                  <td>${val.harga}</td>
//                  <td>${val.deskripsi}</td>
//                  <td>${val.gambar}</td>
//                  </tr>`
//             });
//             out += `</table>`;
//             document.querySelector('#tabel').innerHTML = out;
//         }
//     });
// }
getData();