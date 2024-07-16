export function openInstagramApp(event, username) {
    event.preventDefault();
    const appLink = "instagram://user?username=" + username;
    const webLink = "https://www.instagram.com/" + username;

    const iframe = document.createElement("iframe")
    iframe.style.display = "none"
    iframe.src = appLink;
    document.body.appendChild(iframe)

    setTimeout(function() {
        window.location.href = webLink
    }, 500)
}

const insta = document.getElementById("insta")
insta.addEventListener("click", (event) => {
    openInstagramApp(event, "sorryma")
})