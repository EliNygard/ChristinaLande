import { redirect } from "../functionality/redirect.mjs";

export function generateFilmPageHtml(project) {
  const section = document.createElement("section");
  section.classList.add("project-wrapper");

  const headings = document.createElement("div");
  headings.classList.add("project-headings", "manrope-heading");

  const h1 = document.createElement("h1");
  h1.classList.add("uppercase");
  h1.textContent = project.title;

  const h2 = document.createElement("h2");
  h2.textContent = project.genre;

  const imgPriContainer = document.createElement("div");
  imgPriContainer.classList.add("project-img-primary");

  const imgPrimary = document.createElement("img");
  imgPrimary.src = project.imgPrimary.img;
  console.log(imgPrimary.src);
  imgPrimary.alt = project.imgPrimary.alt;

  //   if (project.images && project.images.image1) {
  //     imgPrimary.src = project.images.image1.img;
  //     imgPrimary.alt = project.images.image1.alt;
  //   }

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("project-content-container");

  const synopsis = document.createElement("p");
  synopsis.classList.add("synopsis");
  synopsis.textContent = project.synopsis;

  const credits = document.createElement("div");
  credits.classList.add("credits");

  const director = document.createElement("p");
  director.classList.add("director");
  director.textContent = `Written and directed by ${project.director}`;

  const producer = document.createElement("p");
  producer.classList.add("producer");
  producer.textContent = `Produced by ${project.producer}`;

  const photo = document.createElement("p");
  photo.classList.add("photo");
  photo.textContent = `Cinematography: ${project.cinematography}`;

  const border = document.createElement("div");
  border.classList.add("border");

  const winnerContainer = document.createElement("div");
  winnerContainer.classList.add("winner");

  const winner1 = document.createElement("p");
  winner1.textContent = project.winner;

  const festivalsContainer = document.createElement("div");
  festivalsContainer.classList.add("festivals");

  const h3 = document.createElement("h3");
  h3.textContent = "Festivals";

  const ulFestivals = document.createElement("ul");

  const festivals = project.festivals;
  festivals.forEach((festival) => {
    const liFestival = document.createElement("li");
    const pFestival = document.createElement("p");
    pFestival.textContent = festival;
    liFestival.appendChild(pFestival);
    ulFestivals.appendChild(liFestival);
  });

  const linksContainer = document.createElement("div");
  linksContainer.classList.add("links");

  const trailer = document.createElement("a");
  trailer.setAttribute("id", "linkTrailer");
  trailer.title = "Watch trailer";
  trailer.addEventListener("click", (event) => {
    event.preventDefault();
    redirect(project.trailer);
  });

  const btnTrailer = document.createElement("button");
  btnTrailer.textContent = "Watch Trailer";
  btnTrailer.classList.add("btnLink");

  const film = document.createElement("a");
  film.setAttribute("id", "linkFilm");
  film.title = "Watch film";
  film.addEventListener("click", (event) => {
    event.preventDefault();
    redirect(project.film);
  });

  const btnFilm = document.createElement("button");
  btnFilm.textContent = "Watch Film";
  btnFilm.classList.add("btnLink");

  const imgSecContainer = document.createElement("div");
  imgSecContainer.classList.add("project-img-secondary");

  const imgSecondary = project.imgSecondary;
  imgSecondary.forEach((imgSecObject) => {
    Object.keys(imgSecObject).forEach((key) => {
      const imgSec = imgSecObject[key];

      const img = document.createElement("img");
      img.src = imgSec.img;
      img.alt = imgSec.alt;
      imgSecContainer.appendChild(img);
    });
  });

  if (project.trailer) {
    trailer.appendChild(btnTrailer);
  }
  if (project.film) {
    film.appendChild(btnFilm);
  }
  linksContainer.append(trailer, film);
  festivalsContainer.append(h3, ulFestivals);
  winnerContainer.appendChild(winner1);
  credits.append(director, producer, photo);
  contentContainer.append(
    synopsis,
    credits,
    border,
    winnerContainer,
    festivalsContainer,
    linksContainer
  );
  imgPriContainer.appendChild(imgPrimary);
  headings.append(h1, h2);
  section.append(headings, imgPriContainer, contentContainer, imgSecContainer);

  return section;
}
