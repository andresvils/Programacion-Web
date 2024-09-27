// 1. window.innerWidth & window.innerHeight
// Obtener el ancho y alto de la ventana visible (viewport)
console.log("Ancho de la ventana: ", window.innerWidth);
console.log("Alto de la ventana: ", window.innerHeight);


// 2. window.scrollTo()
// Desplazar la página a una posición específica
function scrollToTop() {
    window.scrollTo(0, 0); // Desplaza al inicio de la página
}
scrollToTop();

// 3. window.scrollBy()
// Desplazar la página en relación con la posición actual
function scrollByPixels(pixels) {
    window.scrollBy(0, pixels); // Desplaza verticalmente por los píxeles dados
}
scrollByPixels(200); // Desplazar hacia abajo 200px

// 4. window.open()
// Abrir una nueva ventana o pestaña con una URL
function openNewTab(url) {
    window.open(url, '_blank'); // Abre en una nueva pestaña
}
openNewTab('https://www.example.com');

// 5. window.close()
// Cerrar la ventana actual (solo funciona si fue abierta con window.open)
function closeWindow() {
    window.close();
}

window.location.reload();

// 6. window.setTimeout()
// Ejecutar una función después de un tiempo determinado
function delayedAlert() {
    setTimeout(function() {
        alert("¡Hola después de 3 segundos!");
    }, 3000);
}
delayedAlert();

// 7. window.setInterval()
// Ejecutar una función repetidamente en intervalos de tiempo
let count = 0;
function countUp() {
    count++;
    console.log("Contador: ", count);
}
let intervalId = setInterval(countUp, 1000); // Incrementa cada 1 segundo

// 8. window.clearInterval()
// Detener una función que se está ejecutando repetidamente con setInterval
function stopCounting() {
    clearInterval(intervalId);
}
setTimeout(stopCounting, 5000); // Detener después de 5 segundos

// 9. window.location
// Obtener o cambiar la URL de la ventana actual
console.log("URL actual: ", window.location.href);

// Redirigir a otra URL
function redirectTo(url) {
    window.location.href = url;
}
redirectTo('https://www.example.com');

// 10. window.history
// Navegar entre las páginas del historial
function goBack() {
    window.history.back(); // Retrocede una página en el historial
}
goBack();

function goForward() {
    window.history.forward(); // Avanza una página en el historial
}
goForward();

localStorage.setItem('username', 'JohnDoe'); // Guardar en localStorage
let userName = localStorage.getItem('username'); // Obtener datos
console.log(userName);
localStorage.removeItem('username'); // Eliminar datos

window.alert("Este es un mensaje de alerta!");

const name = window.prompt("¿Cuál es tu nombre?");
if (name) {
    console.log("Hola, " + name + "!");
}

console.log("Nombre del navegador: ", window.navigator.appName);
console.log("Plataforma del navegador: ", window.navigator.platform);
console.log("Idioma del navegador: ", window.navigator.language);

console.log("Ancho de la pantalla: ", window.screen.width);
console.log("Alto de la pantalla: ", window.screen.height);
console.log("Profundidad de color de la pantalla: ", window.screen.colorDepth);

console.log("Desplazamiento horizontal: ", window.pageXOffset);
console.log("Desplazamiento vertical: ", window.pageYOffset);


// Guardar en localStorage
localStorage.setItem("usuario", "Juan");

// Obtener datos de localStorage
const usuario = localStorage.getItem("usuario");
console.log(usuario);

// Eliminar de localStorage
localStorage.removeItem("usuario");

// Guardar en sessionStorage
sessionStorage.setItem("estado", "activo");


window.onerror = function(message, source, lineno, colno, error) {
    console.error("Error capturado: ", message, " en línea ", lineno);
};

// Simular un error
nonExistentFunction(); // Esto lanzará un error


window.focus(); // Lleva el foco a la ventana actual
window.blur();  // Quita el foco de la ventana


// Devuelven el desplazamiento de el scroll en pixeles

console.log("Desplazamiento vertical actual: ", window.scrollY); // Por ejemplo: 150 px
console.log("Desplazamiento horizontal actual: ", window.scrollX); // Por ejemplo: 0 px

// Desplaza la ventana a las coordenadas (x, y)
window.scrollTo(0, 500); // Desplaza hacia abajo 500 píxeles

// Desplazamiento suave
window.scrollTo({
    top: 500,
    behavior: 'smooth' // 'auto' es el valor predeterminado (sin animación)
});


// Desplaza hacia abajo 100 píxeles desde la posición actual
window.scrollBy(0, 100);

// Desplazamiento suave 200 píxeles hacia abajo
window.scrollBy({
    top: 200,
    behavior: 'smooth'
});

const container = document.getElementById('container');

// Obtener la cantidad de scroll vertical en el contenedor
console.log(container.scrollTop);

// Establecer el desplazamiento
container.scrollTop = 200; // Desplaza el contenedor 200 píxeles hacia abajo


const element = document.getElementById('section1');
element.scrollIntoView({ behavior: 'smooth' }); // Desplaza la página hasta que el elemento sea visible
