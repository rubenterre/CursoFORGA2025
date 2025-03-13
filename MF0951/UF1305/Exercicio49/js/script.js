// Definir funcións para sumar, restar, mul2plicar e dividir 
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    // Manexar a división por cero 
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: Non se pode dividir por cero.";
    }
}

// Obter referencias aos elementos do DOM
const inputNumero1 = document.getElementById("numero1");
const inputNumero2 = document.getElementById("numero2");
const resultadosSumar = document.getElementById("resultadosSumar");
const resultadosRestar = document.getElementById("resultadosRestar");
const resultadosMultiplicar = document.getElementById("resultadosMultiplicar");
const resultadosDividir = document.getElementById("resultadosDividir");

// Función para realizar operacións e amosar resultados 
function realizarOperacions() {
// Obter os valores dos campos de entrada
const numero1 = parseFloat(inputNumero1.value);
const numero2 = parseFloat(inputNumero2.value);
// Verificar se os valores son válidos
if (isNaN(numero1) || isNaN(numero2)) {
    resultadosSumar.textContent = "Por favor, introduce números válidos.";
    resultadosRestar.textContent = "Por favor, introduce números válidos.";
    resultadosMultiplicar.textContent = "Por favor, introduce números válidos.";
    resultadosDividir.textContent = "Por favor, introduce números válidos.";
    
    return;
}
// Amosar resultados na interface 
resultadosSumar.textContent = `Suma: ${ sumar(numero1, numero2) }`;
resultadosRestar.textContent =  `Resta: ${ restar(numero1, numero2) }`; 
resultadosMultiplicar.textContent = `Multiplicación: ${ multiplicar(numero1, numero2) }`;
resultadosDividir.textContent =  `División: ${ dividir(numero1, numero2) }`;
}