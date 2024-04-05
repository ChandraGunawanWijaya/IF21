let nama = document.getElementById("nama");
let instansi = document.getElementById("instansi");
let btnSimpan = document.getElementById("simpan");
let list = document.getElementById("lsit");
let data = [];

btnSimpan.addEventListener("click" , function() {
    console.log("Ditekan")
    //Simpan data ke array[]
    data.push({nama: nama.value ,instansi : instansi.value});
    console.log(data);
    
   document.getElementById("list").innerHTML = ""; //Clear element list
    for(const [index, value] of data.entries()){
        console.log(value);
        document.getElementById("list").innerHTML += `<tr><td>${value.nama} ${value.instansi}</tr></td>`;
    }
})