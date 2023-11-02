const bum = "Cuando sienta el boom"+"\n"+"De este perreo intenso"+"\n"+"Túmbame el guille y calma"+"\n"+"Que estas en falda y se te ve to"+"\n"+"Flaqueaste, mi combo te ligo..."
function saludar()
{
    alert('holis');
    
}

function Siiiii()
{
    console.log("que vida de mierdaaaaaaa!")
}

//aca empezo el quilombooooo

function elBoom(msg)
{
    console.log(bum + msg)
}

//elBoom(" directo dsd elBoom")



//function culi(pepe){ pepe = elBoom(" asignando pepe") }

//culi(elBoom(" dsd culi"))


//culi(function(){ console.log(bum + " definiendo una fun adentro"); });


var krustyball = function(){ console.log("Krustyball: \n"+ bum + " aca va c una fun anonima"); }

//krustyball();



//un bloque d codigo genera scope y todo lo q esta adentro vive mientras se este ejecutando
//NO USAR VAR
//USAR LET
//usamos let p scope locales y para cosas q van a cambiar
//usamos const p scope global y cosas q NO van a cambiar (referencias, direcciones, etc)
//cuando usemos arrays y otros obj conviene usar const


//ejemplos de arrowfun y lambda
function sumar(a,b){
    return a+b;
}
let sumart = function(a,b){ return a + b; }

let sumarx =a=> a+ 2;


//setTimeOut
function livi(){
    setTimeout(krustyball, 3000);
    //el setTime... es no bloqueante
}

console.log("inicio....");
livi();
console.log("...final?");

//forma directa
//document.getElementById("mybtnX").addEventListener("click", livi);

//esta el evento load (se lanza cuando estan todos los recursos cargados)
//y esta el evento DOMContentLoad (se lanza el evento cuando se renderizo la pagina, estan todos los nodos, pero faltan los multimedia)

//conviene obtener los selectores q vamos a usar una vez q se crearon los nodos, no los recursos multimedia

//para registrar en el objeto window un manejador de eventos, c la modalidad metodo uso addEventListener

function holis(){ 
    console.log("holis"); 
}

function culi(){ 
    console.log("culiiiiiiiiiiiiii"); 
}

window.addEventListener("DOMContentLoad", () => {
    document.getElementById("mybtn2").addEventListener("click", culi),
    cargarManejadores
}); //todo lo q se declara dentro de ese metodo se ejecuta d forma asincronica xq el add es asincronico

function cargarManejadores(){
    document.getElementById("mybtn3").addEventListener("click", holis);
    document.getElementById("mybtnX").addEventListener("click", livi);
}

//selectores: para identificar elementos dentro de una tabla
//desde el lado del css los selectores de etiqueta y clase. sino por id