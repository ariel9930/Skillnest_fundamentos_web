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