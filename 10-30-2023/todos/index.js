const addBtn = document.getElementById("addBtn")
const clearAllBtn = document.getElementById("clearAll")
const todoList = document.getElementById("todoList")
const todoInp = document.getElementById("todoInp")
let todos = []
let id = 0
class Todo {
    constructor(text) {
        this.id = id
        this.text = text
        this.isComplated = false
        id++
    }
}
// add func

function addTodo(text) {
    let newTodo = new Todo(text)
    todos.push(newTodo)
    renderUI(todos)
}

// edit func

function editTodo(id) {
    let target = todos.find((todo) => todo.id == id)
    let newText = prompt(`${target.text}`)
    target.text = newText
    console.log("item updated")
    renderUI(todos)
}

function complateTodo(id) {
    let target = todos.find((todo) => todo.id == id)
    target.isComplated = !target.isComplated
    renderUI(todos)
}

// delete func

function deleteTodo(id) {
    let target = todos.find((todo) => todo.id == id)
    let indexOftarget = todos.indexOf(target)
    todos.splice(indexOftarget, 1)
    renderUI(todos)
}

// clear all func
function clearAll() {
    todos = []
    renderUI(todos)
}

// render func
function renderUI(array) {
    let innerHTML = ""

    for (let i = 0; i < array.length; i++) {
        innerHTML += `<li>
        <span class="${array[i].isComplated ? "complate" : ""}">${array[i].text}</span>
        <button id="complateBtn" onclick="complateTodo(${array[i].id})">complate button</button>
        <button id="editBtn" onclick="editTodo(${array[i].id})">edit</button>
        <button id="deleteBtn" onclick="deleteTodo(${array[i].id})">delete</button>
      </li>`
    }
    todoList.innerHTML = innerHTML
}

addBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let text = todoInp.value.trim()
    if (text == "") return
    addTodo(text)
    todoInp.value = ""
})
clearAllBtn.addEventListener("click", clearAll)