
// const numero = 109;
// const eNumeroPar = numero % 2 === 0;

// if (eNumeroPar){
//     console.log(numero + " é par.");
// }else{
//     console.log(numero + " é impar.");
// }
const numero = 505;
const numeroDivisivelPor5 = numero % 5 === 0;

if (numero === 0){
    console.log("0 é um número inválido.");
}else if (numeroDivisivelPor5) {
    console.log(numero + " é divisível.");
}else{
    console.log(numero + " não é divisível por 5.");
}


