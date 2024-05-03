import { Animal } from "./animal.js";

export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Rugir() {
        // reproducir sonido del leon
    }
}
export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Aullar() {
        // reproducir sonido del lobo
    }
}
export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Gruñir() {
        // reproducir sonido del oso
    }
}
export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Sisear() {
        // reproducir sonido de la serpiente
    }
}
export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    Chillar() {
        // reproducir sonido del aguila
    }
}