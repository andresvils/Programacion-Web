const botonNatVar=document.getElementById("boton-nav");
const navOpciones=document.querySelector(".header__nav_opciones");
botonNatVar.addEventListener('change',()=>{
    if(botonNatVar.checked){
        navOpciones.style.display="none";
    }else{
        navOpciones.style.display="flex"
    }
})