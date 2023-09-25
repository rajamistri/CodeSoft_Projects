let currentInput = "";
let result = 0;
let operator = "";

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  result = 0;
  operator = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  if (currentInput === "") return;

  try {
    result = eval(currentInput);
    document.getElementById("display").value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
function deleteLastCharacter() {
  if (currentInput !== "") {
    currentInput = currentInput.slice(0, -1);
    document.getElementById("display").value = currentInput;
  }
}
