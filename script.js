// script.js

// Variables para almacenar la respuesta correcta y el botón seleccionado
let correctAnswer = 3; // Cambia esto según cuál es la respuesta correcta
let selectedButton = null;

// Función para iniciar el juego
function startGame() {
    selectedButton = null;
    document.querySelectorAll('.answer-button').forEach(button => button.classList.remove('selected'));
}

// Función para comprobar la respuesta seleccionada
function checkAnswer() {
    if (selectedButton) {
        const selectedVagon = parseInt(selectedButton.getAttribute('data-vagon'));
        if (selectedVagon === correctAnswer) {
            alert("¡Correcto! Has seleccionado el vagón con más animales.");
        } else {
            alert("Incorrecto, intenta de nuevo.");
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

// Función para pasar a la siguiente pregunta
function nextQuestion() {
    // Reemplaza 'URL_SIGUIENTE' con el enlace de la siguiente pregunta o página
    window.location.href = 'pagina_de_carpetas.html'; 
    }

// Función para reintentar la pregunta actual
function retryQuestion() {
    alert("Reintenta la pregunta.");
    selectedButton = null;
    document.querySelectorAll('.answer-button').forEach(button => button.classList.remove('selected'));
}

// Manejo de la selección de respuestas
document.querySelectorAll('.answer-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.answer-button').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        selectedButton = this;
    });
});

// Agregar event listeners a los botones de control
document.getElementById('start').addEventListener('click', startGame);
document.getElementById('check').addEventListener('click', checkAnswer);
document.getElementById('next').addEventListener('click', nextQuestion);
document.getElementById('retry').addEventListener('click', retryQuestion);

// Agregar event listeners a los botones de control
document.getElementById('start').addEventListener('click', () => {
    window.location.href = 'index.html'; // Cambia 'paginaInicio.html' por la URL deseada
});

document.getElementById('check').addEventListener('click', checkAnswer); // Mantener la función existente

document.getElementById('next').addEventListener('click', () => {
    window.location.href = 'juego2tren.html'; // Cambia 'paginaSiguiente.html' por la URL deseada
});

document.getElementById('retry').addEventListener('click', () => {
    window.location.href = 'juego1tren.html'; // Cambia 'paginaReintentar.html' por la URL deseada
});

