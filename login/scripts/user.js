import { homePageHeading } from "./document.js";

function user() {
    let users;
    let currentUser;
    if (!localStorage.getItem("users")) {
        users = []
    }
    else {
        users = JSON.parse(localStorage.getItem("users"))
    }
    if (!currentUser) {
        currentUser = {}
    }
    else {
        currentUser = JSON.parse(localStorage.getItem("currentUser"))
    }
    function register(name, surname, username, email, password) {
        let newUser = {
            id: new Date().getTime(),
            name: name,
            surname: surname,
            username: username,
            email: email,
            password: password,
            isLoggedId: false
        }
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        console.log(users)

    }
    function login(username, password) {
        let target = users.find(user => user.username == username && user.password == password)
        if (target) {
            target.isLoggedId = true
            localStorage.setItem("users", JSON.stringify(users))
            localStorage.setItem("currentUser", JSON.stringify(target))
            window.location.href = "http://127.0.0.1:5500/index.html"
        }
        else {
            alert("username veya password sehvdir")
            window.location.href = "http://127.0.0.1:5500/register.html"
        }
    }
    // function logout() {
    //     let target = users.find(user => user.isLoggedId == true)
    //     target.isLoggedId = false
    //     localStorage.removeItem("currentUser")
    //     localStorage.setItem("users", JSON.stringify(users))
    //     homePageHeading.innerHTML = `Noone logined yet...`
    // }
    return { users, register, login }
}
export default user