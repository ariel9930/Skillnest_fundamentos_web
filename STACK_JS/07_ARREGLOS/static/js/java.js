4// Variables a lista

let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

// Transformar en array y mostrar

//Mostrar a Maria en una alerta
let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "José"];
let datos = ["Carlos", 18, true];
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

// Desafio formar una oracion 
// de las distintas variables
function ejercicio1() {

    let mensaje = `${alumnos[1]} de ${datos[1]} años \nCompro un ${frutas[2]} a ${compras[1]} pesos. `;
    alert(mensaje);
}



//obtener el ultimo elemento
function ejercicio2() {
    let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

    let ultima = frutas[frutas.length - 1];
    //variable .lenght -1 siempre trae el ultimo elemento
    alert(ultima);
}
















//EJERCICIOSSSSSSSSSS
function ejercicioss1() {
    let edades = [15, 18, 20, 14, 25];
    let mensaje = (`Primera edad: ${edades[0]} \n Ultima edad: ${edades[4]} \n Cantidad de elementos: ${edades.length}`)
    alert(mensaje);
}


function ejercicioss2() {
    let nombres = ["Ariel", "Estefanaldo", "Vicentebaldevenito", "Abejabier", "Pastalan"];

    for (let i = 0; i < nombres.length; i++) {
        alert(nombres[i]);
    }
}

function ejercicioss3() {
    let notas = [6.7, 3.5, 4.5, 6.0, 4.5]
    let suma = 0
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i]
    }
    let promedio = suma / notas.length
    alert(`${promedio.toFixed(1)}`)
}

function ejercicioss4() {
    let Temperaturas = [18, 20, 15, 22, 19, 25, 17]
    for (let i = 0; i < Temperaturas.length; i++) {
        if (Temperaturas[i] > 20) {
            alert(Temperaturas[i])
        }
    }
}

function ejercicioss5() {
    let numerros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let pares = 0
    let impares = 0
    for (let i = 0; i < numerros.length; i++) {
        if (numerros[i % 2 == 0]) {
            pares++
        } else (numerros[i]); {
            impares++
        alert(numerros[i])}
    }
}