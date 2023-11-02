/**
 *  Atributos
 *
 *  Una vez seleccionado un elemento podemos acceder a sus atributos (para leer o escribir)
 *  de dos maneras:*
 *
 */
// Notación de punto (.)
console.log(document.documentElement.lang);

// A traves del método getAttribute (recibe el nombre del atributo o propiedad)
console.log(document.documentElement.getAttribute("lang"));

// Para modificar el atributo de un elemento podemos usan notación de punto
let documento = document.documentElement;

documento.lang = "fr";
console.log(documento.lang);

// o con el método .setAttribute(nombreAtributo, valor)
documento.setAttribute("lang", "en");
console.log(documento.lang);

// Es una buna práctica comenzar con $ el nombre de las referencias a los elementos
// de la interfaz
const $link = documento.querySelector(".link");
$link.setAttribute("target", "_blank");

// Disponemos de un método que nos dice si un elemento tiene un atributo en particular
// elemento.hasAttribute(nombre atributo) nos devuelve un booleano
console.log($link.hasAttribute("target"));

// Podemos eliminar un atributo con el método removeAttribute
// elemento.removeAttribute(nombre atributo)
$link.removeAttribute("target");
console.log($link.hasAttribute("target"));

//------------------------------------------------------------------------------------
// Data-Attributes
// A partir de HTML5 podemos personalizar los atributos de un elemento
// Para eso debemos anteponer al nombre del atributo el prefijo data-
//
// se puede recuperar el valor de un data-attribute con el método getAttribute
console.log($link.getAttribute("data-description"));  

// o mediante notación de punto (los data-attributes se guardan en un objeto dataset del elemento)
console.log($link.dataset.description);

// se puede modificar el dataAttribute de la misma manera a traves del dataset o con setAttribute
//$link.setAttribute("data-id", 1234);
$link.dataset.id = 1122;

