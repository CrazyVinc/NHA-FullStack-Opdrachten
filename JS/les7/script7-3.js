var koptekstNummer = 1;

function toonTekst() {
    // De tekst uit het tekstvak ophalen
    var tekst = document.getElementById("txtInvoer").value;

    // De div met het id "div-Result" ophalen
    var divResult = document.getElementById("div-Result");

    // De juiste koptekst bepalen
    var koptekst = "";
    if (koptekstNummer == 1) {
        koptekst = "<h1>";
    } else if (koptekstNummer == 2) {
        koptekst = "<h2>";
    } else if (koptekstNummer == 3) {
        koptekst = "<h3>";
    } else if (koptekstNummer == 4) {
        koptekst = "<h4>";
    } else if (koptekstNummer == 5) {
        koptekst = "<h5>";
    } else if (koptekstNummer == 6) {
        koptekst = "<h6>";
    } 

    // De tekst in de div plaatsen als koptekst
    divResult.innerHTML = koptekst + tekst + "</h1>";

    // Het koptekstnummer verhogen
    koptekstNummer++;

    // Als koptekstnummer 7 is bereikt, terug naar 1
    if (koptekstNummer == 7) {
        koptekstNummer = 1;
    }
}
