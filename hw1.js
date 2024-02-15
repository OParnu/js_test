function init() {
    const addButton = document.getElementById("addButton")
    addButton.addEventListener("click",addTask)
    const deleteButton = document.getElementById("deleteButton")
    deleteButton.addEventListener("click",deleteTask)
    const allDeleteButton = document.getElementById("allDeleteButton")
    allDeleteButton.addEventListener("click",deleteAllTask)
}
function addTask() {
    const newTask = document.getElementById("todoList")
    const newList = document.createElement("li")
    const todoInput = document.getElementById("todoInput")
    const errorMsg = document.getElementById("errorMsg")
    if (todoInput.value === '') {
        errorMsg.textContent = 'Error!!'
    } else {
        newList.textContent = todoInput.value
        newTask.appendChild(newList)
        todoInput.value = ''
        errorMsg.textContent = '' 
    }
}
function deleteTask() {
    errorMsg.textContent = ''
    const todoList = document.getElementById("todoList")
    todoList.removeChild(todoList.lastChild)
}
function deleteAllTask() {
    const delAllTask = document.getElementById("todoList")
    delAllTask.textContent = ''
    errorMsg.textContent = ''
}
init();
