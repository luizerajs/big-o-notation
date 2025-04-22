// O(n) - Linear (tempo)
function printAllElements(array) {
  for (const i of array) {
    console.log(i);
  }
}

// O(n) - Linear (espaço)
function duplicateArray(array) {
  const newArray = [];
  for (const i of array) {
    newArray.push(i);
  }
  return newArray;
}

// Usando as funções
const array = [1, 2, 3, 4, 5];
printAllElements(array); // 1 2 3 4 5
console.log(duplicateArray(array)); // [1, 2, 3, 4, 5]

/**
 * Explicação:
 * Nos dois exemplos acima, o tempo e o espaço utilizados aumentam linearmente,
 * ou seja, as funções vão ter um tempo/espaço de execução proporcional ao tamanho do array.
 *
 * No primeiro exemplo, estamos apenas imprimindo os elementos do array, então o for vai iterar
 * n vezes (tamanho do array).
 *
 * No segundo exemplo, estamos criando um novo array e copiando os elementos do array original,
 * com o tamanho do novo array sendo igual ao tamanho do array original.
 */
