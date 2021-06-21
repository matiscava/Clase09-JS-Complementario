//DECLARAMOS EL ARRAY//

let autos = [
    {
        imagen:"imagenes/escarabajo2.jpg",
        alt:"Escarabajo del Pepe",
        nombre:"VolksWagen Beetle",
        descripcion: "El auto del Pepe en buen estado se decidio a venderlo.",
        precio:15000000
    },
    {
        imagen:"imagenes/Fiatduna.jpg",
        alt:"fiat Duna",
        nombre:"Fiat Duna Bordo",
        descripcion: "Fiat Duna de 1987 en buen estado con tanque GNC",
        precio:110000  
    }
];

//CLASE AUTONUEVO
class Auto{
    constructor(imagen,alt,nombre,descripcion,precio){
        this.imagen=imagen;
        this.alt=alt;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
    }
}
// FUNCIONES

function tomarDatos(dato, inputID){
    dato = document.getElementById(inputID).value;
    console.log(dato);
    return dato;
}
function limpiarDatos(dato, inputID){
    dato = document.getElementById(inputID);
    dato.value="";
}

function arrayPush(imagen,alt,nombre,descripcion,precio,array){
    let autoNuevo = new Auto(
        this.imagen=imagen,
        this.alt=alt,
        this.nombre=nombre,
        this.descripcion=descripcion,
        this.precio=precio  
    );
    array.push(autoNuevo);
}

function cuestionarioTrue(){
    let cuestionario=document.getElementsByClassName("cuestionario");
    cuestionario[0].style.display="block";
}
function cuestionarioFalse(){
    let cuestionario=document.getElementsByClassName("cuestionario");
    cuestionario[0].style.display="none";
}

function agregarItem (){
    let imagen,alt,nombre,descripcion,precio;
    imagen=tomarDatos(imagen,"item-imagen");
    alt=tomarDatos(alt,"item-alt");
    nombre=tomarDatos(nombre,"item-nombre");
    descripcion=tomarDatos(descripcion,"item-descripcion");
    precio=parseInt(tomarDatos(precio,"item-precio"));
    arrayPush(imagen,alt,nombre,descripcion,precio,autos);
    console.log(autos,autos.length);
    let limpiar=document.getElementsByClassName("galeria");
    limpiar[0].innerHTML="";
    for (const auto of autos) {
        let galeria=document.getElementsByClassName("galeria");
        let contenedor = document.createElement("div");
        contenedor.className="contenedor";
        contenedor.innerHTML=
        `<div class="contenedor__imagen">
            <img src="${auto.imagen}" alt="${auto.alt}" class="contenedor__img">
        </div>
        <h3 class="contenedor__titulo">${auto.nombre}</h3>
        <p class="contenedor__descripcion">${auto.descripcion}</p>
        <p class="contenedor__precio">$${auto.precio}</p>
        <button class="contenedor__btn">COMPRAR</button>`;
        galeria[0].appendChild(contenedor);
    }
    imagen=limpiarDatos(imagen,"item-imagen");
    alt=limpiarDatos(alt,"item-alt");
    nombre=limpiarDatos(nombre,"item-nombre");
    descripcion=limpiarDatos(descripcion,"item-descripcion");
    precio=limpiarDatos(precio,"item-precio");
}
for (const auto of autos) {
    let galeria=document.getElementsByClassName("galeria");
    let contenedor = document.createElement("div");
    contenedor.className="contenedor";
    contenedor.innerHTML=
    `<div class="contenedor__imagen">
        <img src="${auto.imagen}" alt="${auto.alt}" class="contenedor__img">
    </div>
    <h3 class="contenedor__titulo">${auto.nombre}</h3>
    <p class="contenedor__descripcion">${auto.descripcion}</p>
    <p class="contenedor__precio">$${auto.precio}</p>
    <button class="contenedor__btn">COMPRAR</button>`;
    galeria[0].appendChild(contenedor);
}


