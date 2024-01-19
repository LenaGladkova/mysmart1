var users = [];

function renderUserTable() {
    var table = document.getElementById("userTable");
    table.innerHTML = "<tr><th>Ім'я користувача</th><th>Email</th><th>Пароль</th><th>Дії</th></tr>";

    for (var i = 0; i < users.length; i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = users[i].username;
        cell2.innerHTML = users[i].email;
        cell3.innerHTML = users[i].password;
        cell4.innerHTML = '<button onclick="editUser(' + i + ')">Редагувати</button> ' +
                          '<button onclick="deleteUser(' + i + ')">Видалити</button>';
    }
}

function addOrUpdateUser() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
        username: username,
        email: email,
        password: password
    };

    var index = findUserIndex(username);
    if (index === -1) {
        users.push(user);
    } else {
   
        users[index] = user;
    }

    renderUserTable();
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

function editUser(index) {
    var user = users[index];
    document.getElementById("username").value = user.username;
    document.getElementById("email").value = user.email;
    document.getElementById("password").value = user.password;
}

function deleteUser(index) {
    users.splice(index, 1);
    renderUserTable();
}

function findUserIndex(username) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            return i;
        }
    }
    return -1;
}
renderUserTable();
