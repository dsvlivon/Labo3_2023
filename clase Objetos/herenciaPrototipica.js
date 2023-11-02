/* Herencia Prototipica */
//  Los prototipos son un mecanismo mediante el cual los objetos
//  en JavaScript heredan características entre sí.
function Animal(tipo, edad, sexo) {
  this.tipo = tipo;
  this.edad = edad;
  this.sexo = sexo;
}

// Los métodos comunes a todas las instancias se cuelgan del objeto prototype
Animal.prototype.saludar = function () {
  console.log(`Hola soy un ${this.tipo} de sexo ${this.sexo}`);
};

function Mascota(nombre, edad, sexo, tipo, vacunado) {
  // Llama al constructor del padre pasandole su this (método call)
  Animal.call(this, tipo, edad, sexo);

  this.nombre = nombre;
  this.vacunado = vacunado;
}

const animal1 = new Animal("vaca", 3, "femenino");
const mascota = new Mascota("colita", 3, "masculino", "perro", true);

console.log(animal1);
console.log(mascota);

// Insertamos en la cadena prototipal del hijo el prototipo del padre
Object.setPrototypeOf(Mascota.prototype, Animal.prototype);

// Redefinimos en el prototipo de mascota el método saludar
Mascota.prototype.saludar = function () {
  console.log(
    `Me llamo ${this.nombre}, soy ${this.tipo} y tengo ${this.edad} años`
  );
};

animal1.saludar();
mascota.saludar();
