// Clases en JS
// desde ES2015 disponemos de la sintaxis de clases
// Es azucar sintactico ya que solo es una manera más amigable de escribir
// objetos y prototipos

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = "";
  }

  static identificarse() {
    console.log("Soy una persona");
  }

  set Sexo(value) {
    this.sexo = value.toUpperCase();
  }

  get Sexo() {
    return this.sexo;
  }

  saludar() {
    console.log("Hola que tal");
  }
  presentarse() {
    console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años`);
  }
}

class Alumno extends Persona {
  constructor(nombre, edad, legajo) {
    super(nombre, edad);
    this.legajo = legajo;
  }
  presentarse() {
    console.log(
      `Soy alumno y me llamo ${this.nombre} y tengo ${this.edad} años`
    );
  }
}

const per1 = new Persona("Lucia", 32);
const al1 = new Alumno("Laura", 21, 123456);

console.log(per1);
console.log(al1);

per1.presentarse();
al1.presentarse();

Persona.identificarse();
