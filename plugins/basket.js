let basketItems = JSON.parse(localStorage.getItem("basketItems"))
const totalPriceSpan = document.getElementById("totalPrice")
let totalPrices = 0
const wrapper = document.getElementById("wrapper")
function renderUI(basketItems) {
    let innerText = ""
    for (let i = 0; i < basketItems.length; i++) {
        innerText += `<tr>
        <th scope="row">${basketItems[i].id}</th>
        <td><img width="100px" heigth="100px" src="${basketItems[i].image}"/></td>
        <td>${basketItems[i].title}</td>
        <td>${basketItems[i].price} AZN</td>
        <td>${basketItems[i].count}</td>
        <td>${basketItems[i].totalPrice} AZN</td>
        <td><button id="increase" onclick="increase(${basketItems[i].id})">+</button></td>
        <td><button id="decrease" onclick="decrease(${basketItems[i].id})">-</button></td>
        <td><button id="delete" onclick="deleteBasketItem(${basketItems[i].id})">delete</button></td>
      </tr>`
    }
    wrapper.innerHTML = innerText
    totalPriceSpan.innerHTML = `${totalPrices} AZN`
}
renderUI(basketItems)
function deleteBasketItem(id) {
    let target = basketItems.find(item => item.id == id)
    let indexOfTarget = basketItems.indexOf(target)
    basketItems.splice(indexOfTarget, 1)
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
    calcTotalPrice(basketItems)
    renderUI(basketItems)
}
function increase(id) {
    let target = basketItems.find(item => item.id == id)
    target.count++
    target.totalPrice = target.count * target.price
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
    totalPrices += target.price
    renderUI(basketItems)
}
function decrease(id) {
    let target = basketItems.find(item => item.id == id)
    if (target.count > 1) {
        target.count--
        target.totalPrice = target.count * target.price
        localStorage.setItem("basketItems", JSON.stringify(basketItems))
        totalPrices += target.price
    }
    else {
        deleteBasketItem(id)
    }
    renderUI(basketItems)
}
function calcTotalPrice(array) {
    for (let i = 0; i < array.length; i++) {
        totalPrices += array[i].totalPrice
    }
    totalPriceSpan.innerHTML = `${totalPrices} AZN`
    renderUI(basketItems)
}
calcTotalPrice(basketItems)