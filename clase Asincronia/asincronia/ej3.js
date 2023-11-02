/*
  sumar 4 y 7
  cuadrado 
  multiplicarlo por 10 
  restarle 2
  mostrarlo en consola
  
*/
// resuelvo la asincronia con callbacks
function sumar(a, b, callback) {
  let suma;
  setTimeout(() => {
    try {
      if (typeof a === "number" && typeof b === "number") {
        suma = a + b;
        console.log(`La suma es ${suma}`);
        callback(suma);
      } else {
        throw Error("Parametros invalidos para la suma");
      }
    } catch (error) {
      console.error(error.message);
    }
  }, 2000);
}
function cuadrado(a, callback) {
  let cuad;
  setTimeout(() => {
    try {
      if (typeof a === "number") {
        cuad = a * a;
        console.log(`El cuadrado es ${cuad}`);
        callback(cuad);
      } else {
        throw Error("Parametro invalido para el cuadrado");
      }
    } catch (error) {
      console.error(error.message);
    }
  }, 1500);
}

function multiplicar(a, b, callback) {
  let prod;
  setTimeout(() => {
    try {
      if (typeof a === "number" && typeof b === "number") {
        prod = a * b;
        console.log(`El producto es ${prod}`);
        callback(prod);
      } else {
        throw Error("Parametros invalidos para el producto");
      }
    } catch (error) {
      console.error(error.message);
    }
  }, 1000);
}

function restar(a, b, callback) {
  let resta;
  setTimeout(() => {
    try {
      if (typeof a === "number" && typeof b === "number") {
        resta = a - b;
        console.log(`La resta es ${resta}`);
        callback(resta);
      } else {
        throw Error("Parametros invalidos para la resta");
      }
    } catch (error) {
      console.error(error.message);
    }
  }, 2000);
}

function informar(resultado) {
  console.log(`El resultado es ${resultado}`);
}

console.log("Inicio");

sumar(4, 7, (suma) => {
  cuadrado(suma, (cuad) => {
    multiplicar(cuad, "10", (prod) => {
      restar(prod, 2, (resta) => {
        informar(resta);
      });
    });
  });
});

console.log("Fin");
