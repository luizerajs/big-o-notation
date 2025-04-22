// O(n!) - Fatorial (tempo)
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Usando a função
console.time("n = 4");
const n = 4;
const result = factorial(n);
console.log(`Fatorial de ${n} é: ${result}`); // 24
console.timeEnd("n = 4");

console.log("----------------------------------");

console.time("n2 = 5");
const n2 = 5;
const result2 = factorial(n2);
console.log(`Fatorial de ${n2} é: ${result2}`); // 120
console.timeEnd("n2 = 5");

/**
 * Explicação:
 * A função `factorial` calcula o fatorial de um número n de forma recursiva.
 * O tempo de execução cresce rapidamente com o aumento de n,
 * pois o número de chamadas recursivas aumenta exponencialmente.
 
 * Isso resulta em uma complexidade temporal de O(n!),
 * onde n! (fatorial de n) é o produto de todos os números inteiros positivos até n.
 * 
 */
