
let sekunder = 600;
document.getElementById("sek-output").innerText = sekunder;
const countdown = setInterval(function() {
    sekunder--;
    document.getElementById("sek-output").innerText = sekunder;
    if (sekunder <= 0) {
        alert("Tiden är ute!");
        clearInterval(countdown);
        //location.href = "";
        location.reload(true); // ladda om sidan
    }

    let d = new Date();
    document.getElementById("kl").innerText = d.getHours() 
        +  ":" + d.getMinutes() // 0-59
        +  ":" + ("0" + d.getSeconds()).slice(-2);  // "00"-"59"
            // Lägg till en nolla före, slicea sedan de två sista tecknen!

}, 1000);


function skrivSaga() {
    clearInterval(countdown);

    console.log("funkar!")

    let huvudperson = document.querySelector("#huvudperson").value;
    const pronomen = document.querySelector("#pronomen").value;
    const butik = document.querySelector("input[name=butik]:checked").value;
    // input[name=butik]:checked ==> input-tag med name="butik", :checked = ikryssad
    const vara = document.querySelector("#vara").value;

    if (document.getElementById("capitalize").checked) {
        const huvudpersonArr = huvudperson.split(" "); // skapa array "ord för ord"

        for (let i = 0; i < huvudpersonArr.length; i++) { // loopa igenom ord-arrayen

            let first_char = huvudpersonArr[i].charAt(0); // plocka ut första tecknet
            let the_rest = huvudpersonArr[i].slice(1); // plocka ut resten

            // skriv över det nuvarande ordet i arrayen med en ny version
            huvudpersonArr[i] = first_char.toUpperCase() + the_rest; 
        }
        // joina ihop arrayen med mellanslag för att få tillbaka teckensträngen
        huvudperson = huvudpersonArr.join(" ");
    }  

    let saga = `Från ${butik} klockan fem 
        ${huvudperson} gick hem.
        En kanna full med ${vara} ${pronomen} bar
        och vägen lång och kuslig var...`;

    // Kolla om elementet med id "for-kids" är ikryssat
    if (document.getElementById("for-kids").checked) {
        saga = saga.replace(" öl", " saft");
        saga = saga.replace(" vin", " saft");
    }

    if (document.getElementById("to-upper").checked) {
        saga = saga.toUpperCase();
    }    

    // Till sist, skriv ut den färdiga sagan!
    document.getElementById("sagan").innerText = saga;
    
}

// Skriv ut info om browsern
document.querySelector("#user-agent").innerText = navigator.userAgent;
