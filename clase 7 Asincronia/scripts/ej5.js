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
    return new Promise((resolve, reject) => {
        let x;
        setTimeout(()=>{
            try {
                if(typeof a === "number"){
                    x = a*a;
                    console.log(`cuadrado:  ${x}`);
                    resolve(x);
                } else { throw Error("Parametros invalidos"); }
                    
            } catch (error) {
                reject(error.message)
                //console.error(error.message)
            }
        }, 300);
    })

}

function multiplicar(a,b){
    console.log("multiplicar");
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
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

function informar(res){
    console.log(`el res es ${res}`);
}

function callback(value){
    return value;
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
async function calcularAsycn(a, b){
    try {
        let suma = await sumar(a,b);
        let cuad = await cuadrado(suma);
        let prod = await multiplicar(cuad, 10);
        let res =  await restar(prod, 2);
        informar(res);
    } catch (error) {
        console.log(error);
    }   
}
calcularAsycn(4,7)
console.log("fin");


//los undefined es xq el return pretende devolver un valor no definido y su tipo tmp esta definido
//Los procesos son bloqueantes y hasta que no termine la ejecucuion de todas las instrucciones, el sistma permanece bloqueado
