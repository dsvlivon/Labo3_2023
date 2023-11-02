const modal1 = document.getElementsByTagName("dialog")[0]
const btnAbrir = document.getElementById("btnAbrir")
const btnAbrirFoto = document.getElementById("btnAbrirFoto")
const roma = document.getElementById("fotoRoma")
const cerrarFoto = document.getElementById("btnCerrar2")

document.getElementById("btnCerrar").addEventListener("click",
    //()=>document.getElementsByTagName("dialog")[0].close()
    ()=>modal1.close()
    //devuelvo un array y como solo hay uno trae ese
    //si quisiera guardarme la red al dialog seria c un const
)

btnAbrir.addEventListener("click", ()=>modal1.open="true")

btnAbrirFoto.addEventListener("click", ()=>roma.open="true")
btnCerrar2.addEventListener("click", ()=>roma.close())

document.forms[0].addEventListener("submit", (e)=>{
//e es un var d tipo evento p manejar el callback
    e.preventDefault()
    console.log("tu nombre es: ")
})