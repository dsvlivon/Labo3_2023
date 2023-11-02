// Crear un array
const razas = ["Boxer", "Siberian", "Labrador"];
console.log(razas);

console.log(razas.length);

// Acceder a un elemento de Array mediante su índice
let primero = razas[0];
// Boxer

let ultimo = razas[razas.length - 1];
// Labrador

// Recorrer un Array
razas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});
// Boxer 0
// Siberiano 1
// Labrador 2

// Añadir un elemento al final de un Array
let longitud = razas.push("Schnauzer"); // Añade "Schnauzer" al final
// ["Boxer", "Siberiano", "Labrador", "Schnauzer"]

// Eliminar el último elemento de un Array
let last = razas.pop(); // Elimina "Schnauzer" del final y lo retorna
// ["Boxer", "Siberiano", "Labrador"]

// Añadir un elemento al principio de un Array
let nuevaLongitud = razas.unshift("Weimaraner"); // Añade "Weimaraner" al inicio
// ["Weimaraner", Boxer", "Siberiano", "Labrador"]

// Eliminar el primer elemento de un Array
let first = razas.shift(); // Elimina "Weimaraner" del inicio y lo retorna
// ["Boxer", "Siberiano", "Labrador"]

// Encontrar el índice de un elemento del Array
razas.push("Boyero");
// ["Boxer", "Siberiano", "Labrador", "Boyero"]

let indice = razas.indexOf("Siberiano"); // retorna el indice o -1 si no esta
// 1

// Eliminar un único elemento mediante su indice
/*Ejemplo:
         Eliminamos "Siberiano" del array pasándole dos parámetros al método slice(rodaja):
         la posición del primer elemento que se elimina y el número de elementos
         que queremos eliminar.
         De esta forma, .splice(indice, 1) empieza en la posición que nos indica el valor
         de la variable indice y elimina 1 elemento. En este caso, como indice vale 1,
         elimina un elemento comenzando en la posición 1 del array, es decir "Siberiano".*/

let elementoEliminado = razas.splice(indice, 1);
// ["Boxer", "Labrador", "Boyero"]

// Eliminar varios elementos a partir de una posición
/*Nota:
      Con .splice() no solo se pueden eliminar elementos del array,
      si no que también podemos extraerlos guardándolo en un nuevo array.
      ¡Ojo! que al hacer esto estaríamos modificando el array de origen. */

const mascotas = ["Perro", "Gato", "Pez", "Iguana", "Hamster"];
console.log(mascotas);
// ["Perro", "Gato", "Pez", "Iguana", "Hamster"]

indice = 1;
let cantElementos = 2;

let elemEliminados = mascotas.splice(indice, cantElementos);
// ["Gato", "Pez"] ==> Lo que se guarda en "elemEliminados"

console.log(mascotas);
// ["Perro", "Iguana", "Hamster"] ==> Lo que actualmente tiene "mascotas"

// Copiar un Array
const copiaArray = mascotas.slice();
// ["Perro", "Iguana", "Hamster"] ==> Copiado en "copiaArray"

// Acceso a elementos de un array
/*Los índices de los arrays de JavaScript comienzan en cero,
        es decir, el índice del primer elemento de un array es 0,
        y el del último elemento es igual al valor de la propiedad length
        del array restándole 1.
        Si se utiliza un número de índice no válido, se obtendrá undefined.*/

const vec = ["primero", "segundo", "ultimo"];
console.log(vec[0]); // 'primero'
console.log(vec[1]); // 'segundo'
console.log(vec[vec.length - 1]); // 'ultimo'

//---------------------------------------------------------
// Constructor
const vec1 = Array();
console.log(vec1);
// []

const vec2 = Array(5);
console.log(vec2);
// [vacio x 5]

const vec3 = Array(4, 5, 3, 7);
console.log(vec3);
// [4, 5, 3, 7]

//---------------------------------------------------------------------
// Métodos estáticos
// Array.of()
// Crea una nueva instancia de Array con un número variable de parámetros,
// independientemente del número y del tipo de dichos parámetros.
const vec4 = Array.of(4, 5, 3, 7);
console.log(vec4);
// [4, 5, 3, 7]

// Array.isArray()
// Devuelve true si valor es un array, y false en caso contrario.
console.log(Array.isArray([1, 3, 4, 2])); // true
console.log(Array.isArray({})); // false
// Array.from()
// Crea una nueva instancia de Array a partir de un objeto iterable o parecido a un array.
console.log(Array.from("Juan"));

//------------------------------------------------------------
// Propiedades de Instancia
Array.prototype.length;
// Indica el número de elementos de un array.

//------------------------------------------------------------
// Métodos de Instancia

// Array.prototype.forEach()
// El método forEach() ejecuta el callback una vez por cada elemento del array.
// El callback recibe como parametros el elemento actual, su indice, y una referencia al array
const array1 = ["a", "b", "c"];

array1.forEach((elemento) => console.log(cantElementos));
// "a"
// "b"
// "c"

