
//Ejemplo Funcion (sin parametros)
function saludar() {
    alert(`¡Hola, bienvenido!`);
}

//Funcion con parametros
//El parametro recibe un valor para trabajar en la función.
//El parametro recibe el tipo de dato al  momento de tomar valor.
function saludar(nombre) {
    alert("¡Hola, " + nombre + "!");
}

saludar("Ariel");
saludar("Dantevenitostefano");

function encontrarMayor() {
    function encontrarMaximo(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    let numero1 = 10;
    let numero2 = 7;
    let maximo = encontrarMaximo(numero1, numero2);
    alert(`El número mayor entre ${numero1} y ${numero2}, es: ${maximo}`);
}

//TAREA
/*
Crear una funcion que reciba 3 parametros, a b y c.
Debe Suma a + b y el resultado restarlo por c.
Devolver el valor final y mostrar con un alert.
*/

function sumar(a, b, c) {
    return a + b - c;
}
function sumaryresta() {

    let number1 = 10
    let number2 = 2
    let number3 = 4

    let sumacion = sumar(number1, number2, number3);
    alert(`la suma entre ${number1} y ${number2} es: ${number1 + number2}\nY si le restamos ${number3} sera: ${sumacion}`)

}


function operaciones(a, b, c) {
    return a + b - c;
}
function OPERACION() {
    let num1 = parseInt(prompt("Ingrese primer numero"));
    let num2 = parseInt(prompt("Ingrese segundo numero"));
    let num3 = parseInt(prompt("Ingrese tercer numero"));
    //Mostramos resultado
    let resultado = operaciones(num1, num2, num3);
    alert(`La operación de ${num1} + ${num2} - ${num3} = ${resultado}`)
}

/* 
Crear una funcon que reciba un parametro y permta a traves de un bucle contar hasta este.
Ej: Se recbe el numero 5 y muestra: 1 - 2 - 3 - 4 - 5
*/
// 1. Función con la lógica: recibe el parámetro, ejecuta el bucle y devuelve el texto
function contarHasta(limite) {
    let numeros = [];
    if (limite < 100) {
    }
        for (let i = 1; i <= limite; i++) {
            numeros.push(i);
        }
    return numeros.join(" - ");
    }

function EPPEPEPEP() {
    let numero = parseInt(prompt("Ingrese un número"));

    let resultado = contarHasta(numero);
    alert(`La cuenta hasta el ${numero} es: ${resultado}`);
}
