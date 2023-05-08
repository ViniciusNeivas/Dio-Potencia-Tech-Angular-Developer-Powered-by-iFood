// const alunos = ['João', 'Vitor', 'Marina'];

// alunos.push('Renan')

// alunos[3 ] = 'Vinícius'

//POP() --> Apaga o último item
// const alunos = ['1', '2' , '3']

// console.log(alunos);
// console.log(alunos.pop());
// console.log(alunos);

// Shift() - Apaga primeiro item
// const alunos = ['1', '2' , '3']

// console.log(alunos);
// console.log(alunos.shift());
// console.log(alunos);

const notas = [];

notas.push(5);
notas.push(4);
notas.push(3);
notas.push(2);
notas.push(1);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);
