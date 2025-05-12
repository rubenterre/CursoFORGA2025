// Data do evento
const countDownDate = new Date('2025-06-06T16:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculo do tempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    // Mostra os resultados nos elementos correspondentes
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    // Se remata a conta atrás
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'FESTA!';
    }
}

// Actualiza cada segundo
const timer = setInterval(updateCountdown, 1000);
updateCountdown();


/* MODAL */

const modalBtn = document.getElementById('submit');
const modal = document.getElementById('modal');

function toggleModal() {
  modal.classList.toggle('show');
}

modalBtn.addEventListener('click', toggleModal);


document.addEventListener('click', function(event) {
  if (!modalBtn.contains(event.target) && !modal.contains(event.target)) {
    modal.classList.remove('show');
  }
});
