
const funcoes = require('./funcoes-auxiliares');

const listaNumeros = [];
let maiorNumero = 0;
let menorNumero = Number.MAX_SAFE_INTEGER; //para selecionar o maior valor possível


for (let i = 0; i < funcoes.numeros.length; i++) {
    const numeros = funcoes.gets();
    listaNumeros.push(numeros);
    
}

for (let i = 0; i < listaNumeros.length; i++) {
    const numeros = listaNumeros[i];
    if(numeros > maiorNumero){
        maiorNumero = numeros;
    }  
    if(numeros < menorNumero){
        menorNumero = numeros;
    } 
}
funcoes.print(listaNumeros);
funcoes.print(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`);