// 1 - Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// media = (nota 1 + nota 2 + nota 3 ) / 3;

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuéração;
// - Média acima de 7, passou de semestre


const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;


if (media > 7){
    console.log("Uhull !!! Você passou de semestre!! Sua média foi ", media.toFixed(2));
} else if (media <= 7 && media >= 5){
    console.log("Tente mais um pouco! Você está de recuperação! Sua média foi ", media.toFixed(2));
} else {
    console.log("Você está reprovado!!! Sua média foi ", media.toFixed(2));
} 