// Validar registro
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-registro");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault(); 

    const nombre = this.querySelector("input[name='nombre']").value.trim();
    const email = this.querySelector("input[name='email']").value.trim();
    const password = this.querySelector("input[name='password']").value.trim();
    const password2 = this.querySelector("input[name='password2']").value.trim();
    let errores = [];

    if (!nombre) errores.push("El nombre es obligatorio");
    if (!email) errores.push("El email es obligatorio");
    if (!/^\S+@\S+\.\S+$/.test(email)) errores.push("Email inválido");
    if (!password) errores.push("La contraseña es obligatoria");
    if (password.length < 6) errores.push("La contraseña debe tener al menos 6 caracteres");
    if (password !== password2) errores.push("Las contraseñas no coinciden");

    if (errores.length > 0) {
        alert(errores.join("\n"));
        return;
    }

// Guardar en localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (usuarios.find(u => u.email === email)) {
        alert("Este email ya está registrado");
        return;
    }

    usuarios.push({ nombre, email, password });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso");
    this.reset();
});
});