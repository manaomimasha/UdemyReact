// Operaciones en los arrays    
const tecnologias =[ "css", "JS", "Note", "React", "Mishka"]


// tecnologias.unshift("graphQL")

// console.table(tecnologias)

// const NuevoArreglo = ["Mishka", ...tecnologias]
// // console.table(NuevoArreglo)

// const nuevoArray = tecnologias.filter ( function(tech)
// {
//     return tech !== "css"
// })
console.table(tecnologias)
tecnologias[0] = "GraphQL"

 console.table(tecnologias)

 const nuevoArray = tecnologias.map(function(tech)
 {
    if (tech ==="GraphQL") {
        return "Hola soy el primero"
    } else {
        return tech 
    }
 })

 console.table(nuevoArray)