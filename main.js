// popYouLater();
//
// function popYouLater() {
//   let buttonLabelsArray = ['C', 'Hello, I am Calculon', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];
//   let buttonIdArray = ['clear', 'output', 'seven', 'eight', 'nine', 'divi', 'four', 'five', 'six', 'mult', 'one', 'two', 'three', 'sub', 'zero', 'dot', 'equals', 'add'];
//   myCalculator = document.getElementById('myCalculator');
//   for (let i=0; i<buttonLabelsArray.length; i++) {
//     let newBtn = document.createElement('button');
//     let btnLabelBox = document.createElement('p');
//     let btnLabel = document.createTextNode(buttonLabelsArray[i]);
//     btnLabelBox.className = 'btnLabelBox';
//     newBtn.appendChild(btnLabelBox);
//     btnLabelBox.appendChild(btnLabel);
//     newBtn.className = 'calculatorButton';
//     newBtn.id = buttonIdArray[i];
//     myCalculator.appendChild(newBtn);
//   }
// }
myLCD = document.getElementById('output');
myLCD.innerHTML = '';

function appendNum(myInput) {
  myLCD.innerHTML += myInput;
}

function appendOperator(myInput) {
  myLCD.innerHTML += myInput;
}

function calculate() {
  if (eval(myLCD.innerHTML) !== undefined) {
    myLCD.innerHTML = eval(myLCD.innerHTML);
  }
}

function secretMessage() {
  alert("Please do not click the LCD panel.")
}

function clearLCD() {
  myLCD.innerHTML = '';
}
