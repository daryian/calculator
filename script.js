let numOne = '';
let numTwo = '';
let buttonValue = 0;
let opValue = '';
let operator = '';
let isNewNum = false;
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
            isNewNum = true;
        }
        else { 
            numTwo = displayContainer.innerText; 
            if(opValue === '=') { 
                numOne = operate(numOne, operator,numTwo); 
                displayContainer.innerText = numOne; 
                opValue = '';
                numOne = '';
                numTwo = ''; 
                isNewNum = true;
            }
            else { 
                numOne = operate(numOne, operator, numTwo); 
                displayContainer.innerText = numOne; 
                operator = opValue; 
                opValue = ''; 
                numTwo = ''; 
                isNewNum = true;
            }
        }
    }
}

function assignButtons() {
    for(let i = 0; i < numInput.length; i++) {
        numInput[i].addEventListener("click", () => {
            buttonValue = numInput[i].innerText;

            if(displayContainer.innerText != 0) {
                if(isNewNum === true) {
                    displayContainer.innerText = '';
                }
                displayContainer.innerText += buttonValue;
                isNewNum = false;
            }
            else {
                displayContainer.innerText = buttonValue;
            }
        });
    }

    for(let i = 0; i < operatorInput.length; i++) {
        operatorInput[i].addEventListener("click", () => {
        opValue = operatorInput[i].textContent;
        getNums();
        });
    }
}

function add(numOne, numTwo){
    let result = parseFloat(numOne) + parseFloat(numTwo);
    return Math.round(result * 10000) / 10000;
}

function subtract(numOne, numTwo){
    let result = parseFloat(numOne) - parseFloat(numTwo);
    return Math.round(result * 10000) / 10000;
}

function multiply(numOne, numTwo){
    let result =parseFloat(numOne) * parseFloat(numTwo);
    return Math.round(result * 10000) / 10000;
}

function divide(numOne, numTwo){
    let result = parseFloat(numOne) / parseFloat(numTwo);
    return Math.round(result * 10000) / 10000;
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
        numOne = '';
        numTwo = '';
        opValue = '';
        isNewNum = false;
    });
}

function runCalc() {
    clearAll();
    assignButtons();
}

/*Things to fix:
- Can break functions into smaller functions. After talking to Joe, 
it would be better to break functions into smaller tasks.
- Pressing '=' multiple times causes an undefined issue
- Dividing by zero causes an infinity issue
- After '=' has been pressed, if you don't define another operator, 
it will overwrite the current number. Need to crosscheck this against
other calculators and see how it should function. */