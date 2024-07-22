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

    if (project.images && project.images.image1) {
        imgPrimary.src = project.images.image1.img
        imgPrimary.alt = project.images.image1.alt
    }

    const contentContainer = document.createElement("div")
    contentContainer.classList.add("project-content-container")

    const synopsis = document.createElement("p")
    synopsis.classList.add("synopsis")
    synopsis.textContent = project.synopsis

    const credits = document.createElement("div")
    credits.classList.add("credits")

    const director = document.createElement("p")
    director.classList.add("director")
    director.textContent = `Written and directed by ${project.director}`

    const producer = document.createElement("p")
    producer.classList.add("producer")
    producer.textContent = `Produced by ${project.producer}`

    const photo = document.createElement("p")
    photo.classList.add("photo")
    photo.textContent = `Cinematography: ${project.cinematography}`

    const border = document.createElement("div")
    border.classList.add("border")

    const winnerContainer = document.createElement("div")
    winnerContainer.classList.add("winner")

    const winner1 = document.createElement("p")
    winner1.textContent = project.winner

    winnerContainer.appendChild(winner1)
    credits.append(director, producer, photo)
    contentContainer.append(synopsis, credits, border, winnerContainer)
    imgPriContainer.appendChild(imgPrimary)
    headings.append(h1, h2)
    container.append(headings, imgPriContainer, contentContainer)

    return container
}