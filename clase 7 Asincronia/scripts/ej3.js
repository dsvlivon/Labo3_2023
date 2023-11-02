

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

//MODO ASINCRONO - callbacks


function sumar(a,b, callback){//callback es una funcion
    let x;
    setTimeout(()=>{
        try {
            if(typeof a === "number" && typeof b === "number"){
                x = a+b;
                console.log(`suma:  ${x}`);
                callback(x);
            } else { throw Error("Parametros invalidos")}
                
        } catch (error) {
            console.error(error.message)
        }
    }, 2000);
}
function cuadrado(a, callback){
    let x;
    setTimeout(()=>{
        try {
            if(typeof a === "number" ){
            x = a*a;
            console.log(`cuadrado:  ${x}`);
            callback(x);
        }
            else { throw Error("Parametros invalidos")}
                
        } catch (error) {
            console.error(error.message)
        }
    }, 1500);
}

function multiplicar(a,b, callback){
    let x;
    setTimeout(()=>{
        try {
            if(typeof a === "number" && typeof b === "number"){
        x = a*b;
        console.log(`multiplicacion:  ${x}`);
        callback(x);
    } else { throw Error("Parametros invalidos")}
                
} catch (error) {
    console.error(error.message)
}
    }, 2000);
}

function restar(a,b, callback){
    let x;
    setTimeout(()=>{
        try {
            if(typeof a === "number" && typeof b === "number"){
                x = a-b;
                console.log(`resta:  ${x}`);
                callback(x);    
            } else { throw Error("Parametros invalidos")}
                
        } catch (error) {
            console.error(error.message)
        }
    }, 1500);
}

console.log("inicio");

function callback(value){
    return value;
}

sumar(4,7, (sum) => {
    cuadrado(sum, (cuad) => {
        multiplicar(cuad, 10, (prod) => {
            restar(prod, 2, (res)=>{
                informar(res)
            });
        });
    });
});
/*
suma 4 y 7 
cuadrado
multi x 10
restele 2
mostrarlo en consola
*/

console.log("fin");

function informar(res){
    console.log(`el res es ${res}`);
}

//los undefined es xq el return pretende devolver un valor no definido y su tipo tmp esta definido
//Los procesos son bloqueantes y hasta que no termine la ejecucuion de todas las instrucciones, el sistma permanece bloqueado
