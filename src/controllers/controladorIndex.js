import {pintarBotones} from './controladorPintarBotones.js'
import {pintarProyectos} from './controladorPintarProyectos.js'
import {pintarCategorias} from './controladorPintarCategorias.js'

import {botones} from '../helpers/botonesdb.js'
import {proyectosdb} from '../helpers/proyectosdb.js'
import {categoriadb} from '../helpers/categoriasProyectosdb.js'
import {proyectos} from '../helpers/baseDatosProyecto.js'
import {categorias} from '../helpers/baseDatosCategorias.js'

import {ampliarCategorias} from './controladorAmpiarCategorias.js'
import {ampliarProductos} from './controladorAmpliarProductos.js'
import {objetoBoton} from './controladorObjetoboton.js'


let filacategorias1 = document.getElementById("filacategorias")
let tituloCategoria =document.getElementById("tituloCategoria")
let filaproyectos = document.getElementById("filaproyectos")


pintarCategorias("filacategorias",categorias)

let filaboton = document.getElementById("filabotones")
filaboton.addEventListener("click",function(evento){
    if(evento.target.parentElement.classList.contains("btn") == true){
        console.log("hola")
        let objetoboton = objetoBoton(evento)
        console.log(objetoboton)
        
            if(objetoboton.categoria == 0){
                filaproyectos.innerHTML=""
                filaboton.innerHTML=""
                filacategorias1.innerHTML=""
                tituloCategoria.textContent="Categorias de Proyectos"
                pintarCategorias("filacategorias",categorias)
            }else if(objetoboton.categoria == 1){
            pintarBotones("filabotones",botones)
            filacategorias1.innerHTML=""
            tituloCategoria.textContent="Categoria 1"
            let proyectosdb1 = proyectos.filter(function(categoriae){

                return categoriae.categoria == 1
            })
            pintarProyectos("filaproyectos",proyectosdb1)
           }else if(objetoboton.categoria == 2){
            pintarBotones("filabotones",botones)
            filacategorias1.innerHTML=""
            tituloCategoria.textContent="Categoria 2"
            let proyectosdb2 = proyectos.filter(function(categoriae){

                return categoriae.categoria == 2
            })
            
            pintarProyectos("filaproyectos",proyectosdb2)
            
            
           }else if(objetoboton.categoria == 3){
            pintarBotones("filabotones",botones)
            filacategorias1.innerHTML=""
            tituloCategoria.textContent="Categoria 3"
            let proyectosdb3 = proyectos.filter(function(categoriae){

                return categoriae.categoria == 3
            })
            pintarProyectos("filaproyectos",proyectosdb3)
            
           
           }else{
    
           }
    }
})

let filacategorias = document.getElementById("filacategorias")

filacategorias.addEventListener("click",function(evento){
    if(evento.target.parentElement.classList.contains("tarjetaP") == true){
        let objetoCategoria = ampliarCategorias(evento)
        
        console.log(objetoCategoria)
        
        
       if(objetoCategoria.categoria == 1){
        pintarBotones("filabotones",botones)
        filacategorias1.innerHTML=""
        tituloCategoria.textContent="Categoria 1"
        let proyectosdb1 = proyectos.filter(function(categoriae){

            return categoriae.categoria == 1
        })
        pintarProyectos("filaproyectos",proyectosdb1)
       }else if(objetoCategoria.categoria == 2){
        pintarBotones("filabotones",botones)
        filacategorias1.innerHTML=""
        tituloCategoria.textContent="Categoria 2"
            let proyectosdb2 = proyectos.filter(function(categoriae){

                return categoriae.categoria == 2
            })
            
            pintarProyectos("filaproyectos",proyectosdb2)
        
        
       }else if(objetoCategoria.categoria == 3){
        pintarBotones("filabotones",botones)
        filacategorias1.innerHTML=""
        tituloCategoria.textContent="Categoria 3"
        let proyectosdb3 = proyectos.filter(function(categoriae){

            return categoriae.categoria == 3
        })
        pintarProyectos("filaproyectos",proyectosdb3)
        
       
       }else{

       }
       
        
    }
})


filaproyectos.addEventListener("click",function(evento){
    if(evento.target.parentElement.classList.contains("tarjetaP") == true){

        let objetoproyecto = ampliarProductos(evento)

        console.log(objetoproyecto)


        sessionStorage.setItem('proyecto',JSON.stringify(objetoproyecto))

        window.location.href='./src/views/infoProyecto.html'   
    //    localStorage("infoProyecto",JSON.stringify(objetodeproyecto))
    }
})