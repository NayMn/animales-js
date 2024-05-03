import { Leon, Lobo, Oso, Serpiente, Aguila } from "./tiposAnimales.js";
import { animales } from "./anm.js";


let imagenAnimal;
let sonidoAnimal;
let listaAnimales = [];
let anm;



document.getElementById("btnRegistrar").addEventListener("click", async () => {

    const htmlNombre = document.getElementById("animal")
    const animalNombre = htmlNombre.value
    console.log(animalNombre)

    const htmlAños = document.getElementById("edad")
    const animalAños = htmlAños.value
    console.log(animalAños)

    const htmlComentarios = document.getElementById("comentarios")
    const comentarios = htmlComentarios.value
    console.log(comentarios)

    const elementoPreview = document.getElementById("preview");


    const jsonAnimales = await animales.getDatos();
    const animalObj = jsonAnimales.find((objeto) => {
        return objeto.name == animalNombre
    })


    imagenAnimal = `./assets/imgs/${animalObj.imagen}`

    sonidoAnimal = animalObj.sonido

    elementoPreview.style.backgroundImage = `url(${imagenAnimal})`






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


    const tabla = document.getElementById("Animales");
    const nuevaFila = document.createElement("div");
    nuevaFila.classList.add("row", "animal");

    // Crear elementos para mostrar los atributos del animal
    const columnaNombre = document.createElement("div");
    columnaNombre.classList.add("col");
    columnaNombre.textContent = "Nombre: " + animalNombre;

    const columnaAños = document.createElement("div");
    columnaAños.classList.add("col");
    columnaAños.textContent = "Años: " + animalAños;

    const columnaComentarios = document.createElement("div");
    columnaComentarios.classList.add("col");
    columnaComentarios.textContent = "Comentarios: " + comentarios;

    // Añadir los elementos a la fila
    nuevaFila.appendChild(columnaNombre);
    nuevaFila.appendChild(columnaAños);
    nuevaFila.appendChild(columnaComentarios);

    // Añadir la fila a la tabla
    tabla.appendChild(nuevaFila);

    // refrescando el formulario despues del evento click!
    htmlNombre.selectedIndex = 0;
    htmlAños.selectedIndex = 0;
    // htmlComentarios.value = "";


})









