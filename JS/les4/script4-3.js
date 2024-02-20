function printTafelVanVier() {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += '4 maal ' + i + ' = ' + (4 * i) + '<br>';
    }
    document.getElementById('result').innerHTML = result;
}

printTafelVanVier();
