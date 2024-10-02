const deserializado = {"Usuario_1":"Santiago","Usuario_2":"Pablo"}

const serializado = JSON.stringify(deserializado)

console.log(typeof serializado) 
//stringify serializa un diccionario

const serializado_1 = `{"Usuario_1":"Santiago","Usuario_2":"Pablo"}`

const deserializado_1 = JSON.parse(serializado_1)

console.log(deserializado_1) 
//parse deserializa un diccionario
