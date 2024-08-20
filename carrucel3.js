// script.js

// Variables para almacenar la respuesta correcta y el botón seleccionado
const correctAnswer = "Ningún caballito"; // Respuesta correcta
let selectedButton = null;

// Función para iniciar el juego
function startGame() {
    selectedButton = null;
    document.querySelectorAll('.answer-button').forEach(button => button.classList.remove('selected'));
}

// Función para comprobar la respuesta seleccionada
function checkAnswer() {
    if (selectedButton) {
        const selectedAnswer = selectedButton.textContent.trim();
        if (selectedAnswer === correctAnswer) {
            alert("¡Correcto! Has seleccionado la respuesta correcta.");
        } else {
            alert("¡Incorrecto! Esa no es la cantidad de caballito.");
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
}

// Función para pasar a la siguiente pregunta
function nextQuestion() {
    // Reemplaza 'URL_SIGUIENTE' con el enlace de la siguiente pregunta o página
    window.location.href = ''; 
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
    window.location.href = 'carrucel2.html'; // Cambia 'paginaSiguiente.html' por la URL deseada
});

document.getElementById('retry').addEventListener('click', () => {
    window.location.href = 'Carrucel3.html'; // Cambia 'paginaReintentar.html' por la URL deseada
});

