// // var murad = "murad"
// // var murad = "Babayev"
// node list => static =>
// // console.log(murad)

// // let murad = "murad"
// // murad = "Babayev"
// // console.log(murad)
// // let numbers = [1, 2, 3, 4]
// // numbers = "rashad"

// // console.log(numbers)
// // const user = "rashad"
// // user = 7
// // console.log(user)

// // CounterValue => Pascal case
// // camelCase =>

// // function Array() { }
// // const item = new Array()

// // counter_value

// // const salam_necesen = 0


// // let a = 12;
// // let b = 13;
// // a = a + b // 25
// // b = a - b // 13
// // a = a - b // 12
// // console.log(a, b)
// // let a = 9
// // let b = 9
// // && => sol && sağ => true true => true

// // const numbers = [1, 2, 3, 4] // => 4 / 3

// // numbers.splice(1, 2, 111, 111)
// // console.log(numbers)

// const user = {
//     name: "rashad",
//     surname: "xalilov"
// }
// console.log(user)

// if else
// let user = {
//     name: "rashad",
//     surname: "xalilov",
//     age: 10
// }



// let name = "rashad"
// let surname = "xalilov"

// console.log("")
// const array = [1, 2, 3, 4, 5]
// let i = 0
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]) // array[1] => 2
// }
// while (i < array.length) {
//     i++
//     console.log(array[i])
// }
// do {
//     console.log(array[i])
//     i++
// } while (i < array.length);

// parametr olaraq 2 parametr qebul eden ve onlarin cemini geri qaytaran func yazin
// function sum(a, b) {
//     return a + b
// }
// console.log(sum(110, 120))

// [] => index
// () => func exec
// {} => block

// func expression
// const myFunc = function () {

// }
// func dec
// function muFunc() {

// }
// arrow
// const myFunc = () => { }

// () => { }
// function() { }


// cut ededleri

// function sumOdd(array = [1, 2, 3, 4, 5, 6]) {
//     var arr = [4, 5, 6, 7, 8]
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum
// }

// console.log(sumOdd([5, 6, 7, 8, 9, 10]))

// const myFunc = function (params) {
//     console.log(params)
// }
// function sum(a, b, callback) {
//     let c = a + b
//     callback(c)
// }
// sum(3, 4, myFunc)
// const humans = []
// const cars = []
// function Human(name, surname) {
//     return obj = {
//         name: name,
//         surname: surname
//     }
// }
// function Car(model, brand) {
//     return {
//         model: model,
//         brand: brand
//     }
// }

// function createObject(name, surname, array, orxan) {
//     let newObject = orxan(name, surname) // {name:"murad",surname:"babayev"}
//     array.push(newObject)
//     console.log(newObject)
// }
// createObject("murad", "Babayev", humans, Human)
// createObject("bmw", "3 series", cars, Car)


// numbers.forEach((number, index, array) => {
//     console.log(array)
// })
// const newNumbers = numbers.map((item, index, array) => { return item * 2 })
// console.log(newNumbers)

// const users = [{ id: 1, name: "rashad", surname: "xalilov" },
// { id: 2, name: "murad", surname: "Babayev" }]

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element)
// }

// const userNames = users.map((user, index, array) => {
//     return user.name
// })
// console.log(userNames)



// const list = users.map(user => {
//     return `<li>${user.name} ${user.surname}</li>`
// })
// console.log(list)
// const numbers = [1, 2, 3, 4, 5, 6]
// let target = numbers.findIndex((number) => number == 3)
// console.log(target)
// numbers.indexOf(3)
// const filteredNumbers = numbers.filter((number) => number % 2 == 1)
// console.log(filteredNumbers)
// console.log(numbers[2])
// console.log(target)

// console.log(numbers.some((number) => number % 2 == 0))
// console.log(numbers.indexOf(3))


// console.log("Salam")
// const text = document.getElementById("text")
// const divsCollection = document.getElementsByTagName("div")
// const newDiv = document.createElement("div")
// newDiv.innerHTML = "div 4"
// const divs = document.querySelectorAll("div")
// body.appendChild(newDiv)
// console.log(divs)
// console.log(divsCollection)
// const newElement = document.createElement("div")
// newElement.innerHTML = "<b>new div 4</b>"
// body.appendChild(newElement)
// const newElement = document.createElement("span")
// // newElement.setAttribute("id", 1)
// newElement.setAttribute("id", "rashad")
// newElement.setAttribute("class", "salam")
// newElement.classList.
//     span.classList.add("red")
// const modalBody = document.getElementById("modal")
// const span = document.getElementById("span")
// // span.classList.remove("salam")
// openModalBtn.addEventListener("click", function (e) {
//     modalBody.classList.toggle("active")
// })
// const body = document.getElementById("body")
// const openModalBtn = document.getElementById("openModal")
// const name = "fidan"
// const newElement = `<div>necesen ${name}</div>`
// body.innerHTML += newElement
// window.alert("salam")
// console.log(window.devicePixelRatio)
// alert(window.innerHeight)
// window.open()
// console.log(window.pixelDepth)
// const salam = document.getElementById("salam")
// salam.addEventListener("click", function (e) {
//     e.preventDefault()
//     console.log(window.location)
// // })
// setTimeout(() => {
//     console.log(salam)
// }, 2000);
// let counter = 0
// const myInterval = setInterval(() => {
//     console.log(counter)
//     counter++
// }, 500);

// openModalBtn.addEventListener("click", function (e) {
//     clearInterval(myInterval)
// })
// let saat = new Date().getHours();
// let deqiqe = new Date().getMinutes();
// let saniye = new Date().getSeconds()

// const myInterval = setInterval(() => {
//     saniye++
//     if (saniye == 60) {
//         deqiqe++
//         saniye = 0
//     }
//     if (deqiqe == 60) {
//         saat++
//         deqiqe = 0
//     }
//     screen.innerHTML = `${saat <= 9 ? "0" : ""}${saat}:${deqiqe <= 9 ? "0" : ""}${deqiqe}:${saniye <= 9 ? "0" : ""}${saniye}`
// }, 1000);

// const inp = document.getElementById("inp")
// const screen = document.getElementById("saat")
// inp.addEventListener("keyup", (e) => {
//     if (e.keyCode == 87) {
//         const valueArr = Array.from(inp.value) // array
//         valueArr.pop()
//         let str = ""
//         for (let i = 0; i < valueArr.length; i++) {
//             str += valueArr[i]
//         }
//         inp.value = str
//         alert("azerbaycan herflerinden istifade edin")
//         return
//     }
// })

// const screen = document.getElementById("screen")
// const btn = document.getElemxentById("btn")
// // console.log(Math.ceil(3.1))
// // console.log(color)
// btn.addEventListener("click", function (e) {
//     const color = Math.ceil(Math.random() * 1000000)
//     screen.style.background = `#${color}`
// })
// console.log(Math.PI
let counter = 0;
const shootBtn = document.getElementById("shoot")
const bulletsWrapper = document.getElementById("bullets")
const bullets = [false, false, false, false, false, false]
const index = Math.floor((Math.ceil(Math.random() * 11) / 2))
bullets[index] = true
// bulletsWrapper.children[0].classList.add("false")
shootBtn.addEventListener("click", function (e) {
    if (bullets[counter] == false) {
        bulletsWrapper.children[counter].classList.add("false")
    }
    if (counter == index) {
        alert("3 defe qaldirin qoyun yere")
    }
    counter++
})