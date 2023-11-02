//PROMESAS


function sumar(a,b){//callback es una funcion
    //RESOLVE ES EL CALLBACK Q LE PASAMOS AL TRT Y REJECT AL CATHC
    return new Promise((resolve, reject) => {
        let x;
        setTimeout(()=>{
            try {
                if(typeof a === "number" && typeof b === "number"){
                    x = a+b;
                    console.log(`suma:  ${x}`);
                    resolve(x);
                } else { throw Error("Parametros invalidos")}
                    
            } catch (error) {
                reject(error.message);
                //console.error(error.message)
            }
        }, 400);        
    })
}

function cuadrado(a){

    new Promise((resolve, reject) => {
        let x;
        setTimeout(()=>{
            try {
                if(typeof a === "number" ){
                x = a*a;
                console.log(`cuadrado:  ${x}`);
                resolve(x);
            }
                else { throw Error("Parametros invalidos")}
                    
            } catch (error) {
                reject(error.message)
                //console.error(error.message)
            }
        }, 300);
    })

}

function multiplicar(a,b){
    console.log("multiplicar");
    new Promise((resolve, reject) => {
        let x;
        setTimeout(()=>{
            try {
                if(typeof a === "number" && typeof b === "number"){
            x = a*b;
            console.log(`multiplicacion:  ${x}`);
            resolve(x);
        } else { throw Error("Parametros invalidos")}
                    
    } catch (error) {
        reject(error.message)
        //console.error(error.message)
    }
        }, 400);        
    })

}

function restar(a,b){
    new Promise((resolve, reject) => {
        let x;
    setTimeout(()=>{
        try {
            if(typeof a === "number" && typeof b === "number"){
                x = a-b;
                console.log(`resta:  ${x}`);
                resolve(x);    
            } else { throw Error("Parametros invalidos")}
                
        } catch (error) {
            reject(error.message)
        }
    }, 500);        
    })

}

console.log("inicio");

function callback(value){
    return value;
}
function informar(res){
    console.log(`el res es ${res}`);
}


/*sumar(4,7, (sum) => {
    cuadrado(sum, (cuad) => {
        multiplicar(cuad, 10, (prod) => {
            restar(prod, 2, (res)=>{
                informar(res)
            });
        });
    });
});*/

sumar(4,7)
    .then((suma) => cuadrado(suma))
    .then((cuad) => multiplicar(cuad, 10))
    .then((prod) => restar(prod, 2))
    .then((res) => console.log(res))
    .catch(e => console.log(e));

console.log("fin");


//los undefined es xq el return pretende devolver un valor no definido y su tipo tmp esta definido
//Los procesos son bloqueantes y hasta que no termine la ejecucuion de todas las instrucciones, el sistma permanece bloqueado
