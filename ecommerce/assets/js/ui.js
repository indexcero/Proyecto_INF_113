// ===============================
// FUNCIONES UI
// ===============================

// Renderizar una lista de productos en un contenedor
function renderizarProductos(lista, contenedorID = "contenedorProductos") {
    const contenedor = document.getElementById(contenedorID);
    if (!contenedor) return;
    contenedor.innerHTML = "";

    lista.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("col-md-3", "mb-3");

        div.innerHTML = `
            <div class="card h-100">
                <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                    <button class="btn btn-primary mt-auto btn-agregar" data-id="${producto.id}">Agregar</button>
                </div>
            </div>
        `;

        div.classList.add("producto-card", "fade-in");
        contenedor.appendChild(div);
    });

    // Eventos para agregar al carrito
    const botones = document.querySelectorAll(".btn-agregar");
    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const producto = obtenerProductoPorId(id);
            if (!producto) return alert("Producto no encontrado 😱");
            agregarAlCarrito(producto);
        });
    });
}
