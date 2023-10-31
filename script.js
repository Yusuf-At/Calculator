const buttons = document.querySelectorAll('.button');
const operatorButton = document.querySelectorAll('.operator');

const screenCurrent = document.querySelector('.current');
const screenPrev = document.querySelector('.previous-operand');

// efect on button
buttons.forEach(button => {
    button.addEventListener('mouseover', () => (button.style.cssText = "background-color: rgb(153, 115, 69);"))
})
buttons.forEach(button => {
    button.addEventListener('mouseout', () => (button.style.cssText = "background-color: rgb(121, 90, 53);"))
})

// get value of num button and display to screen
buttons.forEach(button => (button.addEventListener('click', addInputCurrent)));

// operatot button
operatorButton.forEach(operator => operator.addEventListener('click', function() {
    if (screenCurrent.textContent == "") {
        updateScreen('')
        console.log('kosong')
    }
    let newNumber = screenCurrent.textContent + this.textContent
    screenPrev.innerHTML = newNumber
    console.log(newNumber)
}))

// adding the input num button to the screen
function addInputCurrent() {
    if(Number.isInteger(parseInt(this.textContent)) || this.textContent == ".") {
        let newNumber = screenCurrent.textContent + this.textContent;
        console.log(`firstNum2IF: ${newNumber}`)
        updateScreen(newNumber)
    } 
}

function updateScreen(num) {
    screenCurrent.innerHTML = num;
}
