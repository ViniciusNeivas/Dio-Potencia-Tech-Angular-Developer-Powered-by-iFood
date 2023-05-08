const numeros = [50, 10, 3, 9, 10, 12];

let i = 0;

function gets(){
    const valor = numeros[i];
    i++;
    // const tamanhoArray = numeros.length
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print}