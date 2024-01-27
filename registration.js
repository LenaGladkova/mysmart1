function submitForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    var userData = {
        username: username,
        email: email,
        password: password
    };

    var queryParams = Object.entries(userData).map(([key, value]) => key + '=' + encodeURIComponent(value)).join('&');

    window.location.href = "registration-success.html?" + queryParams;

    return false;
}
