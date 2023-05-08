// 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

// Formula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos Condição:
// - Abaixo de 18.5 Abaixo do peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obsesidade Grave;

function calcularImc(pesoEmKg, alturaEmMetros) {
  const formulaImc = pesoEmKg / Math.pow(alturaEmMetros, 2);
  return formulaImc.toFixed(2);
}

function classificarImc(imc) {
  if (imc > 40) {
    return "Obesidade Grave. Seu IMC é igual a " + imc;
  } else if (imc <= 40 && imc > 30) {
    return "Obeso. Seu IMC é igual a " + imc;
  } else if (imc <= 30 && imc > 25) {
    return "Acima do Peso. Seu IMC é gual a " + imc;
  } else if (imc <= 25 && imc > 18.5) {
    return "Peso Normal. Seu IMC é igal a " + imc;
  } else {
    return "Abaixo do Peso. Seu IMC éigual a " + imc;
  }
}

(function () {
  const pesoEmKg = 400;
  const alturaEmMetros = 1.61;
  const imc = calcularImc(pesoEmKg, alturaEmMetros);
  console.log(classificarImc(imc));
})(); 



// main = function(){
//     console.log(1);
// }
// main();

// const main1 = main
// main1()
