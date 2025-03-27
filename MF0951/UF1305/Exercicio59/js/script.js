
const gallery = document.getElementById("gallery");

const azul = document.getElementById("azul");
const branco = document.getElementById("branco");
const grisoscuro = document.getElementById("grisoscuro");
const negro = document.getElementById("negro");
const amarelo = document.getElementById("amarelo");


function changeCar(color) {
    switch (color) {
        case 'azul':
            gallery.src = "./assets/img/color_cars_img/azul.avif";

            azul.src = "./assets/img/colors_btn/color_azul_active.svg";
            branco.src = "./assets/img/colors_btn/color_branco.svg";
            grisoscuro.src = "./assets/img/colors_btn/color_grisoscuro.svg";
            negro.src = "./assets/img/colors_btn/color_negro.svg";
            amarelo.src = "./assets/img/colors_btn/color_amarelo.svg";

            break;
        case 'branco':
            gallery.src = "./assets/img/color_cars_img/branco.avif";

            azul.src = "./assets/img/colors_btn/color_azul.svg";
            branco.src = "./assets/img/colors_btn/color_branco_active.svg";
            grisoscuro.src = "./assets/img/colors_btn/color_grisoscuro.svg";
            negro.src = "./assets/img/colors_btn/color_negro.svg";
            amarelo.src = "./assets/img/colors_btn/color_amarelo.svg";
            break;
        case 'grisoscuro':
            gallery.src = "./assets/img/color_cars_img/grisoscuro.avif";

            azul.src = "./assets/img/colors_btn/color_azul.svg";
            branco.src = "./assets/img/colors_btn/color_branco.svg";
            grisoscuro.src = "./assets/img/colors_btn/color_grisoscuro_active.svg";
            negro.src = "./assets/img/colors_btn/color_negro.svg";
            amarelo.src = "./assets/img/colors_btn/color_amarelo.svg";
            break;
        case 'negro':
            gallery.src = "./assets/img/color_cars_img/negro.avif";

            azul.src = "./assets/img/colors_btn/color_azul.svg";
            branco.src = "./assets/img/colors_btn/color_branco.svg";
            grisoscuro.src = "./assets/img/colors_btn/color_grisoscuro.svg";
            negro.src = "./assets/img/colors_btn/color_negro_active.svg";
            amarelo.src = "./assets/img/colors_btn/color_amarelo.svg";
            break;
        case 'amarelo':
            gallery.src = "./assets/img/color_cars_img/amarelo.avif";

            azul.src = "./assets/img/colors_btn/color_azul.svg";
            branco.src = "./assets/img/colors_btn/color_branco.svg";
            grisoscuro.src = "./assets/img/colors_btn/color_grisoscuro.svg";
            negro.src = "./assets/img/colors_btn/color_negro.svg";
            amarelo.src = "./assets/img/colors_btn/color_amarelo_active.svg";
            break;
        default:
            ERROR
            break;
    }

}