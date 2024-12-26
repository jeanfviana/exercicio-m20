function indicesMaiorMenor(array) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    array.forEach((valor, indice) => {
        if (valor > array[indiceMaior]) indiceMaior = indice;
        if (valor < array[indiceMenor]) indiceMenor = indice;
    });

    return { indiceMaior, indiceMenor };
}


const numeros = [3, 5, 1, 9, 7];
console.log(indicesMaiorMenor(numeros));