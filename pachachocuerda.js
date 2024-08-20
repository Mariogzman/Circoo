let mode = 'equal';

        function allowDrop(event) {
            event.preventDefault();
        }

        function drag(event) {
            event.dataTransfer.setData("text", event.target.id);
        }

        function drop(event) {
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
        }

        function checkBalance() {
            const box1 = document.getElementById("box1").childElementCount;
            const box2 = document.getElementById("box2").childElementCount;
            const clown = document.getElementById("clown");

            if (mode === 'equal') {
                if (box1 === box2) {
                    clown.style.top = "-60px";
                    alert("Ambas cajas tienen los mismos objetos, has salvado al payaso.");
                } else {
                    clown.classList.add("falling");
                    alert("Las cajas tienen diferente número de objetos, el payaso ha caído.");
                }
            } else {
                if (box1 !== box2) {
                    clown.style.top = "-60px";
                    alert("En una de las cajas hay muchos objetos y en la otra hay pocos. Has salvado al payaso.");
                } else {
                    clown.classList.add("falling");
                    alert("Las cajas tienen el mismo número de objetos, el payaso ha caído.");
                }
            }
        }

        function resetGame() {
            const boxes = [document.getElementById("box1"), document.getElementById("box2")];
            const objectsContainer = document.getElementById("objects-container");
            const clown = document.getElementById("clown");

            boxes.forEach(box => {
                while (box.firstChild) {
                    objectsContainer.appendChild(box.firstChild);
                }
            });

            clown.style.top = "-60px";
            clown.classList.remove("falling");
        }

        function toggleMode() {
            mode = mode === 'equal' ? 'unequal' : 'equal';
            document.getElementById("instruction").innerText = mode === 'equal'
                ? 'Arrastra los malabares a las cajas para equilibrar la cuerda.'
                : 'Arrastra los malabares a las cajas, una caja debe tener más objetos que la otra para salvar al payaso.';
            resetGame();
        }

        function irinicio() {
            // Aquí proporcionas el enlace al que deseas redirigir
            const url = 'index.html'; // Reemplaza con el enlace deseado
            window.location.href = url;
        }