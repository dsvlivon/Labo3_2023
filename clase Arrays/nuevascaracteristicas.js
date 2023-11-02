// parametros REST
function sumar(a, b, ...c) {
  let suma = a + b;
  c.forEach((el) => (suma += el));
  return suma;
}

console.log(sumar(3, 2));
// 5
console.log(sumar(3, 2, 4, 3, 6));
// 18

// Spread Operator
const vec = [4, 3, 6, 7];
const vec2 = [21, 43];
console.log(vec);
// [4, 3, 6, 7]
console.log(vec2);
// [21, 43]

const vec3 = [vec, vec2];
console.log(vec3);
// [[4, 3, 6, 7],[21, 43]]

const vec4 = [...vec, ...vec2];
console.log(vec4);
// [4, 3, 6, 7, 21, 43]
