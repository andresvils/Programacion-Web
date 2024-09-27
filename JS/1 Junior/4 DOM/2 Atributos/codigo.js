const rangoEtario=document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type","text");//esto modifica el atributo de un nodo
//el primer valor es el atributo a modificar y en el segundo el nuevo atributo

document.write("<br>"+ rangoEtario.getAttribute("type"))
//esto nos devuelve el valor de un atributo 

rangoEtario.removeAttribute("placeholder");
//esto elimina un atributo


