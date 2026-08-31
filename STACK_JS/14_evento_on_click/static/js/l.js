const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "blue"
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "red"
});

// Tarea 
/*Crear dos botones con evento onmouseover y onmouseout 
-Cambia el texto de un boton
-Cambar el fondo y color de texto del segundo boton.
*/
const BOTON = document.getElementById("MIBOTON");

BOTON.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    BOTON.style.backgroundColor = "blue"
    this.innerText = "Haz cambiado el color!"
});

BOTON.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    BOTON.style.backgroundColor = "red"
    this.innerText = "Pasa el cursor sobre mi"
});


const Button = document.getElementById("mibutton");

Button.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    Button.style.backgroundColor = "blue"
    Button.style.color = "black"
    this.innerText = "Haz cambiado el color!"
});

Button.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    Button.style.backgroundColor = "red"
    Button.style.color = "green"
    this.innerText = "Pasa el cursor sobre mi"
});
