export function objetoBoton(evento){

    let objetoboton = {
        nombre:evento.target.parentElement.querySelector("h5").textContent,
        categoria:evento.target.parentElement.querySelector("h4").textContent

    }

    return objetoboton
}