
function preguntarSigno(numero){
    return new Promise((resolve, reject) => {
        if(!isNaN(numero)){
           
        let res = "negativo"
        if(numero>=0){
            res = "positivo"
        }
        resolve(res);
    } else { reject("este valor no es un numero");
    }
})};

console.log("inicio")
//let promesa = preguntarSigno(43)
//promesa.then()
preguntarSigno("a").then((respuesta)=>{ console.log("resultado: "+respuesta)}
).catch(error => { console.log(error)});


console.log("fin")