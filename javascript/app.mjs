import { openInstagramApp } from "./functionality/instagram.mjs";
import { initializeTopNav } from "./ui/topNav.mjs";


initializeTopNav();


const insta = document.getElementById("insta")
insta.addEventListener("click", (event) => openInstagramApp(event, "sorryma"))







