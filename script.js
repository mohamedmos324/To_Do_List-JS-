let inputBox = document.getElementById("input-box");
let listCon = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You should add at least 1 task")
    } else {
        let task = document.createElement('li');
        task.innerHTML = inputBox.value;
        listCon.appendChild(task);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        task.appendChild(span);
    }
    inputBox.value = "";
    saveData ();
}
listCon.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData ();
    } else
        if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData ();
        }
}, false)

function saveData () {
    localStorage.setItem('data',listCon.innerHTML)
}
function showTask () {
    listCon.innerHTML = localStorage.getItem('data');
}
showTask ();