const numbersButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');
const decimalButton = document.querySelector('.decimal')

const screenCurrent = document.querySelector('.current');
const screenPrev = document.querySelector('.previous-operand');

let operator = '';
let previousValue = '';
let currentValue = '';

// get value of num button and display to screen
numbersButton.forEach(number => (number.addEventListener('click', addInputCurrent)));

// operator button
operatorButton.forEach(opt => opt.addEventListener('click', function() {
    // handle for change operator
    if(previousValue != '' && currentValue == ''){
        operator = this.textContent
        console.log(operator)
        screenPrev.textContent = previousValue + ' ' + operator;
     }
    // handle for operator button when current value empty and change operator
    if (currentValue == "") return ;
    handleOperator(this.textContent);
    console.log(previousValue)
    screenPrev.textContent = previousValue + ' ' + operator;
    screenCurrent.textContent = ''
}))

// equalButton
equalButton.addEventListener('click', calculate);

// deleteButton
deleteButton.addEventListener('click', deleteCurrent);

// clear Button
clearButton.addEventListener('click', clear);

// adding the input number to the screen
function addInputCurrent() {
    console.log(this)
    handleNumber(this.textContent);
    screenCurrent.textContent = currentValue;
}

function handleNumber(num){
    if(currentValue.length <= 12) {
        currentValue += num;
    }
}

function handleOperator(op) {
    if (operator != ''){
        previousValue = calculate2(previousValue, operator, currentValue)
    } else {
        previousValue = currentValue
    }
    operator = op
    currentValue = ''
}

function calculate (){
    currentValue = calculate2(previousValue, operator, currentValue)
    screenCurrent.textContent = currentValue
    previousValue = '';
    screenPrev.textContent = ''
    operator = ''
}

function deleteCurrent() {
    currentValue = currentValue.slice(0,-1) 
    screenCurrent.textContent = currentValue
}

function clear() {
    currentValue = '';
    previousValue = '';
    operator = '';
    screenCurrent.textContent = currentValue;
    screenPrev.textContent = currentValue ;
}

function calculate2(previousValue, operator, currentValue){
    let a = parseFloat(previousValue);
    let b = parseFloat(currentValue);
    if (operator == '+') {
        return a + b;
    } else if (operator == '-') {
        return a - b;
    } else if (operator == '*') {
        return a * b;
    } else if (operator == '/') {
        return a / b;
    } //else if (operator == '-') {
        //currentValue =  - b)
    //}
}

// Keyboard support
document.addEventListener('keydown', function(e) {
   let data = document.querySelector(`button[data-key="${e.key}"]`)
   console.log(data);
    data.click();
})