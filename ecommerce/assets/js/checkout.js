document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-checkout");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = this.nombre.value.trim();
        const direccion = this.direccion.value.trim();
        const email = this.email.value.trim();

        if (!nombre || !direccion || !email) {
            alert("Todos los campos son obligatorios");
            return;
        }

        alert("Compra realizada con éxito 🎉");
        localStorage.removeItem("carrito");
        window.location.href = "index.html";
    });
});