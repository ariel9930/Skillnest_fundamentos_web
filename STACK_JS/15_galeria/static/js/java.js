const foto = document.getElementById("fotoo")

foto.addEventListener("mouseover", function () {
    foto.src = ("static/img/elgrito.png");
});
foto.addEventListener("mouseout", function () {
    foto.src = "static/img/tungsahur.png"
});