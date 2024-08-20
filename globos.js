const objects = document.querySelectorAll('.draggable'); // Selecciona todos los elementos con la clase 'draggable'
const dropZones = document.querySelectorAll('.drop-zone'); // Selecciona todos los elementos con la clase 'drop-zone'

objects.forEach(object => {
    object.addEventListener('dragstart', dragStart); // Añade un evento de 'dragstart' a cada objeto arrastrable
    object.addEventListener('dragend', dragEnd); // Añade un evento de 'dragend' a cada objeto arrastrable
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver); // Permite soltar el objeto en la zona de arrastre
    zone.addEventListener('dragenter', dragEnter); // Añade un estilo al entrar en la zona de arrastre
    zone.addEventListener('dragleave', dragLeave); // Quita el estilo al salir de la zona de arrastre
    zone.addEventListener('drop', drop); // Maneja el evento de soltar el objeto
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id); // Almacena el ID del objeto arrastrado en dataTransfer
    setTimeout(() => e.target.classList.add('invisible'), 0); // Hace el objeto invisible durante el arrastre
}

function dragEnd(e) {
    e.target.classList.remove('invisible'); // Hace el objeto visible nuevamente después del arrastre
}

function dragOver(e) {
    e.preventDefault(); // Previene la acción por defecto para permitir el evento 'drop'
}

function dragEnter(e) {
    e.preventDefault(); // Permite el evento 'dragenter'
    e.target.classList.add('hovered'); // Añade una clase para mostrar que el área es un objetivo válido
}

function dragLeave(e) {
    e.target.classList.remove('hovered'); // Quita la clase al dejar la zona de arrastre
}

function drop(e) {
    e.preventDefault(); // Previene la acción por defecto
    e.target.classList.remove('hovered'); // Quita la clase de resaltado al soltar el objeto

    const objectId = e.dataTransfer.getData('text/plain'); // Obtiene el ID del objeto arrastrado
    const draggedElement = document.getElementById(objectId); // Selecciona el elemento arrastrado

    if (draggedElement) { // Verifica si existe el elemento arrastrado
        // Comprueba si el objeto se puede soltar en la zona actual
        if ((draggedElement.classList.contains('red') && e.target.id === 'many') || 
            (draggedElement.classList.contains('yellow') && e.target.id === 'few')) {
            e.target.appendChild(draggedElement); // Añade el objeto al contenedor correcto
        } else {
            alert('Has perdido! Inténtalo de nuevo.'); // Muestra una alerta si se suelta en un lugar incorrecto
        }
    }
}

// Lógica del botón Comprobar
document.getElementById('check').addEventListener('click', () => {
    const manyZone = document.getElementById('many'); // Zona 'Muchos'
    const fewZone = document.getElementById('few'); // Zona 'Pocos'
    const noneZone = document.getElementById('none'); // Zona 'Ninguno'

    const redsInMany = manyZone.querySelectorAll('.red').length; // Cuenta los objetos rojos en 'Muchos'
    const yellowsInFew = fewZone.querySelectorAll('.yellow').length; // Cuenta los objetos amarillos en 'Pocos'
    const objectsInNone = noneZone.querySelectorAll('.draggable').length; // Cuenta los objetos en 'Ninguno'

    if (redsInMany === 6 && yellowsInFew === 4 && objectsInNone === 0) {
        alert('¡Felicidades, has ganado!'); // Si todas las condiciones se cumplen, el jugador gana
    } else {
        alert('Has perdido! Inténtalo de nuevo.'); // Si no, el jugador pierde
    }
});

// Botones adicionales
document.getElementById('home').addEventListener('click', () => {
    window.location.href = 'index.html'; // Navega a la página de inicio
});

document.getElementById('next').addEventListener('click', () => {
    alert('Siguiente nivel (funcionalidad pendiente)'); // Mensaje de placeholder para el siguiente nivel
});

document.getElementById('retry').addEventListener('click', () => {
    window.location.reload(); // Recarga la página para reiniciar el juego
});
