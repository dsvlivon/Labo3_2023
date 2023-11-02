/*
  sumar 4 y 7
  cuadrado 
  multiplicarlo por 10 
  restarle 2
  mostrarlo en consola
  
*/
function sumar(a, b) {
  let suma;
  suma = a + b;
  console.log(`La suma es ${suma}`);
  return suma;
}
function cuadrado(a) {
  let cuad;
  cuad = a * a;
  console.log(`El cuadrado es ${cuad}`);
  return cuad;
}

function multiplicar(a, b) {
  let prod;
  prod = a * b;
  console.log(`El producto es ${prod}`);
  return prod;
}

function restar(a, b) {
  let resta;
  resta = a - b;
  console.log(`La resta es ${resta}`);
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
