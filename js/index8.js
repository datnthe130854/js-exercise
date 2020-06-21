
var btnShow =document.getElementById("js-btn-show");
var inputValue =document.getElementById("js-input-value");
var pMessage =document.getElementById("js-message");

btnShow.addEventListener("click",()=>{
    pMessage.innerText=inputValue.value
}
)
//ccalculate
var inputFirstNumber=document.getElementById("js-first-number")
var inputSecondNumber=document.getElementById("js-second-number")
var inputResult=document.getElementById("js-result")
var operator =document.getElementById("js-operator")

function getOperator(){
    return operator.options[operator.selectedIndex].value;
}

inputFirstNumber.oninput= calculate;
inputSecondNumber.oninput= calculate;
operator.onchange=calculate;


// btnCalculate.addEventListener(()=>{
//    let firstValue= Number(inputFirstNumber.value);
//    let secondValue= Number(inputSecondNumber.value);
//    let total= firstValue+secondValue;
//    inputResult.value=total.innerText

// })
function calculate(){
    let firstValue= Number(inputFirstNumber.value);
   let secondValue= Number(inputSecondNumber.value);
   let operator=getOperator();
   let total=0;
  
   switch(operator){
       case "+":
           total = firstValue+secondValue;
           break;
        case "-":
            total=firstValue-secondValue;
            break;
        case "*":
            total=firstValue*secondValue;
            break;
        case "/":
            total=firstValue/secondValue;
            break;
   }
   
   inputResult.value=total
   
}
//ceateElement , appendChild

var unorderList = document.getElementById("js-todo")
var inputAdd = document.getElementById("js-input-add")
var btnAdd =document.getElementById("js-btn-add")



btnAdd.onclick=()=>{
    let newTask = inputAdd.value;
    let listItem = document.createElement("li");
    let buttonRemove=document.createElement("button")
    listItem.innerText=newTask;
    buttonRemove.innerText="-";
    buttonRemove.onclick=()=>{
        unorderList.removeChild(listItem)
    }
    unorderList.append(listItem);
    listItem.append(buttonRemove);
    

}
