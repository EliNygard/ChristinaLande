import { openInstagramApp } from "./functionality/instagram.mjs";
import { generateFilmPageHtml } from "./html/filmpageHtml.mjs";
import { initializeTopNav } from "./ui/topNav.mjs";


initializeTopNav();

const insta = document.getElementById("insta")
insta.addEventListener("click", (event) => openInstagramApp(event, "sorryma"))


fetch("./javascript/api/projects.json")
.then((response) => response.json())
.then((data) => {
    const projects = data.projects
    console.log(projects);
    const filmPageContainer = document.getElementById("filmPage")
    filmPageContainer.innerHTML = ""
    projects.forEach((project) => {
        const filmPageHtml = generateFilmPageHtml(project)
        filmPageContainer.appendChild(filmPageHtml)
    })
})

// move to separate mjs file for about page?
const btnEmail = document.getElementById("email")
btnEmail.addEventListener("click", () => {
    window.location.href = "mailto: christinalande@gmail.com"
})
