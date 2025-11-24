document.addEventListener("DOMContentLoaded", () => {
    mostrarCarritoCompleto("productos-carrito");
});

function mostrarCarritoCompleto(contenedorID = "productos-carrito") {
    const contenedor = document.getElementById(contenedorID);
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío</p>";
        document.getElementById("total-carrito").textContent = "0.00";
        return;
    }

    carrito.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("col-12");

        div.innerHTML = `
            <div class="card p-2 d-flex flex-row align-items-center justify-content-between">
                <img src="${item.img}" alt="${item.nombre}" width="80px" class="me-3">
                <div class="flex-grow-1">
                    <h5>${item.nombre}</h5>
                    <p class="mb-0">Cantidad: ${item.cantidad}</p>
                </div>
                <div class="me-3">
                    <p class="mb-0">$${item.precio * item.cantidad}</p>
                </div>
                <button class="btn btn-danger btn-eliminar" data-id="${item.id}">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        `;

        contenedor.appendChild(div);
    });

    // Botones eliminar
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");
    botonesEliminar.forEach(btn => {
        btn.addEventListener("click", () => {
            eliminarDelCarrito(parseInt(btn.dataset.id));
            mostrarCarritoCompleto();
        });
    });

    // Actualizar total
    document.getElementById("total-carrito").textContent = calcularTotal().toFixed(2);
}