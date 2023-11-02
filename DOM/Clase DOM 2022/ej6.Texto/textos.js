/**
 *  Textos
 *
 *
 */

// Obtengo una referencia al parrafo1
const $parrafo1 = document.getElementById("parrafo1");

// Declaramos una variable de tipo string
let texto = `
<p>
  Esto es un texto para probar las funciones que manipulan contenido textual en
  el <mark>API DOM</mark> 
</p>
<p>
  Existen funciones del standart y otras que fueron desarrolladas para un
  navegador en particular
</p>
`;

// innerText agrega contenido textual a un elemento. No forma parte del standart
// y fue desarrollada para Internet Explorer

// Insertamos el texto como contenido de parrafo1
$parrafo1.innerText = texto; // innerText no reconoce el etiquetado html y lo maneja como
// texto comun y corriente aunque podemos observar que detecta los saltos de linea

// Insertamos el texto como contenido de parrafo1 con un método que forma parte
// del standart textContent

$parrafo1.textContent = texto; // textContent no reconoce el etiquetado html y lo maneja como
// texto comun y corriente y tampoco detecta los saltos de linea

// Si queremos que se reconozcan las etiquetas debemos utilizar el método innerHTML
$parrafo1.innerHTML = texto;

// Podemos observar que el texto anterior inserto dos parrafos dentro del parrafo1
// esto no seria correcto, podemos usar el método outerHTML sobre parrafo1 para
// insertar en lugar de esa etiqueta(<p id="parrafo1">) los dos parrafos presentes en el texto.
$parrafo1.outerHTML = texto;
