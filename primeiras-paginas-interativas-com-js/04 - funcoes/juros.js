// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

// Forma de Pagamento

// 1 - Débito
// 2 - Dinheiro ou Pix
// 3 - Duas vezes
// 4 - Acima de duas vezes

function aplicarDesconto(precoProduto, desconto) {
  const precoFinal = precoProduto - precoProduto * (desconto / 100);
  return precoFinal.toFixed(2).replace(".", ",");
}

function aplicarJuros(precoProduto, juros) {
  const precoFinal = precoProduto + precoProduto * (juros / 100);
  return precoFinal.toFixed(2).replace(".", ",");
}




function executarPagamento(){
if (formaPagamento === 1) {
  return "O preço final do produto é: R$ " + aplicarDesconto(precoProduto, 10);
} else if (formaPagamento === 2) {
  return "O preço final do produto é: R$ " + aplicarDesconto(precoProduto, 15);
} else if (formaPagamento === 3) {
  return "O preço final do produto é: R$ " + precoProduto;
} else if (formaPagamento === 4) {
  return "O preço final do produto é: R$ " + aplicarJuros(precoProduto, 10);
} else {
  return "Revise as inofrmações preenchidas";
}
}

function main (){
    executarPagamento();
}

console.log(main());