/**
 *  Nodos
 *
 * Son los objetos que componen el árbol del DOM
 * Existen distintos tipos de nodos:
 *
 *  https://developer.mozilla.org/es/docs/Web/API/Node/nodeType
 *
 *
 *  Selectores:
 *  Son métodos del objeto document que nos permiten obtener la referencia de algun nodo del DOM
 *
 */

// Obtener un elemento por id
console.log(document.getElementById("parrafo1"));

// Obtener elementos por el tipo de etiqueta ---> retorna un HTMLCollection
console.log(document.getElementsByTagName("li"));

// Obtener elementos por su class ---> retorna un HTMLCollection
console.log(document.getElementsByClassName("card"));

// Obtener elementos por su atributo name ---> retorna un NodeList
console.log(document.getElementsByName("nombre"));

//---------------------------------------------------------------------------
// Selectores modernos (utilizan la misma forma de seleccionar un elemento que css)

// Selecciona un elemento por id
console.log(document.querySelector("#menu"));

// Selecciona un elemento por etiqueta (el primero que encuentra)
console.log(document.querySelector("li"));

// Selecciona un elemento por class (el primero que encuentra)
console.log(document.querySelector(".card"));

// Selecciona todos los elementos de una etiqueta
console.log(document.querySelectorAll("li"));

// Selecciona todos los elementos de una clase
console.log(document.querySelectorAll(".card"));

// Los objetos NodeList tienen métodos parecidos a los array (forEach por ejemplo)
document.querySelectorAll(".card").forEach((elemento) => {
  console.log(elemento);
});

// Con estos selectores se pueden utilizar cualquier selector de CSS
console.log(document.querySelectorAll("#parrafos>p"));
