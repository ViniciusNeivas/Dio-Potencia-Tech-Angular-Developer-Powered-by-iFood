
const pessoas = {
    nome: 'Vinícius dos Santos Neivas',
    idade: 31,
    
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// pessoas.descrever = function() {
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoas.descrever();

// pessoas['nome'] = 'teste'
// pessoas.nome = 'teste';

console.log(pessoas.nome);