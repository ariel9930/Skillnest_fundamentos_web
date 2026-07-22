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


//Recorrer un arreglo

function Recorrer() {
    let notas = [6.7, 5.8, 4.1, 6.7, 3.2, 4.6, 6.2];

    for (let i = 0; i < notas.length; i++) {

        alert(`Mostrando notas ${i + 1} de ${notas.length} : ${notas[i]}`);



        //Sumar elementos dentro de un bucle
    }
}
function ventasa() {
    let ventas = [10000, 5000, 12000, 8000];

    let total = 0;

    for (let i = 0; i < ventas.length; i++) {

        total += ventas[i]; //+= acumula

    }

    alert(`El resultado final es : ${total}`);
}

//Calcular un promedio
function calcularpromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {

        suma += notas[i];

    }
    alert(`La suma acumulada es ${suma}`)
    let promedio = suma / notas.length;

    alert(`Notas: ${notas.join(` - `)}\nPromedio: ${promedio}`);
}


//condicion


function BuscarMayoresDeEdad() {
    let edades = [12, 15, 18, 20, 25];
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {
        //Condicion para buscar a mayores de edad
        if (edades[i] >= 18) {

            mayores.push(edades[i]); // añade la posicion que cumple la condicion
        }

    }
    alert(`De la lista de edades: ${edades.join(' / ')}
\nLos mayores son: ${mayores.join(' / ')}`)
}


//Encontrar el menor y el mayor

function menormayor() {
    let numeros = [10, 35, 7, 90, 22, 90, 2];

    let menor = numeros[0];
    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] < menor) {
            menor = numeros[i];

        } else if (numeros[i] > mayor) {
            mayor = numeros[i];
        } else {
            console.log(`Valores repetidos: ${numeros[i]}`)
        }

    }
    alert(`De los numeros ${numeros.join(' / ')}\n
    El menor es: ${menor}
    El mayor es: ${mayor}`);
}


//Ejemplo integrador
//Tarea: Unir los console.log en una alerta.
//Eliminar el ultimo valor y mostrarlo. ok
//Añadir dos valores nuevos con .push (prompt) ok
//contar cantidad de ventas mayores a $10.000. 
function calcularVentas() {
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
    let total = 0;
    let mayores = [0];
    let contadorVentas = 0;
    let mayor = ventas[0];
    let valorEliminado = ventas.pop();
    let valor1 = parseInt(prompt("Ingrese primer valor"));
    let valor2 = parseInt(prompt("Ingrese segundo valor"));
    ventas.push(valor1, valor2);

    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
        if (ventas[i] > mayor) {
            mayor = ventas[i];
            if (ventas[i] >= 10000) {
                mayores.push(ventas[i])
                contadorVentas++;
            }
        }

    }

    alert(`Total de ventas: ${total} \nMayor: ${mayor}
        promedio: ${total / ventas.length}
        Valores sobres $10.000. ${mayores.join(' / ')}
        Conteo de mayores: ${contadorVentas}
        Valor Elminado: ${valorEliminado}`);
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

    }
}

