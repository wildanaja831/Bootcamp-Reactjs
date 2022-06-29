// Soal Nomor 1
var nilaiJohn = 80;
var nilaiDoe = 50;

console.log("Soal Nomor 1 :");

if (nilaiJohn >= 80) {
    console.log("Nilai John Adalah A");
}
else if (nilaiJohn >= 70 || nilaiJohn < 80) {
    console.log("Nilai John Adalah B");
}
else if (nilaiJohn >= 60 || nilaiJohn < 70) {
    console.log("Nilai John Adalah C");
}
else if (nilaiJohn >= 50 || nilaiJohn < 60) {
    console.log("Nilai John Adalah D");
}
else {
    console.log("Nilai John Adalah E");
}

if (nilaiDoe >= 80) {
    console.log("Nilai Doe Adalah A");
}
else if (nilaiDoe >= 70 || nilaiJohn < 80) {
    console.log("Nilai Doe Adalah B");
}
else if (nilaiDoe >= 60 || nilaiJohn < 70) {
    console.log("Nilai Doe Adalah C");
}
else if (nilaiDoe >= 50 || nilaiJohn < 60) {
    console.log("Nilai Doe Adalah D");
}
else {
    console.log("Nilai Doe Adalah E");
}

// Soal Nomor 2
var hari = 11;
var bulan = 4;
var tahun = 2004;

console.log("Soal Nomor 2 :");
switch (bulan) {
  case 1: {
    console.log(`${hari} Januari ${tahun}`);
    break;
  }
  case 2: {
    console.log(`${hari} Februari ${tahun}`);
    break;
  }
  case 3: {
    console.log(`${hari} Maret ${tahun}`);
    break;
  }
  case 4: {
    console.log(`${hari} April ${tahun}`);
    break;
  }
  case 5: {
    console.log(`${hari} Mei ${tahun}`);
    break;
  }
  case 6: {
    console.log(`${hari} Juni ${tahun}`);
    break;
  }
  case 7: {
    console.log(`${hari} Juli ${tahun}`);
    break;
  }
  case 8: {
    console.log(`${hari} Agustus ${tahun}`);
    break;
  }
  case 9: {
    console.log(`${hari} September ${tahun}`);
    break;
  }
  case 10: {
    console.log(`${hari} Oktober ${tahun}`);
    break;
  }
  case 11: {
    console.log(`${hari} November ${tahun}`);
    break;
  }
  case 12: {
    console.log(`${hari} Desember ${tahun}`);
    break;
  }
  default: {
    console.log("Mohon masukan urutan bulan yang benar!");
  }
}

// Soal Nomor 3
console.log("Soal Nomor 3 :");

console.log("LOOPING PERTAMA");
for (let i = 1; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i + "- I love coding");
    }
}

console.log("LOOPING KEDUA");
for (let i = 20; i >= 1; i--) {
    if (i % 2 == 0) {
        console.log(i + "- I will become a frontend developer");
    }
}

// Soal Nomor 4
console.log("Soal Nomor 4 :")
for (let i = 1; i <= 20; i++) { 
    if (i % 3 === 0 && i % 2 !== 0) { 
    console.log(`${i} - I Love Coding`); 
    } 
    else if (i % 2 === 0) { 
        console.log(`${i} - Berkualitas`); 
    } 
    else { 
        console.log(`${i} - Santai`); 
    }
}

// Soal Nomor 5
console.log("Soal Nomor 5 :");
for($i=1; $i<=7; $i++){
    let output = "";
    for($j=1; $j<=$i; $j++){
       output += "#";
    }
   console.log(output);
}