let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",

    extras: [
        "Lechuga",
        "Pepinos",
        "Miel"
    ],

    mostrarIngredientes: function () {
        alert("Pan: "+ this.pan);
        alert("Carne: "+ this.carne);
        alert("Queso: "+ this.queso);
        alert(
            "Extras: "+
            this.extras.join(", ")

        );

    }

};

//ejercicio acceder al pan

console.log(hamburguesaEspecial.pan)
hamburguesaEspecial.mostrarIngredientes();


//metodo casa
let casa = {

    direccion:"Av. Siempre Viva 742",

    habitaciones:4,

    baños:2,

    mostrarInformacion:function(){

        alert("direccion: " + this.direccion);
        alert("habitaciones: " +  this.habitaciones);
        alert("baños: " +  this.baños);

    }

};

//auto

let auto = {

    Marca:"honda Clvic",

    modelo:"corolla",

    año:2023,

    encender:function(){

        alert("Marca: " + this.Marca);
        alert("Modelo: " + this.modelo);
        alert("Año: " + this.año);

    }

};

//Objeto con metodo