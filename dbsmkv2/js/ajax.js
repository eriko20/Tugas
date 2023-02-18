const Url = "https://dummyjson.com";

function getData() {
    let out = "";
    $.ajax({
        type: "get",
        url: Url + "/products",
        data: "contentType",
        dataType: "json",
        success: function (response) {
            // console.log(response);
            
            out += `<tr>
            <th>Id</th>
            <th>Title</th>
            <th> Harga </th>
            <th> Beli </th>
            </tr>`;

            $.each(response.products, function (key, val) { 
                out += `<tr>
                <td>${val.id}</td>
                <td>${val.title}</td>
                <td>${val.price}</td>
                <td>
                    <button type="button" class="btn btn-outline-primary" id="cart" value="${val.id}">cart</button>
                </td>
                </tr>`
            });
            document.querySelector('#table').innerHTML = out
        }
    });
}
document.querySelector("#get").addEventListener('click', getData);



function form() {
    let out = `<option selected>Chose...</option>`;
    $.ajax({
        type: "get",
        url: Url + "/products/categories",
        data: "contentType",
        dataType: "json",
        success: function (response) {
            $.each(response, function (key, val) { 
                out += `<option value="${val}">${val}</option>`;
            });
            $('#cat').html(out);
        }
    });
}

$("#post").click(function (e) { 
    e.preventDefault();
    form();    
});



function addData() {
    let data = {
        title: title,
        description: description,
        category: category,
    };
    $.ajax({
        type: "post",
        url: Url + "/products/add",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify({
            title: data["title"],
            description: data["description"],
            category: data["category"]
            }),
        success: function (response) {
            console.log(response);
            console.log(data);
            alert(data["title" ] + "insert");
            }
    });
}

$("#save").click(function (e) { 
    e.preventDefault();
    id = $("#id").val();
    title = $("#title").val();
    description = $("#des").val();
    category = $("#cat").val();
    if (id != null) {
        addData();
    } else {
        upadateData();
    }
    
});


function selectUpdateData(id) {
    $.ajax({
        type: "get",
        url: Url + "/products/" + id,
        cache: false,
        data: "contentType",
        dataType: "json",
        success: function (response) {

            $("#id").val(response.id);
            $("#title").val(response.title);
            $("#des").val(response.description);
            $("#cat").val(response.category);

        }
    });
    
}

function cartData(id) {
    let out = "";
    $.ajax({
        type: "get",
        url: Url +"/product/" + id,
        data: "contentType",
        dataType: "json",
        success: function (response) {
            console.log(response.title);
            out += `
            <table class="table">
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Order By</th>
            </tr>
            <tr>
                <td id = "idbarang">${response.id}</td>
                <td id = "barang">${response.title}</td>
                <td id = "harga">${response.price}</td>
                <td id="pel"></td>
            </tr> 
            <tr>
            <td>
                <button type="button" class="btn btn-outline-primary" id="btn-kirim" value="">kirim</button>
            </td>
            </tr>
            </table>
            `;
            $("#isi").html(out);
        }
    });
}


$(document).on("click","#cart", function () { 
    let id = $(this).attr("value");
    cartData(id);
});

function updateData(id) {
    let data = {
        title: title,
        description: description,
        category: category,
    };
    $.ajax({
        type: "PATCH",
        url: Url + "/products/" + id,
        contentType: "application/json",
        data: "json",
        dataType: JSON.stringify({
            title: data["title"],
            description: data["description"],
            category: data["category"]
            }),
        success: function (response) {
            // console.log(response);
            console.log(data);
            alert(data["title" ] + " update");
        }
    });
    // fetch(Url + "/products/" + id, {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         title: data["title"],
    //         description: data["description"],
    //         category: data["category"]
    //     })
    // })
    // .then(res => res.json())
    // .then(console.log)
    // .then(alert(data["title"] + " Berhasil diUbah"))

}

$(document).on("click", "#update", function (e) {
    let id =  $(this).attr("value");
    $("#exampleModalLabel").html("Update Data");
    form(id);
    selectUpdateData(id);
})


function deleteData(id) {
    fetch( Url + "/products/" + id, {
    method: 'DELETE',
    })
    .then(res => res.json())
    .then(console.log)
    .then(alert("Data Berhasil Dihapus"));
}

$(document).on("click", "#delete", function (e) {
    let id = $(this).attr("value");
    deleteData(id);
})

$("#delete").click(function (e) { 
    e.preventDefault();
    alert("DELETE");
});

getData()





// Untuk Data PELANGGAN

