let kotakWarna = document.querySelector(".kotakWarna");
let bulatWarna = document.querySelectorAll(".bulatWarna");
let ubahWarna = document.querySelector(".ubahWarna");
let kotakWarnaB = document.querySelector(".b");

let kotakWarnaC = document.querySelector(".c");
let sMerah = document.querySelector("input[name=sMerah]");
let sHijau = document.querySelector("input[name=sHijau]");
let sBiru = document.querySelector("input[name=sBiru]");
let r = sMerah.value;
let g = sHijau.value;
let b = sBiru.value;

let kotakWarnaD = document.querySelector(".d");

// PILIH WARNA
let ubahWarna1 = (color) => {
  kotakWarna.style.backgroundColor = `${color}`;
};
for (let i = 0; i < bulatWarna.length; i++) {
  bulatWarna[i].addEventListener("click", function () {
    if (this.id == "merah") {
      ubahWarna1(`red`);
    } else if (this.id == "kuning") {
      ubahWarna1(`yellow`);
    } else {
      ubahWarna1(`green`);
    }
  });
}

// ACAK WARNA
ubahWarna.addEventListener("click", function () {
  let r = Math.round(Math.random() * 255 + 1);
  let g = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);
  kotakWarnaB.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// RANGE WARNA
let ubahWarna3 = () => {
  let r = sMerah.value;
  let g = sHijau.value;
  let b = sBiru.value;
  kotakWarnaC.style.backgroundColor = `rgb(${r},${g},${b}`;
};
sMerah.addEventListener("input", ubahWarna3);
sHijau.addEventListener("input", ubahWarna3);
sBiru.addEventListener("input", ubahWarna3);

// GERAK CURSOR
kotakWarnaD.addEventListener("mousemove", function (e) {
  // posisi mouse
  // console.log((xPOS = (e.clientX / (449 - 119)) * 225));
  // ukuran kotak
});

console.log(window.innerWidth);
