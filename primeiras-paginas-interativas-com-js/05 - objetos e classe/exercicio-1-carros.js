// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoMedioCombustivelPorKm;
    
    constructor (marca, cor, gastoMedioCombustivelPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm
    }
    
    calcularGastosViagem(distanciaEmKm, precoCombustivel){
        const valorEmReiais = this.gastoMedioCombustivelPorKm * distanciaEmKm * precoCombustivel
        return `O valor gasto foi de R$ ${valorEmReiais.toFixed(2).replace('.', ',')}`
    } 
}

const uno = new Carro('Fiat','Azul', 1/12)
const celta = new Carro('Chevrolet','Preto', 1/10)

console.log(uno.calcularGastosViagem(70, 5));
console.log(celta.calcularGastosViagem(70, 5));
