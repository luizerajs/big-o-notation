// O(2^N) - Exponencial (tempo)
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Usando a função
console.time("n = 10");
const n = 10;
const result = fibonacci(n);
console.log(`Fibonacci de ${n} é: ${result}`); // 55
console.timeEnd("n = 10");

console.log("----------------------------------");

console.time("n2 = 20");
const n2 = 20;
const result2 = fibonacci(n2);
console.log(`Fibonacci de ${n2} é: ${result2}`); // 6765
console.timeEnd("n2 = 20");

console.log("----------------------------------");

console.time("n3 = 40");
const n3 = 40;
const result3 = fibonacci(n3);
console.log(`Fibonacci de ${n3} é: ${result3}`); // 102334155
console.timeEnd("n3 = 40");

/*
 * Explicação:
 *
 * O algoritmo de Fibonacci é um exemplo clássico de algoritmo exponencial,
 * onde o tempo de execução cresce exponencialmente com o aumento do valor de n.
 * Isso ocorre porque a função chama a si mesma duas vezes para cada valor de n,
 * resultando em uma árvore de chamadas que cresce rapidamente.
 *
 * A complexidade temporal é O(2^n), o que significa que o tempo necessário
 * para calcular o n-ésimo número de Fibonacci dobra a cada incremento em n.
 *
 * Isso torna o algoritmo ineficiente para valores grandes de n,
 * pois o número de chamadas recursivas aumenta exponencialmente.
 */
