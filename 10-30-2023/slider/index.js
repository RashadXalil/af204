const prevSlideBtn = document.getElementById("prev")
const display = document.getElementById("display")
const nextSlideBtn = document.getElementById("next")
let activeSlideIndex = 0
const slides = [
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    "https://nystudio107.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg"
]
function prevSlide() {
    activeSlideIndex-- // 0 
    renderUI(activeSlideIndex) // 0 - 1
    if (activeSlideIndex < 0) { // -1 
        activeSlideIndex = slides.length - 1 // 2
        renderUI(activeSlideIndex)
    }
}
function nextSlide() {
    activeSlideIndex++
    renderUI(activeSlideIndex)
    if (activeSlideIndex > slides.length - 1) {
        activeSlideIndex = 0
        renderUI(activeSlideIndex)
    }
}
function renderUI(index) {
    display.src = slides[index]
}
prevSlideBtn.addEventListener("click", prevSlide)
nextSlideBtn.addEventListener("click", nextSlide)