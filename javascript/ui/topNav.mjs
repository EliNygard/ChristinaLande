// source: https://www.youtube.com/watch?v=pBv7igaxfQE&t=8s

function initializeToNav() {
  const btnOpen = document.querySelector("#btnOpen");
  const btnClose = document.querySelector("#btnClose");
  const media = window.matchMedia("(width < 766px)");
  const topNavMenu = document.querySelector(".topnav__menu");
  const main = document.querySelector("main");
  const body = document.querySelector("body");

  function openMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "true");
    topNavMenu.classList.add("open");
    topNavMenu.removeAttribute("inert");
    topNavMenu.removeAttribute("style");
    main.setAttribute("inert", "");
    bodyScrollLockUpgrade.disableBodyScroll(body);
    btnClose.focus();
  }

  function closeMobileMenu() {
    btnOpen.setAttribute("aria-expanded", "false");
    topNavMenu.classList.remove("open");
    topNavMenu.setAttribute("inert", "");
    main.removeAttribute("inert");
    bodyScrollLockUpgrade.enableBodyScroll(body);
    btnOpen.focus();

    setTimeout(() => {
      topNavMenu.style.transition = "none";
    }, 500);
  }

  function setupTopNav(e) {
    if (e.matches) {
      // is mobile
      console.log("is mobile");
      topNavMenu.setAttribute("inert", "");
      topNavMenu.style.transition = "none";
    } else {
      // is tablet/desktop
      console.log("is desktop");
      closeMobileMenu();
      topNavMenu.removeAttribute("inert");
    }
  }

  setupTopNav(media);

  btnOpen.addEventListener("click", () => {
    console.log("open mobile menu");
    openMobileMenu();
  });
  btnClose.addEventListener("click", closeMobileMenu);

  media.addEventListener("change", function (e) {
    setupTopNav(e);
  });
}
initializeToNav();

//   const topNavMenu = document.querySelector(".topnav__menu");
//   const btnOpen = document.querySelector("#btnOpen");
//   const btnClose = document.querySelector("#btnClose");
//   const main = document.querySelector("main");
//   const body = document.querySelector("body");
//   const media = window.matchMedia("(max-width: 766px)");

// function setUpTopNav(e) {

//     if (e.matches) {
//       console.log("is mobile");
//       // topNavMenu.setAttribute("inert", "");
//       topNavMenu.style.transition = "none";
//     } else {
//       console.log("is desktop");
//       // topNavMenu.removeAttribute("inert");
//       topNavMenu.style.transition = "";
//       closeMobileMenu();
//     }
//   }

//   function openMobileMenu() {

//     console.log("opening mobile menu");

//     btnOpen.setAttribute("aria-expanded", "true");
//     topNavMenu.classList.toggle("open", true);
//     topNavMenu.removeAttribute("inert");
//     topNavMenu.removeAttribute("style");
//     main.setAttribute("inert", "");
//     bodyScrollLockUpgrade.disableBodyScroll(body);
//     btnClose.focus();

//     console.log("mobile menu opened. Inert removed", !topNavMenu.hasAttribute("inert"));
//   }

//   function closeMobileMenu() {

//     console.log("close mobile menu");

//     btnClose.setAttribute("aria-expanded", "false");
//     topNavMenu.classList.toggle("open", false);
//     topNavMenu.setAttribute("inert", "");
//     main.removeAttribute("inert");
//     bodyScrollLockUpgrade.enableBodyScroll(body);
//     btnOpen.focus();

//     setTimeout(() => {
//       topNavMenu.style.transition = "none";
//       console.log("mobile menu closed");
//     }, 500);
//   }

//     setUpTopNav(media);

//     btnOpen.addEventListener("click", openMobileMenu);
//     btnClose.addEventListener("click", closeMobileMenu);

//     media.addEventListener("change", function (e) {
//       console.log("media query change detected");
//       setUpTopNav(e);
//     });
