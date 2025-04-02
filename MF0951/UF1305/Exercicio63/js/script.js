// Parte 1: Declaración de variables
// 1. Declaración de variables
let saudo = "Ola, mundo!";
console.log(saudo);

let idade = 25; 
console.log(idade);

let eEstudante = true;
console.log(eEstudante);

// 2. Tipos de datos non primitivos
let persoa = {
  nome: "Rubén",
  idade: 37,
  ocupacion: "Programador"
};
console.log(persoa);

let coresFavoritos = ["azul", "verde", "vermello"];
console.log(coresFavoritos);

// 3. Modificación de variables
let cidadeActual = "O Milladoiro";
console.log(cidadeActual);
cidadeActual = "Bertamiráns";
console.log(cidadeActual);

// Parte 2: Operadores
// 1. Operadores aritméticos
let a = 10;
let b = 5;

console.log("Suma:", a + b); // Suma
console.log("Resta:", a - b); // Resta
console.log("Multiplicación:", a * b); // Multiplicación
console.log("División:", a / b); // División
console.log("Módulo:", a % b); // Módulo

// 2. Operadores de comparación
console.log("a < b:", a < b); // Menor que
console.log("a > b:", a > b); // Maior que
console.log("a === b:", a === b); // Igual estrito (tipo e valor)
console.log("a !== b:", a !== b); // Diferente estrito (tipo ou valor)

// Parte 3: Estruturas de Control
// 1. Condicionais
let numero = 7; // Substitúe polo número que desexes comprobar

if (numero % 2 === 0) {
  console.log(numero + " é un número par.");
} else {
  console.log(numero + " é un número impar.");
}

// 2. Bucles
// Bucle for que imprime os números do 1 ao 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Bucle while que imprime os números do 10 ao 1
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// Parte 4: Funcións
// Función básica: saudarUsuario
function saudarUsuario(nome) {
  console.log(`Ola, ${nome}!`);
}
saudarUsuario("María"); // Substitúe "María" polo nome que desexes

// Uso de arrays con funcións: atoparMaiorNumero
function atoparMaiorNumero(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  
  for (let i = 1; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > maiorNumero) {
      maiorNumero = arrayNumeros[i];
    }
  }
  
  return maiorNumero;
}

let numeros = [3, 7, 2, 9, 5];
console.log("O número máis grande é:", atoparMaiorNumero(numeros));


//Forma alternativa

const numerosArray = [3, 7, 2, 9, 5, 132];
let maior = numerosArray[0];

for (let numero of numerosArray) {
  if (numero > maior) {
    maior = numero; // Actualizamos si encontramos un número maior
  }
}

console.log("O número maior é:", maior);