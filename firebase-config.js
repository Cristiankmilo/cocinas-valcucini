// Importar Firebase y los servicios necesarios
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAY2Mp8Yocc69VA77IvLMw-claTtgYgBc8",
    authDomain: "cocinas-valcucini-6dfba.firebaseapp.com",
    projectId: "cocinas-valcucini-6dfba",
    storageBucket: "cocinas-valcucini-6dfba.appspot.com", // Corrección del storageBucket
    messagingSenderId: "772833916617",
    appId: "1:772833916617:web:d8c39cfaad101f595ebf18",
    measurementId: "G-7R6HXR6CV2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Función para iniciar sesión con Google
window.loginWithGoogle = function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Usuario autenticado:", result.user);
            alert("Inicio de sesión exitoso");
            window.location.href = "cliente.html"; // Redirigir a otra página después de iniciar sesión
        })
        .catch((error) => {
            console.error("Error en autenticación:", error);
            alert("Error al iniciar sesión con Google");
        });
};

// Función para registrar con Google (es igual a iniciar sesión)
window.registerWithGoogle = function() {
    loginWithGoogle(); // Usa la misma función para registro
};

// Detectar si el usuario ya inició sesión
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("user-info").innerHTML = `
            <p>Bienvenido, ${user.displayName}</p>
            <img src="${user.photoURL}" width="50" class="rounded-circle">
            <button class="btn btn-danger mt-2" onclick="logout()">Cerrar sesión</button>
        `;
    }
});

// Función para cerrar sesión
window.logout = function() {
    signOut(auth).then(() => {
        alert("Sesión cerrada");
        window.location.reload();
    }).catch((error) => {
        console.error("Error al cerrar sesión:", error);
    });
};
