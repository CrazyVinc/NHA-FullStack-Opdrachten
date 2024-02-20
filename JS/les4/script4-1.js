function checkGeboortejaar() {
    let geboortejaar = parseInt(prompt("Voer uw geboortejaar in:"));

    if (geboortejaar < 1980) {
        console.log("U bent geboren voor 1980.");
    } else {
        console.log("U bent geboren in of na 1980.");
    }
}

checkGeboortejaar();
