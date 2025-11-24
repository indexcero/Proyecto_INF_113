// ===============================
// DATA DE PRODUCTOS REALES
// ===============================

// Moda
const productosModa = [
    { id: 1, nombre: "Camiseta Nike", precio: 25, img: "assets/img/moda/camiseta-nike.jpg", categoria: "moda" },
    { id: 2, nombre: "Pantalón Levi's", precio: 50, img: "assets/img/moda/pantalon-levis.jpg", categoria: "moda" },
    { id: 3, nombre: "Zapatos Adidas", precio: 80, img: "assets/img/moda/zapatos-adidas.jpg", categoria: "moda" },
    { id: 4, nombre: "Chaqueta Patagonia", precio: 120, img: "assets/img/moda/chaqueta-patagonia.jpg", categoria: "moda" }
];

// Tecnología
const productosTecnologia = [
    { id: 5, nombre: "Laptop Lenovo", precio: 700, img: "assets/img/tecnologia/laptop-lenovo.jpg", categoria: "tecnologia" },
    { id: 6, nombre: "Smartphone Samsung", precio: 500, img: "assets/img/tecnologia/samsung.jpg", categoria: "tecnologia" },
    { id: 7, nombre: "Auriculares Sony", precio: 120, img: "assets/img/tecnologia/auriculares-sony.jpg", categoria: "tecnologia" },
    { id: 8, nombre: "Smartwatch Apple", precio: 400, img: "assets/img/tecnologia/smartwatch-apple.jpg", categoria: "tecnologia" }
];

// Juegos
const productosJuegos = [
    { id: 9, nombre: "PS5", precio: 500, img: "assets/img/juegos/ps5.jpg", categoria: "juegos" },
    { id: 10, nombre: "Xbox Series X", precio: 500, img: "assets/img/juegos/xbox.jpg", categoria: "juegos" },
    { id: 11, nombre: "Switch OLED", precio: 350, img: "assets/img/juegos/switch.jpg", categoria: "juegos" },
    { id: 12, nombre: "Control DualSense", precio: 70, img: "assets/img/juegos/dual-sense.jpg", categoria: "juegos" }
];

// Función auxiliar para buscar producto por id
function obtenerProductoPorId(id) {
    const todos = [...productosModa, ...productosTecnologia, ...productosJuegos];
    return todos.find(prod => prod.id === id);
}
