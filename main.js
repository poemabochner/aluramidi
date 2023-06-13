function tocaSom (idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador];

  const instrumento = tecla[contador].classList[1];

  tecla[contador].onclick = function () {
    tocaSom();
  }

  contador = contador + 1;

  
}
