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
function ejercicio1(){
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
function ejercicio2(){
    let Tipo = prompt("Tipo de usuario");
    let prestamoProfesor = parseInt(prompt("Ingrese la cantidad de libros:\nl)"));
    let Estudiante = "Estudiante";
    let Profesor = "Profesor";
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

// ---

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

// ---

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