import { Leon, Lobo, Oso, Serpiente, Aguila } from "./tiposAnimales.js";
import { animales } from "./anm.js";

document.getElementById("btnRegistrar").addEventListener("click", () => {

    const htmlNombre = document.getElementById("animal")
    const animalNombre = htmlNombre.value
    console.log(animalNombre)

    const htmlAños = document.getElementById("edad")
    const animalAños = htmlAños.value
    console.log(animalAños)

    const htmlComentarios = document.getElementById("comentarios")
    const comentarios = htmlComentarios.value
    console.log(comentarios)

    if (animalNombre && animalAños && comentarios) {
        switch (animalNombre) {
            case "Leon":
                let nuevoLeon = new Leon(animalNombre, animalAños, img, comentarios, sonido)
                console.log(nuevoLeon)
                break;

            case "Lobo":
                let nuevoLobo = new Lobo(animalNombre, animalAños, img, comentarios, sonido)
                console.log(nuevoLobo)
                break;

            case "Oso":
                let nuevoOso = new Oso(animalNombre, animalAños, img, comentarios, sonido)
                console.log(nuevoOso)
                break;

            case "Serpiente":
                let nuevaSerpiente = new Serpiente(animalNombre, animalAños, img, comentarios, sonido)
                console.log(nuevaSerpiente)
                break;

            case "Aguila":
                let nuevaAguila = new Aguila(animalNombre, animalAños, img, comentarios, sonido)
                console.log(nuevaAguila)
                break;
            default:
                console.log("debes elegir un nombre")
                break;
        }


    } else {
        alert("rellenar todos los campos del formulario")
    }


    // refrescando el formulario despues del evento click!
    htmlNombre.selectedIndex = 0;
    htmlAños.selectedIndex = 0;
    // htmlComentarios.value = "";


})









