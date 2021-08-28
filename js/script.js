let globalNumbers = document.querySelectorAll('.action-bar__numbers'),
    operators = document.querySelectorAll('.action-bar__operators'),
    cleanEntry = document.getElementById('ce'),
    output = document.getElementById('output'),
    xNumber = null,
    yNumber = '',
    operator = '',
    operatorClicked = false;
    output.value = '0';

for (let i = 0; i < globalNumbers.length; i++) {
    globalNumbers[i].addEventListener('click', event => 
    numberOnClick(event.target.defaultValue)
    );
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', event =>
    operation(event.target.defaultValue)
    );
}

cleanEntry.addEventListener('click', event =>
clean(event.target.defaultValue)
);

function numberOnClick(num) { 
    
    if (operatorClicked === true) {
        output.value = num; 
        operatorClicked = false;
    } else {
        output.value === '0' ? output.value = num : output.value += num;
    }
}

function operation(op) { 
    if(xNumber === null) {
    xNumber = output.value;
    } else if (operator) {
        const res = calculate(xNumber, output.value, operator);
        output.value = res;
        xNumber = res;
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
        case 'х': return xNumber * yNumber;
        case '÷': return xNumber / yNumber;
        case '=': return xNumber; 
    }
}

function clean() {
    output.value = '0';
    xNumber = null;
    yNumber = '';
}
