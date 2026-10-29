import "./style.css";

const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");
const botonReset = document.getElementById("reset");
const botonCambioManual = document.getElementById("cambiar");

function turnoSiguiente() {
    let turnoActual = document.getElementById("turnoActual");

    if(turnoActual !== null && turnoActual !== undefined) {
        let nuevoTurno : number = Number(turnoActual.textContent);
        nuevoTurno = nuevoTurno + 1;

        let valor : string = String(nuevoTurno);
        valor = valor.padStart(2, "0");

        turnoActual.textContent = valor;

        actualizarEstadoTurno();
    } 
}

function turnoAnterior() {
    let turnoActual = document.getElementById("turnoActual");

    if(turnoActual !== null && turnoActual !== undefined) {
        let nuevoTurno : number = Number(turnoActual.textContent);
        if(nuevoTurno > 1) {
            nuevoTurno = nuevoTurno - 1;   
        }        

        let valor : string = String(nuevoTurno);
        valor = valor.padStart(2, "0");

        turnoActual.textContent = valor;

        actualizarEstadoTurno();
    }
}

function cambioManual () {
    let turnoManual = document.getElementById("turnoManual");
    let turnoActual = document.getElementById("turnoActual");
    
    if(turnoManual !== null && turnoManual !== undefined &&
        turnoActual !== null && turnoActual !== undefined &&
        turnoManual instanceof HTMLInputElement &&
        turnoActual instanceof HTMLElement) {
            const turnoElegido = Number(turnoManual.value);
            if (turnoElegido >= 1) {
                let valor : string = String(turnoElegido);
                valor = valor.padStart(2, "0");

                turnoActual.textContent = valor;

                actualizarEstadoTurno();
            }
        }
}

function resetear() {
    let inicio = 1;
    let turnoActual = document.getElementById("turnoActual");

    let valor : string = String(inicio);
    valor = valor.padStart(2,"0");

    if(turnoActual !== null && turnoActual !== undefined) {
        turnoActual.textContent = String(valor);

        actualizarEstadoTurno();
    }    
}

function actualizarEstadoTurno() {
    const turnoActual = document.getElementById("turnoActual");
    const botonAnterior = document.getElementById("anterior");
    const avisoTurno = document.getElementById("avisoTurno");

    if (turnoActual instanceof HTMLElement && botonAnterior instanceof HTMLButtonElement) {
        const numeroTurno = Number(turnoActual.textContent);

        if (numeroTurno === 1) {
            botonAnterior.disabled = true;
            botonAnterior.style.cursor = "not-allowed";

            if (avisoTurno instanceof HTMLElement) {
                avisoTurno.style.display = "block";
            }
        } else {
            botonAnterior.disabled = false;
            botonAnterior.style.cursor = "pointer";

            if (avisoTurno instanceof HTMLElement) {
                avisoTurno.style.display = "none";
            }
        }
    }
}

if (botonAnterior !== null && botonAnterior !== undefined) {
    botonAnterior.addEventListener("click", turnoAnterior);
}
if (botonSiguiente !== null && botonSiguiente !== undefined) {
    botonSiguiente.addEventListener("click", turnoSiguiente);
}
if (botonReset !== null && botonReset !== undefined) {
    botonReset.addEventListener("click", resetear);
}
if (botonCambioManual !== null && botonCambioManual !== undefined) {
    botonCambioManual.addEventListener("click", cambioManual);
}

actualizarEstadoTurno();