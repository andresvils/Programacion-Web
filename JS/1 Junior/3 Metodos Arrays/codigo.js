let nombres=["pedro","maria","jorge"]
let apellidos=["vilchez","reinoso"]
let numeros=["uno","dos","tres","cuatro","cinco"]
resultado=nombres.pop()//elimina el ultimo elemento del array y lo devuelve

resultado_1=nombres.shift()//elimina el primer elemento del array y lo devuelve

resultado_2=nombres.push("messi","di maria")//agrega cadenas y devuelve la cantidad agregada

resultado_3=nombres.reverse()//invierte el orden del array

resultado_4=nombres.unshift("lacteo")//agrega al principio de el array una cadena

resultado_5=nombres.sort()//ordena el arreglo

resultado_6=nombres.splice(1,2,"leandro","juanchi")//elimna y agrega cadenas

resultado_7=apellidos.slice(0,1)//muestra de una posicion a otra

resultado_8=apellidos.join("-------")//convierte el arreglo en cadena y eliges con que separarlas

resultado_9=numeros.filter(numero=>numero.length>3)//filtra por condicion las cadenas

document.write(resultado+`<br>`)
document.write(resultado_1+`<br>`)
document.write(resultado_2+`<br>`)
document.write(nombres+`<br>`)
document.write(resultado_7+`<br>`)
document.write(resultado_8+`<br>`)
document.write(resultado_9+`<br>`)