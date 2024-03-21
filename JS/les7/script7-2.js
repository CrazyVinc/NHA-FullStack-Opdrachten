function toonTekst() {
    // De tekst uit het tekstvak ophalen
    var tekst = document.getElementById("txtInvoer").value;

    // De div met het id "div-Result" ophalen
    var divResult = document.getElementById("div-Result");

    // De tekst in de div plaatsen als paragraaf
    divResult.innerHTML = "<p>" + tekst + "</p>";
}

function verwijderTekst() {
    // De div met het id "div-Result" ophalen
    var divResult = document.getElementById("div-Result");

    // De inhoud van de div leegmaken
    divResult.innerHTML = "";
}
