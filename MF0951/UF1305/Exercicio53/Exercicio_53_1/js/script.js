// Exercicio 53 - 1

/*
Notas:

Sobresaínte: 90
Notable: 70
Aprobado: 50
Insuficiente: 0 

*/


function mostrarResultado(){
let nome = document.getElementById("nome").value;
let nota = parseFloat(document.getElementById("nota").value);
let resultado = document.getElementById("resultado");

if(nota >= 90 ){
    resultado.textContent = `${nome} é sobresaínte`;
}else if(nota >= 70){
    resultado.textContent = `${nome} é notable`;
}else if(nota >= 50){
    resultado.textContent = `${nome} é aprobado`;
}else{
    resultado.textContent = `${nome} é insuficiente`;
};

}
