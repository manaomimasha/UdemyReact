// Objetos

const producto = {
    nombre: "Tablet",
    precio: 30,
    disponible: true
}

Object.freeze(producto)
producto.nombre = "Monitor Curvo"
producto.imagen="imagen.jpg"
delete producto.disponible

console.table(producto)

//un cambio 