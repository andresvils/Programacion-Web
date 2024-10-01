const botonNatVar=document.getElementById("boton-nav");
const navOpciones=document.querySelector(".header__nav_opciones");
botonNatVar.addEventListener('change',()=>{
    if(botonNatVar.checked){
        navOpciones.style.display="flex";
    }else{
        navOpciones.style.display="none"
    }
})
class Producto{
    #nombre
    #valor
    #codigo
    #categoria
    #descripcion
    #img
    constructor(nombre,valor,codigo,categoria,img){
        this.#nombre=nombre;
        this.#valor=valor;
        this.#codigo=codigo;
        this.#categoria=categoria;
        this.#img=img;
    }
    get nombre(){
        return this.#nombre
}
    get valor(){
        return this.#valor
    }
    get codigo(){
        return this.#codigo
    }
    get categoria(){
        return this.#categoria
    }
    get img(){
        return this.#img
    }
    set nombre(valor){
        this.#nombre=valor
    }
    set valor(valor){
        this.#valor=valor
    }

    ToString(){
        return `
                    <img class="img-prod" src="assents/img/llave.png">
                    <h3>${this.#nombre}</h3>
                    <h6 class="precio-prod">$${this.#valor}</h6>`
    }
}

class GestorProductos{
    #productos=[];
    agregarProducto(producto){
        this.#productos.push(producto)
    }
}
const mainProductos = document.querySelector(".main__section-productos");
let productos = document.createDocumentFragment();
for(let i =0;i<3;i++){
    let precioRandom = Math.round(Math.random()*100);
    let codigoRandom = Math.round(Math.random()*10000);
    const prod=new Producto("Producto",precioRandom,codigoRandom,"limpieza","")
    let div=document.createElement("DIV");
    div.classList.add(`producto-${i}`,`main__section-producto`);
    div.innerHTML = prod.ToString();
    div.tabIndex=i;
    productos.appendChild(div);
}
mainProductos.appendChild(productos);

// seccion modal

const botonOpenConfiguracion = document.querySelector(".main__section-config");
const botonCloseCongiruacion = document.querySelector(".modal_config-salir");
const modalConfig = document.querySelector(".main__section-modal_config");

botonOpenConfiguracion.addEventListener('click',()=>{
    modalConfig.style.display="block"
})
botonCloseCongiruacion.addEventListener('click',()=>{
    modalConfig.style.display="none"
})

const botonAgregarProducto = document.getElementById("add");
const modalAdd = document.querySelector(".modal__config-add");
const closeAdd = document.querySelector(".salir-add");
botonAgregarProducto.addEventListener('click',()=>{
    modalConfig.style.display="none"
    modalAdd.style.display="flex"
})
closeAdd.addEventListener('click',()=>{
    modalAdd.style.display="none"
})

const botonCrearProducto = document.getElementById("crear-producto")
botonCrearProducto.addEventListener('click',()=>{
    modalAdd.style.display="none"
    const nombre = document.getElementById("nombre").value;
    const valor =  document.getElementById("precio").value;
    let precioRandom = Math.round(Math.random()*100);
    let codigoRandom = Math.round(Math.random()*10000);

    const prod=new Producto(nombre,valor,codigoRandom,"limpieza","")
    let div=document.createElement("DIV");
    div.classList.add(`main__section-producto`);
    div.innerHTML = prod.ToString();
    mainProductos.appendChild(div);
})


