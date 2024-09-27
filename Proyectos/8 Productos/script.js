const contenedor = document.querySelector(".flex-container");

let contador=0
function crearLlave(nombre, modelo, precio) {
    contador++;
    let img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre, modelo, precio];
}

let documentFragment=document.createDocumentFragment();
for(let i =0;i<20;i++){
    let precioRandom = Math.round(Math.random()*10+30);
    let modeloRandom = Math.round(Math.random()*10000);
    let llave=crearLlave(`Producto ${i+1}`,`codigo: ${modeloRandom}`,precioRandom);
    let div=document.createElement("DIV");
    
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value=modeloRandom
    });
    div.tabIndex=i;
    div.classList.add(`item-${i}`,`flex-item`)
    div.innerHTML = [...llave];
    documentFragment.appendChild(div);
}
contenedor.appendChild(documentFragment);