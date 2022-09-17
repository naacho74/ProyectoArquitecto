export function pintarCategorias(fila,proyectos){

    let fila1 = document.getElementById(fila)
    fila1.innerHTML=""

    proyectos.forEach(function(proyecto){

        let columna=document.createElement("div")
        columna.classList.add("col","col-12","col-md-12")

        let tarjetaP= document.createElement("div")
        tarjetaP.classList.add("m-4","d-flex","p-3","pointer","tarjetaP")
        
        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-75")
        imagen.src=proyecto.foto
         
        let nombreP = document.createElement("h4")
        nombreP.classList.add("text-dark","mx-5")
        nombreP.textContent=proyecto.nombre

        let categoria= document.createElement("h6")
        categoria.classList.add("d-none")
        categoria.textContent=proyecto.categoria

        tarjetaP.appendChild(categoria)
        tarjetaP.appendChild(imagen)
        tarjetaP.appendChild(nombreP)
        
        
        columna.appendChild(tarjetaP)
        fila1.appendChild(columna)

    })
}