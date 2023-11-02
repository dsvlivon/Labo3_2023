export default class Monstruo{  
    constructor(id, nombre, alterEgo, defensa, miedo, tipo) {
        this.id = id;
        this.nombre = nombre;//string
        this.alterEgo = alterEgo;//"string"
        this.defensa = this.defensa;//string (chbox) 
        this.miedo = miedo;//num
        this.tipo = tipo;//string (enum)
        this.picture = null;
    }

    //id, nombre, alterEgo, defensa, miedo, tipo
    //defensa: pocion, cuchillo, plata, estaca) 
    //tipo: vampiro, hombre lobo, fantasma, bruja, esqueleto, zombie

    set Picture(value) {
        this.picture = value;//validar
    }

    get Picture() {
        return this.picture;
    }
    
    set Miedo(value) {
        this.miedo = value;//validar
    }

    get Miedo() {
        return this.miedo;
    }

    set Tipo(value) {
        this.tipo = value; //validar        
    }

    get Tipo() {
        return this.tipo;
    }

    set Defensa(value) {
        this.defensa = value; //validar        
    }

    get Defensa() {
        return this.defensa;
    }    
}