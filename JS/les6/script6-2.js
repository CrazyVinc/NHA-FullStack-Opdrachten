function begroet() {
    let naam = document.getElementById('naam').value;
    if (naam.length >= 2) {
        alert("Welkom, " + naam + "!");
    } else {
        alert("Voer een naam in.");
    }
}
