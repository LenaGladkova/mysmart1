var urlParams = new URLSearchParams(window.location.search);
var userDataDiv = document.getElementById('userData');

if (urlParams.has('username') && urlParams.has('email') && urlParams.has('password')) {
    var username = urlParams.get('username');
    var email = urlParams.get('email');
    var password = urlParams.get('password');

    userDataDiv.innerHTML = `
        <p><strong>Имя:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Пароль:</strong> ${password}</p>
    `;
} else {
    userDataDiv.innerHTML = '<p>Data not found.</p>';
}
