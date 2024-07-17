import { openInstagramApp } from "./functionality/instagram.mjs";
import { initializeTopNav } from "./ui/topNav.mjs";

initializeTopNav();



const insta = document.getElementById("insta")
insta.addEventListener("click", (event) => openInstagramApp(event, "sorryma"))


// move to separate mjs file for about page?
const btnEmail = document.getElementById("email")
btnEmail.addEventListener("click", () => {
    window.location.href = "mailto: christinalande@gmail.com"
})
