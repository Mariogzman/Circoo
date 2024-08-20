document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    const objects = document.querySelectorAll('.object img');
    const checkButton = document.getElementById('check-button');
    const startButton = document.getElementById('start');
    const nextButton = document.getElementById('next');
    const retryButton = document.getElementById('retry');
    const result = document.getElementById('result');

    let draggedItem = null;

    // Función para mezclar un array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Mezclar los objetos al inicio
    (function shuffleObjects() {
        const objectArray = Array.from(objects).map(img => img.parentElement);
        shuffleArray(objectArray);
        objectArray.forEach(object => object.parentElement.appendChild(object));
    })();

    objects.forEach(object => {
        object.setAttribute('draggable', true);

        object.addEventListener('dragstart', (e) => {
            draggedItem = e.target;
            setTimeout(() => {
                draggedItem.style.display = 'none';
            }, 0);
        });

        object.addEventListener('dragend', () => {
            setTimeout(() => {
                draggedItem.style.display = 'block';
                draggedItem = null;
            }, 0);
        });
    });

    squares.forEach(square => {
        square.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necesario para permitir el drop
        });

        square.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedItem) {
                if (!square.querySelector('img')) { // Verifica si ya hay una imagen en el cuadrado
                    square.appendChild(draggedItem); // Mueve la imagen al cuadrado
                }
            }
        });
    });

    checkButton.addEventListener('click', () => {
        let isCorrect = true;
        squares.forEach(square => {
            const squareNumber = square.dataset.number;
            const objectNumber = square.querySelector('img')?.alt.split(' ')[1];
            if (objectNumber !== squareNumber) {
                isCorrect = false;
            }
        });

        // Mostrar el resultado con una alerta
        showResult(isCorrect);
    });

    function showResult(isCorrect) {
        alert(isCorrect ? '¡Correcto! Has ordenado los payasos' : 'Incorrecto, inténtalo de nuevo.');
    }

    // Funcionalidad del botón "Inicio"
    startButton.addEventListener('click', () => {
        // Redirigir a otra página o ruta para el inicio
        window.location.href = 'index.html'; // Cambia 'inicio.html' por la URL o ruta que desees
    });

    // Funcionalidad del botón "Siguiente"
    nextButton.addEventListener('click', () => {
        // Redirigir a la siguiente fase o página
        window.location.href = 'pachacho2.html'; // Cambia 'siguiente.html' por la URL o ruta que desees
    });

    // Funcionalidad del botón "Reintentar"
    retryButton.addEventListener('click', () => {
        // Redirigir a la misma página para reintentar
        window.location.href = 'pachacho1.html'; // Cambia 'actual.html' por la URL o ruta que desees
    });
});