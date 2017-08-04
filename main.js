let buttonLabelsArray = ['C', 'Hello, I am Calculon', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];
myCalculator = document.getElementById('myCalculator');
for (let i=0; i<buttonLabelsArray.length; i++) {
  let newBtn = document.createElement('div');
  let btnLabelBox = document.createElement('p');
  let btnLabel = document.createTextNode(buttonLabelsArray[i]);
  btnLabelBox.className = 'btnLabelBox';
  newBtn.appendChild(btnLabelBox);
  btnLabelBox.appendChild(btnLabel);
  newBtn.className = 'calculatorButton';
  myCalculator.appendChild(newBtn);
  if (i === 1) {
    newBtn.id = 'output';
  }
}
