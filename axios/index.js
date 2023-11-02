const baseURL = "https://northwind.vercel.app/api/products"
const click = document.getElementById("click")
// click.addEventListener("click", () => {
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire(
//                 'Deleted!',
//                 'Your file has been deleted.',
//                 'success'
//             )
//         }
//         else {
//             Swal.fire(
//                 'not Deleted!',
//                 'Your file has been deleted.',
//                 'error'
//             )
//         }
//     })
// })


// async function getData() {
//     let response = await fetch(`${baseURL}`) // {statusCode:200,data:[]}
//     let data = await response.json()
//     return data
// }
// getData()

const wrapper = document.getElementById("wrapper")
const searchInp = document.getElementById("searchInp")
const minPriceInp = document.getElementById("minPrice")
const maxPriceInp = document.getElementById("maxPrice")
const filterByPriceBtn = document.getElementById("filterByPrice")
function renderUI(data) {
    let innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        innerHTML += ` <tr>
        <th scope="row">${data[i].id}</th>
        <td>${data[i].name}</td>
        <td>${data[i].unitPrice}</td>
        <td>${data[i].unitsInStock}</td>
        <td><a class="btn btn-info" href="http://127.0.0.1:5500/detail.html?id=${data[i].id}">Learn More</a></td>
        <td><button class="btn btn-warning" onclick="editProduct(${data[i].id})">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteItem(${data[i].id})">Delete</button></td>
      </tr>`
    }
    wrapper.innerHTML = innerHTML
}

function deleteItem(id) {
    axios.delete(`${baseURL}/${id}`).then(res => {
        window.location.reload()
    })
}

async function editProduct(id) {
    const response = await fetch(`${baseURL}/${id}`)
    const data = await response.json()
    let newName = prompt("name")
    fetch(`${baseURL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ data, name: newName })
    }).then(res => {
        window.location.reload()
    })
}


// fetch(`${baseURL}`).then(res => res.json()).then(data => {
//     renderUI(data)
// })
axios(baseURL).then(res => {
    renderUI(res.data)
})
searchInp.addEventListener("keyup", (e) => {
    let searchValue = e.target.value
    // fetch(baseURL).then(res => res.json()).then(data => {
    //     const filteredData = data.filter(prod => prod.name.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))
    //     renderUI(filteredData)
    // })
    axios.get(baseURL).then(res => {
        const filteredData = res.data.filter(prod => prod.name?.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))
        renderUI(filteredData)
    })
})
filterByPriceBtn.addEventListener("click", (e) => {
    let minPriceVal = minPriceInp.value
    let maxPriceVal = maxPriceInp.value
    // fetch(baseURL).then(res => res.json()).then(data => {
    //     const filteredData = data.filter(product => product.unitPrice > minPriceVal && product.unitPrice < maxPriceVal)
    //     renderUI(filteredData)
    // })
    axios(baseURL).then(res => {
        const filteredData = res.data.filter(product => product.unitPrice > minPriceVal && product.unitPrice < maxPriceVal)
        renderUI(filteredData)
    })
})