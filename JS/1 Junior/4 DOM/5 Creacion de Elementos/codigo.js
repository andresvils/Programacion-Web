const fragmento = document.createDocumentFragment();
const contenedor = document.querySelector(".contenedor");

for (let i = 0; i < 10; i++) {
    const item = document.createElement("LI");
    const textoDelItem = document.createTextNode(`Texto Li numero ${i+1}`); // Crear un nodo de texto
    item.appendChild(textoDelItem); // Agregar el nodo de texto al elemento <li>
    fragmento.appendChild(item); // Agregar el <li> al fragmento
}

contenedor.appendChild(fragmento); // Agregar todo el fragmento al contenedor
