// Faça um programa para calcular o valor gasto de combustível em uma viagem.

// Você terá 3 variáveis. Sendo elas:

// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.


const precoCombustivel = 5.79;
const quilometrosPorLitros = 10;
const distanciaEmKm = 100

let valorViagem = (distanciaEmKm / quilometrosPorLitros) * precoCombustivel

console.log("R$ " + valorViagem.toFixed(2).replace(".", ","));
