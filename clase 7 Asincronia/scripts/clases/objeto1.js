const obj1 = {};
const obj2 = new Object();
const obj3 = Object.create({});
const obj4 = new  Object(5);
const obj5 = new Object("holisssss");
const obj6 = 5;
const obj7 = new Object(true);

console.log(obj1);
console.log("type: "+typeof(obj1));
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj6);
console.log(obj7);
console.log("type: "+ typeof(obj7));
//console.log(obj1);
//console.log(obj1);
//console.log(obj1);
//console.log(obj1);
//console.log(obj1);

const objeto = {
    edad: 3, 
    vivo: true, 
    nombre: "nestor cramalotti", 
    sexo: "poco",
    clave: [1,2,4,9,1,2],
    otroObjeto: {},
    "23":[7,6,"algo"],
    "nombre": "el quique",
    direccion: ubicacion()
}

console.log(objeto.nombre);
console.log(objeto.clave[4]);
console.log(objeto.clave);
console.log(objeto["sexo"]);
console.log(objeto[23][2]);
console.log(objeto["nombre"]);
console.log(objeto.nombre); //lo pisa x mas q se definan d dist forma
