/**
 *  DOM Modificacion
 *
 *  Reemplazar, Modificar, Insertar, Eliminar, Clonar Nodos
 */

// Obtengo una referencia a la section de las tarjetas.
const $sectionCards = document.querySelector(".cards");

// Creamos una nueva tarjeta.
const $newCard = document.createElement("figure");
// Agregamos la clase card a la lista de clases de la nueva tarjeta.
$newCard.classList.add("card");

// Completamos el contenido de la nueva tarjeta.
$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Imagen any" />
<figcaption>Any</figcaption>
`;

// Vamos a reemplazar la tarjeta con imagen de animales con la nueva tarjeta
// usamos el método replaceChild del nodo padre que recibe como primer
// parámetro el nuevo nodo y como segundo el nodo a reemplazar.

//$sectionCards.replaceChild($newCard, $sectionCards.children[2]);

// Vamos a insertar la nueva tarjeta como primer hijo. Usamos el método
// del padre insertBefore (insertar antes). Como primer parámetro recibe
// el nodo a insertar y el segundo la referencia del nodo del cual queremos
// insertar antes.

// $sectionCards.insertBefore($newCard, $sectionCards.firstElementChild);

// Vamos a eliminar el nodo de people para eso utilizamos el método
// removeChild del padre, al cual le pasamos la referencia del nodo a eliminar

//$sectionCards.removeChild($sectionCards.children[1]);

// Ahora vamos a clonar un nodo a partir de otro. En este caso
// clonamos la section cards. Recibe un booleano que indica si tambien
// se debe cloanr los nodos contenidos. (false) por default.
$clonCards = $sectionCards.cloneNode(true);

// Agrego la seccion clonada al body
//document.body.appendChild($clonCards);

//----------------------------------------------------------------------------------
// Nuevos métodos

/**
 *  .insertAdjacent
 *    .insertAdjacentElement(position, element)   (appendChild - agrega un elemento)
 *    .insertAdjacentHTML(position, html)         (innerHTML - agrega contenido html)
 *    .insertAdjacentText(position, text)         (textContent)
 *
 *  Posiciones:
 *              beforebegin(hermano anterior)
 *              afterbegin(primer hijo)
 *              beforeend(ultimo hijo)
 *              afterend(hermano siguiente)*
 *
 */

// Insertamos la nueva tarjeta antes de la section cards
// $sectionCards.insertAdjacentElement("beforebegin", $newCard);

// Insertamos la nueva tarjeta despues de la section cards
//   $sectionCards.insertAdjacentElement("afterend", $newCard);

// Insertamos la nueva tarjeta como primer hijo de la section cards
// $sectionCards.insertAdjacentElement("afterbegin", $newCard);

// Insertamos la nueva tarjeta como último hijo de la section cards
// $sectionCards.insertAdjacentElement("beforeend", $newCard);

// Creamos una nueva tarjeta.
const $newCard2 = document.createElement("figure");
// Agregamos la clase card a la lista de clases de la nueva tarjeta.
$newCard2.classList.add("card");

// Insertamos la nueva tarjeta despues del section cards
// $sectionCards.insertAdjacentElement("afterend", $newCard2);

// Insertamos la etiqueta img como primer hijo de la tarjeta2
$newCard2.insertAdjacentHTML(
  "afterbegin",
  '<img src="https://placeimg.com/200/200/any" alt="Imagen any" />'
);

// Insertamos la etiqueta figcaption como último hijo de la tarjeta 2 (sin contenido)
$newCard2.insertAdjacentHTML("beforeend", "<figcaption></figcaption>");

// Obtenemos una referencia al figcaption y le insertamos texto.
$newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

//-------------------------------------------------------------------------------
// Estos métodos admiten cadenas

// Primer hijo
// $sectionCards.prepend($newCard);

// Hermano anterior
// $sectionCards.before($newCard);

// Hermano posterior
// $sectionCards.after($newCard);

// Ultimo hijo
$sectionCards.append($newCard);

// Estos métodos ademas de nodos pueden manejar textos
$newCard.querySelector("figcaption").prepend("Hola");
