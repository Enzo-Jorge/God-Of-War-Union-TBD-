const box = document.querySelector(".container-carrosel");
const imagens = document.querySelectorAll(".container-carrosel img");

let contador = 0;

function  slider() {
    contador++;

    if(contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${- contador * 100}%)`
}

setInterval(slider, 2000);