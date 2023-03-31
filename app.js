const numberBtns = document.querySelectorAll('.number-button');
const operationBtns = document.querySelectorAll('.operation-button');
const lowerField = document.querySelector('.current-operation');
const upperField = document.querySelector('.last-operation');

const resetBtn = document.querySelector('#reset-button');
const deleteBtn = document.querySelector('#delete-button');
const equationBtn = document.querySelector('#equation-button');

let currentOperator = null;
let firstNum = 0;
let secondNum = 0;

resetBtn.addEventListener('click',() =>{
  lowerField.textContent = '';
  upperField.textContent = '';
  firstNum = 0;
  secondNum = 0;
});

deleteBtn.addEventListener('click',()=> deleteNumber());

numberBtns.forEach(btn => {
  btn.addEventListener('click',() => addNumber(btn.textContent));
});

operationBtns.forEach(btn =>{
  btn.addEventListener('click',() => operateButton(btn.textContent));
});

equationBtn.addEventListener('click',()=> evaluate());

document.addEventListener('keydown',(e)=>{
  const operations = ['/','+','-','*','x'];
  if(operations.includes(e.key))
  operateButton(e.key);
  else if(e.key >= 0 && e.key <= 9 || e.key=='.')
  addNumber(e.key);
  else if(e.key == 'Backspace')
  deleteNumber();
  else if(e.key == '=' || e.key =='Enter')
  evaluate();
})

function operateButton(button){
    currentOperator = button;
    firstNum = lowerField.textContent;
    upperField.style.color="black";
    upperField.textContent=`${lowerField.textContent} ${button}`;
    lowerField.textContent='';
}

function evaluate(){
  upperField.textContent='';
  secondNum = lowerField.textContent;
  lowerField.textContent = operate(currentOperator,firstNum,secondNum);
  firstNum = 0;
  secondNum = 0;
}

function addNumber(number){
  if(lowerField.textContent.length<13)
  lowerField.textContent += number;
}

function deleteNumber(){
  lowerField.textContent = lowerField.textContent.slice(0,-1);
}

function operate(currentOperator, firstNum, secondNum){
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  switch(currentOperator){
    case '/':
      if(secondNum==0)
      return "Can't do that!";
     return divide(firstNum,secondNum);
      break;
    case 'x':
      return multiply(firstNum,secondNum);
      break;
    case '+':
      return add(firstNum,secondNum);
      break;
    case '-':
     return substract(firstNum,secondNum);
      break;
    default:
      return null;
  };
};


function add(a,b) {
  return a + b;
}

function substract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a, b) {
  return a / b
}
