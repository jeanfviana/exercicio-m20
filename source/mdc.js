function calcularMDC(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}


console.log(calcularMDC(12, 8)); 

module.exports = calcularMDC;