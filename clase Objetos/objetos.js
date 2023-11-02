// Objetos
// Conceptos Básicos
// Un objeto es una colección de datos relacionados y/o
// funcionalidad (que generalmente consta de algunas variables y
// funciones, que se denominan propiedades y métodos cuando están
// dentro de objetos).

/*
const obj = new Object();
const obj1 = {};
const obj2 = new Object("cadena");
const obj3 = new Object(30);
const obj4 = new Object(true);
const obj5 = new Object([]);

console.log(obj);
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
*/


const persona = {
  nombre: ["Jose", "Perez"],
  edad: 23,
  genero: "Masculino",
  deportes: ["Futbol", "Golf", "Natación"],
  signo: "Tauro",
  presentarse: function () {
    console.log(`Me llamo ${this.nombre[0]} y tengo ${this.edad} años`);
  },
  saludar: function () {
    console.log(`Hola!`);
  },
  dormir() {
    console.log("Estoy durmiendo");
  },
};
// Notar las 2 maneras de establecer un método dentro de un objeto literal

console.log(persona);

/* Un objeto es una colección de pares clave:valor.
 Cada par clave/valor debe estar separado por una coma,
 y la clave y el valor en cada caso están separados por dos
 puntos. La sintaxis siempre sigue este patrón:

const nombreObjeto = {
  miembro1Clave: miembro1Valor,
  miembro2Clave: miembro2Valor,
  miembro3Clave: miembro3Valor,
};
*/

/* Un objeto como este se conoce como un objeto literal. Literalmente hemos escrito el contenido del objeto.
Es muy común utilizar un objeto literal cuando queremos transferir una serie de elementos de datos relacionados y estructurados de alguna manera, por ejemplo, enviando una solicitud al servidor para ponerla en una base de datos. O pasando por parametro a una función un objeto que contiene varios valores. Enviar un solo objeto es mucho más eficiente que enviar varios elementos individualmente, y es más fácil de procesar que un array, cuando queres identificar elementos individuales por nombre en lugar de por indice.*/

// Notación de punto
/*
Podemos acceder a las propiedades y métodos de un objeto mediante la notación de punto. El nombre del objeto actua como namespace.
*/
console.log(persona.deportes[1]);
console.log(persona.signo);
persona.saludar();
persona.presentarse();

// namespace secundario
/* Si tenemos como valor de una propiedad un objeto para acceder a los miembros de este objeto tambien utilizamos la notación de punto.
Cambiemos en el objeto persona el valor de nombre de array a objeto*/

persona.nombre = {
  pila: "Juan",
  apellido: "Perez",
};

console.log(persona.nombre.pila);
console.log(persona.nombre.apellido);

/**  Nota tenemos que refactorizar el método presentarse para que siga funcionando */

// Notación de corchetes
// Un objeto es un array asociativo
/* Esto se ve muy similar a cómo se accede a los elementos en un vector, y básicamente es lo mismo: en lugar de usar un número de índice para seleccionar un elemento, se usa el nombre asociado con el valor de cada miembro. Los objetos asocian cadenas de texto a valores de la misma manera que los vectores asocian números a valores.*/

console.log(persona.signo);
console.log(persona["signo"]);

// En un objeto se pueden crear miembros completamente nuevos:
persona.equipo = "Quilmes";
persona.despedida = function () {
  console.log("Chau!!");
};

console.log(persona);
console.log(persona.equipo);
persona.despedida();

/**
 Un aspecto útil de la notación de corchetes es que se puede usar para establecer dinámicamente no solo los valores de los miembros, sino también los nombres de los miembros. Digamos que queremos que los usuarios puedan almacenar tipos de valores personalizados en sus datos personales, escribiendo el nombre y el valor del miembro en dos entradas de texto. Podríamos obtener esos valores de esta manera:
 */
let nuevaPropiedad = "nacionalidad";
let nuevoValor = "Argentino";

persona[nuevaPropiedad] = nuevoValor;

console.log(persona.nacionalidad);
console.log(persona["nacionalidad"]);
console.log(persona);

// Constructores
/**
 * El uso de objetos literales está bien cuando solo se necesita crear un objeto,
 * pero si tenemos que crear varios debemos escribir el mismo código para cada uno
 * y si queremos agregar una propiedad se la debemos agregar a todos.
 * Estaría bueno encontrar una manera de definir el conjunto de propiedades y métodos
 * que deben tener los objetos que queremos crear y luego crear tantos objetos como
 * queramos.
 * La primera versión de esto es a traves de una función:
 */
function createPersona(nombre) {
  const obj = {};
  obj.nombre = nombre;
  obj.presentarse = function () {
    console.log(`Hola, me llamo ${this.nombre}`);
  };
  return obj;
}

const p1 = createPersona("Jose");
const p2 = createPersona("Laura");

console.log(p1);
console.log(p1.nombre);
console.log(p2.nombre);
p1.presentarse();
p2.presentarse();

/**
 * Esto funciona pero es muy verboso (tenemos que escribir mucho código)
 * Una manera mejor es usar un constructor.
 * Un constructor es una función al momento de ser llamada se le antepone la palabra
 * reservada new. Cuando llamamos a un constructor este hará lo siguiente:
 * - crea un nuevo objeto
 * - vincula el puntero this al objeto creado
 * - ejecuta el código del constructor
 * - retorna el objeto creado
 * Los constructores por convención se nombran según el tipo de objeto que crean
 * y se utiliza UpperCamelCase
 *
 */

function Person(nombre) {
  this.nombre = nombre;
  this.presentarse = function () {
    console.log(`Hola, me llamo ${this.nombre}`);
  };
}

const p3 = new Person("Ramiro");
const p4 = new Person("Maria");

console.log(p3);
console.log(p3.nombre);
console.log(p4.nombre);
p3.presentarse();
p4.presentarse();

function Individuo(nombre, apellido, edad, genero, deportes, signo) {
  this.nombre = {
    pila: nombre,
    apellido: apellido,
  };
  this.edad = edad;
  this.genero = genero;
  this.deportes = deportes;
  this.signo = signo;
  this.presentarse = function () {
    console.log(
      `Me llamo ${this.nombre.pila + this.nombre.apellido} y tengo ${
        this.edad
      } años`
    );
  };
  this.saludar = function () {
    console.log(`Hola!`);
  };
  this.dormir = function () {
    console.log("Estoy durmiendo");
  };
}

const ind1 = new Individuo(
  "Jose",
  "Perez",
  23,
  "Masculino",
  ["Futbol", "Golf", "Natación"],
  "Tauro"
);

console.log(ind1);

//--------------------------------------------------------------------
// Podemos recorrer los miembros de un objeto con el bucle for...in
for (const key in ind1) {
  console.log(key, ind1[key]);
}