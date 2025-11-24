const formLogin = document.getElementById("form-login");

if (formLogin) {
formLogin.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = this.querySelector("input[name='email']").value.trim();
    const password = this.querySelector("input[name='password']").value.trim();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (!usuario) {
        alert("Email o contraseña incorrectos");
        return;
    }

    alert("Inicio de sesión exitoso");

    // Guardar sesión
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

    // Redirigir a inicio
    window.location.href = "index.html";
});
}