const avengers = ["Thor", "Spiderman", "Black Widow", "Ironman"];
const xmen = ["Magneto", "Wolverine", "Mistique", "Cyclope"];

// Array.prototype.concat()
/* Devuelve un nuevo array que es la concatenación de aquél sobre el que se invoca,
      seguido de otros array(s) o valor(es).*/
const marvel = avengers.concat(xmen);
console.log(marvel);
// ['Thor', 'Spiderman', 'Black Widow', 'Ironman', 'Magneto', 'Wolverine', 'Mistique', 'Cyclope']

// Array.prototype.entries()
/* Devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor
      para cada índice del array.*/

const entradas = avengers.entries();

for (const iterator of entradas) {
  console.log(iterator[0], iterator[1]);
}

// Array.prototype.values()
/*El método values() devuelve un nuevo objeto Array Iterator
 que contiene los valores para cada índice del array.
 Se puede recorrer con un bucle for-of como en el ejemplo anterior*/

// Array.prototype.keys()
/*Devuelve un nuevo Array Iterator que contiene las claves de cada índice del array.
Se puede recorrer con un bucle for-of como en el ejemplo anterior*/

// Array.prototype.every()
// Determina si todos los elementos en el array cumplen una condición.
// Si el callback retorna true para todos los elementos del array la función
// devuelve true si uno falla devuelve false

const menorQue = (valor) => valor < 40;

const arr = [1, 30, 39, 29, 10, 13];

console.log(arr.every(menorQue));
// true
arr.push(60);
console.log(arr.every(menorQue));
// false

// Array.prototype.some()
/* El método some() comprueba si al menos un elemento del array cumple con la condición 
implementada por el callback.*/
const mayorQue = (valor) => valor > 40;
console.log(arr.some(mayorQue));
// true
arr.pop();
console.log(arr.some(mayorQue));
// false

// Array.prototipe.fill()
/* El método fill() cambia todos los elementos en un array por un valor estático,
 desde el índice start (por defecto 0) hasta el índice end (por defecto array.length).
  Devuelve el arreglo modificado. */

const vector = [1, 2, 3, 4];
console.log(vector.fill("a"));
// ["a", "a", "a", "a"]

// Array.prototype.find()
/* El método find() devuelve el valor del primer elemento del array que cumple la función 
de prueba proporcionada.*/
const numeros = [4, 3, 7, 8, 6];
console.log(numeros.find((e) => e > 5));
// 7

// Array.prototype.findIndex()
/* El método findIndex() devuelve el índice del primer elemento de un array que cumple con el callback.
 En caso contrario devuelve -1.*/
console.log(
  "Indice",
  numeros.findIndex((e) => e > 5)
);
// 2

// Array.prototype.reverse()
/*El método reverse() invierte el orden de los elementos de un array.
 El primer elemento pasa a ser el último y el último pasa a ser el primero.*/
console.log(numeros);
numeros.reverse();
console.log(numeros);

// Array.prototype.includes()
/* El método includes() determina si un array incluye un determinado elemento,
 devuelve true o false según corresponda.*/
const perros = ["Bobby", "Colita", "Pepe"];
console.log(perros.includes("Colita"));
// true

const valores = [2, 5, 4, 7, 8];
console.log(perros.includes(10));
// false

// Array.prototype.join()
/*El método join() une todos los elementos de un array 
(o un objeto similar a un array) en una cadena y devuelve esta cadena.*/

const a = ["Piedra", "Papel", "Tijera"];
let miVar1 = a.join(); // "Piedra,Papel,Tijera"

/* Separador (opcional)
 Es una cadena usada para separar cada uno de los elementos del array. 
 El separador es convertido a una cadena si es necesario. Si este se omite,
 los elementos del array son separados con una coma (",").
 Si el separador es una cadena vacía todos los elementos son unidos sin ningún carácter entre ellos.
*/
let miVar2 = a.join(", "); // "Piedra, Papel, Tijera"
let miVar3 = a.join(" + "); // "Piedra + Papel + Tijera"
let miVar4 = a.join(""); // "PiedraPapelTijera"

// Array.prototype.slice()
/* El método slice() devuelve una copia de una parte del array dentro de un nuevo array 
empezando por inicio hasta fin (fin no incluido). El array original no se modificará.*/

const nombres = ["Sofia", "Juan", "Luis", "Laura", "Gabriela"];
const masculinos = nombres.slice(1, 3);
console.log(masculinos);
// ['Juan','Luis']

// Array.prototype.sort()

// Desestructuración de arrays ES2015
const ciudades = ["Bariloche", "Cordoba", "Iguazu", "Ushuaia"];

// let ciudad1 = ciudades[0];
// let ciudad2 = ciudades[1];
// let ciudad3 = ciudades[2];
// let ciudad4 = ciudades[3];

let [ciudad1, ciudad2, ciudad3, ciudad4] = ciudades;

console.log(ciudad1, ciudad2, ciudad3, ciudad4);
