document.addEventListener("DOMContentLoaded", function() {
    let inputVeld = document.getElementById('tekstInvoer');
    inputVeld.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            setTimeout(function() {
                let tekst = inputVeld.value.trim();
                if (tekst !== '') {
                    alert("Ingevoerde tekst: " + tekst);
                } else {
                    alert("Voer tekst in het inputveld in.");
                }
            }, 1000);
        }
    });
});
