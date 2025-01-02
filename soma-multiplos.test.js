const somaMultiplos = require('./soma-multiplos');


it('Soma de múltiplos de 5 ou 7 abaixo de 10 é 12', () => {
    expect(somaMultiplos(10)).toBe(12); 
});

it('Soma de múltiplos de 5 ou 7 abaixo de 20 é 51', () => {
    expect(somaMultiplos(20)).toBe(51)
});