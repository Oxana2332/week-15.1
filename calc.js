"use strict";

const a = document.getElementById('firstNumber');
const b = document.getElementById('secondNumber');

function calcSum(){
    const sum = Number(a.value) + Number(b.value);
    document.getElementById('result').textContent = sum;
    return sum;
}

function calcMinus(){
    const minus = a.value - b.value;
    document.getElementById('result').textContent = minus;
    return minus;
}

function calcMulti(){
    const multi = a.value * b.value;
    document.getElementById('result').textContent = multi;
    return multi;
}

function calcDivide(){
    if(b.value==0){
    alert("На ноль делить нельзя!");
    } else {
        const divide = a.value / b.value;
        document.getElementById('result').textContent = divide;
        return divide;
    }
}