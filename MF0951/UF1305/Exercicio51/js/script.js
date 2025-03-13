var entradaLista;
var listaHTML;

entradaLista=document.getElementById("novaEntrada")
listaHTML=document.getElementById("lista")

ultimoTexto=localStorage.getItem("ultimoTexto")
entradaLista.value=ultimoTexto;

 function agregarElemento () {
 var novoTexto;
 var novoElemento;
 novoTexto=entradaLista.value
 novoElemento=document.createElement("li");
 novoElemento.innerText=novoTexto;
 listaHTML.appendChild(novoElemento);
 localStorage.setItem("ultimoTexto",novoTexto);
 } 