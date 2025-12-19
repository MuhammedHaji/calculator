function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;   
}

function divide(a,b){
    if(b===0) return "Error: Division by zero";
    return a/b;
}

function operate(operator,a,b){
    a=Number(a);
    b=Number(b);
    switch(operator){
        case "+": return add(a,b);
        case "-": return subtract(a,b);
        case "*": return multiply(a,b);
        case "/": return divide(a,b);
        default: return null;
    
    }
};

//calculator memory ( very important)

let firstNumber="";
let secondNumber="";
let currentOperator=null
let shouldResetDisplay=false;

const display=document.getElementById("display");
const buttons=document.querySelectorAll("button");

function appendNumber(number){
    if(display.textContent==="0"||shouldResetDisplay){
        display.textContent=number;
        shouldResetDisplay=false;
    }
    else{
        display.textContent +=number;
    }
}

function setOperator(operator){
    if (currentOperator !==null) evaluate();
    firstNumber=display.textContent;
    currentOperator=operator;
    shouldResetDisplay=true;
}

function evaluate(){
    if(currentOperator===null || shouldResetDisplay) return;
    secondNumber=display.textContent;

    let result =operate(currentOperator,firstNumber,secondNumber);
    display.textContent=Math.round(result*1000)/1000;
    currentOperator=null;
    shouldResetDisplay=true;
}
//clear button
function clearAll(){
    display.textContent="0"
    firstNumber="";
    secondNumber="";
    currentOperator=null;
    shouldResetDisplay=false;
}
//event listeners for buttons
buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        if(!isNaN(button.textContent)){
            appendNumber(button.textContent)
        } else if(button.textContent==="C"){
            clearAll();
        } else if (button.textContent==="="){
            evaluate();
        } else{
            setOperator(button.textContent)
        }
    });
});

