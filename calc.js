    let a = document.getElementById('firstNumber');
    let b = document.getElementById('secondNumber');

function calcSum(){
    let sum = Number(a.value) + Number(b.value);
    document.getElementById('result').textContent = sum;
    return sum;
}

function calcMinus(){
    let minus = a.value - b.value;
    document.getElementById('result').textContent = minus;
    return minus;
}

function calcMulti(){
    let multi = a.value * b.value;
    document.getElementById('result').textContent = multi;
    return multi;
}

function calcDivide(){
    if(b.value==0){
    alert("На ноль делить нельзя!");
    } else {
        let divide = a.value / b.value;
        document.getElementById('result').textContent = divide;
        return divide;
    }
}