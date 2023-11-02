export default class Propiedad{  
    constructor(id, titulo, transaccion, descripcion, precio, baños, autos, dormitorios
    ){
        this.id = id;
        this.titulo = titulo;//string
        this.transaccion = transaccion;//"venta/alquiler"
        this.descripcion = descripcion;//string
        this.precio = precio;//float
        this.baños = baños;//num
        this.autos = dormitorios;//num
        this.dormitorios = dormitorios;//num
    }

    
    set Precio(value) {
        this.precio = value;
    }

    get Precio() {
        return this.precio;
    }

    set Transaccion(value) {
        if(value == "alquiler" || value == "venta"){
            this.transaccion = value;
        }
    }

    get Transaccion() {
        return this.transaccion;
    }

    static leerLocalStorage() {
        if (localStorage.getItem("propiedades")) {
            const propiedades = JSON.parse(localStorage.getItem("propiedades"));
            console.log("Se cargaron las propiedades:");
            console.log(propiedades);
            return propiedades;
        } else {
            console.log("No hay entradas en el almacenamiento local.");
            return [];
        }
    }
}