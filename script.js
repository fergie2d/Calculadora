let screen = document.getElementById('screen');
let expression = '';

function appendValue(value) {
  expression += value;
  screen.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  screen.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    screen.value = result;
    expression = '';
  } catch (error) {
    screen.value = 'Error';
    expression = '';
  }
}

function clearScreen() {
  screen.value = '';
  expression = '';
}
