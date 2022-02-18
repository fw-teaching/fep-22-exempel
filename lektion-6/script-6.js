console.log("hej")

const jack = document.querySelector("#jack");
let boxIsOpen = false; // boolean: "är boxen öppen?"
function openBox() {
    console.log("openBox");
    jack.style.backgroundImage = 'url(img/jack-open.png)';
    boxIsOpen = true; // boxen är öppen
}
function closeBox() {
    console.log("closeBox");
    jack.style.backgroundImage = 'url(img/jack-closed.png)';
    boxIsOpen = false; // boxen är stängd
}

/** Funktionsprincip 1: klick för öppna och stänga */

/*jack.addEventListener('click', function(evt) {
    console.log(evt.target);
    if (boxIsOpen) { // om boxen redan är öppen
        closeBox();
    } else { // annars
        openBox();
    }
});*/

/** Funktionsprincip 2: mousedown */
jack.addEventListener('mousedown', (evt) => {
    openBox();
});
jack.addEventListener('mouseup', (evt) => {
    closeBox();
});

/** Funktionsprincip 3: slider */
document.querySelector("#slider").addEventListener('input', function(evt) {
    console.log(evt.target.value);
    if (evt.target.value > 230) {

        // Man kan skriva if utan klamrar om man endast har ett uttryck
        if (!boxIsOpen) openBox(); 
        jack.style.borderColor = 'red';
    } else {
        if (boxIsOpen) closeBox();
 
        let color = 255-evt.target.value;
        jack.style.borderColor = 'rgb(255,255,' + color + ')';
    }
});

// Loopa igenom alla element med klassen click-me och skapa lyssnare för varje
document.querySelectorAll('.click-me').forEach(function(elem) {
    console.log("Vi loopar " + elem.getAttribute("id"));

    elem.addEventListener('click', function(evt) {
        console.log("Du klickade på " + evt.target.getAttribute("id"));
        evt.target.style.color = evt.target.getAttribute("data-color");
    });
});

// När man klickar på Reset, loopa igenom alla med klassen click-me
document.querySelector("#btn-reset").addEventListener('click', (evt) => {
    document.querySelectorAll('.click-me').forEach((elem) => {
        console.log(elem)
        elem.style.color = 'black';
    });
});

document.querySelector("#my-input").addEventListener('input', (evt) => {
    document.querySelector("#repeat-output").innerText = evt.target.value;
});

