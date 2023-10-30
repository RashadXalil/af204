// const student = "fidan"
// localStorage.setItem("student", student)

const decreaseBtn = document.getElementById("decrease")
const screen = document.getElementById("screen")
const increaseBtn = document.getElementById("increase")
const clearBtn = document.getElementById("clear")
let counter;
if (!localStorage.getItem("counter")) {
    localStorage.setItem("counter", 0)
    counter = 0
}
else {
    counter = localStorage.getItem("counter")
}
screen.innerHTML = counter
increaseBtn.addEventListener("click", function (e) {
    counter++
    localStorage.setItem("counter", counter)
    screen.innerHTML = counter
    sessionStorage.setItem("counter", counter)
})
decreaseBtn.addEventListener("click", function (e) {
    counter--
    localStorage.setItem("counter", counter)
    screen.innerHTML = counter
})
clearBtn.addEventListener("click", function (e) {
    localStorage.clear()
    counter = 0
    screen.innerHTML = counter
})
// localStorage.setItem("student1", "murad1")
// localStorage.setItem("student2", "murad2")
// localStorage.setItem("student3", "murad3")
// localStorage.setItem("student4", "murad4")
// localStorage.setItem("student5", "murad5")

const user = {
    name: "rashad",
    surname: "xalilov"
}
const numbers = [1, 2, 3, 4, 5]
localStorage.setItem("user", JSON.stringify(numbers))

const userFromLocalStorage = JSON.parse(localStorage.getItem("user"))
console.log(userFromLocalStorage)