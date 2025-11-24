// ===============================
// FUNCIONES UI
// ===============================

// Renderizar una lista de productos en un contenedor
function renderizarProductos(lista, contenedorID = "contenedorProductos") {
    const contenedor = document.getElementById(contenedorID);
    contenedor.innerHTML = "";

    lista.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto-card");

        div.innerHTML = `
            <img src="${producto.img}" class="producto-img">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio}</p>
            <button class="btn-agregar" data-id="${producto.id}">Agregar</button>
        `;

        contenedor.appendChild(div);
    });

    // Eventos para agregar al carrito
    const botones = document.querySelectorAll(".btn-agregar");
    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const producto = obtenerProductoPorId(id);
            agregarAlCarrito(producto);
        });
    });
}

// Renderizar el carrito completo
function mostrarCarritoCompleto(contenedorID = "contenedorCarrito") {
    const contenedor = document.getElementById(contenedorID);
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío</p>";
        return;
    }

    carrito.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item-carrito");

        div.innerHTML = `
            <h4>${item.nombre}</h4>
            <p>Cantidad: ${item.cantidad}</p>
            <p>Subtotal: $${item.precio * item.cantidad}</p>
            <button class="btn-eliminar" data-id="${item.id}">Eliminar</button>
        `;

        contenedor.appendChild(div);
    });

    // Botones de eliminar
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");
    botonesEliminar.forEach(btn => {
        btn.addEventListener("click", () => {
            eliminarDelCarrito(parseInt(btn.dataset.id));
            mostrarCarritoCompleto();
        });
    });

    // Total
    const totalDiv = document.createElement("div");
    totalDiv.innerHTML = `<h3>Total: $${calcularTotal()}</h3>`;
    contenedor.appendChild(totalDiv);
}
