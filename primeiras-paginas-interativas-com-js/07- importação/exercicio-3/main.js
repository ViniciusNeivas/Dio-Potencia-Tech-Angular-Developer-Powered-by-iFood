const { gets, print } = require('./funcoes-auxiliares');

const quantidadeNumeros = gets();

let numeroPar = 0;
for (let i = 0; i < quantidadeNumeros; i++){
    let numeroRecebido = gets();
    if(numeroRecebido % 2 === 0){
        numeroPar = numeroRecebido;
        print(numeroPar)
}
}