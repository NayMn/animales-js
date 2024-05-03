// traer info de animales.json
// fetch devuelve una promesa y espera que se cumpla para obtener una respuesta 

export let animales = (() => {
    const url = "http://127.0.0.1:5500/animales.json";
    const getDatos = async () => {
        let respuesta = await fetch(url);
        // obtener datos 
        let { animales } = await respuesta.json()

        return animales;
    }
    return { getDatos };
})();