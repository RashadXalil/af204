import { homePageHeading, loginUsername, loginPassword, loginBtn, registerName, registerSurname, registerUsername, registerEmail, registerPassword, registerBtn, logoutBtn } from "./document.js";
import user from "./user.js"

// if (loginBtn) {
//     loginBtn.addEventListener("click", () => {

//     })
// }
if (registerBtn) {
    registerBtn.addEventListener("click", (e) => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        e.preventDefault()
        let name = registerName.value
        let surname = registerSurname.value
        let username = registerUsername.value
        let password = registerPassword.value
        let email = registerEmail.value
        if (email.match(emailRegex)) {
            if (password.match(passwordRegex)) {
                user().register(name, surname, username, email, password)

            }
            else {
                alert("password formati yalnisdir")
            }
        }
        else {
            alert("email formati yalnisdir")
        }
    })
}
else if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
        e.preventDefault()
        let username = loginUsername.value
        let password = loginPassword.value
        user().login(username, password)
        if (homePageHeading) {
            homePageHeading.innerHTML = `welcome ${username}`
        }
    })
}
else {
    const target = JSON.parse(localStorage.getItem("currentUser"))
    homePageHeading.innerHTML = `welcome ${target.name}`
    logoutBtn.addEventListener("click", function () {
        homePageHeading.innerHTML = `Noone logined yet...`
        const users = JSON.parse(localStorage.getItem("users"))
        const target = users.find(user => user.isLoggedId == true)
        target.isLoggedId = false
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.removeItem("currentUser")
    })
}