const nombrePromp=document.querySelector("#nombre");
const plataPromp=document.querySelector("#cantidad-pesos");
const cuerpoPagina=document.querySelector("body");
const div1=document.querySelector("#imagen-1");
const div2=document.querySelector("#imagen-2");
const div3=document.querySelector("#imagen-3");
const lista=document.querySelector("#lista");


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
    const numeroAleatorio = imagen1();
    const numeroAleatorio2 = imagen2();
    const numeroAleatorio3 = imagen3();
    generarLista(numeroAleatorio, numeroAleatorio2, numeroAleatorio3);
     
}


function imagen1() {
    let numeroAleatorio = Math.floor(Math.random() * 6);
    div1.innerHTML = `<img src="${imgVector[numeroAleatorio]}">`;
    return numeroAleatorio;
}

function imagen2() {
    let numeroAleatorio2 = Math.floor(Math.random() * 6);
    div2.innerHTML = `<img src="${imgVector[numeroAleatorio2]}">`;
    return numeroAleatorio2;
}

function imagen3() {
    let numeroAleatorio3 = Math.floor(Math.random() * 6);
    div3.innerHTML = `<img src="${imgVector[numeroAleatorio3]}">`;
    return numeroAleatorio3;
}

function generarLista(numeroAleatorio, numeroAleatorio2, numeroAleatorio3) {
    if (numeroAleatorio === numeroAleatorio2 && numeroAleatorio2 === numeroAleatorio3) {
        lista.innerHTML += `<p>TENES 3 IMAGENES REPETIDAS</p>`;
    } else if (numeroAleatorio === numeroAleatorio2 || numeroAleatorio2 === numeroAleatorio3 || numeroAleatorio === numeroAleatorio3) {
        lista.innerHTML += `<p>TENES 2 IMAGENES REPETIDAS</p>`;
    } else {
        lista.innerHTML += `<p>NO TENES NINGUNA IMAGEN REPETIDA</p>`;
    }
}
