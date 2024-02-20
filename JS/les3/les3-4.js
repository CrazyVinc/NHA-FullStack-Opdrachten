let getal1 = parseFloat(prompt("Voer het eerste getal in:"));
let getal2 = parseFloat(prompt("Voer het tweede getal in:"));

let groterKleiner = (getal1 > getal2)
    ? `Het eerste getal (${getal1}) is groter dan het tweede getal (${getal2}).`
    : `Het eerste getal (${getal1}) is kleiner dan het tweede getal (${getal2}).`;

document.write(groterKleiner);
