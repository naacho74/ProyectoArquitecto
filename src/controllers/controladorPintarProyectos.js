export function pintarProyectos(fila,proyectos){

    let fila1 = document.getElementById(fila)
    fila1.innerHTML=""

    proyectos.forEach(function(proyecto){

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjetaP= document.createElement("div")
        tarjetaP.classList.add("card","m-4")

        let tarjeta=document.createElement ("div")
        tarjeta.classList.add("card-img-overlay","w-100","pointer")
        
        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=proyecto.foto
         
        let nombre = document.createElement("h4")
        nombre.classList.add("text-dark")
        nombre.textContent=proyecto.titulo

        let categoria= document.createElement("h6")
        categoria.classList.add("d-none")
        categoria.textContent=proyecto.categoria

        tarjeta.appendChild(categoria)
        tarjeta.appendChild(nombre)
        tarjetaP.appendChild(imagen)
        tarjetaP.appendChild(tarjeta)
        columna.appendChild(tarjetaP)
        fila1.appendChild(columna)

    })
}