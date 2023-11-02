/*
  sumar 4 y 7
  cuadrado 
  multiplicarlo por 10 
  restarle 2
  mostrarlo en consola
  
*/
function sumar(a, b) {
  let suma;
  setTimeout(() => {
    suma = a + b;
    console.log(`La suma es ${suma}`);
  }, 2000);
  return suma;
}
function cuadrado(a) {
  let cuad;
  setTimeout(() => {
    cuad = a * a;
    console.log(`El cuadrado es ${cuad}`);
  }, 1500);
  return cuad;
}

function multiplicar(a, b) {
  let prod;
  setTimeout(() => {
    prod = a * b;
    console.log(`El producto es ${prod}`);
  }, 1000);
  return prod;
}

function restar(a, b) {
  let resta;
  setTimeout(() => {
    resta = a - b;
    console.log(`La resta es ${resta}`);
  }, 2000);
  return resta;
}

function informar(resultado) {
  console.log(`El resultado es ${resultado}`);
}

console.log("Inicio");

let suma = sumar(4, 7);
let cuad = cuadrado(suma);
let prod = multiplicar(cuad, 10);
let resta = restar(prod, 2);
informar(resta);

console.log("Fin");
