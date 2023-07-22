const nombrePromp=document.querySelector("#nombre");
const plataPromp=document.querySelector("#cantidad-pesos");
const cuerpoPagina=document.querySelector("body");
const div1=document.querySelector("#imagen-1");
const div2=document.querySelector("#imagen-2");
const div3=document.querySelector("#imagen-3");

let saldoPesos=parseFloat(prompt ("ingrese la cantidad de pesos que quiere jugar"));
let nombreJuego=prompt ("ingresesu nombre de jugador");

if (saldoPesos>0 && nombreJuego!=="") {
    nombrePromp.innerHTML=`${nombreJuego}`;
    plataPromp.innerHTML=`${saldoPesos}`;    
} else {
    cuerpoPagina.innerHTML=`<h1>NO PODES JUGAR</h1>`
}

const IMG_1="https://cdn-icons-png.flaticon.com/512/1554/1554591.png";
const IMG_2="https://cdn-icons-png.flaticon.com/512/1822/1822045.png";
const IMG_3="https://cdn-icons-png.flaticon.com/512/1312/1312307.png";
const IMG_4="https://png.pngtree.com/png-vector/20190809/ourlarge/pngtree-packaging-branding-marketing-product-bottle-flat-color-icon-png-image_1652448.jpg";
const IMG_5="https://cdn-icons-png.flaticon.com/512/1170/1170577.png";
const IMG_6="https://img2.freepng.es/20180503/vow/kisspng-business-product-sample-marketing-brand-give-away-5aeac415915152.6818124515253350615952.jpg";

const imgVector=[IMG_1,IMG_2,IMG_3,IMG_4,IMG_5,IMG_6];

function verifica() {
     generarImagen();
     generarLista();
     
}

function generarImagen() {
    imagen1();
    imagen2();
    imagen3();
    
}
function imagen1() {
    let numeroAleatorio = Math.floor(Math.random() * 6);
    div1.innerHTML = `<img src="${imgVector[numeroAleatorio]}">`;
}

function imagen2() {
    let numeroAleatorio2 = Math.floor(Math.random() * 6);
    div2.innerHTML = `<img src="${imgVector[numeroAleatorio2]}">`;
}

function imagen3() {
    let numeroAleatorio3 = Math.floor(Math.random() * 6);
    div3.innerHTML = `<img src="${imgVector[numeroAleatorio3]}">`;
}

