

// Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100
// Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado

// dados da entrada:
// 5
// 50
// 10
// 98
// 23

// Saída:
// 98

const {gets, print} = require('./funcoes-auxiliares');

const quantidadeAlunos = gets();
let maiorNumero = 0;

for (let i = 0; i < quantidadeAlunos; i++){
    const numeroSorteado = gets();
    if (numeroSorteado > maiorNumero){
        maiorNumero = numeroSorteado;
    }
}

print(maiorNumero);




// Forma antiga


// const numerosSorteados = [];

// for (let i = 0; i < 5; i++){
// const numerosSorteado = gets();
// numerosSorteados.push(numerosSorteado);
// }

// let maiorNumero = 0;
// for (let i = 0; i < numerosSorteados.length; i++){
//     const numeroSorteado = numerosSorteados[i];
//     if (numeroSorteado > maiorNumero){
//         maiorNumero = numeroSorteado;
//     }
// }

// print(maiorNumero)

// object destructuring

// const pessoa = {
//     nome: 'Vinícius',
//     cidade: 'Osasco'
// };

// const nome = pessoa.nome
// const { nome, cidade } = pessoa;
// console.log(nome, cidade);


