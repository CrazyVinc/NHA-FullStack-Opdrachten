let getal1 = parseFloat(prompt("Voer het eerste getal in:"));
let getal2 = parseFloat(prompt("Voer het tweede getal in:"));

let groterKleinerGelijk = (getal1 > getal2)
    ? 'groter dan'
    : (getal1 === getal2)
        ? 'gelijk aan'
        : 'kleiner dan';

document.write(`Het eerste getal (${getal1}) is ${groterKleinerGelijk} het tweede getal (${getal2}).`);
