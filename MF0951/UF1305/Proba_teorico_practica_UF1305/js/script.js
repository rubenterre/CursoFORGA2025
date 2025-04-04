// JSON de datos dos coches de Ferrari

const ferrari = {
    "296 GTB": {
        "imaxe": "assets/img/296GTB.avif",
        "logo": "assets/img/Logo_296GTB.avif",
        "motor": "V6 Biturbu + MGU-K(eléctrico)",
        "potencia": "830CV (610CV + 220V)",
        "aceleración": "0 a 100km/h en 2,9s"
    },
    "812 GTS": {
        "imaxe": "assets/img/812GTS.avif",
        "logo": "assets/img/Logo_812GTS.avif",
        "motor": "V12 Biturbu",
        "potencia": "730CV",
        "aceleración": "0 a 100km/h en 2,9s"
    },
    "SF90 Spider": {
        "imaxe": "assets/img/SF90_Spider.avif",
        "logo": "assets/img/Logo_SF90_Spider.avif",
        "motor": "V6 Biturbu + 3 motores MGU-K(eléctrico)",
        "potencia": "1000CV (780CV + 220V*3)",
        "aceleración": "0 a 100km/h en 2,5s"
    },
    "Purosangue": {
        "imaxe": "assets/img/Purosangue.avif",
        "logo": "assets/img/Logo_Purosangue.avif",
        "motor": "V12 + MGU-K(eléctrico)",
        "potencia": "725CV",
        "aceleración": "0 a 100km/h en 3,5s"
    }
}

// Función cambiar os coches

let logoCoche = document.getElementById("logoCoche");
let modelo = document.getElementById("modelo");
let motor = document.getElementById("motor");
let potencia = document.getElementById("potencia");
let aceleracion = document.getElementById("aceleracion");
let buttons = document.querySelectorAll(".card__boton");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

function cambiarCoche(coche) {

    switch (coche) {
        case "296 GTB":

            logoCoche.src = ferrari["296 GTB"].logo;
            modelo.src = ferrari["296 GTB"].imaxe;
            motor.textContent = ferrari["296 GTB"].motor;
            potencia.textContent = ferrari["296 GTB"].potencia;
            aceleracion.textContent = ferrari["296 GTB"].aceleración;

/*          btn1.classList.add("active");
            btn2.classList.remove("active");
            btn3.classList.remove("active");
            btn4.classList.remove("active"); */

            console.log("Has seleccionado: Ferrari 296 GTB")

            break;

        case "812 GTS":

            logoCoche.src = ferrari["812 GTS"].logo;
            modelo.src = ferrari["812 GTS"].imaxe;
            motor.textContent = ferrari["812 GTS"].motor;
            potencia.textContent = ferrari["812 GTS"].potencia;
            aceleracion.textContent = ferrari["812 GTS"].aceleración;

/*             btn1.classList.remove("active");
            btn2.classList.add("active");
            btn3.classList.remove("active");
            btn4.classList.remove("active"); */

            break;

        case "SF90 Spider":

            logoCoche.src = ferrari["SF90 Spider"].logo;
            modelo.src = ferrari["SF90 Spider"].imaxe;
            motor.textContent = ferrari["SF90 Spider"].motor;
            potencia.textContent = ferrari["SF90 Spider"].potencia;
            aceleracion.textContent = ferrari["SF90 Spider"].aceleración;

/*             btn1.classList.remove("active");
            btn2.classList.remove("active");
            btn3.classList.add("active");
            btn4.classList.remove("active"); */

            break;

        case "Purosangue":

            logoCoche.src = ferrari["Purosangue"].logo;
            modelo.src = ferrari["Purosangue"].imaxe;
            motor.textContent = ferrari["Purosangue"].motor;
            potencia.textContent = ferrari["Purosangue"].potencia;
            aceleracion.textContent = ferrari["Purosangue"].aceleración;

/*             btn1.classList.remove("active");
            btn2.classList.remove("active");
            btn3.classList.remove("active");
            btn4.classList.add("active"); */

            break;

        default:
            logoCoche.src = "Error";
            modelo.src = "Error";
            motor.textContent = "Error";
            potencia.textContent = "Error";
            aceleracion.textContent = "Error";

            break;
    }


}