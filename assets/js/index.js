import { Leon, Lobo, Oso, Serpiente, Aguila } from "./tiposAnimales.js";
import { animales } from "./anm.js";


let imagenAnimal;
let sonidoAnimal;
let listaAnimales = [];
let anm;

document.getElementById("animal").addEventListener("change", async (evento) => {
    let animaleSeleccionado = evento.target.value
    const jsonAnimales = await animales.getDatos()
    const animalObj = jsonAnimales.find((objeto) => {
        return objeto.name == animaleSeleccionado
    })
    imagenAnimal = `./assets/imgs/${animalObj.imagen}`
    sonidoAnimal = animalObj.sonido

    const elementoPreview = document.getElementById("preview");
    elementoPreview.style.backgroundImage = `url(${imagenAnimal})`


})



document.getElementById("btnRegistrar").addEventListener("click", async () => {

    const htmlNombre = document.getElementById("animal")
    const animalNombre = htmlNombre.value

    const htmlAños = document.getElementById("edad")
    const animalAños = htmlAños.value

    const htmlComentarios = document.getElementById("comentarios")
    const comentarios = htmlComentarios.value


    const jsonAnimales = await animales.getDatos();
    const animalObj = jsonAnimales.find((objeto) => {
        return objeto.name == animalNombre
    })




    if (animalNombre && animalAños && comentarios) {

        let nuevoLeon, nuevoLobo, nuevoOso, nuevaSerpiente, nuevaAguila;

        switch (animalNombre) {
            case "Leon":
                nuevoLeon = new Leon(animalNombre, animalAños, imagenAnimal, comentarios, sonidoAnimal)
                anm = nuevoLeon
                console.log(nuevoLeon)
                break;

            case "Lobo":
                nuevoLobo = new Lobo(animalNombre, animalAños, imagenAnimal, comentarios, sonidoAnimal)
                anm = nuevoLobo
                console.log(nuevoLobo)
                break;

            case "Oso":
                nuevoOso = new Oso(animalNombre, animalAños, imagenAnimal, comentarios, sonidoAnimal)
                anm = nuevoOso
                console.log(nuevoOso)
                break;

            case "Serpiente":
                nuevaSerpiente = new Serpiente(animalNombre, animalAños, imagenAnimal, comentarios, sonidoAnimal)
                anm = nuevaSerpiente
                console.log(nuevaSerpiente)
                break;

            case "Aguila":
                nuevaAguila = new Aguila(animalNombre, animalAños, imagenAnimal, comentarios, sonidoAnimal)
                anm = nuevaAguila
                console.log(nuevaAguila)
                break;
            default:
                console.log("debes elegir un nombre")
                break;
        }


    } else {
        alert("rellenar todos los campos del formulario")
    }


    listaAnimales.push(anm)
    console.log(listaAnimales)



    htmlNombre.selectedIndex = 0;
    htmlAños.selectedIndex = 0;
    htmlComentarios.value = "";


})









