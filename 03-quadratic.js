// O(n^2) - Quadratica (tempo)
function printAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

// O(n^2) - Quadratica (espaço)
function createMatrix(array) {
  const matrix = [];
  for (let i = 0; i < array.length; i++) {
    const row = [];
    for (let j = 0; j < array.length; j++) {
      row.push(array[i] * array[j]);
    }
    matrix.push(row);
  }
  return matrix;
}

// Usando as funções
const array = [1, 2, 3];
printAllPairs(array); // 1 1, 1 2, 1 3, 2 1, 2 2, 2 3, 3 1, 3 2, 3 3
console.log(createMatrix(array)); // [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

/**
 * Explicação:
 * Nos exemplos acima, o tempo e o espaço utilizados aumentam quadraticamente,
 * ou seja, as funções vão ter um tempo/espaço de execução proporcional ao quadrado do tamanho do array.
 *
 * No primeiro exemplo, estamos imprimindo todos os pares de elementos do array,
 * então o for externo itera n vezes e para cada iteração do for externo,
 * o for interno também itera n vezes, resultando em n * n = n^2 iterações.
 *
 * Já no segundo exemplo, estamos criando uma matriz onde cada elemento é o produto
 * dos elementos do array original.
 * Nesse caso, também temos dois loops aninhados, onde o primeiro loop itera n vezes
 * e para cada iteração do primeiro loop, o segundo loop também itera n vezes,
 * resultando em n * n = n^2 elementos na matriz.
 *
 */
