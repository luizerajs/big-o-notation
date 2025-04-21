// O(log n) - Logarítmica (tempo)
function binarySearchIterative(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // Elemento encontrado
    } else if (array[mid] < target) {
      left = mid + 1; // Busca na metade direita
    } else {
      right = mid - 1; // Busca na metade esquerda
    }
  }

  return -1; // Elemento não encontrado
}

// O(log n) - Logarítmica (espaço)
let count = 0;
function logSpaceRecursive(n) {
  if (n <= 1) {
    return count;
  }

  count++;
  return logSpace(Math.floor(n / 2));
}

// Usando as funções
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = binarySearchIterative(array, target);
console.log(`Elemento ${target} encontrado no índice: ${result}`);

console.log(`Espaço logarítmico: ${logSpaceRecursive(8)}`); // 3

/**
 * Explicação:
 *
 * No primeiro exemplo, a busca binária reduz o espaço de busca pela metade a cada iteração,
 * portanto, o tempo de execução é O(log n).
 * A cada iteração, o array é dividido em duas partes,
 * e a busca continua apenas na metade relevante.
 *
 * Isso significa que o número de iterações necessárias para encontrar o elemento
 * ou determinar que ele não está presente é proporcional ao logaritmo do tamanho do array.
 *
 * No segundo exemplo, a função `logSpace` conta o número de chamadas recursivas,
 * onde a cada chamada, o valor de n é reduzido pela metade.
 * Assim, o espaço utilizado também é O(log n).
 *
 * Logaritmo - Definição:
 *
 * Logaritmo é uma maneira de responder à pergunta:
 * “Quantas vezes eu tenho que multiplicar um número por ele mesmo para chegar em outro número?”
 * Por exemplo, log2(8) = 3 porque 2^3 ou 2x2x2 = 8.
 * Isso significa que o logaritmo de 8 na base 2 é 3.
 *
 * Se reparar no exemplo da função logSpace, o contador mostra exatamente
 * a quantidade de vezes que a função foi chamada de forma recursiva
 * até chegar no número 1.
 * 3 vezes, porque o valor de N é 8.
 */
