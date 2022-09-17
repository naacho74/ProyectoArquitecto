export function ampliarCategorias(evento){

    let objetoProyecto={
     foto:evento.target.parentElement.querySelector("img").src,
     titulo:evento.target.parentElement.querySelector("h4").textContent,
     categoria:evento.target.parentElement.querySelector("h6").textContent
    }

    return (objetoProyecto)
}