


const calcularMDC = require('./mdc');

it('MDC entre 12 e 8 é 4', () => {
    expect(calcularMDC(12, 8)).toBe(4);
});

it('MDC entre 7 e 5 é 1', () => {
    expect(calcularMDC(7, 5)).toBe(1);
});