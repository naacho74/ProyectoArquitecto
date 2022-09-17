export function pintarProyectos(fila,proyectos){

    let fila1 = document.getElementById(fila)
    fila1.innerHTML=""

    proyectos.forEach(function(proyecto){

      
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjetaP= document.createElement("div")
        tarjetaP.classList.add("m-4","d-flex","p-3","pointer","tarjetaP")
        
        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid","w-75")
        imagen.src=proyecto.fotos[0]
        
        let fila2 = document.createElement("div")
        fila2.classList.add("row","row-cols-12","row-cols-md-12","w-100","my-auto")

        let columna2 = document.createElement("div")
        columna2.classList.add("col","col-md-12","col-12")
        let columna3 = document.createElement("div")
        columna3.classList.add("col","col-md-12","col-12","d-flex")
         
        let nombreP = document.createElement("h4")
        nombreP.classList.add("text-dark","mx-5")
        nombreP.textContent=proyecto.nombre

        let ubicacionP= document.createElement("h6")
        ubicacionP.classList.add("mx-5","d-none")
        ubicacionP.textContent=proyecto.ubicacion

        let añoP = document.createElement("h5")
        añoP.classList.add("mx-5","mt-5")
        añoP.textContent=proyecto.año

        let clienteP = document.createElement("h3")
        clienteP.classList.add("mx-5","d-none")
        clienteP.textContent=proyecto.cliente
        
        let categoriaP = document.createElement("h2")
        categoriaP.classList.add("d-none")
        categoriaP.textContent=proyecto.categoria
        
        tarjetaP.appendChild(imagen)
        tarjetaP.appendChild(fila2)
        fila2.appendChild(columna2)
        fila2.appendChild(columna3)
        columna2.appendChild(nombreP)
        columna3.appendChild(añoP)
        columna3.appendChild(ubicacionP)
        columna3.appendChild(clienteP)
        columna3.appendChild(categoriaP)



        
        columna.appendChild(tarjetaP)
        fila1.appendChild(columna)
      

    })
}