import { proyectos } from "../helpers/baseDatosProyecto.js";


let proyecto = JSON.parse(sessionStorage.getItem("proyecto"));



proyectos.forEach(function(proyectoFinal){
if(proyectoFinal.nombre==proyecto.nombre){
  proyecto.fotos=proyectoFinal.fotos
  
}
console.log(proyecto.cliente)
})
let pestana=document.getElementById('pestana')
let titulo =document.getElementById('titulo')
let nombre=document.getElementById('nombre')
let ubicacion=document.getElementById('ubicacion')
let ano=document.getElementById('año')
let cliente=document.getElementById('cliente')
let imagenPrincipal = document.getElementById("imagenPrincipal");
let imagen1 = document.getElementById("imagen1");
let imagen2 = document.getElementById("imagen2");
let imagen3 = document.getElementById("imagen3");
let imagen4 = document.getElementById("imagen4");
let imagen5 = document.getElementById("imagen5");





pestana.textContent=proyecto.nombre
titulo.textContent=proyecto.nombre
nombre.textContent=proyecto.nombre
ubicacion.textContent=proyecto.ubicacion
ano.textContent='Año '+proyecto.año 
cliente.textContent='Cliente '+proyecto.cliente
imagenPrincipal.src = proyecto.fotos[0]
imagen1.src = proyecto.fotos[0];
imagen2.src = proyecto.fotos[1];
imagen3.src = proyecto.fotos[2]
imagen4.src = proyecto.fotos[3]
imagen5.src = proyecto.fotos[4];

imagen1.addEventListener("click", function () {
  imagenPrincipal.src = proyecto.fotos[0];
});

imagen2.addEventListener("click", function () {
  imagenPrincipal.src = proyecto.fotos[1];
});
imagen3.addEventListener("click", function () {
  imagenPrincipal.src = proyecto.fotos[2];
});
imagen4.addEventListener("click", function () {
  imagenPrincipal.src = proyecto.fotos[3];
});

imagen5.addEventListener("click", function () {
  imagenPrincipal.src = proyecto.fotos[4];
  console.log("foto 5");
});

