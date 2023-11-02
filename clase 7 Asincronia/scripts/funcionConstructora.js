function Persona(nombre, edad, genero){
    let obj = {};
    obj.edad = edad;
    obj.nombre = nombre;
    obj.genero =genero;

    obj.saludar = function () {
        console.log("holaaaaaaa");
    }

    obj.presentarse = function () 
    {
        //console.log("hola soy " + {this.nombre} +" y tengo "${this.edad});
        console.log("holis estoy re loco!!!");
    }

    return obj
}

const per1 = Persona("juan", 30, "m")
const per2 = Persona("lucia", 40, "f")


//console.log(per1)

//per1.saludar();
//per2.presentarse();
//hasta aca es la forma vieja... no se usa




function Personax(nombre, edad, genero){
    
    this.edad = edad;
    this.nombre = nombre;
    this.genero =genero;

    this.saludar = function () {
        console.log("holaxxxxx");
    }

    this.presentarse = function () 
    {
        console.log(`hola soy ${this.nombre} y tengo ${this.edad}`);
        console.log("holis estoy re locoxxxx");
        console.log(this);
    }
}

const x1= new Personax("coco", 30, "m")
const x2 = new Personax("lila", 40, "f")

x1.saludar();
x2.presentarse();
