const API_KEY = "3e867330616c39fa60d18a1af5d82f16"


async function obterCoordenadas(city) {
  const apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
  try {
    const response = await fetch(apiURL);
    return await response.json();
  } catch (error) {
    console.error("Error ao obter datos do clima:",
      error);
  }
}


async function buscarCidade() {
  let cidade = document.getElementById("city").value;
  let resultadoDiv = document.getElementById("resultado");

  if (cidade) {
    const coordenadas = await obterCoordenadas(cidade);

    if (coordenadas && coordenadas.length > 0) {
      
      let resultadosHTML = "";
      coordenadas.forEach(coord => {
        resultadosHTML += `<div class="column is-half">
            <div class="box">
                <article class="media is-flex is-align-items-center">
                  <div class="media-left">
                    <figure class="image is-32x32">
                      <img src="./assets/location_icon.svg" alt="Icono cidade"/>
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>${coord.name}</strong>
                        <small>${coord.country}</small>
                      </p>
                      <p>
                        Latitude: ${coord.lat}
                      </p>
                      <p>Lonxitude: ${coord.lon}</p>
                    </div>
                  </div>
                  <div>
                    <button class="button is-info" onclick="abrirDetalleMeteo(${coord.lat}, ${coord.lon})">

                        Ver máis
                    </button>
                  </div>
                </article>
              </div>
        </div>`
      });
      resultadoDiv.innerHTML = resultadosHTML;
    } else {
      resultadoDiv.innerHTML = "<p>Cidade non atopada.</p>";
    }
  } else {
    resultadoDiv.innerHTML = "<p>Por favor, escribe unha cidade.</p>";
  }
}

document.getElementById("botonBuscar").addEventListener("click", buscarCidade);


function abrirDetalleMeteo(lat, lon) {
  const urlDetalle = `index.html?lat=${lat}&lon=${lon}`;
  window.open(urlDetalle, '_self');
} 