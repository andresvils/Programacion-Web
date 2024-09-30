/*
Propagación de eventos en JavaScript:
1. **Bubbling (Burbujeo)**: El evento se propaga desde el elemento que lo disparó hacia sus ancestros, subiendo por el DOM.
   Ejemplo: Si haces clic en un botón dentro de un div, el evento primero se dispara en el botón y luego "burbujea" hacia el div y otros elementos.

2. **Capturing (Captura)**: El evento se propaga desde los ancestros hacia el elemento que lo disparó, bajando por el DOM.
   Ejemplo: El evento pasa por los elementos padre antes de llegar al elemento objetivo.

Prioridad de eventos:
- **`addEventListener` con `useCapture`**: Si se pasa `true` como tercer argumento de `addEventListener`, el evento se manejará en la fase de captura (antes que la fase de burbujeo).
- **`stopPropagation`**: Detiene la propagación del evento, evitando que siga burbujeando o capturando.
- **`stopImmediatePropagation`**: Detiene la propagación y también previene otros listeners del mismo evento en el mismo elemento.
*/

const button = document.querySelector('.button')

const contenedor1 = document.querySelector(".contenedor-1")
const contenedor2 = document.querySelector(".contenedor-2")

contenedor1.addEventListener('click',(e)=>{
    alert("di click en un rojo")
},true)//si se coloca true la prioridad empieza desde este a la cola normal y si hay otro tue van de orden de arriba hacia abajo
contenedor2.addEventListener('click',(e)=>{
    alert("di click en un azul")
})
button.addEventListener('click',(e)=>{
    alert("di click en un boton")
    e.stopPropagation()
})
