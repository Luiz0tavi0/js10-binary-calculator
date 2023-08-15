const display = document.querySelector("#res");
const btnOperands = Array.from(document.querySelectorAll(".operand"));
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");

const btnClr = document.querySelector("#btnClr");
const btnEql = document.querySelector("#btnEql");

const operation = { left: '', operator: '', right: '' };

const clearAllOperation = () => operation.left = operation.operator = operation.right = '';

btnClr.addEventListener('click', () => {
    clearAllOperation();
    updateDisplay();
});

btnEql.addEventListener('click', () => {
    const value1 = parseInt(operation.left, 2);
    const value2 = parseInt(operation.right, 2);
    let result;
    switch (operation.operator) {
        case '+':
            result = value1 + value2
            break;
        case '-':
            result = value1 - value2
            break;
        case '*':
            result = value1 * value2
            break;
        case '/':
            result = value1 / value2
            break;
    }
    clearAllOperation()
    display.innerHTML = result.toString(2);

});



const updateDisplay = () => display.innerHTML = `${operation.left}${operation.operator}${operation.right}`;

const insertOperand = (event) => {


    if (operation.operator)
        operation.right += event.target.innerHTML;
    else
        operation.left += event.target.innerHTML;
    updateDisplay();
}
[btn0, btn1].forEach(btn => btn.addEventListener('click', insertOperand));

btnOperands.forEach(btn => {
    btn.addEventListener('click', event => {
        if (!operation.left && "/*+-".includes(display.innerHTML)) return
        operation.operator = event.target.innerHTML;
        updateDisplay();

    });
});

