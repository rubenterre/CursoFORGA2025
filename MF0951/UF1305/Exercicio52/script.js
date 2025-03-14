document.addEventListener('DOMContentLoaded', function () {
    // Obter referencias aos elementos do DOM
    var tarxeta1 = document.getElementById('tarxeta1');
    var tarxeta2 = document.getElementById('tarxeta2');
    var tarxeta3 = document.getElementById('tarxeta3');
  
    var botonTarxeta1 = document.getElementById('botonTarxeta1');
    var botonTarxeta2 = document.getElementById('botonTarxeta2');
    var botonTarxeta3 = document.getElementById('botonTarxeta3');
  
    // Funcións para amosar tarxetas
    function amosarTarxeta1() {
      tarxeta1.style.display = 'block';
      tarxeta2.style.display = 'none';
      tarxeta3.style.display = 'none';
    }
  
    function amosarTarxeta2() {
      tarxeta1.style.display = 'none';
      tarxeta2.style.display = 'block';
      tarxeta3.style.display = 'none';
    }
  
    function amosarTarxeta3() {
      tarxeta1.style.display = 'none';
      tarxeta2.style.display = 'none';
      tarxeta3.style.display = 'block';
    }
  
    // Asignar funcións aos eventos de clic
    botonTarxeta1.addEventListener('click', amosarTarxeta1);
    botonTarxeta2.addEventListener('click', amosarTarxeta2);
    botonTarxeta3.addEventListener('click', amosarTarxeta3);
  });
  
  if(display = 'none'){
    tarxeta1.style.display = 'block';
  }