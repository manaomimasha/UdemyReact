// Objetos

const producto = {
    nombre: "Tablet",
    precio: 30,
    disponible: true
}

console.log ( producto)
console.table ( producto)

// Destructuring
const {precio} = producto
console.log(precio)

// Object Literal Enhansment

const autentificado = true 
const nombre = "Maria"

const usuario = {
    autentificado: autentificado,
    nombre: nombre
}

console.table(usuario)