$(document).ready(function () {
    let id ="";
    let pelanggan ="";
    let alamat = "";
    let telp ="";

    $("#submit").click(function (e) { 
        e.preventDefault();
        id = $("#id").val();
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            insertData();
        } else {
            updateData();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");
    });

    $("#btn-tambah").click(function (e) { 
        e.preventDefault();

        $("#title").html("Tambah Data");

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });

    $("tbody").on("click",".btn-del", function () {
        let id = $(this).attr("data-id");
        if (confirm("Hapus? tekan ok")) {
            deleteData(id);
        }
    });

    $("tbody").on("click",".btn-ubah", function () {
        let id = $(this).attr("data-id");
        $("#title").html("Ubah Data");
        selectUpdate(id);
    });

    function selectUpdate(id) {
        let idpelanggan = {
            idpelanggan : id
        }

        $.ajax({
            type: "pos",
            url: "http://localhost/dbsmk/php/selectupdate.php",
            caches: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",
            success: function (response) {
                let data = JSON.parse(response)
                
                $("#id").val(data.idpelanggan);
                $("#pelanggan").val(data.pelanggan);
                $("#alamat").val(data.alamat);
                $("#telp").val(data.telp);
            }
        });
    }

    function cartPelanggan(id) {
        let out ="";
        $.ajax({
            type: "get",
            url: "http://localhost/dbsmk/php/selectwhere.php?id=" + id,
            data: "contentType",
            dataType: "json",
            success: function (response) {
                console.log(response);
                out += `
                <table class="table">
                    
                    <tr>
                        <th>id</th>
                        <th>pelanggan</th>
                        <th>alamat</th>
                        <th>telp</th>
                    </tr>
                    <tr>
                        <td id="idpelanggan">${response.idpelanggan}</td>
                        <td id="pelanggan">${response.pelanggan}</td>
                        <td id= "alamat">${response.alamat}</td>
                        <td>${response.telp}</td>
                    </tr>
                </table>
                `;
                $("#pembeli").html(out);
            }
        });
    }


    $(document).on("click","#btn-pembeli",function () { 
        let id = $(this).attr("data-id");
        cartPelanggan(id);
    });

    function showPelanggan(id) {
        let out = "";
        $.ajax({
            type: "get",
            url: "http://localhost/dbsmk/php/selectwhere.php?id=" + id,
            data: "contentType",
            dataType: "json",
            success: function (response) {
                console.log(response.pelanggan);
                out += `<td>${response.pelanggan}</td>`
                $('#pel').html(out);
            }
        });
    }

  
    $(document).on("click","#btn-pembeli",function () { 
        let id = $(this).attr("data-id");
        showPelanggan(id);
    });
    

    function selectData() {
        $.ajax({
            type: "get",
            url: "http://localhost/dbsmk/php/select.php",
            dataType: "json",
            success: function (response) {
                let out = "";
                let No = 1;
                $.each(response, function (key, val) { 
                    out += `<tr>
                        <td>${No++}</td>
                        <td>${val.pelanggan}</td>
                        <td>${val.alamat}</td>
                        <td>${val.telp}</td>
                        <td><button type="button" class="btn btn-danger btn-del" data-id=${val.idpelanggan}>Delete</button></td>
                        <td><button type="button" class="btn btn-primary btn-ubah" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id=${val.idpelanggan}>Update</button></td>
                        <td><button type="button" class="btn btn-primary" id="btn-pembeli" data-id="${val.idpelanggan}">Cart</button></td>
                        </tr>`;
                });
                $("#isidata").html(out);
            }
        });
    }


function showData() {
    let out= "";
    $.ajax({
        type: "get",
        url: Url + "/products/categories",
        data: "contentType",
        dataType: "json",
        success: function (response) {
            // console.log(response)

            $.each(response, function (key, val) { 
                out += `<button type="button" class="btn btn-light <br>  m-1" id="filter" value='${val}'>${val}</button>`;
            });
            document.querySelector('#isi').innerHTML = out
        }
    });
}
document.querySelector('#show').addEventListener('click', showData);


function filterData(cat) {
    let out="";
    $.ajax({
        type: "get",
        url: Url + "/products/category/" + cat,
        data: "contentType",
        dataType: "json",
        success: function (response) {
            // console.log(response)

            $.each(response.products, function (key, val) { 
                out += `<tr>
                <td>${val.title}</td>
                <td>${val.description}</td>
                <td>
                    <button type="button" class="btn btn-outline-primary" id="cart" value="">cart</button>
                </td>
                </tr>`;
            });
            document.querySelector("#table").innerHTML = out;
        }
    });
}

$(document).on("click", "#filter", function (e) { 
    let cat = $(this).attr("value");
    filterData(cat);
});

    function insertData() {
        let dataPelanggan = {
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "post",
            url: "http://localhost/dbsmk/php/insert.php",
            caches: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();
    }

    function deleteData(id) {
        let idpelanggan = {
            idpelanggan : id
        }

        $.ajax({
            type: "pos",
            url: "http://localhost/dbsmk/php/delete.php",
            caches: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();
    }

    function updateData() {
        let dataPelanggan = {
            idpelanggan : id,
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "post",
            url: "http://localhost/dbsmk/php/update.php",
            caches: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();
    }

    selectData();

});

function addTocart() {
    let idorder = 1;
    let jumlah = 1;
    let dataorder = {
        idorder: idorder,
        idbarang: idbarang,
        jumlah: jumlah,
        harga: harga,
        barang: barang,
        idpelanggan: idpelanggan,
        pelanggan: pelanggan,
        alamat: alamat
    }
    $.ajax({
        type: "post",
        url: "http://localhost/dbsmk/php/addtocart.php",
        data: JSON.stringify(dataorder),
        success: function (response) {
            alert(response);
        }
    });
}

$(document).on("click", '#btn-kirim', function () {
    idbarang = $("#idbarang").text(); 
    jumlah= $("#jumlah").text(); 
    harga = $("#harga").text(); 
    barang = $("#barang").text(); 
    idpelanggan = $("#idpelanggan").text(); 
    pelanggan = $("#pelanggan").text(); 
    alamat = $("#alamat").text(); 

    addTocart();
});