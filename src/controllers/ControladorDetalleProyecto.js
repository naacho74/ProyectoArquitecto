import { proyectos } from "../helpers/baseDatosProyecto.js";

console.log(proyectos[0]);
let proyecto = JSON.parse(sessionStorage.getItem("proyecto"));
console.log(proyecto);

let imagenPrincipal = document.getElementById("imagenPrincipal");
imagenPrincipal.src = proyectos[0].paquete[0].fotos[0];

let imagen1 = document.getElementById("imagen1");
let imagen2 = document.getElementById("imagen2");
let imagen3 = document.getElementById("imagen3");
let imagen4 = document.getElementById("imagen4");
let imagen5 = document.getElementById("imagen5");

imagen1.src = proyectos[0].paquete[0].fotos[0];
imagen2.src = proyectos[0].paquete[0].fotos[1];
imagen3.src = proyectos[0].paquete[0].fotos[2];
imagen4.src = proyectos[0].paquete[0].fotos[3];
imagen5.src = proyectos[0].paquete[0].fotos[4];

imagen1.addEventListener("click", function () {
  imagenPrincipal.src = proyectos[0].paquete[0].fotos[0];
});

imagen2.addEventListener("click", function () {
  imagenPrincipal.src = proyectos[0].paquete[0].fotos[1];
});
imagen3.addEventListener("click", function () {
  imagenPrincipal.src = proyectos[0].paquete[0].fotos[2];
});
imagen4.addEventListener("click", function () {
  imagenPrincipal.src = proyectos[0].paquete[0].fotos[3];
});

imagen5.addEventListener("click", function () {
  imagenPrincipal.src = proyectos[0].paquete[0].fotos[4];
  console.log("foto 5");
});
