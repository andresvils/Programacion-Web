class Persona{
    constructor(nombre,rol){
        this.nombre=nombre;
        this.rol=rol;
    }
}
const data =[
    ["santy vilchez","fullstack"],
    ["pablo torrent","frontend"],
    ["antonio ortiz","frontend"],
    ["mario torrent","backend"],
    ["pacheco sergio","frontend"]
];
const personas=[]
for (let i = 0; i < data.length; i++) {
    personas[i]= new Persona(data[i][0],data[i][1])
    
}
const obtenerPersona=(id,cb)=>{
    if(personas[id]==undefined){
        cb("no se ha encontrado la persona")
    }else{
        cb(null,personas[id])
    }
}
obtenerPersona(5,(err,persona)=>{
    if(err){
        console.log(err)
    }else{
        console.log(persona.nombre)
        console.log(persona.rol)
    }
})