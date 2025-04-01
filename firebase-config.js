// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Función para registrar usuario
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("registroEmail").value;
    const password = document.getElementById("registroPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
        })
        .catch((error) => {
            alert("Error al registrarse: " + error.message);
        });
});

// Función para iniciar sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Inicio de sesión exitoso.");
        })
        .catch((error) => {
            alert("Error al iniciar sesión: " + error.message);
        });
});

// Función para iniciar sesión con Google
window.loginWithGoogle = function() {
    signInWithPopup(auth, provider)
        .then(() => {
            alert("Inicio de sesión con Google exitoso.");
        })
        .catch((error) => {
            alert("Error al iniciar sesión con Google: " + error.message);
        });
};

// Función para recuperar contraseña
document.getElementById("resetPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("resetEmail").value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Correo de recuperación enviado.");
        })
        .catch((error) => {
            alert("Error al recuperar contraseña: " + error.message);
        });
});
