import { generateFilmPageHtml } from "./html/filmpageHtml.mjs";

function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const filmId = getQueryParameter("id");
console.log(filmId);

fetch("./javascript/api/projects.json")
  .then((response) => response.json())
  .then((data) => {
    const projects = data.projects
    console.log(projects);
    const project = projects.find(project => project.id === filmId)
    console.log(project);
    if (project) {
      const filmPageContainer = document.getElementById("filmPage");
      const filmPageHtml = generateFilmPageHtml(project);
      filmPageContainer.appendChild(filmPageHtml);
    } else {
        console.error("Project not found");
    }
  });



// const filmPageContainer = document.getElementById("filmPage")
// filmPageContainer.innerHTML = ""
// projects.forEach((project) => {
//     const filmPageHtml = generateFilmPageHtml(project)
//     filmPageContainer.appendChild(filmPageHtml)
// })
