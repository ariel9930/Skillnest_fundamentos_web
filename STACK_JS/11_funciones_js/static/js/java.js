
//Ejemplo Funcion (sin parametros)
function saludar() {
    alert(`¡Hola, bienvenido!`);
}

saludar(); //

function saludar(nombre) {
    alert("¡Hola, " + nombre + "!");
}

saludar("Luis");
saludar("Ana");

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
console.log("El número mayor entre", numero1, "y", numero2, "es:", maximo);