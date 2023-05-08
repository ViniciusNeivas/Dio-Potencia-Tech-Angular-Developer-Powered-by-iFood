const entradas = [50, 50000, 10000000000,988, 23000000000000000000000000, 99]
let i = 0;



function gets(){
    const valor = entradas[i];
    i ++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };

// module.exports.gets = gets; // ---Outra forma de fazer 