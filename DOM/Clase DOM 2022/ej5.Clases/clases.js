/**
 *  Clases
 *
 *  No podemos acceder a la clase de un nodo porque la palabra class está
 *  reservada para las clases de orientación a objetos
 *
 *
 */

// Obtenemos una referencia a la primer tarjeta
const $tarjeta = document.querySelector(".cards").children[0];

//console.log($tarjeta);

// Si queremos aceder a un string que guarda el valor de la propiedad class
console.log($tarjeta.className); // card

// Los nodos elemento poseen un objeto classList que es de tipo DOMTokenList
console.log($tarjeta.classList); // card

// Vamos a agregar la clase rotar-45 a la tarjeta a traves de la propiedad
// classList del nodo que es un objeto que posee el método add.
$tarjeta.classList.add("rotar-45");

// Reemplazamos la clase rotar-45 por rotar-135 con el método replace de classList
//  .classList.replace(clase a reemplazar, nueva clase)
$tarjeta.classList.replace("rotar-45", "rotar-135");

// Podemos preguntar si un elemento posee una clase con
console.log($tarjeta.classList.contains("rotar-135")); // true

// Removemos la clase rotar-135 com el método remove de classList
$tarjeta.classList.remove("rotar-135");

console.log($tarjeta.classList.contains("rotar-135")); // false

// Si un elemento no tiene una clase se la agregamos y si la tiene se la quitamos
// con el método toggle.
$tarjeta.classList.toggle("blureado");

//$tarjeta.classList.toggle("blureado");

// Podemos utilizar estos métodos con más de una clase
$tarjeta.classList.add("rotar-45", "sepia");
