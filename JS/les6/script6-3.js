document.addEventListener("DOMContentLoaded", function() {
    let hyperlink = document.getElementById('mijnLink');
    hyperlink.addEventListener("mouseover", function() {
        alert("De link is niet klikbaar!");
    });
});
