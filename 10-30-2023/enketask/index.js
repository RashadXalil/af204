let id = 1
const openModalBtn = document.getElementById("modalBtn")
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("cancel")
const addForm = document.getElementById("addForm")
const imageInp = document.getElementById("image")
const nameInp = document.getElementById("name")
const genreInp = document.getElementById("genre")
const updateBtn = document.getElementById("updateBtn")
const imdbInp = document.getElementById("imdb")
const searchInp = document.getElementById("searchInp")
const tbody = document.getElementById("tbody")
const yearInp = document.getElementById("year")
const descriptionInp = document.getElementById("description")
const filterGenre = document.getElementById("filterGenre")
const addFilmBtn = document.getElementById("add")
let films = []
class Film {
    constructor(image, name, genre, imdb, year, description) {
        this.id = id,
            this.image = image,
            this.name = name,
            this.genre = genre,
            this.imdb = imdb,
            this.year = year,
            this.description = description,
            id++
    }
}
function addFilm(image, name, genre, imdb, year, description) {
    let newFilm = new Film(image, name, genre, imdb, year, description)
    films.push(newFilm)
    renderUI(films)
}
function deleteFilm(id) {
    if (confirm("silmek isteyirsinizmi?")) {
        let target = films.find(film => film.id == id)
        let indexOfTarget = films.indexOf(target)
        films.splice(indexOfTarget, 1)
        renderUI(films)
    }
}
function filterByGenre(genre) {
    if (genre == "all") {
        renderUI(films)
    }
    else {
        const filteredFilms = films.filter(film => film.genre == genre)
        renderUI(filteredFilms)
    }

}
function searchFilm(searchValue) {
    const searchedFilm = films.filter(film => film.name.toLowerCase().startsWith(searchValue.trim().toLowerCase()))
    renderUI(searchedFilm)
}
function editFilm(id) {
    let target = films.find(film => film.id == id)
    modal.classList.add("active")
    addFilmBtn.disabled = true
    imageInp.value = target.image
    nameInp.value = target.name
    genreInp.value = target.genre
    imdbInp.value = target.imdb
    yearInp.value = target.year
    descriptionInp.value = target.description
    updateBtn.disabled = false
    updateBtn.setAttribute("data-id", id)
}
function renderUI(array) {
    let innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        innerHTML += `<tr>
        <th class="align-middle" scope="row">${i + 1}</th>
        <td class="align-middle">
          <img
            class="poster"
            src="${array[i].image}"
            alt=""
          />
        </td>
        <td class="align-middle">${array[i].name}</td>
        <td class="align-middle">${array[i].genre}</td>
        <td class="align-middle">${array[i].imdb}</td>
        <td class="align-middle">${array[i].year}</td>
        <td class="align-middle">${array[i].description}</td>
        <td class="align-middle">
          <button class="btn btn-warning" onclick="editFilm(${array[i].id})">Edit</button>
        </td>
        <td class="align-middle">
          <button class="btn btn-danger" onclick="deleteFilm(${array[i].id})">Delete</button>
        </td>
      </tr>`
    }
    tbody.innerHTML = innerHTML
}
function openModal() {
    modal.classList.toggle("active")
}
openModalBtn.addEventListener("click", openModal)
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active")
})
filterGenre.addEventListener("change", (e) => {
    filterByGenre(e.target.value)
})
searchInp.addEventListener("keydown", (e) => {
    searchFilm(e.target.value)
})
addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const imageVal = imageInp.value
    const nameVal = nameInp.value
    const genreVal = genreInp.value
    const imdbVal = imdbInp.value
    const yearVal = yearInp.value
    const descriptionVal = descriptionInp.value
    addFilm(imageVal, nameVal, genreVal, imdbVal, yearVal, descriptionVal)
    imageInp.value = ""
    nameInp.value = ""
    genreInp.value = ""
    imdbInp.value = ""
    yearInp.value = ""
    descriptionInp.value = ""
    modal.classList.remove("active")
})
updateBtn.addEventListener("click", function (e) {
    let id = e.target.getAttribute("data-id")
    const target = films.find(film => film.id == id)
    const targetIndex = films.indexOf(target)
    target.name = nameInp.value
    target.image = imageInp.value
    target.genre = genreInp.value
    target.imdb = imdbInp.value
    target.year = yearInp.value
    target.description = descriptionInp.value
    films.splice(targetIndex, 1, target)
    renderUI(films)
    imageInp.value = ""
    nameInp.value = ""
    genreInp.value = ""
    imdbInp.value = ""
    yearInp.value = ""
    descriptionInp.value = ""
    updateBtn.disabled = true
    modal.classList.remove("active")
})