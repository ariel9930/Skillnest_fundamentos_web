const foto = document.getElementById("fotoo")
const letra = document.getElementById("letras")

foto.addEventListener("mouseover", function () {
    foto.src = ("static/img/elgrito.png");
    letra.innerText = "El grito pintura realizada por Javier Colque"
});
foto.addEventListener("mouseout", function () {
    foto.src = "static/img/tungsahur.png"
    letra.innerHTML = "El gran rey antes de ser derrotado.. (1676-1700)"
});