import Propiedad from './Propiedad.js';
import Monstruo from './Monstruo.js';


let monstruox = []; 
let tipos = []; 
let vivienda = null;
let tabla = null;
let spinner = null;
let selectTipo = null

function cargarManejadores(){
    tabla = crearTablaDesdeJSON(monstruox);
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
    return new Promise((resolve, reject) => {
        selectTipo = document.getElementById("selTipo");
        let x;
        
        try {
            let types = { tipos: ["VAMPIRO", "HOMBRE LOBO", "FANTASMA", "BRUJA", "ESQUELETO", "ZOMBIE"] }
            localStorage.setItem("tipos", JSON.stringify(types));

            if (localStorage.getItem("tipos")) {
                tipos = JSON.parse(localStorage.getItem("tipos"));
                console.log("Se cargaron los tipos de monstruos");    
                console.log(tipos);
                resolve(x);
            } else { throw Error("Error en la carga y lectura del localStorage")}
                
        } catch (error) {
            reject(error.message);
            //console.error(error.message)
        }        
    })
}

function getMonstruos(){
    return new Promise((resolve, reject) => {
        let x;
        try {
            var res = new XMLHttpRequest();
            res.open('GET', 'http://localhost:3000/monstruos', true);
            
            res.onload = function () {
                if (res.status >= 200 && res.status < 300) {
                    var data = JSON.parse(res.responseText);
                    monstruox = mapearMonstruos(data);
                    //console.log("la lista monstruox se cargo: ");
                    //console.log(monstruox);
                    resolve(x);
                } else {
                    console.error('Error al cargar datos:', res.status, res.statusText);
                }
            };
            res.send();
        } catch (error) {
            reject(error.message);
            //console.error(error.message)
        }
    })
}

function mapearMonstruos(datos) {
    const monstruosMapeados = [];
  
    datos.forEach((monstruoData) => {
      const monstruo = new Monstruo(
        monstruoData.id,
        monstruoData.nombre,
        monstruoData.alterEgo,
        monstruoData.defensa,
        monstruoData.miedo,
        monstruoData.tipo
      );
  
      if (monstruoData.picture) {
        monstruo.Picture = monstruoData.picture;
      }      
      monstruosMapeados.push(monstruo);
    });      
    return monstruosMapeados;
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

function cargarSelectorTipo() {
    tipos.tipos.forEach(tipo => { // Access the array using tipos.tipos
        const option = document.createElement("option");
        option.value = tipo;
        option.text = tipo;
        selectTipo.appendChild(option);
    });
}

function spinnerManejador(flag) {
    spinner.style.display = flag ? 'block' : 'none';
  }

async function onInit() {
    try{
        cagarLocalStorage();
        cargarSelectorTipo();
        spinner = document.getElementById('spinner');
        spinnerManejador(true);        
        
        await getMonstruos();
        await spinnerManejador(false);
        await cargarManejadores();

    } catch (error) {
        console.log(error);
    }
}

// #region EJECUCION
onInit();
// #endregion