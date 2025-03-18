// Exercicio 53 - 3 - Deidades romanas da semana

function mostrarDeidade(dia) {

    const deidades = {
        "Luns": {
            "Deus": "Luns á Lúa",
            "Descrición": "O luns estaba dedicado á deusa romana Lúa, unha deidade primitiva que foi substituída posteriormente pola deusa Diana."
        },
        "Martes": {
            "Deus": "Martes á Marte",
            "Descrición": "O martes estaba dedicado a Marte, o deus da guerra."
        },
        "Mércores": {
            "Deus": "Mércores á Mercurio",
            "Descrición": "O mércores estaba dedicado ao deus romano Mercurio, o deus do comercio."
        },
        "Xoves": {
            "Deus": "Xoves á Xúpiter",
            "Descrición": "O xoves estaba dedicado a Xúpiter, o deus principal e supremo."
        },
        "Venres": {
            "Deus": "Venres á Venus",
            "Descrición": "O venres estaba dedicado á deusa Venus, a deusa do amor e do desexo."
        },
        "Sábado": {
            "Deus": "Sábado á Saturno",
            "Descrición": "O sábado dedicábase ao deus Saturno, aínda que o nome nos chega da cultura xudeo-cristiá onde significa 'día de repouso'."
        },
        "Domingo": {
            "Deus": "Domingo á Apolo",
            "Descrición": "O domingo dedicábase ao deus Apolo, o deus do sol e da sabedoría, motivo polo cal foi elixido polos cristiáns para establecer o Dominus dei ou día do Señor."
        }
    }

    let deus = document.getElementById("deus");
    let descricion = document.getElementById("descricion")

    switch (dia) {
        case 'Luns':
            deus.textContent = deidades.Luns.Deus;
            descricion.textContent = deidades.Luns.Descrición;
            break;

        case 'Martes':
            deus.textContent = deidades.Martes.Deus;
            descricion.textContent = deidades.Martes.Descrición;
            break;

        case 'Mércores':
            deus.textContent = deidades.Mércores.Deus;
            descricion.textContent = deidades.Mércores.Descrición;
            break;

        case 'Xoves':
            deus.textContent = deidades.Xoves.Deus;
            descricion.textContent = deidades.Xoves.Descrición;
            break;

        case 'Venres':
            deus.textContent = deidades.Venres.Deus;
            descricion.textContent = deidades.Venres.Descrición;
            break;

        case 'Sábado':
            deus.textContent = deidades.Sábado.Deus;
            descricion.textContent = deidades.Sábado.Descrición;
            break;

        case 'Domingo':
            deus.textContent = deidades.Domingo.Deus;
            descricion.textContent = deidades.Domingo.Descrición;
            break;

        default:
            deus.textContent = 'Error';
            descricion.textContent = 'Error'

            break;
    }

}