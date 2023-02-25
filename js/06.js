// Objetos

const producto = {
    nombre: "Tablet",
    precio: 30,
    disponible: true
}

const cliente = {
    nombre:"Maria",
    premium: true
}

const { nombre, precio, disponible } = producto

const { nombre: nombreCliente, premium } = cliente
console.log(nombre, precio, disponible)
console.log(nombreCliente)