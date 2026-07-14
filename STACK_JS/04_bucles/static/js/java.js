/* Ejemplo de bucle for*/
function cuentaRegresva() {
    for (let i = 0; i <= 5; i++) {
        alert(i);
    }
}
function cuentaRegresvia() {
    for (let i = 10; i >= 0; i--) {
        alert(i);
    }
}
function recorrerLista() {
    // Lista es un tipo de dato (array/Lista)
    //[] = ["nombre", 4, True, [2,4]]
    /*
    let nombre = "carlos";
    alert(nombre);
                    0            1
    let nombrea = ["Carlos", "Maria"]
    alert(nombre[0]) --> Imprime Carlos
    alert(nombre[1]) --> Imprime Maria
    alert(nombres)

    */
    let usuarios = ["Ana", "Luis", "María", "javier"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

/* Ejemplo de bucle while*/

function reproducción() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}

function SimulaciónCarga() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos...`);
        datosPendientes--;
    }
}

function contraseñaCorrecta() {
    let contraseñaCorrecta = false;
    // !variables = variable es distinta a  verdadero - dentro de una condición
    while (!contraseñaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}