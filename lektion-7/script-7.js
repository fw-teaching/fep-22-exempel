/** 
 * URL-parametrar 
 * */
const urlParams = new URLSearchParams(location.search);
console.log(urlParams.get('color'))
document.querySelector('#color-of-the-day').innerText = urlParams.get('color');
document.querySelector('#color-of-the-day').style.color = urlParams.get('color');

/**
 * Cookies
 */
const cookies = {}; // Vi skapar ett eget objekt att ha alla cookies i
//console.log(document.cookie.split('; '));
for (let coo of document.cookie.split('; ')) {
    //console.log(coo)
    let key = coo.split('=')[0];
    let val = coo.split('=')[1];
    cookies[key] = val;
}

// load-eventet körs först när hela sidan är laddad
window.addEventListener('load', (evt) => {
    if (cookies.visitor) {
        document.querySelector('#greeting').innerText = 'Hej igen ' + cookies.visitor;
    }
});

document.querySelector('#btn-ok').addEventListener('click', function(evt) {
    const namn = document.querySelector('#namn').value;
    document.querySelector("#greeting").innerText = 'Hej ' + namn;

    document.cookie = 'visitor=' + namn;

});

/**
 * Lightbox
 */

// Vi loopar igenom alla element av klassen thumbnail
document.querySelectorAll('.thumbnail').forEach((elem) => {

    // skapa klick-lyssnare för varje element
    elem.addEventListener('click', (evt) => {
        // Ta urlen till stora bilden från data-bin (kan också göras med replace!)
        //let bigImg = elem.getAttribute('src').replace('-thumb', '');
        let bigImg = elem.getAttribute('data-big');

        // Gör bilden synlig i lightboxen
        document.querySelector('#lightbox > img').setAttribute('src', bigImg)
        document.querySelector('#lightbox').style.display = 'flex';
    });
});

// skapa lyssnare för att stänga lightboxen
document.querySelector('#lightbox').addEventListener('click', hideImage);
document.addEventListener('keydown', hideImage);

// event handler-callbacken i en egen funktion
function hideImage() {
    if (document.querySelector('#lightbox').style.display != 'none') {
        document.querySelector('#lightbox').style.display = 'none';
    }
}