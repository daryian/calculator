let isNewNumber = false;
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
    if(opValue != '') { //if we have an operator
        if(numOne === '') { //if numOne variable is blank
            numOne = displayContainer.innerText; //numOne equals current display number
            operator = opValue; //operator set to opvalue
            opValue = ''; //opvalue wiped
            displayContainer.innerText = ''; //display container wiped
        }
        else { //if there is operator and numOne is full
            numTwo = displayContainer.innerText; //numTwo is current displayed number
            Number(numOne, numTwo); //convert strings to numbers
            if(opValue === '=') { //if operator is equal sign
                numOne = operate(numOne, operator,numTwo); //operate, numOne is now the result of operation
                displayContainer.innerText = numOne; //display container is set to the result number
                opValue = '';
                numTwo = ''; //reset numTwo so we can repeat process
            }
            else { //if operator is NOT the equal sign
                numOne = operate(numOne, operator, numTwo); //feed the operator into operate equation and numOne is the result
                displayContainer.innerText = ''; //change the display to reflect
                operator = opValue; //set operator
                opValue = ''; //wipe opValue
                numTwo = ''; //reset so we can repeat
            }
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
        numOne = '';
        numTwo = '';
        opValue = '';
        isNewNumber = false;
    });
}

function runCalc() {
    clearAll();
    assignButtons();
}

//End of night log, calculations working somewhat properly. Running into issue once we hit equal sign. Numtwo sets itself as the display, which is equal to numOne. Calling it a night
