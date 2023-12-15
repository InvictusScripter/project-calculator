const display = document.querySelector('.display');
let currentInput = '';
let firstNumber = null;
let operator = null;
let shouldResetInput = false;

function updateDisplay() {
    display.textContent = currentInput;
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (!isNaN(buttonValue) || buttonValue === '.') {
            if (shouldResetInput) {
                currentInput = '';
                shouldResetInput = false;
            }
            currentInput += buttonValue;
        } else if (buttonValue === '=') {
            if (operator !== null) {
                const secondNumber = parseFloat(currentInput);
                switch (operator) {
                    case '+':
                        firstNumber += secondNumber;
                        break;
                    case '-':
                        firstNumber -= secondNumber;
                        break;
                    case '*':
                        firstNumber *= secondNumber;
                        break;
                    case '/':
                        if (secondNumber !== 0) {
                            firstNumber /= secondNumber;
                        } else {
                            currentInput = 'Error';
                            updateDisplay();
                            return;
                        }
                        break;
                }
                operator = null;
                currentInput = firstNumber.toString();
                firstNumber = null;
                shouldResetInput = true;
            }
        } else if (buttonValue === 'C') {
            currentInput = '';
            firstNumber = null;
            operator = null;
        } else {
            if (firstNumber === null) {
                firstNumber = parseFloat(currentInput);
                operator = buttonValue;
                shouldResetInput = true;
            } else {
                const secondNumber = parseFloat(currentInput);
                switch (operator) {
                    case '+':
                        firstNumber += secondNumber;
                        break;
                    case '-':
                        firstNumber -= secondNumber;
                        break;
                    case '*':
                        firstNumber *= secondNumber;
                        break;
                    case '/':
                        if (secondNumber !== 0) {
                            firstNumber /= secondNumber;
                        } else {
                            currentInput = 'Error';
                            updateDisplay();
                            return;
                        }
                        break;
                }
                operator = buttonValue;
                shouldResetInput = true;
            }
            currentInput = operator;
        }
        updateDisplay();
    });
});

updateDisplay();

