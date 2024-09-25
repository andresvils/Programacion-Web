class Animal {
    // Propiedades privadas
    #especie;
    #edad;
    #nombre;
    #informacion;
    constructor(especie, edad, nombre) {
        this.#especie = especie;
        this.#edad = edad;
        this.#nombre = nombre;
    }
    verInformacion() {
        document.write( `Soy ${this.#nombre}, tengo ${this.#edad} años y soy un ${this.#especie} <br>`);
    }
    get getEspecie() {
        return this.#especie;
    }
    get getEdad() {
        return this.#edad;
    }
    get getNombre() {
        return this.#nombre;
    }
    set setNombre(nombre){
        this.#nombre=nombre;
    }
}
class perro extends Animal{
    #raza;
    constructor(especie,edad,nombre,raza){
        super(especie,edad,nombre);
        this.#raza=raza;
    }
    ladrar(){
        document.write(`wow <br>`);
    }
}

let perrito = new perro("perro", 5, "pedrito","pitbull");
let gato = new Animal("gato", 10, "pepa");

gato.verInformacion();
perrito.verInformacion();
perrito.ladrar();
perrito.setNombre="josh";
perrito.verInformacion();