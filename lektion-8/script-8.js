

/** 
 *  Joke-widget
 */
async function getJoke() {
    const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Pun?format=txt&safe-mode');
    const joke = await jokeResponse.text();

    document.querySelector("#joke").innerText = joke;
}
getJoke();
/** 
 *  Joke-widget v2 med JSON
 */
async function getJokeJSON() {
    const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Pun?type=twopart&safe-mode');
    const joke = await jokeResponse.json(); // Omvandlar JSON till ett vanligt JavaScript-objekt

    // fördelen med JSON är att vi kan komma åt skämtets olika delar skilt
    document.querySelector('#joke-setup').innerText = joke.setup;

    // Leverera punchlinen efter två sekunder
    setTimeout(() => {
        document.querySelector('#joke-delivery').innerText = joke.delivery;
    }, 2000)
}
getJokeJSON();

// Samma sak med then()-syntax
fetch('https://v2.jokeapi.dev/joke/Programming?format=txt&safe-mode')
    .then((jokeResponse) => jokeResponse.text())
    .then((joke) => {
        document.querySelector("#joke-then").innerText = joke;
    });


/**
 * Testa asynkron funktion med setTimeout()
 */
console.log("före");
setTimeout(function() {
    console.log("i mitten");
}, 0);
console.log("efter");