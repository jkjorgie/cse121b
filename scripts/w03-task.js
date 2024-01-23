/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(add1, add2);
}

document.querySelector('#addNumbers').addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let sub1 = Number(document.querySelector('#subtract1').value);
    let sub2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(sub1, sub2);
}

document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (a, b) => a * b;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let add1 = Number(document.querySelector('#dividend').value);
    let add2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(add1, add2);
}

document.querySelector('#divideNumbers').addEventListener("click", divideNumbers);

/* Decision Structure */
function calcTotalDue() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let isMember = (document.querySelector('#member').checked);
    if (isMember) {
        subtotal = subtotal * .8;
    }

    document.querySelector('#total').innerHTML = "$" + subtotal.toFixed(2);
}

document.querySelector('#getTotal').addEventListener("click", calcTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numArr;

/* Output Odds Only Array */
function getOdds(array) {
    return array.filter(number => number % 2 !== 0);
}

let odds = getOdds(numArr);
document.getElementById('odds').innerHTML = odds;

/* Output Evens Only Array */

let evens = numArr.filter(number => number % 2 === 0);
document.getElementById('evens').innerHTML = evens;

/* Output Sum of Org. Array */
let sum = numArr.reduce((sum, number) => sum += number);
document.getElementById('sumOfArray').innerHTML = sum;

/* Output Multiplied by 2 Array */
let doubleds = numArr.map(number => number * 2);
document.getElementById('multiplied').innerHTML = doubleds;

/* Output Sum of Multiplied by 2 Array */
doubleds = numArr.map(number => number * 2);
let sumDoubleds = doubleds.reduce((sum, number) => sum += number);
document.getElementById('sumOfMultiplied').innerHTML = sumDoubleds;
