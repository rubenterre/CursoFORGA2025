let displayValue = '';
let operator = '';
let firstOperand = '';

document.addEventListener('DOMContentLoaded', () => {

const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

digitButtons.forEach(button => {
button.addEventListener('click',()=>appendCharacter(button.textContent)); });

operatorButtons.forEach(button => { button.addEventListener('click', () =>
setOperator(button.textContent)); });

equalsButton.addEventListener('click', calculate);

clearButton.addEventListener('click', clearDisplay);

function appendCharacter(char) { displayValue += char; updateDisplay(); }
function setOperator(op) { operator = op; firstOperand = displayValue;
displayValue = '';
updateDisplay(); }
function calculate() {
const secondOperand = displayValue; let resultado = '';
switch (operator) {
case '+': resultado = sumar(parseFloat(firstOperand),
parseFloat(secondOperand));
break;
case '-': resultado = restar(parseFloat(firstOperand),
parseFloat(secondOperand));
break;
case '*': resultado = multiplicar(parseFloat(firstOperand),
parseFloat(secondOperand));
break;
case '/': resultado = dividir(parseFloat(firstOperand),
parseFloat(secondOperand));
break;
default: resultado = 'Error';
}
displayValue = resultado.toString(); operator = ''; updateDisplay();
}
function clearDisplay() {
displayValue = ''; operator = ''; firstOperand = ''; updateDisplay();
}
function updateDisplay() {
display.value = displayValue;
}
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
if (b !== 0) {
return a / b;
} else {return 'Error: Non se pode dividir por cero.';
}
} });