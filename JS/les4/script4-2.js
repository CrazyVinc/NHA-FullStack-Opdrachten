function printTafelVanTien() {
    let teller = 10;
    let getal = 10;

    while (teller >= 1) {
        document.getElementById('result').innerHTML +=
            teller + ' maal ' + getal + ' = ' + teller * getal + '<br/>';
        teller--;
    }
}

printTafelVanTien();
