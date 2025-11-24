document.addEventListener("DOMContentLoaded", () => {
    mostrarCarritoCompleto("productos-carrito");

    // Botón vaciar carrito
    const btnVaciar = document.querySelector(".btn-vaciar");
    if (btnVaciar) btnVaciar.addEventListener("click", vaciarCarrito);

    // Botón proceder al pago
    const btnPagar = document.querySelector(".btn-comprar");
    if (btnPagar) btnPagar.addEventListener("click", () => {
        if (carrito.length === 0) return alert("Tu carrito está vacío.");
        alert("Simulación: redirigiendo al pago...");
        window.location.href = "checkout.html";
    });
});

function mostrarCarritoCompleto(contenedorID = "productos-carrito") {
    const contenedor = document.getElementById(contenedorID);
    if (!contenedor) return;
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
                    <p class="mb-0">$${(item.precio * item.cantidad).toFixed(2)}</p>
                </div>
                <div>
                    <button class="btn btn-secondary btn-sm me-1 btn-menos" data-id="${item.id}">-</button>
                    <button class="btn btn-secondary btn-sm btn-mas" data-id="${item.id}">+</button>
                    <button class="btn btn-danger btn-sm btn-eliminar" data-id="${item.id}">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        `;

        contenedor.appendChild(div);
    });

    // Eventos de cantidad y eliminar
    contenedor.querySelectorAll(".btn-mas").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const item = carrito.find(p => p.id === id);
            if (item) { item.cantidad++; guardarCarrito(); mostrarCarritoCompleto(); }
        });
    });

    contenedor.querySelectorAll(".btn-menos").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id);
        const item = carrito.find(p => p.id === id);
        if (!item) return;

        if (item.cantidad > 1) {
            // Solo restar
            item.cantidad--;
            guardarCarrito();
            mostrarCarritoCompleto();
        } else {
            // Mostrar modal de confirmación
            idAEliminar = id;
            const modalEl = document.getElementById("modalEliminar");
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        }
    });
});


    let idAEliminar = null; // Variable global temporal

    contenedor.querySelectorAll(".btn-eliminar").forEach(btn => {
        btn.addEventListener("click", () => {
            idAEliminar = parseInt(btn.dataset.id);
            const modalEl = document.getElementById("modalEliminar");
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        });
    });

    // Botón de confirmacion
    document.getElementById("confirmarEliminar").addEventListener("click", () => {
        if (idAEliminar !== null) {
            eliminarDelCarrito(idAEliminar);
            mostrarCarritoCompleto();
            idAEliminar = null;
            const modalEl = document.getElementById("modalEliminar");
            const modal = bootstrap.Modal.getInstance(modalEl);
            modal.hide();
        }
    });


    // Actualizar total
    document.getElementById("total-carrito").textContent = calcularTotal().toFixed(2);
}
