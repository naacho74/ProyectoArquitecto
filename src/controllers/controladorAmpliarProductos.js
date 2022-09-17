export function ampliarProductos(evento){

    let objetoProyecto={
     fotos:evento.target.parentElement.querySelector("img").src,
     nombre:evento.target.parentElement.querySelector("h4").textContent,
     categoria:evento.target.parentElement.querySelector("h2").textContent,
     año:evento.target.parentElement.querySelector("h5").textContent,
     ubicacion:evento.target.parentElement.querySelector("h6").textContent,
     cliente:evento.target.parentElement.querySelector("h3").textContent,
     
    }

    return (objetoProyecto)
}