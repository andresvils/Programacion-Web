const titulo=document.querySelector(".titulo");
titulo.classList.add("grande")//agrega una clase
titulo.classList.remove("violet")//remueve una clase
let valor=titulo.classList.item(1);//devuelve la clase en dicha posicion
let valor_1=titulo.classList.contains("titu")//devuelve si true si contiene la clase o false si no
titulo.classList.toggle("agregada")//si tiene la clase la borra y si no la agrega
titulo.classList.replace("agregada","agregada_1")//remplaza una clase por otra


document.write(valor+"<br>")
document.write(valor_1+"<br>")
