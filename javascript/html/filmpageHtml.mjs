export function generateFilmPageHtml(project) {
    const container = document.createElement("div")
    
    const headings = document.createElement("div")
    headings.classList.add("project-headings", "manrope-heading")

    const h1 = document.createElement("h1")
    h1.classList.add("uppercase")
    h1.textContent = project.title

    const h2 = document.createElement("h2")
    h2.textContent = project.genre

    const imgPriContainer = document.createElement("div")
    imgPriContainer.classList.add("project-img-primary")

    const imgPrimary = document.createElement("img")
    imgPrimary.src = project.images.image1.img

    imgPriContainer.appendChild(imgPrimary)
    headings.append(h1, h2)
    container.append(headings, imgPriContainer)

    return container
}