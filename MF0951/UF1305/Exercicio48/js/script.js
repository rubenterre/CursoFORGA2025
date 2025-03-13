// Exercicio 1: Saúdo básico

function saudar(){
    var nome = prompt("Introduce o teu nome");
    alert("Ola, " + nome + "!");
}


// Exercicio 2: Suma de dous números
var num1 = parseFloat(prompt("Introduce o primeiro número"));
var num2 = parseFloat(prompt("Introduce o segundo número"));
var suma = num1 + num2;
alert("A suma é: " + suma);

// Exercicio 3: Táboa de mulplicar
var numero = parseInt(prompt("Introduce un número para ver a súa táboa de mulplicar"));
for(let i=1;i<=10;i++){
console.log(numero+"x"+i+"="+numero*i); 
}
 
// Exercicio 4: Verificación de número par ou impar
var numero = parseInt(prompt("Introduce un número"));
if(numero%2===0){ 
    alert("O número é par");
}else{
alert("O número é impar"); 
}