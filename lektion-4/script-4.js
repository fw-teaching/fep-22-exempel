
function skrivSaga() {
    console.log("funkar!")

    const huvudperson = document.querySelector("#huvudperson").value;
    const pronomen = document.querySelector("#pronomen").value;
    const butik = document.querySelector("input[name=butik]:checked").value;
    // input[name=butik]:checked ==> input-tag med name="butik", :checked = ikryssad
    const vara = document.querySelector("#vara").value;

    let saga = `Från ${butik} klockan fem 
        ${huvudperson} gick hem.
        En kanna full med ${vara} ${pronomen} bar
        och vägen lång och kuslig var...`;

    document.getElementById("sagan").innerText = saga;
    
}
