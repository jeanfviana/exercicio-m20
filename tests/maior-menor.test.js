const indicesMaiorMenor = require('./maior-menor');

it('Maior e menor índices do array [3, 7, 1, 9] são 3 e 2', () => {
    expect(indicesMaiorMenor([3, 7, 1, 9])).toEqual({ indiceMaior: 3, indiceMenor: 2 });
});
