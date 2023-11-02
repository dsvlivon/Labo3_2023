/**
 *  DOM traversing
 *
 *  Está compuesto por un conjunto de funciones que tomando como referencia
 *  un elemento, nos permite recorrer el árbol de jerarquias.
 *  Es decir teniendo la referencia de un elemento obtener la referencia de los
 *  los elementos hijos, el elemento padre o elementos hermanos.
 *
 *  Vimos los nodeTypes donde se especifica el tipo de los nodos:
 *  - Nodos elemento (etiquetas)
 *  - Nodos texto (contenido de las etiquetas)
 *  - Nodos comentarios
 *  - Nodos fragmentos
 *
 *  Vamos a hacer enfasis en los nodos elementos.
 *
 */

// Obtengo una referencia de la etiqueta section de clase cards
const $sectionCards = document.querySelector(".cards");
console.log($sectionCards);

// Para obtener una referencia a los hijos (los elementos que están dentro)
const hijosElementos = $sectionCards.children;
console.log(hijosElementos);

// Para obtener una referencia a los nodos hijos 
const hijos = $sectionCards.childNodes;
console.log(hijos);


// El tercer hijo es la card de animales puedo obtener una referencia a traves
// de su indice dentro de la HTMLCollection.
console.log($sectionCards.children[2]);

// El elemento padre de un nodo se obtiene con la propiedad parentElement.
const padre = $sectionCards.parentElement;
console.log(padre); // body

// Existe una propiedad para obtener una referencia al primer elemento hijo.
const primerHijo = $sectionCards.firstElementChild;
console.log(primerHijo);

// Existe una propiedad para obtener una referencia al último elemento hijo.
const ultimoHijo = $sectionCards.lastElementChild;
console.log(ultimoHijo);

// Existe una propiedad para obtener una referencia al hermano anterior.
const hermanoAnterior = $sectionCards.previousElementSibling;
console.log(hermanoAnterior);

// Existe una propiedad para obtener una referencia al hermano siguiente.
const hermanoSiguiente = $sectionCards.nextElementSibling;
console.log(hermanoSiguiente);

// Si queremos obtener una referencia a algun ancestro podemos usar el método
// closest().

// Referencia a la etiqueta mark
const $mark = document.querySelector("mark");
// Muestro el section ancestro de mark 
console.log($mark.closest("section"));








