function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {

        window.location.href = "registration-success.html";
    } else {

        alert("Пользователь не найден. Зарегистрируйтесь, чтобы войти!");
    }

    return false;
}
