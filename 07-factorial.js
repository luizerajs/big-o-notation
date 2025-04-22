// O(n!) - Fatorial (tempo)
// Exemplo de uma função com complexidade de tempo fatorial (O(n!)):
function travelingSalesmanProblem(cities, currentCity, visited, cost) {
  if (visited.size === cities.length) {
    return cost + cities[currentCity][0]; // Retorna ao ponto inicial
  }

  let minCost = Infinity;

  for (let nextCity = 0; nextCity < cities.length; nextCity++) {
    if (!visited.has(nextCity)) {
      visited.add(nextCity);
      const newCost = travelingSalesmanProblem(
        cities,
        nextCity,
        visited,
        cost + cities[currentCity][nextCity]
      );
      minCost = Math.min(minCost, newCost);
      visited.delete(nextCity);
    }
  }

  return minCost;
}

// Exemplo de uso:
const cities = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
];

const visited = new Set();
visited.add(0); // Começa na cidade 0
const result = travelingSalesmanProblem(cities, 0, visited, 0);
console.log(`Custo mínimo do caminho: ${result}`); // 80

/**
 * Explicação:
 * A função do caixeiro viajante (traveling salesman problem) é um exemplo clássico
 * de um problema NP-difícil, onde o tempo de execução cresce fatorialmente
 * com o número de cidades (n).
 *
 * Isso ocorre porque a função tenta todas as permutações possíveis
 * de cidades para encontrar o caminho mais curto,
 * resultando em uma complexidade de tempo O(n!).
 *
 */
