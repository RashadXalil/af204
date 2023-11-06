const baseUrl = "https://fakestoreapi.com/products"
axios.get("https://fakestoreapi.com/products").then(res => {
    renderUI(res.data)
})
let basketItems;
if (!localStorage.getItem("basketItems")) {
    basketItems = []
}
else {
    basketItems = JSON.parse(localStorage.getItem("basketItems"))
}
const itemsWrapper = document.getElementById("items")
let basketCounter = document.getElementById("basketCounter")
function renderUI(data) {
    let innerText = ""
    for (let i = 0; i < data.length; i++) {
        innerText += `
        <div class="col-3 mb-5">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="${data[i].image}" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">${data[i].title.slice(0, 20)}...</h5>
            <p class="card-text">
              ${data[i].category}
              Price: ${data[i].price} AZN
            </p>
            <button class="btn btn-info" onclick="addToBasket(${data[i].id})">add to basket</button>
          </div>
        </div>
      </div>`

    }
    itemsWrapper.innerHTML = innerText
}
function addToBasket(id) {
    axios.get(`${baseUrl}/${id}`).then(res => {
        let existProduct = basketItems.find(product => product.id == id)
        if (existProduct) {
            existProduct.count++
        }
        else {
            let basketItem = {
                id: res.data.id,
                image: res.data.image,
                title: res.data.title,
                price: res.data.price,
                count: 1,
                totalPrice: res.data.price * 1
            }
            basketItems.push(basketItem)
        }
        localStorage.setItem("basketItems", JSON.stringify(basketItems))
        basketCounter++
    })
}