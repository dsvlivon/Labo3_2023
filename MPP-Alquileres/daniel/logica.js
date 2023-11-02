import Propiedad from './Propiedad.js';

const transaccion = ["alquiler", "compra"];
let propiedades = []; // Define la propiedad en el contexto global
let vivienda = null;
let tabla = null;
let spinner = null;

function cargarManejadores(){
    tabla = crearTablaDesdeJSON(propiedades);
    document.getElementById('tabla').appendChild(tabla);
   

    tabla.addEventListener('click', function(e) {
        if (e.target.tagName === 'TD') {
            const fila = e.target.parentElement;
            const id = parseInt(fila.getAttribute("data-id"), 10);
            const celdas = fila.getElementsByTagName('td');
    
            if (celdas.length >= 6) {
                const titulo = celdas[0].textContent; // titulo
                const transacción = celdas[1].textContent; // transacción
                const descripción = celdas[2].textContent; // descripción
                const precio = parseFloat(celdas[3].textContent); // precio
                const baños = parseInt(celdas[4].textContent, 10); // baños
                const autos = parseInt(celdas[5].textContent, 10); // autos
                const dormitorios = parseInt(celdas[6].textContent, 10); // dormitorios
                
                const vivienda = new Propiedad(id, titulo, transacción, descripción, precio, baños, autos, dormitorios);
    
                cargarDatosEnFormulario(vivienda);
            } else {
                console.log('La fila seleccionada no contiene suficientes celdas.');
            }
        }
    });

    document.getElementById("btnGuardar").addEventListener("click", ()=>{
        if(vivienda != null) {
          guardarDatosDelFormularioEnMiObjeto();
          actualizarDatosDelFormulario();
          limpiarFormulario();
        } else {
            altaPropiedad();
        }
    });

    document.getElementById("btnEliminar").addEventListener("click", ()=>{
        if(vivienda != null) {
          guardarDatosDelFormularioEnMiObjeto();
          eliminarDatosDelFormulario();
        }
    });
    
    document.getElementById("btnCancelar").addEventListener("click", ()=>{
        propiedades = JSON.parse(localStorage.getItem("propiedades"));
        actualizarFilas();
    });
    
    document.getElementById("btnGuardarLista").addEventListener("click", ()=>{
        localStorage.setItem("propiedades",JSON.stringify(propiedades));
    });
}
// #region TABLA y STORAGE
function cagarLocalStorage(){   
    let prop1 = { id: 100, titulo: "Casa Blanca", transaccion: "alquiler", descripcion: "Se alquila la casa blanca para eventos. maximo 200 personas", precio: 100000, baños: 30, autos: 12, dormitorios: 250} 
    let prop2 = { id: 101, titulo: "Casa Rosada", transaccion: "alquiler", descripcion: "Se alquila la casa rosada para eventos. maximo 100 personas", precio: 75000, baños: 20, autos: 8, dormitorios: 150} 
    let prop3 = { id: 102, titulo: "Teatro Gran Rex", transaccion: "compra", descripcion: "Se vende el teatro Gran Rex. Unico dueño", precio: 200000, baños: 10, autos: 30, dormitorios: 12} 
    const props = [prop1, prop2, prop3]
    
    localStorage.setItem("propiedades", JSON.stringify(props));
    console.log("Se cargaron los elementos inciales");    
}

