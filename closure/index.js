// function outerFunction() {
//     let count = 0;
//     function up() {
//         count++
//         return count
//     }
//     function down() {
//         count--
//         return count
//     }

//     return { up, down }
//     // {up:up,down:down}
// }
// const lorem = outerFunction() // {up,down}
// console.log(innerFunc.up())
// console.log(innerFunc.up())
// console.log(innerFunc.up())
// console.log(innerFunc.down())

function todos() {
    let todos = []
    let id = 0
    function addTodo(todo) {
        todos.push({ id: id, todo: todo, isComplated: false })
        id++
        return todos
    }
    function deleteTodo(id) {
        let target = todos.find(todo => todo.id == id)
        let indexOfTarget = todos.indexOf(target)
        todos.splice(indexOfTarget, 1)
        return todos
    }
    function complateTodo(id) {
        let target = todos.find(todo => todo.id == id)
        target.isComplated = !target.isComplated
        return todos
    }
    return { addTodo, deleteTodo, complateTodo }
}

const todoFunctions = todos() // {addTodo,deleteTodo}

console.log(todoFunctions.addTodo("ders oxumaq"))
console.log(todoFunctions.addTodo("coxlu ders oxumaq"))
console.log(todoFunctions.addTodo("com coxlu ders oxumaq"))
console.log(todoFunctions.deleteTodo(0))
console.log(todoFunctions.complateTodo(1))
