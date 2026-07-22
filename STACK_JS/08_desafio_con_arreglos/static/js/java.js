//🎮 Filtrando videojuegos según su clasificación

function filtrarjuego() {
    let videojuegos = [
        { nombre: "Minecraft", edadRecomendada: 7 },
        { nombre: "FIFA 23", edadRecomendada: 3 },
        { nombre: "Call of Duty", edadRecomendada: 18 },
        { nombre: "Fortnite", edadRecomendada: 12 }
    ];

    let edadMinima = 12;
    let recomendados = [];

    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].edadRecomendada <= edadMinima) {
            recomendados.push(videojuegos[i].nombre);
        }
    }

    console.log("Juegos recomendados: ", recomendados);
}


//🎵 Contador de canciones favoritas
function contadorcanciones(){
let historialReproduccion = [
    "Shallow",
    "Blinding Lights",
    "Shallow",
    "Anti-Hero",
    "Shallow",
    "Bad Habits",
];

let cancionBuscada = "Shallow";
let contador = 0;


for (let i = 0; i < historialReproduccion.length; i++) {
    if (historialReproduccion[i] === cancionBuscada) {
        contador++;
    }
}

console.log("La canción", cancionBuscada, "se reprodujo", contador, "veces.");
}

//🕹️ Organizadores de torneo de videojuegos
function torneo(){
let jugadores = [
    "Luis",
    "Andrea",
    "Carlos",
    "Sofía",
    "Pedro",
    "Martina",
    "Javier",
    "Valentina",
];
let tamanoGrupo = 3;
let grupos = [];
let grupoActual = [];

for (let i = 0; i < jugadores.length; i++) {
    grupoActual.push(jugadores[i]);


    if (grupoActual.length === tamanoGrupo || i === jugadores.length - 1) {
        grupos.push(grupoActual);
        grupoActual = [];
    }
}

console.log("Grupos formados: ", grupos);
}

//🎟️ Simulador de una lista de espera en un cine
function lista_espera(){
let filaClientes = [
    "María",
    "José",
    "Fernanda",
    "Diego",
    "Valeria",
    "Samuel",
];
let cantidadAtendidos = 3;
let atendidos = [];

for (let i = 0; i < cantidadAtendidos; i++) {
    atendidos.push(filaClientes[i]);
}

filaClientes = filaClientes.slice(cantidadAtendidos);

console.log("Clientes atendidos: ", atendidos);
console.log("Clientes en espera: ", filaClientes);}