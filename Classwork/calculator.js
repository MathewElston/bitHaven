let calcText = document.getElementById("calcText");
let buttonArray = document.querySelectorAll(".calc-container button");
let mathExpression = "";
calcText.value ="";

function calculateClick() {
    let buttonValue = this.value;
    if (buttonValue == "=") {
        let result = eval(mathExpression)
        calcText.value = result;
    } else if (buttonValue =="clear") {
        mathExpression ="";
        calcText.value ="";
    } else {
        mathExpression += buttonValue;
        calcText.value = mathExpression;
    }
}

for (let i = 0; i <buttonArray.length; i++) {
    buttonArray[i].addEventListener("click",calculateClick)
    console.log(buttonArray[i]);

}