let displayValue = '';
let operator = '';
let firstOperand = '';

function appendCharacter(char) {
    displayValue += char;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    firstOperand = displayValue;
    displayValue = '';
    updateDisplay();
}

function calculate() {
    const secondOperand = displayValue;
    let result = '';

    switch (operator) {
        case '+':
            result = sumar(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        case '-':
            result = restar(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        case '*':
            result = multiplicar(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        case '/':
            result = dividir(parseFloat(firstOperand), parseFloat(secondOperand));
            break;
        default:
            result = 'Error';
    }

    displayValue = result.toString();
    operator = '';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
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
    } else {
        return 'Error: No se puede dividir por cero.';
    }
}