// Variable para almacenar el botón seleccionado
let selectedButton = null;

// Añadir eventos de clic a los botones de imagen
document.querySelectorAll('.image-button').forEach(button => {
    button.addEventListener('click', () => {
        // Eliminar la clase 'selected' de todos los botones
        document.querySelectorAll('.image-button').forEach(btn => btn.classList.remove('selected'));
        // Añadir la clase 'selected' al botón clicado
        button.classList.add('selected');
        selectedButton = button;
    });
});

// Función para comprobar la respuesta
function checkAnswer() {
    if (selectedButton) {
        const selectedId = selectedButton.getAttribute('data-id');
        // Asumimos que el botón con data-id="1" es el correcto
        if (selectedId === "1") {
            alert("¡Correcto! Has seleccionado la respuesta correcta.");
        } else {
            alert("¡Incorrecto! Intenta de nuevo.");
        }
    } else {
        alert("Por favor, selecciona una opción.");
    }
}

// Funciones de control
document.getElementById('start').addEventListener('click', () => {
    window.location.href = 'index.html'; // Cambia 'Pagina_de_carpetas.html' por la URL deseada
});

document.getElementById('next').addEventListener('click', () => {
    window.location.href = 'elefantes2.html'; // Cambia 'elefantes2.html' por la URL deseada
});

document.getElementById('retry').addEventListener('click', () => {
    // Reiniciar la selección
    selectedButton = null;
    document.querySelectorAll('.image-button').forEach(button => button.classList.remove('selected'));
    alert("Reintenta el juego.");
});

// Asegúrate de que el botón de comprobar tenga un id 'check' y añade el evento de clic
document.getElementById('check').addEventListener('click', checkAnswer);