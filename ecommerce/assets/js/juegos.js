document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos(productosJuegos, "contenedor-productos");
});

// Filtro por categoría
const botonesFiltro = document.querySelectorAll(".filtro-btn");

botonesFiltro.forEach(btn => {
  btn.addEventListener("click", () => {
    const categoria = btn.dataset.categoria;

    let lista = [];
    if (categoria === "todas") {
      lista = [...productosModa, ...productosTecnologia, ...productosJuegos];
    } else if (categoria === "moda") {
      lista = productosModa;
    } else if (categoria === "tecnologia") {
      lista = productosTecnologia;
    } else if (categoria === "juegos") {
      lista = productosJuegos;
    }

    renderizarProductos(lista, "contenedor-productos");
  });
});

// Buscador de productos
const buscador = document.getElementById("buscador");
buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();
    const listaFiltrada = productosJuegos.filter(prod => prod.nombre.toLowerCase().includes(texto));
    renderizarProductos(listaFiltrada, "contenedor-productos");
});