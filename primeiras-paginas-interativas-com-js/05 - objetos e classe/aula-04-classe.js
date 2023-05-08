class Pessoa {
    nome;
    idade;
    anoNascimento;
    
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vinicius = new Pessoa('Vinícius', 31);
// vinicius.nome = 'Vinícius dos Santos Neivas';
// vinicius.idade = 30;

const swarley = new Pessoa('Swarley', 30);
// swarley.nome = 'Vinícius Ribeiro da Silva';
// swarley.idade = 30;


console.log(vinicius);
console.log(swarley);


// vinicius.descrever();
// swarley.descrever();



