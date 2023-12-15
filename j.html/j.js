
document.getElementById('form').addEventListener('sumbit', function(event) {
    event.preventDefault();
    var name = document.getElementById('nameInput').value;
    console.log('password2: ' + name);
})