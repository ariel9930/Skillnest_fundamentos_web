let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del titulo es : ${title.textContent}`)

//selecconar un parrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo);


//logo
let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

//seleccionar parrafos 
let parrafos = document.querySelector(".texto");
console.log(parrafos.textContent); // "Este es el primer párrafo."

//elementos inexistentes
let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null
if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}

//Tarea: 
/* Crear un botón y aplicar condiciones al igual que el ejemplo...
-Debe cambiar su texto al momento de hacerle click
-Debe actvarse un hover js cambiando el color de fondo */

let Button = document.querySelector(".btn");
Button.addEventListener("mouseover", function () {
    Button.style.backgroundColor = "blue";
                Button.style.color = "white";

});

Button.addEventListener("mouseout", function () {
    Button.style.backgroundColor = "white";
            Button.style.color = "black";
});

Button.addEventListener("click", function () {
    if(this.innerText === "botonsin din dun"){
    this.innerText = "apretaste el boton";
    Button.style.backgroundColor = "blue";
    }else{
        this.innerText = "botonsin din dun";
    }


});