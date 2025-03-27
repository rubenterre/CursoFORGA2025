// API OpenWeatherMaps

const API_KEY = "3e867330616c39fa60d18a1af5d82f16"

/* const lat = "42.84"
const lon = "-8.57" */

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

    }
    
}


actulizarDatos(42.84,-8.57)