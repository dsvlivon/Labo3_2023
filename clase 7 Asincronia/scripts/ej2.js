

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
    let x;
    setTimeout(()=>{
        x = a+b;
    });
    return x;   
}
function cuadrado(a){
    
    let x;
    setTimeout(()=>{
        x = a*a;
    });
    return x;   
}

function multiplicar(a,b){
    let x;
    setTimeout(()=>{
        x = a*b;
    });
    return x;  

}

function restar(a,b){
    
    let x;
    setTimeout(()=>{
        x = a-b;
    });
    return x;  
}

console.log("inicio");

let suma = sumar(4,7);
console.log(`suma:  ${suma}`);
let cuadrad = cuadrado(suma);
console.log(`cuadrado:  ${cuadrad}`);
let multi = multiplicar(cuadrad,10);
console.log(`multiplicacion:  ${multi}`);
let resta = restar(multi,2);
console.log(`resta:  ${resta}`);
informar(resta);
console.log("fin");

function informar(res){
    console.log(`el res es ${res}`);
}
//los undefined es xq el return pretende devolver un valor no definido y su tipo tmp esta definido
//Los procesos son bloqueantes y hasta que no termine la ejecucuion de todas las instrucciones, el sistma permanece bloqueado
