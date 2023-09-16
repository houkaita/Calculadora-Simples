let display = document.getElementById('display');

function appendChar(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);    
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    const result = Math.sqrt(eval(display.value));
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquare() {
  try {
    const result = eval(display.value) ** 2;
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
