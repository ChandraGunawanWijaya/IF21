document.getElementById("Judul").innerHTML = "JavaScript";

document.getElementById("Deskripsi").innerHTML = "Belajar DOM, Variabel, Perulangan";

let nama = document.getElementById("nama");
let btnSimpan = document.getElementById("simpan");
let data = [];

btnSimpan.addEventListener("click", function ()  { 
    console.log("Tombol Ditekan");
    data.push(nama.value);
    console.log(data);

    document.getElementById("List").innerHTML = ""
    for(const [index, value] of data.entries()){
        console.log(value);
        document.getElementById("list").innerHTML += '<li>$(value)</li>';
    }
})
