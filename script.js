numOne = '';
numTwo = '';

const displayContainer = document.querySelector("#display-container");
const numInput = document.querySelectorAll(".number");

assignNum();


















function assignNum(){
    for(let i = 0; i < numInput.length; i++) {
        numInput[i].addEventListener("click", () => {
            const buttonValue = numInput[i].innerText;

            if(displayContainer.innerText != 0) {
                displayContainer.innerText +=buttonValue;
            }
            else{
                displayContainer.innerText = buttonValue;
            }
        });
    }
}
function add(numOne, numTwo){
    let result = numOne + numTwo;
    return result;
}

function subtract(numOne, numTwo){
    let result = numOne - numTwo;
    return result;
}

function multiply(numOne, numTwo){
    let result = numOne * numTwo;
    return result;
}

function divide(numOne, numTwo){
    let result = numOne / numTwo;
    return result;
}

function operate(numOne, operator, numTwo){
    switch(operator) {
        case 'add':
            add(numOne, numTwo);
            break;
    
        case 'sub':
            subtract(numOne, numTwo);
            break;

        case 'mul':
            multiply(numOne, numTwo);
            break;

        case 'div':
            divide(numOne,numTwo);
            break;
    }
}
