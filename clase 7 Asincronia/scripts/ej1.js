

//PROXIMA CLASE INSTALAR NODE 

//node no compila, es un interprete, ergo no hay .exe -> no hay ni un .DOM ni un scope windows global
//usa la extension code runner oara ejecutar el codigo en node


/*
suma 4 y 7 
cuadrado
multi x 10
restele 2
mostrarlo en consola
*/

//MODO SINCRONO
function    sumar(a,b){
    return a+b;
}
function cuadrado(a){
    return a*a;
}

function multiplicar(a,b){
    return a*b;
}

function restar(a,b){
    return a-b;
}

console.log("inicio");

let suma = sumar(4,7);
let cuadrad = cuadrado(suma);
let multi = multiplicar(cuadrad,10);
let resta = restar(multi,2);
informar(resta);
console.log("fin");

function informar(res){
    console.log(`el res es ${res}`);
}

//Los procesos son bloqueantes y hasta que no termine la ejecucuion de todas las instrucciones, el sistma permanece bloqueado