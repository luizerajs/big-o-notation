// O(n) - Linear (tempo)
function printAllElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// O(n) - Linear (espaço)
function duplicateArray(n) {
  const newArray = [];
  for (let i = 0; i < n.length; i++) {
    newArray[i] = n[i];
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
