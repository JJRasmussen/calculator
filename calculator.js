//basic math operator functions
function add(a,b){
    return parseFloat(a)+parseFloat(b);
}

function subtract(a,b){
    return parseFloat(a)-parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a)*parseFloat(b);
}

function divide(a,b){
    return parseFloat(a)/parseFloat(b);
}

//calculator operation variables
let operationArray = {
    firstNumber: "",
    secondNumber: "",
    mathOperator: "",
};

function operate(operationArray){


    if (operationArray.mathOperator === '+'){
        operationArray.firstNumber = String(add(operationArray.firstNumber, operationArray.secondNumber));
    };

    if (operationArray.mathOperator === '-'){
        operationArray.firstNumber = String(subtract(operationArray.firstNumber, operationArray.secondNumber));
    };

    if (operationArray.mathOperator === '*'){
        operationArray.firstNumber = String(multiply(operationArray.firstNumber, operationArray.secondNumber));
    };

    if (operationArray.mathOperator ==='/'){
        operationArray.firstNumber = String(divide(operationArray.firstNumber, operationArray.secondNumber));
    };

    operationArray.secondNumber = "";
    

    return operationArray;
}

const opButton = document.querySelectorAll(".operatorButton");

for (let i = 0; i < opButton.length; i++){
opButton[i].addEventListener("click", function(){

    if (operationArray.firstNumber === ""){

        operationArray.firstNumber = operationArray.secondNumber;
        operationArray.secondNumber = "";
        operationArray.mathOperator = (opButton[i].textContent || opButton[i].innerHTML);

        firstNumb.textContent = operationArray.firstNumber;
        secondNumb.textContent = "0";
        chosenOperator.textContent = operationArray.mathOperator;

    }

    if (operationArray.firstNumber != ""){

        operationArray.mathOperator = (opButton[i].textContent || opButton[i].innerHTML);
        chosenOperator.textContent = operationArray.mathOperator;

        if(operationArray.secondNumber != 0){
            operate(operationArray);
            firstNumb.textContent = operationArray.firstNumber;
            secondNumb.textContent = operationArray.secondNumber;
            
        }
    }
    });
};

//queryselector for display panel
const firstNumb = document.querySelector("#firstNumber");
const secondNumb = document.querySelector("#secondNumber");
const chosenOperator = document.querySelector("#chosenOperator");

//Button functionallity for numbers
const numberButtons = document.querySelectorAll(".numberButton");
for (let i = 0; i < numberButtons.length; i++){

    numberButtons[i].addEventListener("click", function(){

        if(operationArray.secondNumber === 0){
            operationArray.secondNumber = (numberButtons[i].textContent || numberButtons[i].innerHTML);
        }

        else if (operationArray.secondNumber.includes('.')){
            operationArray.secondNumber = operationArray.secondNumber + 
            (numberButtons[i].textContent || numberButtons[i].innerHTML);
        }

        else{
        operationArray.secondNumber = operationArray.secondNumber + 
        (numberButtons[i].textContent || numberButtons[i].innerHTML);
        }

        secondNumb.textContent = operationArray.secondNumber
        });
    };

//Button functionallity for equal button
const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", function(){
    if(operationArray.mathOperator === ""){
        operationArray.firstNumber = operationArray.secondNumber;
        operationArray.secondNumber = "";
        firstNumb.textContent = operationArray.firstNumber;
        secondNumb.textContent = "0";

    }
    else{
        operate(operationArray);
        firstNumb.textContent = operationArray.firstNumber;
        secondNumb.textContent = operationArray.secondNumber;
        
    }
})


    //Button functionality for clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function(){
    operationArray.firstNumber = "";
    operationArray.secondNumber = ""; 
    operationArray.mathOperator = "";
    firstNumb.textContent = 0;
    secondNumb.textContent = 0;
    chosenOperator.textContent = "";
});

//Button functionality for "dot" button
const dotButton = document.querySelector("#dotButton");
dotButton.addEventListener("click", function(){
    let secondNumbString = String(operationArray.secondNumber);
    if (secondNumbString.includes('.')){return}

    operationArray.secondNumber = operationArray.secondNumber + (dotButton.textContent || dotButton.innerHTML);;
    secondNumb.textContent = operationArray.secondNumber;
    operationArray.secondNumber = operationArray.secondNumber;
})