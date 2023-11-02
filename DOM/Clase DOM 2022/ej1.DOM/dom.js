/**
 *  API DOM Document Object Model
 * -------------------------------
 *
 * El DOM es un modelo de documento que se carga en el navegador web y que representa
 *  el documento como un árbol de nodos, en donde cada nodo representa una parte del
 *  documento (puede tratarse de un elemento, una cadena de texto o un comentario).
 *
 * El API DOM es una interfaz de programación que sirve para conectar un documento web
 * a un script o lenguaje de programación.
 *
 * En el comienzo, JavaScript y el DOM estaban herméticamente enlazados, pero después
 * se desarrollaron como entidades separadas. El contenido de la página es almacenado
 * en DOM y el acceso y la manipulación se hace vía JavaScript,
 * podría representarse aproximadamente así:
 *
 *         API(web o página XML) = DOM + JS(lenguaje de script)
 */

// el objeto document es el nodo raiz del arbol jerarquico DOM

// el objeto document está disponible dentro del objeto window
console.log(window.document);

// como los scripts se ejecutan en window no es necesario escribirlo
console.log(document);

// a traves de document podemos acceder a los nodos principales en el documento

// documento html completo
console.log(document.documentElement);

// tipo de documento
console.log(document.doctype);

// etiqueta head
console.log(document.head);

// etiqueta body
console.log(document.body);

// juego de caracteres (charset)
console.log(document.characterSet);

// titulo (title)
console.log(document.title);

// coleccion de enlaces del documento (a anchor)
// es un objeto HTMLCollection
console.log(document.links);

// HTMLCollection no es un array por lo tanto carece de los métodos de los array
// pero se pueden obtener los elementos a traves de su indice
// tiene propiedad length que indica la cantidad de elementos
console.log(document.links.item(0));
console.log(document.links[0]);

// colección de imagenes del documento (img)
console.log(document.images);

// colección de formularios del documento (form)
console.log(document.forms);

// colección de hojas de estilo del documento
console.log(document.styleSheets);

// colección de scripst de código
console.log(document.scripts);

// se puede escribir en el documento el método write acepta sintaxis html
document.write("<h2>Esto es una etiqueta h2</h2>");

