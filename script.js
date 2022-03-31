var firstNumber;
var secondNumber;
var result;
var operation;

function clearScreen() {
    document.getElementById("result").value = "";
    document.getElementById("insertNum").value = "";
}

function display(value) {
    if(document.getElementById("insertNum").value == firstNumber) {
        document.getElementById("insertNum").value = "";
        document.getElementById("insertNum").value += value;
    } else {
        document.getElementById("insertNum").value += value;        
    }
}

function sumOp() {
    operation = "+";
    firstNumber = parseFloat(document.getElementById("insertNum").value);
    result = document.getElementById("result").value = firstNumber + " " + operation;
    return result;
}

function equalsto() {  
  
    secondNumber = parseFloat(document.getElementById("insertNum").value);  

    if (operation == "+") {  
        result = firstNumber + secondNumber;
    }

    document.getElementById("insertNum").value = "";  
    document.getElementById("insertNum").value = result.toString();  
    document.getElementById("result").value = firstNumber + " " + operation + " " + secondNumber + " = ";  
    return;
}