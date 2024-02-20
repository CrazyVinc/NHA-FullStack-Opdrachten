let getal1 = parseFloat(prompt("Voer het eerste getal in:"));
let getal2 = parseFloat(prompt("Voer het tweede getal in:"));

if (getal1 > getal2) {
    document.write(`Het eerste getal (${getal1}) is groter dan het tweede getal (${getal2}).`);
} else if (getal1 < getal2) {
    document.write(`Het eerste getal (${getal1}) is kleiner dan het tweede getal (${getal2}).`);
} else {
    document.write(`De twee getallen (${getal1} en ${getal2}) zijn gelijk aan elkaar.`);
}
