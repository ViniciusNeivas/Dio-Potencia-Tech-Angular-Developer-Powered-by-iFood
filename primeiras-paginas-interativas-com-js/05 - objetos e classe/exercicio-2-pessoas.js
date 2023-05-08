// // 2) Crie uma classe para representar pessoas.
// // Para cada pessoa teremos os atributos nome, peso e altura.
// // As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// // Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// // do seu IMC;

// class Pessoa {
//   nome;
//   peso;
//   altura;

//   constructor(nome, peso, altura) {
//     this.nome = nome;
//     this.peso = peso;
//     this.altura = altura;
//   }

//   calcularImc() {
//       const valorImc= (this.peso / Math.pow(this.altura, 2));
//     return valorImc
//     // return valorImc.toFixed(2).replace(".", ",");
//   }

//   classificarImc() {
//     const resultadoImc = this.calcularImc();
//     if (resultadoImc > 40) {
//       return `Obesidade Grave. Seu IMC é igual a ${resultadoImc.toFixed(2).replace(".", ",")}`;
//     } else if (resultadoImc <= 40 && resultadoImc > 30) {
//       return `Obeso. Seu IMC é igual a ${resultadoImc.toFixed().replace(".", ",")}`
//     } else if (resultadoImc <= 30 && resultadoImc > 25) {
//       return `Acima do Peso. Seu IMC é gual a ${resultadoImc.toFixed().replace(".", ",")}`;
//     } else if (resultadoImc <= 25 && resultadoImc > 18.5) {
//       return `Peso Normal. Seu IMC é igual a ${resultadoImc.toFixed().replace(".", ",")}`;
//     } else {
//       return `Abaixo do Peso. Seu IMC é igual a ${resultadoImc.toFixed().replace(".", ",")}`;
//     }
//   }
// }

// const jose = new Pessoa("José", 63, 1.61);
// // console.log(jose.calcularImc());
// console.log(jose.classificarImc());
class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));