const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;
const intervalTime = 3000; // Tiempo entre transiciones (en milisegundos)

// Actualiza la posición del carrusel
function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Avanza al siguiente elemento
function showNext() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

// Retrocede al elemento anterior
function showPrev() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

// Configurar botones manuales
nextButton.addEventListener('click', () => {
  showNext();
  resetAutoSlide();
});

prevButton.addEventListener('click', () => {
  showPrev();
  resetAutoSlide();
});

// Hacer que el carrusel avance automáticamente
let autoSlide = setInterval(showNext, intervalTime);

// Restablecer el intervalo cuando se usa manualmente
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(showNext, intervalTime);
}
