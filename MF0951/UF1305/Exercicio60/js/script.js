
//Navbar BulmaCSS Mobile
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
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

console.log(obterDatosTempo("42.84","-8.57"))

async function actulizarDatos(lon, lat) {

    const data = await obterDatosTempo(lon, lat);

    if(data){
        document.getElementById("weatherTemperature").innerHTML = `${Math.round(data.main.temp)}ºC`;
        document.getElementById("weatherIcon").src = `./assets/iconos/${data.weather[0].icon}.png`;
        document.getElementById("feellike").innerHTML = `${Math.round(data.main.feels_like)}ºC`;
        document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
        document.getElementById("tempMax").innerHTML = `${Math.round(data.main.temp_max)}ºC`;
        document.getElementById("tempMin").innerHTML = `${Math.round(data.main.temp_min)}ºC`;
        document.getElementById("location").innerHTML = `${data.name}`;
        document.getElementById("description").innerHTML = `${data.weather[0].description}`;


    }
    
}


actulizarDatos(42.84,-8.57)