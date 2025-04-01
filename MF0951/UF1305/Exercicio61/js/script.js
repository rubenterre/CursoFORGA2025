
//Navbar BulmaCSS Mobile
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});



// API OpenWeatherMaps

const API_KEY = "3e867330616c39fa60d18a1af5d82f16"

async function obterDatosTempo(lat, lon) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=gl`
  try {
    const response = await fetch(apiURL);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener datos del clima:",
      error);
  }
}

console.log(obterDatosTempo("42.84", "-8.57"))

async function actulizarDatos(lon, lat) {

  const data = await obterDatosTempo(lon, lat);

  if (data) {
    document.getElementById("weatherTemperature").innerHTML = `${Math.round(data.main.temp)}ºC`;
    document.getElementById("weatherIcon").src = `./assets/iconos/${data.weather[0].icon}.png`;
    document.getElementById("feellike").innerHTML = `${Math.round(data.main.feels_like)}ºC`;
    document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
    document.getElementById("tempMax").innerHTML = `${Math.round(data.main.temp_max)}ºC`;
    document.getElementById("tempMin").innerHTML = `${Math.round(data.main.temp_min)}ºC`;
    document.getElementById("location").innerHTML = `${data.name}`;
    document.getElementById("description").innerHTML = `${(data.weather[0].description).toUpperCase()}`;
    document.getElementById("pressure").innerHTML = `${data.main.pressure} hPa`;
    document.getElementById("wind").innerHTML = `${data.wind.speed} m/s`;

    //Data completa

    // Data de hoxe
    const timestamp = data.dt * 1000;
    const fecha = new Date(timestamp);

    const meses = [
      'Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño',
      'Xullo', 'Agosto', 'Septembro', 'Outubro', 'Novembro', 'Decembro'
    ];

    // Obtener día, mes e ano
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const anio = fecha.getFullYear();

    const nomeMes = meses[mes];

    const fechaFormateada = `Hoxe, ${dia} ${nomeMes} ${anio}`;

    document.getElementById('data').innerHTML = fechaFormateada;


    //Abrente
    const timestampAmancer = data.sys.sunrise * 1000;

    const dataAmancer = new Date(timestampAmancer);

    const horaAmancer = dataAmancer.getHours();
    const minutosAmancer = dataAmancer.getMinutes();

    const horaAmancerFormateada = `${horaAmancer}:${minutosAmancer}h`;

    document.getElementById("amancer").innerHTML = horaAmancerFormateada;

    //Solpor
    const timestampSolpor = data.sys.sunset * 1000;

    const dataSolpor = new Date(timestampSolpor);

    const horaSolpor = dataSolpor.getHours();
    const minutosSolpor = dataSolpor.getMinutes();

    const horaSolporFormateada = `${horaSolpor}:${minutosSolpor}h`

    document.getElementById("solpor").innerHTML = horaSolporFormateada;

    
    //Cambiar fondo

    function cambiarColorDeFondo() {
      const agora = new Date();

      let claseFondo;
      if (agora >= dataAmancer && agora < dataSolpor) {
        claseFondo = 'fondo-dia';
      } else {
        claseFondo = 'fondo-noite';
      }

      document.body.className = '';
      document.body.classList.add(claseFondo);
    }

    cambiarColorDeFondo();
  }

}


actulizarDatos(42.84, -8.57)