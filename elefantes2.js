// drag-drop.js

// Variables para manejar el arrastre
let draggedElephant = null;

// Configuración de eventos de arrastre
document.querySelectorAll('.draggable').forEach(elephant => {
    elephant.addEventListener('dragstart', (event) => {
        draggedElephant = event.target;
        event.dataTransfer.setData('text/plain', null); // Para Firefox
    });
});

const dropZone = document.getElementById('dropZone');

// Asegúrate de que la zona de arrastre permita el drop
dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
});

// Manejo del evento drop
dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    if (draggedElephant) {
        // Clonar el elefante para evitar manipular el original
        const clonedElephant = draggedElephant.cloneNode(true);
        clonedElephant.classList.remove('draggable'); // Elimina la clase para evitar arrastrar de nuevo
        clonedElephant.style.position = 'absolute';
        clonedElephant.style.width = '100px'; // Asegura el tamaño fijo
        clonedElephant.style.height = '100px'; // Asegura el tamaño fijo
        dropZone.appendChild(clonedElephant);

        // Ajustar la posición del elefante dentro del dropZone
        const dropZoneRect = dropZone.getBoundingClientRect();
        clonedElephant.style.top = `${event.clientY - dropZoneRect.top - (clonedElephant.offsetHeight / 2)}px`;
        clonedElephant.style.left = `${event.clientX - dropZoneRect.left - (clonedElephant.offsetWidth / 2)}px`;

        draggedElephant = null;
    }
});

// Función para comprobar si la solución es correcta
function checkAnswer() {
    // Contar los elefantes en el cuadro
    const elefantesEnCuadro = dropZone.querySelectorAll('img').length;

    if (elefantesEnCuadro === 6) {
        alert("¡Correcto! Has colocado 6 elefantes en el cuadro.");
    } else {
        alert("Incorrecto. Asegúrate de colocar los mismos elefantes en el cuadro.");
    }
}

// Funciones de control
document.getElementById('check').addEventListener('click', checkAnswer);

document.getElementById('start').addEventListener('click', () => {
    window.location.href = 'index.html'; // Cambia 'paginaInicio.html' por la URL deseada
});

document.getElementById('next').addEventListener('click', () => {
    window.location.href = 'elefantes3.html'; // Cambia 'paginaSiguiente.html' por la URL deseada
});

document.getElementById('retry').addEventListener('click', () => {
    // Mueve los elefantes de vuelta a la zona de origen
    dropZone.querySelectorAll('img').forEach(elephant => {
        elephant.style.position = 'static';
        document.querySelector('.elephant-images').appendChild(elephant);
    });
    alert("Reintenta el juego.");
    window.location.href = 'elefantes2.html'; // Reemplaza con la URL deseada
});