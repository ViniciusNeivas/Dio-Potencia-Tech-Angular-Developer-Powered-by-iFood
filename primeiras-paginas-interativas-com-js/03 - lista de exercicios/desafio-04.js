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


const pesoEmKg = 63

const alturaEmMetros = 1.75

let imc = (pesoEmKg / Math.pow(alturaEmMetros,2)).toFixed(2)

if (imc > 40){
    console.log("Obesidade Grave. Seu IMC é igual a ", imc);
} else if (imc <= 40 && imc > 30){
    console.log("Obeso. Seu IMC é igual a ", imc);
} else if (imc <= 30 && imc > 25){
    console.log("Acima do Peso. Seu IMC é igual a ", imc);
} else if (imc <= 25 && imc > 18.5){
    console.log("Peso Normal. Seu IMC é igual a ", imc);
} else {
    console.log("Abaixo do Peso. Seu IMC é igual a ", imc);
}

