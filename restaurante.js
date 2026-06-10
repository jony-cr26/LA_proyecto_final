const platillos = [
    { id: 1, nombre: "Tacos al pastor", precio: 50, cantidad: 80, categoria: "Comida" },
    { id: 2, nombre: "Enchiladas verdes", precio: 60, cantidad: 60, categoria: "Comida" },
    { id: 3, nombre: "Flan de la abuela", precio: 80, cantidad: 40, categoria: "Postre" },
    { id: 4, nombre: "Agua de jamaica", precio: 30, cantidad: 50, categoria: "Bebida" },
    { id: 5, nombre: "Café de olla", precio: 40, cantidad: 30, categoria: "Bebida" },
    { id: 6, nombre: "Chiles en nogada", precio: 100, cantidad: 20, categoria: "Comida" },
    { id: 7, nombre: "Pastel de chocolate", precio: 45, cantidad: 25, categoria: "Postre" },
    { id: 8, nombre: "Limonada", precio: 25, cantidad: 40, categoria: "Bebida" },
    { id: 9, nombre: "Sopa de tortilla", precio: 55, cantidad: 30, categoria: "Comida" },
    { id: 10, nombre: "Helado de vainilla", precio: 35, cantidad: 35, categoria: "Postre" }
]

console.log("======Bienvenido al restaurante======");

//Mostrar el menú completo (platillos disponibles)
const menuDisponible = platillos.filter((platillo) => {
    return platillo.cantidad > 0;
})

console.log("\nAquí está nuestro menú:\n");

//Muestra solo el nombre de los productos dispnibles
const nombreDisponibles = menuDisponible.map((platillo) => {
    return `${platillo.nombre} - $${platillo.precio}`;
})

console.log(nombreDisponibles);