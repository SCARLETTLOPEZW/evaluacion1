// 🎯 Capturamos el formulario
const form = document.getElementById("registroForm");

// 🚀 Escuchamos cuando el usuario intenta enviar el formulario
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita envío sin validar

    let valido = true;

    // 📌 Validación: Nombre
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "" || !/^[a-zA-Z\s]+$/.test(nombre)) {
        document.getElementById("errorNombre").innerText = "Ingrese un nombre válido (solo letras).";
        valido = false;
    } else {
        document.getElementById("errorNombre").innerText = "";
    }

    // 📌 Validación: Correo (solo @duoc.cl)
    const correo = document.getElementById("correo").value.trim();
    if (!/^[a-zA-Z0-9._%+-]+@duoc\.cl$/.test(correo)) {
        document.getElementById("errorCorreo").innerText = "Debe ingresar un correo válido @duoc.cl.";
        valido = false;
    } else {
        document.getElementById("errorCorreo").innerText = "";
    }

    // 📌 Validación: Contraseña
    const password = document.getElementById("password").value;
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!]).{8,}$/.test(password)) {
        document.getElementById("errorPassword").innerText = "La contraseña debe tener 8+ caracteres, mayúscula, minúscula, número y símbolo.";
        valido = false;
    } else {
        document.getElementById("errorPassword").innerText = "";
    }

    // 📌 Validación: Confirmación de contraseña
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        document.getElementById("errorConfirm").innerText = "Las contraseñas no coinciden.";
        valido = false;
    } else {
        document.getElementById("errorConfirm").innerText = "";
    }

    // 📌 Validación: Mascota
    const tipoMascota = document.getElementById("tipoMascota").value;
    if (tipoMascota === "") {
        document.getElementById("errorMascota").innerText = "Debe seleccionar un tipo de mascota.";
        valido = false;
    } else {
        document.getElementById("errorMascota").innerText = "";
    }

    // 📌 Validación: Nombre de mascota
    const nombreMascota = document.getElementById("nombreMascota").value.trim();
    if (nombreMascota === "" || nombreMascota.length > 50) {
        document.getElementById("errorNombreMascota").innerText = "Ingrese un nombre válido para la mascota (máx. 50 caracteres).";
        valido = false;
    } else {
        document.getElementById("errorNombreMascota").innerText = "";
    }

    // ✅ Si todo es válido
    if (valido) {
        alert("Registro exitoso 🎉 Bienvenido a Guau&Miau!");
        form.reset(); // Limpia el formulario
    }
});
