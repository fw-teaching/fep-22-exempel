
// Vi skapar en objekt-array för vår meny
const contentItems = [
    { title: "Sida 1", url: "content/sida1.html" },
    { title: "Sida 2", url: "content/sida2.html" },
    { title: "Sida 3", url: "content/sida3.html" },
    { title: "Joke", url: "https://v2.jokeapi.dev/joke/Pun?format=txt&safe-mode" }
];

// Bygg upp html för menyn genom att loopa igenom arrayn
menuHTML = "";
menuBootstrapHTML = "";
for (item of contentItems) {
    menuHTML += `<div data-url="${item.url}">${item.title}</div>`;
    menuBootstrapHTML += `<div class="nav-link" data-url="${item.url}">${item.title}</div>`;
}
// HTML:en klar, vi lätter in den i meny-containern
document.querySelector("#content-menu").innerHTML = menuHTML;
document.querySelector(".navbar-nav").innerHTML = menuBootstrapHTML;

// Nu när menyn är klar i DOM:en, loopa igenom den och skapa click-lyssnare
// både för vår egen meny och bootstrap
document.querySelectorAll('#content-menu > div, .navbar-nav > div').forEach((elem) => {

    elem.addEventListener('click', (evt) => {
        // När man klickar på meny-elementet, plocka ut "data-url"-attributet
        // och skicka det som argument till loadContent()-funktionen
        loadContent(elem.getAttribute('data-url'));
    })
});

// loadContent() tar emot urlen till det som ska hämtas in med AJAX (fetch)
async function loadContent(contentUrl) {
    // fetcha innehållet
    const resp = await fetch(contentUrl);
    const contentHTML = await resp.text();

    // Vi måste använda innerHTML för att det ska vara en fungerande del av DOM
    document.querySelector('#content').innerHTML = contentHTML;
}

// Som default, ladda in första sidan
loadContent(contentItems[0].url);

/**
 * Hamburgarmeny
 */
function menuToggle() {
    if (document.querySelector('#content-menu').style.display == 'block') {
        document.querySelector('#content-menu').style.display = 'none';
    } else {
        document.querySelector('#content-menu').style.display = 'block'
    }
}

document.querySelector('#menubutton').addEventListener('click', (evt) => {
    menuToggle();
});
