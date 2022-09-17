export function pintarBotones(filanav,botones){

    let filaboton = document.getElementById(filanav)
    filaboton.innerHTML=""

    botones.forEach(function(boton){

        let columna = document.createElement("div")
        columna.classList.add("col","col-6","col-md-2")

        let boton1 = document.createElement("h6")
        boton1.classList.add("btn")
      
        boton1.addEventListener("mouseleave",function(evento){
            nombre.classList.remove("border")
        })
        boton1.addEventListener("mouseout",function(evento){
            nombre.classList.add("border")
        })

        let nombre = document.createElement("h5")
        nombre.classList.add("text-center","text-secondary","bg-light","p-3","rounded-pill","g-0")
        nombre.textContent=boton.nombre

        let categoria = document.createElement("h4")
        categoria.classList.add("d-none")
        categoria.textContent=boton.categoria

        boton1.appendChild(nombre)
        boton1.appendChild(categoria)
        columna.appendChild(boton1)
        filaboton.appendChild(columna)
    })

}