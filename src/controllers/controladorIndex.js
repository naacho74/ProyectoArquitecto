import {pintarBotones} from './controladorPintarBotones.js'
import {pintarProyectos} from './controladorPintarProyectos.js'

import {botones} from '../helpers/botonesdb.js'
import {proyectosdb} from '../helpers/proyectosdb.js'
import {categoriadb} from '../helpers/categoriasProyectosdb.js'

import {ampliarProductos} from './controladorAmpliarProductos.js'
import {objetoBoton} from './controladorObjetoboton.js'


let filacategorias1 = document.getElementById("filacategorias")
let tituloCategoria =document.getElementById("tituloCategoria")


pintarProyectos("filacategorias",categoriadb)

let filaboton = document.getElementById("filabotones")
filaboton.addEventListener("click",function(evento){
    if(evento.target.parentElement.classList.contains("btn") == true){
        console.log("hola")
        let objetoboton = objetoBoton(evento)
        console.log(objetoboton)
        
            if(objetoboton.categoria == 0){
                filacategorias1.innerHTML=""
                tituloCategoria.textContent="Categorias de Proyectos"
                pintarProyectos("filacategorias",categoriadb)
            }else if(objetoboton.categoria == 1){
            pintarBotones("filabotones",botones)
            filacategorias1.innerHTML=""
            tituloCategoria.textContent="Categoria 1"
            let proyectosdb1 = proyectosdb.filter(function(categoriae){

                return categoriae.categoria == 1
            })
            pintarProyectos("filaproyectos",proyectosdb1)
           }else if(objetoboton.categoria == 2){
            pintarBotones("filabotones",botones)
            filacategorias1.innerHTML=""
            tituloCategoria.textContent="Categoria 2"
            let proyectosdb2 = proyectosdb.filter(function(categoriae){

                return categoriae.categoria == 2
            })
            
            pintarProyectos("filaproyectos",proyectosdb2)
            
            
           }else if(objetoboton.categoria == 3){
            pintarBotones("filabotones",botones)
            filacategorias1.innerHTML=""
            tituloCategoria.textContent="Categoria 3"
            let proyectosdb3 = proyectosdb.filter(function(categoriae){

                return categoriae.categoria == 3
            })
            pintarProyectos("filaproyectos",proyectosdb3)
            
           
           }else{
    
           }
    }
})

let filacategorias = document.getElementById("filacategorias")

filacategorias.addEventListener("click",function(evento){
    if(evento.target.parentElement.classList.contains("card") == true){
        let objetoproyecto = ampliarProductos(evento)
        console.log(objetoproyecto.categoria)
        
       if(objetoproyecto.categoria == 1){
        pintarBotones("filabotones",botones)
        filacategorias1.innerHTML=""
        tituloCategoria.textContent="Categoria 1"
        let proyectosdb1 = proyectosdb.filter(function(categoriae){

            return categoriae.categoria == 1
        })
        pintarProyectos("filaproyectos",proyectosdb1)
       }else if(objetoproyecto.categoria == 2){
        pintarBotones("filabotones",botones)
        filacategorias1.innerHTML=""
        tituloCategoria.textContent="Categoria 2"
            let proyectosdb2 = proyectosdb.filter(function(categoriae){

                return categoriae.categoria == 2
            })
            
            pintarProyectos("filaproyectos",proyectosdb2)
        
        
       }else if(objetoproyecto.categoria == 3){
        pintarBotones("filabotones",botones)
        filacategorias1.innerHTML=""
        tituloCategoria.textContent="Categoria 3"
        let proyectosdb3 = proyectosdb.filter(function(categoriae){

            return categoriae.categoria == 3
        })
        pintarProyectos("filaproyectos",proyectosdb3)
        
       
       }else{

       }
       
        
    }
})

let filaproyectos = document.getElementById("filaproyectos")

filaproyectos.addEventListener("click",function(evento){
    if(evento.target.parentElement.classList.contains("card") == true){

        let objetodeproyecto = ampliarProductos(evento)

        console.log(objetodeproyecto)

        localStorage("infoProyecto",JSON.stringify(objetodeproyecto))
    }
})