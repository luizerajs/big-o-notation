// O(1) - Constante (tempo)
function getFirstElement(array) {
  return array[0];
}

// O(1) - Constante (tempo)
function getLastElement(array) {
  return array[array.length - 1];
}

// O(1) - Constante (espaço)
function sampleCalculation() {
  const result = 5 * 5; // -> O(1) em relação ao espaço de memória salva
  return result;
}

// Usando as funções
const array = [1, 2, 3, 4, 5];
console.log(getFirstElement(array)); // 1
console.log(getLastElement(array)); // 5
console.log(sampleCalculation()); // 25

/* 
Explicação: 

A ideia aqui é que não importa o tamanho do array, 
sempre vamos buscar um elemento específico, o primeiro/segundo no exemplo.

Já o terceiro exemplo, estamos fazendo uma operação simples,
sem alocação de memoria que dependa de um tamanho de array,
ou seja, aquela operação sempre vai levar o mesmo tempo e espaço.

*/
