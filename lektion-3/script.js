
const colors = [ "red", "green", "blue" ];


console.log(colors) // Hela arrayn i konsolen
console.log("colors har " + colors.length + " element")
colors.push("yellow"); //vi lägger till ett element
console.log("colors har " + colors.length + " element")
console.log("blue har index " + colors.indexOf("blue"))
console.log(colors) // Hela arrayn igen
console.log(colors[0]) // Första elementet (index 0)
colorsStr = colors.join("-"); // omvandla array till string
console.log(colorsStr);
console.log(colorsStr.split("-")) // tillbaka till array
colors[2] = "purple";

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
    document.getElementById("out-1").innerHTML += i + ": " + colors[i] + "<br>";
    // innerHTML tillåter oss att skriva in html-element i DOM
    // +=, vi lägger till det redan existerande
}

// for of-loop
for (const color of colors) {
    console.log("for of: " + color)
}
// for in-loop
for (const i in colors) {
    console.log("for in: " + colors[i])
}
// forEach
colors.forEach(function(val, i) {
    console.log("forEach: " + i + " - " + val)
});



const colorObj = {
    blood: "red",
    grass: "green",
    sky: "blue",
    rgb:  [ "R", "G", "B" ],
    nice: true
}

console.log(colorObj)
console.log(colorObj.grass)
console.log(colorObj["grass"])

console.log(colorObj.rgb[1]) // vi hämtar ett element ur en array i objektet


const colorInfo = [
    { name: "Red", hex: "#ff0000"},
    { name: "Green", hex: "#00ff00"},
    { name: "Blue", hex: "#0000ff"},
];

// for of: varje element i sin helhet utan index
document.getElementById("out").innerHTML += '<li><b>for of:</b></li>';
for (const color of colorInfo) {
    document.getElementById("out").innerHTML += `
        <li>${color.name} has the hex code ${color.hex}</li>
    `;
}

// Traditionell for-loop
document.getElementById("out").innerHTML += '<li><b>for:</b></li>';
for (let i = 0; i < colorInfo.length; i++) {
    
    document.getElementById("out").innerHTML += `
        <li>${colorInfo[i].name} has the hex code ${colorInfo[i].hex}</li>
    `;
}


