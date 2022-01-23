function check() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let chbox = document.getElementById('checkbox');

    document.getElementById('error').innerHTML = "";

    if (fname.value.length <= 0) {
        document.getElementById('error').innerHTML += "Пожалуйста, введите имя <br>";
        return false;
    } else if (lname.value.length <= 0) {
        document.getElementById('error').innerHTML += "Пожалуйста, введите фамилию <br>";
        return false;
    } else if (password.value.length <= 7) {
        document.getElementById('error').innerHTML += "Необходимо ввести пароль, состоящий не менее, чем из 8 символов <br>";
        return false;
    } else if ((!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))) {
        document.getElementById('error').innerHTML += "Необходимо ввести емейл<br>";
        return false;
    } else if (!(tel.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/))) {
        document.getElementById('error').innerHTML += "Необходимо ввести телефон<br>";
        return false;
    } else if (!(chbox.checked)) {
        alert('Для завершения регистрации примите условия Пользовательского соглашения и дайте согласие на обработку персональных данных');
        return false;
    } else {
        alert('Добро пожаловать, ' + fname.value + ' ' + lname.value + '!');
    }
}