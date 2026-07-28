
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

function encontrarMayor(){
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
function sumaryresta(){
function sumar(a, b, c){
    return a + b - c;
}

let number1 = 10
let number2 = 2
let number3 = 4

let sumacion = sumar(number1, number2, number3);
alert(`La suma entre ${number1}, ${number2} es ${number1 + number2}\ny si le restamos 4 seria: ${sumar} `)

}
