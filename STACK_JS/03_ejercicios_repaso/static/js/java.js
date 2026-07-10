// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:

// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Categoría del envío
// - Valor correspondiente al despacho
function kiloscliente(){
    let nombreCliente = prompt("Ingresar nombre de cliente: ");
    let peso = parseInt(prompt("Ingresar peso del paquete: "));
    let mensaje = "";
    let valorDespacho = 2000;
    if(peso > 0 && peso <2){
        mensaje =  `Paquete pesa menos de 2kgs \n
        Valor despacho: ${valorDespacho * peso}`;
    } else if(peso > 2 && peso <= 5){
        mensaje = `Paquete pesa: ${peso}
        \nValor despacho: ${valorDespacho * peso}`
    } else if(peso > 5 && peso <=10){
        mensaje = `paquete pesa: ${peso}
        \nValor despacho: ${valorDespacho * peso}`
    } else if(peso > 10 && peso < 1000){
        mensaje = `paquete pesa: ${peso}
        \nValor despacho: ${valorDespacho * peso}`
    }else{
        mensaje = `¡Ingrese valores validos!`
    }

    alert(mensaje);
}

// # Ejercicio 2: Acceso a Biblioteca

// ## Enunciado

// Una biblioteca posee dos tipos de usuarios:

// - Estudiante
// - Profesor

// Solicitar:

// - Tipo de usuario
// - Cantidad de libros solicitados

// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// - Si el préstamo está permitido.
// - Si supera el límite permitido.
// - Mostrar un mensaje diferente según el tipo de usuario.

// Utilizar operadores lógicos para realizar las validaciones.

function Acceso_bibloteca() {
    let usuario = prompt("Ingrese su tipo de usuario (Estudiante o Profesor)").toLowerCase();
    let libros = parseInt(prompt("Ingrese la cantidad de libros"))
    if (usuario === "estudiante" && libros <= 4) {
        alert(`${usuario}, su prestamo de ${libros} libros es valido`)
    } else if (usuario === "estudiante" && libros >= 5) {
        alert(`${usuario}, su prestamo de ${libros} libros es invalido, supera el limite de 4 libros`)
    } else if (usuario === "profesor" && libros <= 6) {
        alert(`${usuario}, su prestamo de ${libros} libros es valido`)
    } else if (usuario === "profesor" && libros >= 7) {
        alert(`${usuario}, su prestamo de ${libros} libros es invalido, supera el limite de 6 libros`)
    }
}

// # Ejercicio 3: Clasificación Deportiva

// ## Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

function Clasficacion_deportiva() {
    let nombre = prompt("Nombre del participante: ")
    let edad = parseInt(prompt("Edad: "))
    if (edad >= 18 && edad >= 16) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 1`)
    } else if (edad <= 15 && edad >= 13) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 2`)
    } else if (edad <= 12 && edad >= 10) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 3`)
    } else if (edad <= 9 && edad >= 7) {
        alert(`El participante ${nombre} tiene ${edad} años.
            \n Va en el grupo 4`)
    }
}


// # Ejercicio 4: Sistema de Bonificación

// ## Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.

function Sistema() {
    let nombre = prompt("Ingrese el nombre")
    let años = parseInt(prompt("ingrese los años de servicios"))
    if (años >= 30 && años >= 20) {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n Recibe bono de $200000`)
    } else if (años <= 19 && años >= 10) {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n Recibe bono de $150000`)
    } else if (años <= 9 && años >= 2) {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n Recibe bono de $100000`)
    } else {
        alert(`El trabajador ${nombre} tiene ${años} años de servicio.
            \n no recibe bono`)
    }
}

// # Ejercicio 5: Evaluación de Velocidad

// ## Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// - Nombre del conductor
// - Velocidad
// - Clasificación obtenida

// ---

// # Requisitos Técnicos

// Cada ejercicio debe cumplir con:

// - Una función independiente.
// - Uso de prompt().
// - Uso de alert().
// - Uso de variables.
// - Uso de if.
// - Uso de else if.
// - Uso de else.
// - Uso de operadores de comparación.
// - Uso de operadores lógicos cuando corresponda.

// ---

// # Desafío Extra

// Agregar una o más de las siguientes mejoras:

// - Validación de campos vacíos.
// - Validación de datos numéricos.
// - Mostrar mensajes utilizando emojis.
// - Mostrar resultados dentro del HTML utilizando `innerHTML`.
// - Cambiar colores o estilos mediante JavaScript según el resultado obtenido.

function Evaluacion_velocidad() {
    let nombre = prompt("Ingrese el nombre del conductor")
    let vel = parseInt(prompt("ingrese la velocidad registrada (KM/h)"))
    if (vel <= 150 && vel >= 100) {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Una velocidad rapida`)
    } else if (vel <= 99 && vel >= 50) {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Una velocidad media`)
    } else if (vel <= 49 && vel >= 0) {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Una velocidad lenta`)
    } else {
        alert(`El conductor ${nombre} tiene una velocidad registrada de  ${vel}KM/h.
            \n Ha exedido el limite`)
    }
}