var rellax = new Rellax('.rellax');


// Función para alternar el menú de navegación
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
