document.addEventListener("DOMContentLoaded", function() {
    var userDataDiv = document.getElementById('userData');

    var storedUsername = localStorage.getItem('username');
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if (storedUsername && storedEmail && storedPassword) {
        userDataDiv.innerHTML = `
            <p><strong>Имя:</strong> ${storedUsername}</p>
            <p><strong>Email:</strong> ${storedEmail}</p>
            <p><strong>Пароль:</strong> ${storedPassword}</p>
        `;
    } else {
        userDataDiv.innerHTML = '<p>Данные не найдены.</p>';
    }
});
