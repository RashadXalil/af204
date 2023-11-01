// function func1() {
//     console.log("1")
// }
// function func2() {
//     setTimeout(() => {
//         console.log("2")
//     }, 200);
// }
// function func3() {
//     console.log("3")
// }

// func1()
// func2()
// func3()

// const users = [{
//     id: 1,
//     name: "rashad",
//     surname: "xalilov"
// }, {
//     id: 2,
//     name: "fidan",
//     surname: "hesenova"
// }, {s
//     id: 3,
//     name: "fidanTheSecondOne",
//     surname: "sherifova"
// }]

// function addUser(name, surname, callback) {
//     setTimeout(() => {
//         const newUser = {
//             id: 4, name, surname
//         }
//         users.push(newUser)
//         callback()
//     }, 1000);

// }
// function getAllUsers() {
//     users.forEach((user) => {
//         console.log(user)
//     })
// }
// addUser("murad", "babayev", getAllUsers) // 1



// const users = [{ id: 1, name: "rashad", surname: "xalilov" }, { id: 2, name: "torpaq", surname: "hesenov" }]
// let added = true
// function addUser() {
//     return new Promise((resolve, reject) => {
//         if (added) {
//             resolve(users.push({ id: 3, name: "lorem", surname: "ipsum" }))
//         }
//         else {
//             reject("error 500")
//         }
//     })
// }
// function getAllUsers() {
//     users.forEach((user) => {
//         console.log(user.name)
//     })
// }
// addUser().then(getAllUsers()).catch(err => console.log(err))
// const list = document.getElementById("list")
// function deleteItem(id) {
//     fetch(`https://northwind.vercel.app/api/products/${id}`, {
//         method: "DELETE"
//     }).then(res => console.log(res)).catch(err => console.log(err))
// }
// fetch("https://northwind.vercel.app/api/products")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         let innerText = ""
//         for (let i = 0; i < data.length; i++) {
//             innerText += `<li>${data[i].id} ${data[i].name} <button onclick="deleteItem(${data[i].id})">delete</button></li>`
//         }
//         list.innerHTML = innerText

//     })
//     .catch(err => console.log(err))

const baseURL = "https://northwind.vercel.app/api/suppliers"
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("list")
function deleteItem(id) {
    fetch(`${baseURL}/${id}`, {
        method: "DELETE"
    }).then(res => {
        window.location.reload()
    }).catch(err => console.log(err))

}
fetch(`${baseURL}`).then(res => res.json()).then(data => {
    let innerText = ""
    for (let i = 0; i < data.length; i++) {
        innerText += `<tr>
        <th scope="row">${data[i].id}</th>
        <td>${data[i].companyName}</td>
        <td>${data[i].contactName}</td>
        <td>${data[i].contactTitle}</td>
        <td><button class="btn btn-danger" onclick="deleteItem(${data[i].id})">Delete</button></td>
      </tr>`
    }
    list.innerHTML += innerText

}).catch(err => console.log(err))
addBtn.addEventListener("click", function (e) {
    const companyName = prompt("companyName")
    const contactName = prompt("contactName")
    const contactTitle = prompt("contactTitle")
    let newSupplier = {
        companyName: companyName,
        contactName: contactName,
        contactTitle: contactTitle,
    }
    console.log(newSupplier)
    fetch(`${baseURL}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSupplier) // [object object]
    })
        .then(res => window.location.reload())
        .catch(err => console.log(err))
})