import { screen } from "./document.js"
let counter = 0

function increase() {
    counter++
    screen.innerHTML = counter
}
function decrease() {
    counter--
    screen.innerHTML = counter

}
export { increase, decrease }
export default counter