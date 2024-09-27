let cadena=" Cadena de Prueba"

//busqueda

resultado=cadena.concat(" cadena agregada")//concatena cadenas

resultado_1=cadena.startsWith("a")//compara las primeras letra de una cadena con las primeras de otra

resultado_2=cadena.endsWith("ba")//compara la ultimas con las ultimas de la otra cadena

resultado_3=cadena.includes("j")//busca cadenas en otras cadenas

resultado_4=cadena.indexOf("Prueba")//nos devuelve la posicion de la primera cadena

resultado_5=cadena.lastIndexOf("a")//nos devuelve la posicion de la ultima cadena

//rellenos

resultado_6=cadena.padStart(20,"1")//rellena la cadena con el caracter elegido desde el principio

resultado_7=cadena.padEnd(20,"1")//rellena la cadena con el caracter elegido desde el final

resultado_8=cadena.repeat(4)//repite la cadena

//modificacion

resultado_9=cadena.split(" ")//separa la cadena por alguna caracter

resultado_10=cadena.substring(0,6)//muestra la cadena de una posicion hasta la otra

resultado_10=cadena.toLocaleLowerCase()//pasa todo a minuscula

resultado_11=cadena.toUpperCase()//pasa todo a mayuscula

resultado_12=cadena.toString()//pasa todo a string

resultado_13=cadena.length//longitud de cadena

resultado_14=cadena.trim()//quita los espacios laterales de las cadenas
//trimStart()  y trimEnd sirven para fraccionar esta propiedad






document.write(resultado+`<br>`)
document.write(resultado_1+`<br>`)
document.write(resultado_2+`<br>`)
document.write(resultado_3+`<br>`)
document.write(resultado_4+`<br>`)
document.write(resultado_5+`<br>`)
document.write(resultado_6+`<br>`)
document.write(resultado_7+`<br>`)
document.write(resultado_8+`<br>`)
document.write(resultado_9+`<br>`)
document.write(resultado_10+`<br>`)
document.write(resultado_11+`<br>`)
document.write(resultado_12+" "+5+`<br>`)
document.write(resultado_13+`<br>`)
document.write(resultado_14.length+`<br>`)
