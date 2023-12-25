var editObj = null;
function butt() {
    if(editObj !== null) {
        editObj.closest('.txt2').innerHTML = document.getElementById("txt1").value + " <input type=\"button\" value=\"Редагувати\" onclick=\"Edit(this)\"><input type=\"button\" value=\"Х\" onclick=\"Delete(this)\">";
        editObj = null;
    } else {
        let cont = document.querySelector(".p");
        let item = document.createElement("div");
        item.className = 'txt2';
        item.innerHTML = document.getElementById("txt1").value;
        item.innerHTML += " <input type=\"button\" value=\"Редагувати\" onclick=\"Edit(this)\"><input type=\"button\" value=\"Х\" onclick=\"Delete(this)\">";
        cont.appendChild(item);
        document.getElementById("txt1").value = '';
        editObj = null;
    }
}

function Delete(e) {
    e.closest('.txt2').remove();
}


function Edit(e) {
    var text2Edit = e.closest('.txt2').innerText;
    document.getElementById('txt1').value = text2Edit;
    editObj = e;
}
