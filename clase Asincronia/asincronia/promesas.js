function preguntarSigno(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isNaN(numero)) {
        let respuesta = "Negativo";
        if (numero >= 0) {
          respuesta = "Positivo";
        }
        resolve(respuesta);
      } else {
        reject("Eso no es un numero");
      }
    }, 3000);
  });
}

console.log("Inicio");

preguntarSigno("s")
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("Fin");
