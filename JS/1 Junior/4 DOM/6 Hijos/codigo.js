
const contenedor = document.querySelector(".contenedor");
const hijos=contenedor.children; //devuelve los hijos del contenedor
const parrafo=document.createElement("P").textContent="Parrafo";
const h2_nuevo=document.createElement("H2")
h2_nuevo.textContent="Titulo Nuevo";

const h2_antiguo=document.querySelector(".h2");
const h4=document.querySelector("h4")

contenedor.replaceChild(h2_nuevo,h2_antiguo);
contenedor.removeChild(h4);

let respuesta=h4.parentNode;

let respuesta_1=h2_nuevo.nextElementSibling;

document.write(respuesta)

document.write(respuesta_1)
