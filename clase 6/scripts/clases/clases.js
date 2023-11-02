class Animal{
    constructor(tipo, edad, sexo, patas = 2){
        this.tipo=tipo;
        this.edad=edad;
        this.sexo=sexo;
        this.patas=patas;
    }

    setPatas(value){this.patas = value;}//asi son las funciones
    getPatas(){return this.patas;}

    set Patas(value){this.patas = value;}//asi son las propiedades
    get Patas(){return this.patas;}

    sonar(sonido){
        console.log("hago " + sonido);
    }

    presentarse(){
        console.log("asdasdasdasdasdasd");
        console.log(this.Patas);
    }

    presentarse2 = ()=>{
        //return "el otro presentarse dsd una arrow"+ "edad:" +this.edad;
        //aca si funciona el this
        return "asd";
    }

    static vivo=false;
}


class Mascota extends Animal{
    constructor(tipo, edad, sexo, patas, nombre, vacuna=false){
        super(tipo, edad, sexo, patas);
        this.nombre=nombre;
        this.vacuna=vacuna
    }
}

let a1 = new Animal("perro", 12, "m", 8);
let mas = new Mascota("vaca",20, "m", 4, "aurora", true)

//a1.presentarse();
//a1.sonar("guau!");
//a1.presentarse2();

//console.log(a1.Patas)
//console.log(Animal.vivo)


//console.log(mas);
mas.presentarse();
mas.presentarse2();