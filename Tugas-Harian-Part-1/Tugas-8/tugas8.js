// Soal Nomor 1
let panjang = 12
let lebar = 4
let tinggi = 8

function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

function volumeBalok(panjang, lebar, tinggi) {
    return panjang * tinggi * lebar;
}

let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log("Soal Nomor 1 :")
console.log(HasilluasPersegiPanjang)
console.log(HasilkelilingPersegiPanjang)
console.log(HasilvolumeBalok)

// Soal Nomor 2
const introduce = (...rest) => {
    let [name, age, jk, job] = rest
    return `Pak ${name} adalah seorang ${job} yang berusia ${age} tahun`;
}

const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log("\nSoal Nomor 2 :")
console.log(perkenalan)

// Soal Nomor 3
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992]
let objDaftarPeserta = {
    nama: "John Doe",
    jk: "laki-laki",
    hobi: "baca buku",
    tl: 1992
}
console.log("\nSoal Nomor 3 :")
console.log(objDaftarPeserta)

// Soal Nomor 4
var menuBuah = [
    {   
        nama: "Nanas",
        warna: "Kuning",
        adabijinya: false,
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        adabijinya: true,
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adabijinya: true,
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adabijinya: false,
        harga: 5000
    } 
]

let buah = menuBuah.filter((biji)=>{
    return biji.adabijinya == false
})
console.log("\nSoal Nomor 4 :")
console.log(buah)

// Soal Nomor 5 
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}

const {name : phoneName, brand : phoneBrand, year, colors : [colorBronze, colorWhite, colorBlack]} = phone

console.log("\nSoal Nomor 5 :")
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 

// Soal Nomor 6
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

buku = {
    ...buku,
    ...dataBukuTambahan,
    warnaSampul : [...buku.warnaSampul,...warna]
}

console.log("\nSoal Nomor 6 :")
console.log(buku)

// Soal Nomor 7
const tambahDataFilm = (name, time, genre, year) =>{
    let obj  = {
        nama : name,
        durasi : time,
        genre : genre,
        tahun : year
    }

    return dataFilm.push(obj)
}

let dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log("\nSoal Nomor 7 :")
console.log(dataFilm)