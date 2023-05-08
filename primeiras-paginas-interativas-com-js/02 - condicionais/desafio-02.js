// Faça um programa para calcular o valor gasto de combustível em uma viagem.

// Você terá 5 variáveis. Sendo elas:

// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em Km da viagem.

// Imprima no console o valor que será gasto de combustível para realizar esta viagem.

const precoEtanol = 4.56;
const precoGasolina = 7.89;
const tipoCombustivel = "etanol";
const quilometrosPorLitrosGasolina = 10;
const quilometrosPorLitrosEtanol = 20;
const distanciaEmKm = 100;

if (tipoCombustivel === "gasolina") {
  let valorViagem =
    (distanciaEmKm / quilometrosPorLitrosGasolina) * precoGasolina;
  console.log(
    "Preço da viagem quando você vai de gasolina é igual a R$",
    valorViagem.toFixed(2).replace(".", ",")
  );
} else if (tipoCombustivel === "etanol") {
  valorViagem = (distanciaEmKm / quilometrosPorLitrosEtanol) * precoEtanol;
  console.log(
    "Preço da viagem quando você vai de etanol é igual a R$ ",
    valorViagem.toFixed(2).replace(".", ",")
  );
} else {
  console.log("Combustível Inválido!");
}
