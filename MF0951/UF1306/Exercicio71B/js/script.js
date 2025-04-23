let currentIndex = 0;
const slides = document.querySelectorAll('.slider__slide');
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slider__contenedor');

// Botones de navegación
// Crear indicadores dinámicamente
const indicadoresContainer = document.querySelector('.slider__indicadores');
slides.forEach((_, index) => {
  const indicador = document.createElement('div');
  indicador.classList.add('slider__indicador');
  if (index === 0) indicador.classList.add('activo'); // El primer indicador es activo por defecto
  indicador.addEventListener('click', () => mostrarSlide(index)); // Permite hacer clic en los indicadores
  indicadoresContainer.appendChild(indicador);
});

// Actualizar indicadores al cambiar de slide
function actualizarIndicadores() {
  const indicadores = document.querySelectorAll('.slider__indicador');
  indicadores.forEach((indicador, index) => {
    if (index === currentIndex) {
      indicador.classList.add('activo');
    } else {
      indicador.classList.remove('activo');
    }
  });
}


function mostrarSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  const translateValue = -currentIndex * 100 + '%';
  sliderContainer.style.transform = 'translateX(' + translateValue + ')';
  actualizarIndicadores(); 
}

function siguienteSlide() {
  mostrarSlide(currentIndex + 1);
}

function previaSlide() {
  mostrarSlide(currentIndex - 1); 
}

// Autoplay
setInterval(siguienteSlide, 3000);