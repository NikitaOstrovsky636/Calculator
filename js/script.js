window.onload = initialize;
let xNumber = null;
let yNumber = '';
let operator = '';
let operatorClicked = false;

function onNumberClick(num) { 
    if (operatorClicked) {
        output.value = num; 
        operatorClicked = false;
    } else {
       output.value === '0' ? output.value = num : output.value += num;
    }
}

function operation(op) { 
    if(operator && operatorClicked){
        operator = op;
        return;
    } else if (operator === '=') {
        xNumber = output.value;
    }

    if(xNumber === null) {
        xNumber = output.value;
    } else if (operator) {
        const res = calculate(xNumber, output.value, operator);
        output.value = res;
        xNumber = res;
    } 

    if (xNumber === Infinity) {
        output.value = 'You can not divide by 0';
    }

    operator = op;
    operatorClicked = true; 
}

function calculate(xNumber, yNumber, operator) {
    xNumber = Number(xNumber);
    yNumber = Number (yNumber);
    switch (operator) {
        case '+': return xNumber + yNumber;
        case '-': return xNumber - yNumber;
        case 'x': return xNumber * yNumber;
        case '÷': return xNumber / yNumber;
        case '=': return xNumber;
    }
}

function clean() {
    output.value = '0';
    xNumber = null;
    yNumber = '';
}

function decimalEntry(dec) {
    if (!output.value.includes(dec)) {
        output.value += dec;
    }
    
    if (operatorClicked) {
        output.value = '0' + dec;
        operatorClicked = false;
    }
}

function numberNegative() {
    output.value = -(output.value);
}

function rootSquare() {
    if (output.value) {
        output.value = Math.sqrt(output.value);
        xNumber = output.value;
        operatorClicked = true;
    }
}

function initialize () {
    const globalNumbers = document.querySelectorAll('.action-bar__number');
    for (let i = 0; i < globalNumbers.length; i++) {
        globalNumbers[i].addEventListener('click', event => 
        onNumberClick(event.target.defaultValue)
        );
    }

    const operators = document.querySelectorAll('.action-bar__operator');
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', event =>
        operation(event.target.defaultValue)
        );
    }

    const decimal = document.getElementById('dec');
    decimal.addEventListener('click', event => 
    decimalEntry(event.target.defaultValue)
    );

    const sqrt = document.getElementById('sqrt');
    sqrt.addEventListener('click', () => 
    rootSquare()
    );

    const cleanEntry = document.getElementById('ce');
    cleanEntry.addEventListener('click', () =>
    clean()
    );

    const negative = document.getElementById('negative');
    negative.addEventListener('click', () => 
    numberNegative()
    );

    const output = document.getElementById('output');
    output.value = '0';
}