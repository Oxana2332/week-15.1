"use strict";

function check() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const password = document.getElementById("password");
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");
    const chbox = document.getElementById('checkbox');

    document.getElementById('error').innerHTML = "";

    if (fname.value.length <= 0) {
        document.getElementById('error').innerHTML += "Пожалуйста, введите имя <br>";
    } else if (lname.value.length <= 0) {
        document.getElementById('error').innerHTML += "Пожалуйста, введите фамилию <br>";
    } else if (password.value.length <= 7) {
        document.getElementById('error').innerHTML += "Необходимо ввести пароль, состоящий не менее, чем из 8 символов <br>";
    } else if ((!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))) {
        document.getElementById('error').innerHTML += "Необходимо ввести емейл<br>";
    } else if (!(tel.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/))) {
        document.getElementById('error').innerHTML += "Необходимо ввести телефон<br>";
    } else if (!(chbox.checked)) {
        alert('Для завершения регистрации примите условия Пользовательского соглашения и дайте согласие на обработку персональных данных');
    } else {
        alert('Добро пожаловать, ' + fname.value + ' ' + lname.value + '!');
    }
}