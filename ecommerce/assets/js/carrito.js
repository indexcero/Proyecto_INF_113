// ===============================
// BASE JS DEL CARRITO
// ===============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Cargar carrito desde localStorage
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

// Guardar carrito
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarBadge();
}

// Agregar producto al carrito
function agregarAlCarrito(producto) {
    const existe = carrito.find(item => item.id === producto.id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();

// Animar el botón agregado
    const btn = document.querySelector(`.btn-agregar[data-id="${producto.id}"]`);
    if (btn) {
        btn.classList.add("animar-agregado");
        setTimeout(() => btn.classList.remove("animar-agregado"), 500);
    }
    
    const toastEl = document.getElementById('toast-agregado');
    const toast = new bootstrap.Toast(toastEl);
    toastEl.querySelector('.toast-body').textContent = `"${producto.nombre}" agregado al carrito`;
    toast.show();
}

// Eliminar un producto
function eliminarDelCarrito(id) {
    
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    if (typeof mostrarCarritoCompleto === "function") mostrarCarritoCompleto("productos-carrito");
}

// Vaciar carrito
function vaciarCarrito() {
    const conf = confirm("¿Seguro que deseas vaciar el carrito?");
    if (!conf) return;

    carrito = [];
    guardarCarrito();
    if (typeof mostrarCarritoCompleto === "function") mostrarCarritoCompleto("productos-carrito");
}

// Total
function calcularTotal() {
    return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

// Actualizar badge del carrito
function actualizarBadge() {
    const badge = document.querySelector("#carrito-badge");
    if (!badge) return;
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    badge.textContent = totalItems;
}

actualizarBadge();