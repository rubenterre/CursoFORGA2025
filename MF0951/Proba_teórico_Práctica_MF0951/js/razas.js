const razas = {
    "Protoss": {
      "nome": "Protoss",
      "descricion": "Durante milleiros de anos, os antigos e misteriosos protoss dominaron a súa parte da galaxia. Os guerreiros protoss non teñen igual en destreza e valor, grazas á combinación da tecnoloxía coa súa formidable forza psiónica.",
      "imaxeFondo": "./assets/razas/protoss_background_1600_desktop.avif",
      "imaxeFondoMobile": "./assets/razas/races_protoss_960_mobile.avif",
      "iconoBotonDefault": "./assets/icons/protoss_icon_default.avif",
      "iconoBotonActive": "./assets/icons/protoss_icon_active.avif"
    },
    "Terran": {
      "nome": "Terran",
      "descricion": "Prácticamente acabados de chegar ao sector Koprulu, os terran son os descendentes dunha desastrosa expedición de colonización que partiu da Terra hai séculos. Sen a avanzada tecnoloxía dos protoss nin o talento natural dos zerg, as forzas militares terran apóianse nunha variada combinación de unidades versátiles e resistentes para superar aos seus rivais.",
      "imaxeFondo": "./assets/razas/terran_background_1600_desktop.avif",
      "imaxeFondoMobile": "./assets/razas/races_terran_960_mobile.avif",
      "iconoBotonDefault": "./assets/icons/terran_icon_default.avif",
      "iconoBotonActive": "./assets/icons/terran_icon_active.avif"
    },
    "Zerg": {
      "nome": "Zerg",
      "descricion": "Liderados pola astuta Raíña de Espadas, os alieníxenas zerg teñen a intención de desatar os seus horrores pola galaxia e consumir a todo aquel que se interponga no seu camiño. Os zerg non empregan tecnoloxía para crear as súas armas, armaduras e naves estelares. No seu lugar, esas funcións cúmprenas de forma eficiente mediante adaptación biolóxica e mutación planificada.",
      "imaxeFondo": "./assets/razas/zerg_background_1600_desktop.avif",
      "imaxeFondoMobile": "./assets/razas/races_zerg_960_mobile.avif",
      "iconoBotonDefault": "./assets/icons/zerg_icon_default.avif",
      "iconoBotonActive": "./assets/icons/zerg_icon_active.avif"
    }
  }
           
  function cargarRaza(raza) {
    const razaSeleccionada = razas[raza];
    if (!razaSeleccionada) {
        console.error("Raza no válida:", raza);
        return;
    }


    const contedorRaza = document.getElementById("razas");
    const iconoProtoss = document.getElementById("iconoProtoss");
    const iconoTerran = document.getElementById("iconoTerran");
    const iconoZerg = document.getElementById("iconoZerg");

    // Cambiar a imaxe de fondo

      // Engade clase de animación
      contedorRaza.classList.remove('animarfondo'); // por si acaso     
      contedorRaza.classList.add('animarfondo');
    
      // Cambiar a imaxe de fondo
      if(window.innerWidth <= 768){
        contedorRaza.style.backgroundImage = `url(${razaSeleccionada.imaxeFondoMobile})`;
      } else {
        contedorRaza.style.backgroundImage = `url(${razaSeleccionada.imaxeFondo})`;
      }

      //Borrar as clases de animación por si acaso
      contedorRaza.addEventListener('animationend', function handler() {
        contedorRaza.classList.remove('animarfondo');
        contedorRaza.removeEventListener('animationend', handler);
      }); 
 

    // Cambiar a descrición
    document.getElementById("titleRaza").textContent = razaSeleccionada.nome;
    document.getElementById("descriptionRaza").textContent = razaSeleccionada.descricion;

    // Cambiar o icono do botón

    if (razaSeleccionada.nome === "Protoss") {
      iconoProtoss.src = razaSeleccionada.iconoBotonActive;
  } else {
      iconoProtoss.src = razas["Protoss"].iconoBotonDefault;
  }
  
  if (razaSeleccionada.nome === "Terran") {
      iconoTerran.src = razaSeleccionada.iconoBotonActive;
  } else {
      iconoTerran.src = razas["Terran"].iconoBotonDefault;
  }
  
  if (razaSeleccionada.nome === "Zerg") {
      iconoZerg.src = razaSeleccionada.iconoBotonActive;
  } else {
      iconoZerg.src = razas["Zerg"].iconoBotonDefault;
  }

  //Pódese facer tamén cun operador ternario que fai o mesmo co condicional pero con outra sintaxe

  /* 
    iconoProtoss.src = razaSeleccionada.nome === "Protoss" ? razaSeleccionada.iconoBotonActive : razas["Protoss"].iconoBotonDefault;
    iconoTerran.src = razaSeleccionada.nome === "Terran" ? razaSeleccionada.iconoBotonActive : razas["Terran"].iconoBotonDefault;
    iconoZerg.src = razaSeleccionada.nome === "Zerg" ? razaSeleccionada.iconoBotonActive : razas["Zerg"].iconoBotonDefault; 
  */
  
}


// Menú despregable do móbil

function toggleMenu() {
  let headerContainer = document.querySelector(".header__container--mobile");
  if (headerContainer.style.display === "block") {
    headerContainer.style.display = "none";
  } else {
    headerContainer.style.display = "block";
  }
}
