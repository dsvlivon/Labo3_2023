/**
 *  Estilos
 */

const $link = document.querySelector(".link");

// la propiedad style de un elemento es de tipo CSSStyleDeclaration
// es decir es un mapa donde aparecen todas las posibles propiedades de css
console.log($link.style);

// Notar que el nombre de una propiedad en JS se escribe en low camelCase ya que el - es el operador menos
console.log($link.style.backgroundColor);

// Se puede acceder al indice de tipo cadena de un mapa por su propiedad css
console.log($link.style["background-color"]);
console.log($link.style["color"]);

// tambien se puede usar el getAttribute
console.log($link.getAttribute("style"));

// Obtener los estilos por defecto que agrega el navegador
console.log(window.getComputedStyle($link));

// Establecer valores a los estilos

//$link.style.setProperty("text-decoration", "none");
$link.style.textDecoration = "none";

$link.style.display = "block";
$link.style.setProperty("text-align", "center");

// Variables CSS
const $html = document.documentElement;
const body = document.body;



