const displayEl = document.getElementById("display");
let previousResult = ""; 
let isPreviousResult = false; 

function appendToDisplay(input) {
  if (isPreviousResult) {
    displayEl.value = previousResult + input;
    isPreviousResult = false;
  } else {
    displayEl.value += input;
  }
}

function backSpace() {
    displayEl.value = displayEl.value.slice(0, -1);
  }
  

function clearDisplay() {
  displayEl.value = "";
  previousResult = ""; 
  isPreviousResult = false; 
}

function calculate() {
  try {
    const result = eval(displayEl.value);
    previousResult = result; 
    displayEl.value = result;
    isPreviousResult = true; 
  } catch (error) {
    displayEl.value = "Error ;-)";
    previousResult = ""; 
    isPreviousResult = false; 
  }
}