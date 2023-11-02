let params = new URLSearchParams(document.location.search);
let id = params.get("id"); // is the string "Jonathan"
const baseURL = "https://northwind.vercel.app/api/products"
const card = document.getElementById("card")

fetch(`${baseURL}/${id}`).then(res => res.json()).then(data => {
    console.log(data)
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    ${data.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${data.unitPrice}</li>
    <li class="list-group-item">${data.unitsInStock}</li>
    <li class="list-group-item">${data.id}</li>
  </ul>
</div>
    `

})