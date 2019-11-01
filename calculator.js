var plus, minus, divide, multiply;

function initialize() {
    plus = document.calc.operator.options[0];
    minus = document.calc.operator.options[1];
    divide = document.calc.operator.options[2];
    multiply = document.calc.operator.options[3];
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function divider(a, b) {
    return a / b;
}

function multiplier(a, b) {
    return a * b;
}

function calculate(val1, val2) {
    xVal = +document.getElementById(val1).value;
    yVal = +document.getElementById(val2).value;
    if (plus.selected)
        document.calc.answer.value = add(xVal, yVal);
    if (minus.selected)
        document.calc.answer.value = substract(xVal, yVal);
    if (divide.selected)
        document.calc.answer.value = divider(xVal, yVal);
    if (multiply.selected)
        document.calc.answer.value = multiplier(xVal, yVal);
}


module.exports = {add: add, substract: substract, divider: divider, multiplier: multiplier};

