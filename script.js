let numOne = '';
let numTwo = '';
let buttonValue = 0;
let opValue = '';
let operator = '';
let displayContainer = document.querySelector("#display-container");
const numInput = document.querySelectorAll(".number");
const clearButton = document.querySelector("#clear");
const operatorInput = document.querySelectorAll(".operator");
runCalc();





function getNums(){
    if(opValue != '') {
        if(numOne === '') {
            numOne = displayContainer.innerText;
            operator = opValue;
            opValue = '';
            displayContainer.innerText = 0; 
            console.log("number one =", numOne);
        }
        else {
            numTwo = displayContainer.innerText;
            console.log("number two =", numTwo);
            Number(numOne, numTwo);
            console.log(numOne, operator, numTwo)
            numOne = operate(numOne, operator,numTwo);
            displayContainer.innerText = numOne;
            numTwo = '';
        }
        


}
}
function assignButtons() {
    for(let i = 0; i < numInput.length; i++) {
        numInput[i].addEventListener("click", () => {
            buttonValue = numInput[i].innerText;

            if(displayContainer.innerText != 0) {
                displayContainer.innerText += buttonValue;
            }
            else{
                displayContainer.innerText = buttonValue;
            }
        });
    }

    for(let i = 0; i < operatorInput.length; i++) {
        operatorInput[i].addEventListener("click", () => {
        opValue = operatorInput[i].textContent;
        console.log(opValue); 
        getNums();
        });
    }
    
}
function add(numOne, numTwo){
    let result = parseFloat(numOne) + parseFloat(numTwo);
    return result;
}

function subtract(numOne, numTwo){
    let result = parseFloat(numOne) - parseFloat(numTwo);
    return result;
}

function multiply(numOne, numTwo){
    let result =parseFloat(numOne) * parseFloat(numTwo);
    return result;
}

function divide(numOne, numTwo){
    let result = parseFloat(numOne) / parseFloat(numTwo);
    return result;
}

function operate(numOne, operator, numTwo){
    let result = 0;
    switch(operator) {
        case '+':
            result = add(numOne, numTwo);
            return result;
        case '-':
            result = subtract(numOne, numTwo);
            return result;
        case '*':
            result = multiply(numOne, numTwo);
            return result;
        case '/':
            result = divide(numOne,numTwo);
            return result;
    }
}

function clearAll() {
    clearButton.addEventListener("click", () =>  {
        displayContainer.innerText = 0;
        buttonValue = 0;
        opValue = '';
    })
}function runCalc() {
    clearAll();
    assignButtons();
}