var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const emailPrompt = prompt("email")

if (emailPrompt.match(validRegex)) {
    alert("true")
}
else {
    alert("mail type yalnisdir")
}