/*
Eventos de ratón en JavaScript:
1. **`click`**: Ocurre cuando el usuario hace clic en un elemento (generalmente botón izquierdo del ratón).
2. **`dblclick`**: Se dispara cuando el usuario hace doble clic sobre un elemento.
3. **`mousedown`**: Se dispara cuando el botón del ratón es presionado sobre un elemento.
4. **`mouseup`**: Ocurre cuando el botón del ratón es soltado después de un `mousedown`.
5. **`mousemove`**: Se dispara cuando el ratón se mueve dentro de un elemento.
6. **`mouseenter` y `mouseleave`**: Ocurren cuando el ratón entra o sale de un elemento sin afectar a los hijos.
7. **`mouseover` y `mouseout`**: Similar a `mouseenter` y `mouseleave`, pero se disparan también cuando el ratón se mueve sobre los elementos hijos.
*/

const button = document.querySelector('.button')

const contenedor1 = document.querySelector(".contenedor-1")
const contenedor2 = document.querySelector(".contenedor-2")

contenedor1.addEventListener('mouseup',(e)=>{
    alert("rojo")
},true)//si se coloca true la prioridad empieza desde este a la cola normal y si hay otro tue van de orden de arriba hacia abajo
contenedor2.addEventListener('mouseleave',(e)=>{
    alert("azul")
})
button.addEventListener('mouseenter',(e)=>{
    alert("di click en un boton")
    e.stopPropagation()
})
