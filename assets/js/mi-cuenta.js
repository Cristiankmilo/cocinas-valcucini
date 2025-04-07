// Función para cargar los datos guardados en localStorage o valores por defecto
function cargarDatos() {
    const datos = JSON.parse(localStorage.getItem("perfil")) || {
        nombre: "Maria",
        apellido: "Lopez",
        telefono: "+57 320 0000000",
    };

    // Mostrar los datos en la tarjeta del perfil
    document.getElementById("perfilNombre").textContent = datos.nombre;
    document.getElementById("perfilApellido").textContent = datos.apellido;
    document.getElementById("perfilTelefono").textContent = datos.telefono;
}

// Cuando el modal se abre, carga los datos actuales
document.getElementById("editarPerfil").addEventListener("show.bs.modal", function () {
    const datos = JSON.parse(localStorage.getItem("perfil")) || {};

    document.getElementById("inputNombre").value = datos.nombre || "Maria";
    document.getElementById("inputApellido").value = datos.apellido || "Lopez";
    document.getElementById("inputNumero").value = datos.telefono || "320 0000000";
});

// Función para guardar los datos editados
document.getElementById("guardarPerfil").addEventListener("click", function () {
    const nuevoPerfil = {
        nombre: document.getElementById("inputNombre").value,
        apellido: document.getElementById("inputApellido").value,
        telefono: document.getElementById("inputNumero").value,
    };

    // Guardar en localStorage
    localStorage.setItem("perfil", JSON.stringify(nuevoPerfil));

    // Actualizar los datos en la tarjeta del perfil
    cargarDatos();

    // Cerrar el modal después de guardar
    const modal = bootstrap.Modal.getInstance(document.getElementById("editarPerfil"));
    modal.hide();
});

// Cargar datos al iniciar la página
cargarDatos();
