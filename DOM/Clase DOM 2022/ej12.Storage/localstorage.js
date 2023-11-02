/**
 *  API Storage
 *
 * La interfaz Storage de la API de almacenamiento web provee acceso al almacenamiento
 * de la sesión o al almacenamiento local para un dominio en particular, permitiendo
 * por ejemplo añadir, modificar o eliminar elementos de dato almacenados.
 * Si deseamos manipular el almacenamiento de sesión para un dominio, debemos llamar al
 * método Window.sessionStorage; Si deseamos manipular el almacenamiento local para un
 * dominio, debemos llamar a Window.localStorage.
 *
 *
 */

console.log(localStorage);

// Para obtener una variable del localstorage usamos:
// let variable = localStorage.getItem("nombreVariable");
// retorna null si no existe o el valor como string

// Para agregar una variable en el localStorage usamos:
// localStorage.setItem("nombreVariable", "valor"); // valor es string

// Para eliminar una variable del localStorage usamos:
// localStorage.removeItem("nombreVariable");

// Para limpiar todo el localStorage usamos:
// localStorage.clear();

const frutas = [];

if (localStorage.getItem("frutas")) {
  JSON.parse(localStorage.getItem("frutas")).forEach((element) => {
    frutas.push(element);
  });
} else {
  localStorage.setItem("frutas", JSON.stringify(frutas));
}

window.addEventListener("load", () => {
  document.getElementById("btnGuardar").addEventListener("click", () => {
    let fruta = document.getElementsByName("fruta")[0].value;

    if (fruta) {
      frutas.push(fruta);

      localStorage.setItem("frutas",JSON.stringify(frutas));
    }
  });
});
