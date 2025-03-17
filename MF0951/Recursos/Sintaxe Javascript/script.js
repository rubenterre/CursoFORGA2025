
// Variables

var variableVar = "Variable var"; // Variable de ámbito global

console.log(variableVar);

let variableLet = "Variable let"; // Variable de ámbito específico (Uso recomendable)

const constante = "Constante"; // O valor dunha constante non pode ser módificada posteriormente

console.log(constante);





// Tipos de datos en JavaScript

let numeros = 234;

let string = "María";

let boleanoTrue = true;
let boleanoFalse = false;

let array = [1,2,3,4];
let arrayString = ["María","Pepe", "Juan"]; // Admite calquera tipo de dato

console.log(arrayString[2]); // En JavaScript empézase a numerar de 0 en adiante polo que a primerira posición é o 0
//Resultado Juan, xa que ocupa a posición 2, a posición 0 sería María e a 1 sería Pepe.

const obxecto = {
    nome: "Carlos",
    idade: 23,
    cidade: "Santiago de Compostela"
}

let Null = null;

let Indefinido = undefined;

let symboll = Symbol("descripción");






// Operadores lóxicos

//Operador AND (&&) devolve true se ambos operando son true, do contrario devolve false

const idade = 20;
const tenLicencia = true;

if (idade >= 18 && tenLicencia) {
  console.log("Podes conducir."); // Execútase porque ámbalas dúas condicións son true.
} else {
  console.log("Non podes conducir.");
}

//Operador OR (||) devolve true se alomenos un dos operando é true, do contrario devolve false

const tenTarxeta = false;
const tenPayPal = true;

if (tenTarxeta || tenPayPal) {
  console.log("Podes realizar o pago."); // Execútase porque unha das condicións é true.
} else {
  console.log("Non podes realizar o pago.");
}


//Operador NOT (!) invierte o valor de verdad do seu operando

const acceso = false;

if (!acceso) {
  console.log("Acceso denegado."); // Execútase porque !false é true.
} else {
  console.log("Benvido!");
}





// Operadores aritméticos

let suma = 5 + 4; //Operador de suma

let resta = 6 - 5; // Operador de resta

let multiplicacion = 5 * 5; //Operador de multiplicación

let division = 6 / 8; // Operador de división

let modulo = 24 % 5; // Operador de módulo que devuelve el resto de la división 





// Operadores de comparación

//igual (==)
let x = 5;
let y = "5";

let igual= (x==y);

console.log(igual); // Resultado true

//igual estrito (===)
let d = 5;
let g = "5";

let igualestrito = (d===g);

console.log(igualestrito); // Resultado false

//distinto (!=)
let distintoX = 5;
let distintoY = "5";

let distinto = (distintoX != distintoY);
console.log(distinto);// Resultado false

//distinto estrito (!==)
let distintoEstritoX = 5;
let distintoEstritoY = "5";

let distintoEstrito = (distintoEstritoX !== distintoEstritoY);
console.log(distintoEstrito);// Resultado true

//Maior que (>), menor que (<), maior ou igual que (>=), menor ou igual que (<=)

let a = 10;
let b = 5;

console.log(a > b) // Resultado de a maior que b é true
console.log(a < b) // Resultado de a menor que b é false
console.log(a >= b) //Resultado de que a é maior ou igual que b é true
console.log(a <= b) //Reultado de que a é menor ou igual que b é false





// Comentarios de JavaScript

//Este é un comentario de liña

/* Este é un comentario
en varias liñas */






// Estructuras de control

// Estructuras de control de fluxo

//Estructura if


if(condicion){
    //Bloque de código que executaremos se a condición é verdadeira
}else{
    //Bloque de código que executaremos se a condición é falsa
}

// Estructura else if

if (condition) {
    //Bloque de código que executaremos se a condición é verdadeira
} else if (condicion2) {
    //Bloque de código que executaremos se se cumple unha segunda condición
} else {
    //Bloque de código que executaremos se non se cumple ningunha das condicións
}

// Estrutura switch

switch (expresion){
    case valor1:
        //Bloque de código para executar se se cumple este caso.
    break;

    case valor2:
    //Bloque de código para executar se se cumple este caso.
    break;

    default:
    //Bloque de código que se executará se non se cumple ningún caso.
}








// Estrutura de control de bucle

// Estrutura for

for (let i = 0; i < array.length; i++) {

    //Bloque de código que queremos que se itere

}

// Estrutura while

while (condition) {
    //Bloque de código que se executará mentres a condición se cumpla
}








// Funcións en JavasScript

function sumar(parametros) {
    //Bloque de código que executará la función
    return //Con isto obligamos a devolver un resultado
}

sumar(parametrosNovos) // Unha vez declarada podemos utilizar a función en calquera parte do noso código deste xeito









// Obxectos 

//Definimos como exemplo o obxecto persoa

let persoa = {
    nome: "Iago",
    idade: 30,
    cidade: "Santiago de Compostela",
    saudar: function(){
        console.log("Ola, son" + this.nome + "e teño" + this.idade +"anos")
    }
}

// JSON


let JSON = {
    "name":"Pedro",
    "idade":34,
    "cidade": "Lugo",
    "activo": true,
    "amigos": ["Brais","Pepe","María"]
}







//Eventos

//Función para facer que salte un alert cando fagamos clic

function manexadorClick() {
    alert("Fíxose click no botón!")
}


let meuBoton = document.getElementById("meuBoton");

meuBoton.addEventListener( "click", manexadorClick);
