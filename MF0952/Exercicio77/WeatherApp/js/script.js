// API OpenWeatherMaps

const API_KEY = "3e867330616c39fa60d18a1af5d82f16"

// Obter parámetros da URL
const params = new URLSearchParams(window.location.search);
const lat = params.get('lat');
const lon = params.get('lon');

if (lat && lon) {
  actualizarDatos(lat, lon);
/*   procesarDatos(lat,lon)
 */} else {
  // Usar valores por defecto para O Milladoiro
  actualizarDatos(42.84, -8.57);
/*   procesarDatos(42.84,-8.57)
 */}

//Obter datos do tempo

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



async function actualizarDatos(lon, lat) {

    const data = await obterDatosTempo(lon, lat);

    if(data){
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

           //Amancer
           const timestampAmancer = data.sys.sunrise *1000;

           const dataAmancer = new Date(timestampAmancer);

           const horaAmancer = dataAmancer.getHours();
           const minutosAmancer = dataAmancer.getMinutes();

           const horaAmancerFormateada = `${horaAmancer}:${minutosAmancer} AM`;

           document.getElementById("amancer").innerHTML = horaAmancerFormateada;

           //Solpor
           const timestampSolpor = data.sys.sunset * 1000;

           const dataSolpor = new Date(timestampSolpor);

           const horaSolpor = dataSolpor.getHours();
           const minutosSolpor = dataSolpor.getMinutes();

           const horaSolporFormateada = `${horaSolpor}:${minutosSolpor} PM`

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

// Obter pronóstico por horas
async function obterPronostico(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    procesarDatos(data);
   console.log(data);

  } catch (error) {
    console.error("Error al obtener el pronóstico:", error);
  }
}
console.log(obterPronostico(42.84,-8.57));

// Procesar datos do pronóstico
function procesarDatos(data) {
  const template = document.getElementById('forecast-template');
  const forecastContainer = document.getElementById('forecast-container');
  forecastContainer.innerHTML = ''; 

  data.list.forEach(item => { 
    const clone = template.content.cloneNode(true);

    clone.querySelector('#date').textContent = new Date(item.dt * 1000).getHours() + "h"
    clone.querySelector('#temperature').textContent = `${Math.round(item.main.temp)}°C`;
    clone.querySelector('#weather-icon').src = `./assets/iconos/${item.weather[0].icon}.png`;
    clone.querySelector('#weather-icon').alt = item.weather[0].description;

    forecastContainer.appendChild(clone);
  });
}