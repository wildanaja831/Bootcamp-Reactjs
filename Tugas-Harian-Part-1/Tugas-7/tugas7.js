// Soal Nomor 1
let dataPeserta = ["john", "laki-laki", "programmer", "30"]
let [name, jk, job, age] = dataPeserta
let output = `Halo, nama saya ` + name + `. saya ` + jk + ` berumur ` + age + ` bekerja sebagai seorang ` + job;

console.log("Soal Nomor 1 :")
console.log(output + "\n")

// Soal Nomor 2
let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]

console.log("Soal Nomor 2 :")
for(var i = 0; i < array1.length; i++) {
	console.log(array1[i]);
}

// Soal Nomor 3
let array2 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]

console.log("\nSoal Nomor 3 :")
for (let i = 0; i < array2.length; i++) {
    if (i % 2 === 1) {
        console.log(array2[i]);
    }
}

// Soal Nomor 4
let kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
kalimat.shift()

console.log("\nSoal Nomor 4 :")
console.log(kalimat[0] + " " + kalimat[1] + " " + kalimat[3] + " " + kalimat[4] + " " + kalimat[5])

// Soal Nomor 5
var sayuran= [];
sayuran.push("A", "Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge")
sayuran.sort()

console.log("\nSoal Nomor 5 :")
for (let i = 1; i < sayuran.length; i++) {
    console.log(i + "." + sayuran[i])
}