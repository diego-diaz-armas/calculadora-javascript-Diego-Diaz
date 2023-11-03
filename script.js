let displayValue = '0';
let currentInput = '';
let currentOperator = '';
let pendingValue = '';

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0' || currentInput === '=') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  currentInput = number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator !== '' && currentInput !== '=') {
    calculateResult();
  }
  currentOperator = operator;
  if (currentInput !== '=') {
    pendingValue = displayValue;
  }
  displayValue = operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  currentInput = '';
  currentOperator = '';
  pendingValue = '';
  updateDisplay();
}

function calculateResult() {
  if (currentOperator === '+') {
    displayValue = (parseFloat(pendingValue) + parseFloat(displayValue)).toString();
  } else if (currentOperator === '-') {
    displayValue = (parseFloat(pendingValue) - parseFloat(displayValue)).toString();
  } else if (currentOperator === '*') {
    displayValue = (parseFloat(pendingValue) * parseFloat(displayValue)).toString();
  } else if (currentOperator === '/') {
    if (parseFloat(displayValue) === 0) {
      displayValue = 'Error';
    } else {
      displayValue = (parseFloat(pendingValue) / parseFloat(displayValue)).toString();
    }
  }
  currentInput = '=';
  currentOperator = '';
  updateDisplay();
}

updateDisplay();