/*
  sumar 4 y 7
  cuadrado 
  multiplicarlo por 10 
  restarle 2
  mostrarlo en consola
  
*/
// resuelvo la asincronia con funciones asincronas
function sumar(a, b) {
  return new Promise((resolve, reject) => {
    let suma;
    setTimeout(() => {
      try {
        if (typeof a === "number" && typeof b === "number") {
          suma = a + b;
          console.log(`La suma es ${suma}`);
          resolve(suma);
        } else {
          throw Error("Parametros invalidos para la suma");
        }
      } catch (error) {
        reject(error.message);
      }
    }, 2000);
  });
}
function cuadrado(a, callback) {
  return new Promise((resolve, reject) => {
    let cuad;
    setTimeout(() => {
      if (typeof a === "number") {
        cuad = a * a;
        console.log(`El cuadrado es ${cuad}`);
        resolve(cuad);
      } else {
        reject("Parametro invalido para el cuadrado");
      }
    }, 1500);
  });
}

function multiplicar(a, b) {
  return new Promise((resolve, reject) => {
    let prod;
    setTimeout(() => {
      try {
        if (typeof a === "number" && typeof b === "number") {
          prod = a * b;
          console.log(`El producto es ${prod}`);
          resolve(prod);
        } else {
          throw Error("Parametros invalidos para el producto");
        }
      } catch (error) {
        reject(error.message);
      }
    }, 1000);
  });
}

function restar(a, b) {
  return new Promise((resolve, reject) => {
    let resta;
    setTimeout(() => {
      try {
        if (typeof a === "number" && typeof b === "number") {
          resta = a - b;
          console.log(`La resta es ${resta}`);
          resolve(resta);
        } else {
          throw Error("Parametros invalidos para la resta");
        }
      } catch (error) {
        reject(error.message);
      }
    }, 2000);
  });
}

function informar(resultado) {
  console.log(`El resultado es ${resultado}`);
}

function calcular(a, b) {
  sumar(4, 7)
    .then((suma) => cuadrado(suma))
    .then((cuad) => multiplicar(cuad, 10))
    .then((prod) => restar(prod, 2))
    .then((resta) => informar(resta))
    .catch((err) => console.log(err));
}

const calcularAsync = async (a, b) => {
  try {
    let suma = await sumar(a, b);
    let cuad = await cuadrado(suma);
    let prod = await multiplicar(cuad, 10);
    let resta = await restar(prod, 2);
    informar(resta);
  } catch (err) {
    console.log(err);
  }
};

console.log("Inicio");

calcularAsync(4, 7);

console.log("Fin");
