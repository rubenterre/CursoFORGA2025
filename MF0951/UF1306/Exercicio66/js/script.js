const series = {
    "Loki": {
        "fondo": "url(assets/fondo_Loki.png)",
        "logo": "assets/Logos/logo_loki.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2021 - 2023",
        "tempadas": "2 tempadas",
        "categorías": "Ciencia ficción, Fantástica, Superhéroe, Acción e aventura",
        "descricion": "A nova serie Loki, de Marvel Studios, empeza alí onde terminou Vengadores: Endgame. Nela, o voluble vilán Loki (Tom Hiddleston) volve gañarse o alcume de Dios do Engano. Kate Herron é a súa directora e Michael Waldron o guionista principal.",
        "trailer": `<button onclick="mostrarPopupLoki()" class="informacion__button">Trailer</button>`
    },
    "Percy": {
        "fondo": "url(assets/fondo_percy.png)",
        "logo": "assets/Logos/logo_percy.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2023",
        "tempadas": "1 tempada",
        "categorías": "Familiar, Fantástica, Acción e aventura",
        "descricion": "Percy Jackson emprende unha perigosa misión. Deixando atrás aos monstros e burlando aos deuses, percorrerá Estados Unidos para devolver o Raio Mestre de Zeus e evitar a guerra. Con axuda dos seus compañeiros de misión, Annabeth e Grover, a viaxe de Percy achegarao máis ás respostas que busca: como encaixar nun mundo que lle é ajenoy se logrará entender o seu destino.",
        "trailer": `<button onclick="mostrarPopupPercy()" class="informacion__button">Trailer</button>`

    },
    "Mandalorian": {
        "fondo": "url(assets/fondo_mandalorian.png)",
        "logo": "assets/Logos/logo_mandalorian.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2019 - 2023",
        "tempadas": "3 tempadas",
        "categorías": "Ciencia ficción, Acción e aventura",
        "descricion": "Tras a caída do Imperio, un solitario Mandaloriano viaxa por unha galaxia sen lei co seu protexido: Grogu.",
        "trailer": `<button onclick="mostrarPopupMandaloriano()" class="informacion__button">Trailer</button>`

    },
    "Solo": {
        "fondo": "url(assets/fondo_asesinatos.png)",
        "logo": "assets/Logos/logo_solo_asesinatos.png",
        "iconos": {
            "idade": "assets/iconos/16+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2021 - 2023",
        "tempadas": "3 tempadas",
        "categorías": "Misterio, Drama, Comedia, Policiaca",
        "descricion": "Aos veciños do Upper West Side Charles, Oliver e Mabel únelles a súa paixón polos crimes reais. Cando un residente do seu edificio morre, o trío decide resolver o misterio e gravar un podcast relatándoo.",
        "trailer": `<button onclick="mostrarPopupSolo()" class="informacion__button">Trailer</button>`

    }
}

function botonSeries(serie) {

    const body = document.querySelector("body");
    const informacionLogo = document.getElementById("informacionLogo");
    const informacionIdade = document.getElementById("informacionIdade");
    const informacionAnos = document.getElementById("informacionAnos");
    const informacionTempada = document.getElementById("informacionTempada");
    const informacionCategorias = document.getElementById("informacionCategorias");
    const informacionDescripcion = document.getElementById("informacionDescripcion");
    const informacionTrailer = document.getElementById("informacionTrailer");

    body.style.background = series[serie].fondo;
    informacionLogo.src = series[serie].logo;
    informacionLogo.alt = "Logo de la serie Loki";
    informacionIdade.src = series[serie].iconos.idade;
    informacionIdade.alt = "A partir de 12 anos";
    informacionAnos.textContent = series[serie].ano;
    informacionTempada.textContent = series[serie].tempadas;
    informacionCategorias.textContent = series[serie].categorias;
    informacionDescripcion.textContent = series[serie].descricion;
    informacionTrailer.innerHTML = series[serie].trailer;
}


// Popup - É necesario poñer o iframe completo de cada vídeo para que YouTube non bloquee o vídeo aplicando a restriccións de seguridade X-Frame-Options: sameorigin

        function mostrarPopupLoki() {
            let popup = document.getElementById('popup');
            let popupIframe = document.getElementById('popupIframe');
            popupIframe.innerHTML = `
            <iframe
            id="popupVideo"
            width="800px"
            height="450px"
            src="https://www.youtube.com/embed/fM7v_IFaH1g?si=p0WLKjeuBnc7ce_0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>`;
            popup.style.display = 'block';
 
        }

        function mostrarPopupPercy() {
            let popup = document.getElementById('popup');
            let popupIframe = document.getElementById('popupIframe');
            popupIframe.innerHTML = `
            <iframe
            id="popupVideo"
            width="800px"
            height="450px"
            src="https://www.youtube.com/embed/0P1sDTOLtEw?si=kG_8AdYoSlEbDSTb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
            `;
           popup.style.display = 'block';
        }

        function mostrarPopupMandaloriano() {
            let popup = document.getElementById('popup');
            let popupIframe = document.getElementById('popupIframe');
            popupIframe.innerHTML = `
            <iframe
            id="popupVideo"
            width="800px"
            height="450px"
            src="https://www.youtube.com/embed/piXRBQCKzQI?si=PCVc65phwx86hFH_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
            `;
           popup.style.display = 'block';

        }

        function mostrarPopupSolo() {
            let popup = document.getElementById('popup');
            let popupIframe = document.getElementById('popupIframe');
            popupIframe.innerHTML = `
            <iframe
            id="popupVideo"
            width="800px"
            height="450px"
            src="https://www.youtube.com/embed/kmgT20OXV1o?si=86T77qqSnn2Iy1K3"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
            `;
           popup.style.display = 'block';

        }


        function cerrarPopup() {
            const popup = document.getElementById("popup");
            popup.style.display = "none";
            var player = document.getElementById("popupVideo");
            player.remove();
        }