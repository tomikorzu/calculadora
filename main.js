const op1 = document.getElementById('input1');
const op2 = document.getElementById('input2');
const op3 = document.getElementById('input3');
const btnCalc = document.getElementById('calc');
const btnReset = document.getElementById('reset');
const results = document.getElementById('results');

function calcular() {
    const num1 = parseFloat(op1.value);
    const num2 = parseFloat(op3.value);
    const operador = op2.value;

    if (isNaN(num1) || isNaN(num2) || !['+', '-', '*', '/'].includes(operador)) {
        results.value = 'Error: Entrada inválida';
        return;
    }

    let resultado;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Error: Div/0';
            break;
    }

    results.value = `El resultado es: ${resultado}`;
}
