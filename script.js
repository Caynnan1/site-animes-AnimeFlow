let menuab = document.getElementById("menu-aberto");

function abrir() {
  menuab.style.display = 'block';
  setTimeout(function() {
    menuab.classList.add('aberto');
  }, 10);
}

function fechar() {
  menuab.classList.remove('aberto');
  setTimeout(function() {
    menuab.style.display = 'none';
  }, 500); // Tempo de transição definido em CSS (0.5s)
}

document.addEventListener('DOMContentLoaded', function() {
  var boxes = document.querySelectorAll('.box-an');

  boxes.forEach(function(box) {
      var texto = box.querySelector('.nome-anime').textContent;
      if (texto.length > 25) {
          box.querySelector('.nome-anime').textContent = texto.substring(0, 25) + '...';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var boxes = document.querySelectorAll('.box-eps');

  boxes.forEach(function(box) {
      var texto = box.querySelector('.nome-ep').textContent;
      if (texto.length > 25) {
          box.querySelector('.nome-ep').textContent = texto.substring(0, 25) + '...';
      }
  });
});

document.getElementById('scrollRight').addEventListener('click', function() {
  const scrollContainer = document.querySelector('.animes');
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' }); // Ajuste o valor 'left' conforme necessário
});