function crearTablaDesdeJSON(data) {
    if (data.length === 0) {
        console.log('No hay datos para mostrar.');
        return;
    }

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = thead.insertRow(0);

    for (const key in data[0]) {
        if(key!="id")  {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
    }
    table.appendChild(thead);
    table.appendChild(crearFilas(data,tbody));

    return table;
}

function crearFilas(data,tbody) {
    data.forEach(item => {
        const row = tbody.insertRow();
        for (const key in item)  {        
            if(key!="id")  {
                const cell = row.insertCell();
                cell.textContent = item[key];            
            }
        }
        row.setAttribute("data-id", item.id);
    });
    return tbody;
}

function actualizarFilas() {
    const tbody = tabla.querySelector('tbody');

    if (tbody) {
      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
    }
    tabla.appendChild(crearFilas(propiedades, tbody));
}
// #endregion

// #region FORMULARIO
function eliminarDatosDelFormulario() {
    let bandera = 0;
    if(vivienda!=null) { 
        for (const indice in propiedades)  {
            let propiedad = propiedades[indice];
            if (propiedad.id == vivienda.id) {
                propiedades.splice(indice, 1);
                bandera = 1;
                //localStorage.removeItem("nombreVariable"); //faltaria eliminar el elemento del localstorage
                break;
            }
        }
        if (bandera===1) {
            actualizarFilas();
            vivienda = null;
        } 
    }
}

function actualizarDatosDelFormulario() {
    let bandera = 0;
    if(vivienda!=null) { 
        for (const indice in propiedades) {
            let propiedad = propiedades[indice];
            if (propiedad.id == vivienda.id) {
                actualizarValores(propiedad,vivienda);
                bandera = 1;
                break;
            }
        }
        if (bandera===1) { 
            actualizarFilas();
        } 
    }
}

function actualizarValores(viviendaLista, vivienda) {
    viviendaLista.titulo = vivienda.titulo;
    viviendaLista.descripcion = vivienda.descripcion;
    viviendaLista.precio = vivienda.precio;
    viviendaLista.baños = vivienda.baños;
    viviendaLista.autos = vivienda.autos;
    viviendaLista.dormitorios = vivienda.dormitorios;
    viviendaLista.id = vivienda.id;
}

function guardarDatosDelFormularioEnMiObjeto() {
    vivienda.titulo = document.getElementById("txtTitulo").value;
    vivienda.descripcion = document.getElementById("txtDescripcion").value;
    vivienda.precio = document.getElementById("txtPrecio").value;
    vivienda.baños = document.getElementById("txtCantidadDeBaños").value;
    vivienda.autos = document.getElementById("txtCantidadDeAutos").value;
    vivienda.dormitorios = document.getElementById("txtCantidadDeDormitorios").value;    
}

function cargarDatosEnFormulario(viviendaData) {
    vivienda = viviendaData;
    document.getElementById("txtTitulo").value = viviendaData.titulo;
    document.getElementById("txtDescripcion").value = viviendaData.descripcion;
    document.getElementById("txtPrecio").value = viviendaData.precio;
    document.getElementById("txtCantidadDeBaños").value = viviendaData.baños;
    document.getElementById("txtCantidadDeAutos").value = viviendaData.autos;
    document.getElementById("txtCantidadDeDormitorios").value = viviendaData.dormitorios;
}

function altaPropiedad(){
    const titulo = document.getElementById("txtTitulo").value;
    const descripción = document.getElementById("txtDescripcion").value;
    const precio = document.getElementById("txtPrecio").value;
    const baños = document.getElementById("txtCantidadDeBaños").value;
    const autos = document.getElementById("txtCantidadDeAutos").value;
    const dormitorios = document.getElementById("txtCantidadDeDormitorios").value;
    const transa = document.getElementById("ventaCheck").checked ? "venta" : "alquiler";
        
    const nuevaProp = new Propiedad(generarIdUnico(), titulo, transa, descripción, precio, baños, autos, dormitorios);
    propiedades.push(nuevaProp);
    localStorage.setItem("propiedades",JSON.stringify(propiedades));
    actualizarFilas();
    limpiarFormulario();
}

function generarIdUnico() {
    let id = 1; // Comienza con el ID 1 o el valor que prefieras    
    const maxId = Math.max(...propiedades.map(propiedad => propiedad.id));
    
    while (propiedades.some(propiedad => propiedad.id === id)) {
        id = maxId + 1; // Incrementa el ID
        maxId = id; // Actualiza el valor máximo
    }
    return id; // Retorna el ID único
}

function limpiarFormulario(){
    document.getElementById("txtTitulo").value = "";
    document.getElementById("txtDescripcion").value = "";
    document.getElementById("txtPrecio").value = null;
    document.getElementById("txtCantidadDeBaños").value = null;
    document.getElementById("txtCantidadDeAutos").value = null;
    document.getElementById("txtCantidadDeDormitorios").value = null;
    vivienda = null;    
}
// #endregion

function onInit() {
    spinner = document.getElementById('spinner');
    spinner.style.display = 'block'; // Mostrar el spinner
    setTimeout(function () {
        spinner.style.display = 'none'; // Ocultar el spinner

        cagarLocalStorage();
        propiedades = Propiedad.leerLocalStorage();
        cargarManejadores();
    }, 2000); // 2000 milisegundos (2 segundos) 
}

// #region EJECUCION
onInit();
// #endregion