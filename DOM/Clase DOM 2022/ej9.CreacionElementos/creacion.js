/**
 *  DOM Creación de Elementos
 *
 *  -Creación dinámica de elementos-
 *
 */

// Vamos a crear una nueva card
// Para crear en memoria un nodo elemento utilizamos
// el método document.createElement() que recibe una cadena con el
// nombre de la etiqueta.
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");

// Podemos crear un nodo texto para las etiquetas que tienen contenido
// textual con el método document.createTextNode() que recibe una cadena
// con el texto que contiene la etiqueta
const $nodoTexto = document.createTextNode("Any");

// Hay que agregar el nodo texto a la etiqueta $figcaption
$figcaption.appendChild($nodoTexto);
// $figcaption.textContent = "Any";

// Configuro la imagen
$img.setAttribute("src", "https://placeimg.com/200/200/any");
$img.setAttribute("alt", "imagen any");

// $img.src = "https://placeimg.com/200/200/any";
// $img.alt = "imagen any";

// Agrego la imagen al elemento figure
$figure.appendChild($img);

// Agrego el figcaption al elemento figure
$figure.appendChild($figcaption);

// Agrego la clase card al nodo figure
$figure.classList.add("card");

// Agrego la nueva card al section cards
const $sectionCards = document.querySelector(".cards");
$sectionCards.appendChild($figure);

// Creo otro nodo figure
const $figure2 = document.createElement("figure");

// Le agrego contenido con innerHTML
$figure2.innerHTML = `
<img src='https://placeimg.com/200/200/animals' alt='imagen animal' />
<figcaption>Animal</figcaption>
`;
// Agrego la clase card al nodo figure
$figure2.classList.add("card");

// Agrego la nueva card al section cards
$sectionCards.appendChild($figure2);

//----------------------------------------------------------------------------
const frutas = ["Pomelo", "Manzana", "Banana", "Melon", "Naranja"];

// Creo un nodo ul
const $lista = document.createElement("ul");
// Para cada elemento del array frutas creo un nodo li y le agrego como
// contenido la cadena que representa una fruta
frutas.forEach((fruta) => {
  const $li = document.createElement("li");
  const texto = document.createTextNode(fruta);
  $li.appendChild(texto);
  // Agrego el noto texto a la lista
  $lista.appendChild($li);
});

// Escribo al final del body un titulo para la lista
document.write("<h2>Lista de Frutas</h2>");
// Agrego el nodo lista como un nodo hijo al final del body
document.body.appendChild($lista);

//-----------------------------------------------------------------------------
const mascotas = ["Perro", "Gato", "Reptil", "Pez", "Roedor"];

// Creo un nodo ul
const $listaMascotas = document.createElement("ul");

// Escribo al final del body un titulo para la lista
document.write("<h2>Lista de Mascotas</h2>");
// Agrego el nodo lista como un nodo hijo al final del body
document.body.appendChild($listaMascotas);

// Inicializo la propiedad innerHTML como cadena vacia
$listaMascotas.innerHTML = "";

// Por cada mascota del array creo un template string con la mascota
// y lo voy concatenando en la propiedad innerHTML
mascotas.forEach((mascota) => {
  $listaMascotas.innerHTML += `<li>${mascota}</li>`;
});

// Notar que en el ejemplo anterior primero agregamos la ul al body y despues
// hicimos las inserciones esto ocasiona un renderizado por cada li que agregamos.
// Si tuvieramos muchos elementos que renderizar es un problema de rendimiento.
// En esta situaciones podemos utilizar un fragmento que es un tipo de nodo.

const nombres = [
  "Urban",
  "Jaquelin",
  "Hugo",
  "Daffy",
  "Nance",
  "Diane",
  "Robin",
  "Billye",
  "Issi",
  "Clevie",
  "Lind",
  "Evy",
  "Ravi",
  "Nadeen",
  "Eveline",
  "Indira",
  "Laraine",
  "Elwood",
  "Pierson",
  "Claudius",
  "Chandler",
  "Flori",
  "Pennie",
  "Xavier",
  "Derward",
];

// Escribo al final del body un titulo para la lista
document.write("<h2>Lista de Nombres</h2>");

// Creo una nueva ul
const $listaNombres = document.createElement("ul");

// Agrego la lista al body
document.body.appendChild($listaNombres);

// Creo un nodo de tipo document fragment
const fragmento = document.createDocumentFragment();

nombres.forEach((nombre) => {
  const $li = document.createElement("li");
  const texto = document.createTextNode(nombre);
  $li.appendChild(texto);
  // Agrego el noto texto a la lista
  $listaNombres.appendChild($li);
});

// agrego el fragmento a la lista de nombres
$listaNombres.appendChild(fragmento);

