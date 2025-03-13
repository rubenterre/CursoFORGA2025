var entradaLista = document.getElementById("novaEntrada");
var listaHTML = document.getElementById("lista");

if (localStorage.getItem("listaElementos")) {
    listaHTML.innerHTML = localStorage.getItem("listaElementos");
}

function agregarElemento() {
    var novoTexto = entradaLista.value.trim();

    if (novoTexto) {
        var novoElemento = document.createElement("div");
        novoElemento.classList.add("lista__item");
        novoElemento.innerHTML = novoTexto;
        listaHTML.appendChild(novoElemento);



        localStorage.setItem("listaElementos", listaHTML.innerHTML);

        entradaLista.value = '';
    }
}
