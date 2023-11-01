const numbersButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.clear');

const screenCurrent = document.querySelector('.current');
const screenPrev = document.querySelector('.previous-operand');

let operator = '';
let previousValue = '';
let currentValue = '';

// efect on button
numbersButton.forEach(number => {
    number.addEventListener('mouseover', () => (number.style.cssText = "background-color: rgb(153, 115, 69);"))
})
numbersButton.forEach(number => {
    number.addEventListener('mouseout', () => (number.style.cssText = "background-color: rgb(121, 90, 53);"))
})

// get value of num button and display to screen
numbersButton.forEach(number => (number.addEventListener('click', addInputCurrent)));

// operator button
operatorButton.forEach(opt => opt.addEventListener('click', function() {
    if(previousValue != ''){
        handleOperator(this.textContent)
        if(currentValue != '') {
            calculate()
            previousValue = currentValue + this.textContent
            currentValue = ''
            updatePrevScreen(previousValue)
            updateCurrentScreen(currentValue)
            operator = this.textContent

        }
    }
    if (currentValue == "") return ;
    handleOperator(this.textContent);
    console.log(previousValue)
    updateCurrentScreen('');
    updatePrevScreen(previousValue)
    console.log(currentValue)
}))
// equalButton
equalButton.addEventListener('click', calculate);

// deleteButton
deleteButton.addEventListener('click', deleteCurrent);

// clear Button
clearButton.addEventListener('click', clear);


// adding the input number to the screen
function addInputCurrent() {
    handleNumber(this.textContent);
    console.log(`current num(addInputCurrent): ${currentValue}`)
    updateCurrentScreen(currentValue);
}

function handleNumber(num){
    a = currentValue.toString()
    console.log(a)
    console.log(typeof(a))
    if(a.length <= 7) {
        console.log(a)
        console.log(typeof(a))
        currentValue += num;
    }
}

function handleOperator(op) {
    if (operator != ''){
        console.log(previousValue)
        previousValue = previousValue.toString().slice(0,-1) + op
        console.log(previousValue)
        updatePrevScreen(previousValue)  
        console.log(op)
    } else {
        console.log(op)
        previousValue = currentValue + op
        operator = op
        currentValue = ''
    }
}

function calculate (){
    const a = parseInt(previousValue.slice(0,-1))
    calculate2(a, operator, currentValue)
    updateCurrentScreen(currentValue)
    previousValue = '';
    updatePrevScreen(previousValue)
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

function updateCurrentScreen(num) {
    screenCurrent.innerHTML = num;
}

function updatePrevScreen(num) {
    screenPrev.innerHTML = num;
}

function calculate2(a, operator, b){
    if (operator == '+') {
        currentValue = (parseInt(a) + parseInt(b))
    } else if (operator == '-') {
        currentValue = (parseInt(a) - parseInt(b))
    } else if (operator == '*') {
        currentValue = (parseInt(a) * parseInt(b))
    } else if (operator == '/') {
        currentValue = (parseInt(a) / parseInt(b))
    } //else if (operator == '-') {
        //currentValue = (parseInt(a) - parseInt(b))
    //}
}