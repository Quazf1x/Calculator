const numberBtns = document.querySelectorAll('.number-button');
const lowerField = document.querySelector('.current-operation');
const upperField = document.querySelector('.last-operation');

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

numberBtns.forEach(btn => {
  btn.addEventListener('click',()=>{
    lowerField.innerHTML += btn.innerHTML;
  });
});