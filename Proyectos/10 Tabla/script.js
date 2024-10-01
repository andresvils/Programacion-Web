let alumnos=[{
    nombre:"Santiago Vilchez",
    email: "Santiagovilchez44@gmail.com",
    materia:"Analisis Matematica 1"
},{
    nombre:"Antonio Ortiz",
    email: "ortizElCrack@gmail.com",
    materia:"Calculo1"
},{
    nombre:"Pacheco Sergio",
    email: "testoMastarPro@gmail.com",
    materia:"Programacion web"
},{
    nombre:"Samper Agustin",
    email: "DevSampy@gmail.com",
    materia:"Ingenieria en Software"
},{
    nombre:"Pablo torrent",
    email: "Pablodelatorre.com",
    materia:"Algoritmos"
}]
const boton=document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid__container")
let htmlCode="";
for(alumno in alumnos){
    let datos=alumnos[alumno];
    let nombre=datos["nombre"];
    let email=datos["email"];
    let materia=datos["materia"];
    htmlCode += `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;

};
contenedor.innerHTML=htmlCode;

boton.addEventListener("click",()=>{
    let confirmar=confirm("Realmente quieres confirmar las mesas?");
    if(confirmar){
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll(".semana");
    let semanasElegidas=document.querySelectorAll(".semana-elegida");
    for (elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML=semanasElegidas[elemento].value;
    }
    }
})