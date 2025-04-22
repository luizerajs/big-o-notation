// O(n log n) - Linear Logarítmica (tempo)
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const midIndex = Math.floor(array.length / 2);
  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return result
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

// Usando as funções
const arrayToSort = [5, 3, 8, 1, 2, 7, 4, 6];
const sortedArray = mergeSort(arrayToSort);
console.log(`Array ordenado: ${sortedArray}`); // [1, 2, 3, 4, 5, 6, 7, 8]

/**
 * Explicação:
 *
 * No exemplo de merge sort, o algoritmo divide o array em duas metades,
 * fazendo isso recursivamente até que cada subarray tenha apenas um elemento O(log n).
 * Porém a cada chamada recursiva, ele combina os subarrays de forma ordenada,
 * usando a função merge() O(n), sendo assim a função completa sendo definida como
 * O(n log n).
 *
 * O algoritmo merge sort é um exemplo clássico de algoritmo de ordenação
 * que utiliza a técnica de divisão e conquista.
 *
 * Vale lembrar que na função de merge, ao retornar o array ordenado,
 * ele concatena os elementos restantes dos subarrays pois
 * os elementos restantes de um dos subarrays já estão ordenados.
 *
 * Famoso, resta um. Então esse elemento é concatenado no final do array final. Seja ele
 * no array esquerdo ou direito.
 * *
 */
