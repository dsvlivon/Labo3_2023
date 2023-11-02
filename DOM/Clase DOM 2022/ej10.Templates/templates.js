/**
 *  DOM Templates
 *
 *
 */

const dataCards = [
  {
    titulo: "Naturaleza",
    src: "https://placeimg.com/200/200/nature",
  },
  {
    titulo: "Tecnologia",
    src: "https://placeimg.com/200/200/tech",
  },
  {
    titulo: "Personas",
    src: "https://placeimg.com/200/200/people",
  },
  {
    titulo: "Arquitectura",
    src: "https://placeimg.com/200/200/arch",
  },
  {
    titulo: "Animales",
    src: "https://placeimg.com/200/200/animals",
  },
];

const $sectionCards = document.querySelector(".cards");

const $template = document.getElementById("template-card").content;

const fragment = document.createDocumentFragment();

// console.log($template);

dataCards.forEach((el) => {
  // Importamos el template del html con el método importNode
  // que recibe el nodo a importar y un booleano que indica
  // que tambien hay que importar las etiquetas interiores
  let $plantilla = document.importNode($template, true);

  $plantilla.querySelector("img").setAttribute("src", el.src);
  $plantilla.querySelector("img").setAttribute("alt", el.titulo);
  $plantilla.querySelector("figcaption").textContent = el.titulo;

  fragment.appendChild($plantilla);
});

$sectionCards.appendChild(fragment);
