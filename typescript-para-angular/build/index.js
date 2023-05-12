"use strict";
function printaObjetos(pessoa) {
    console.log(pessoa);
}
printaObjetos({
    name: "Bruce Wayne",
    vulgo: "Batman",
});
console.log(`Olá mundo!`);
// tipos primitivos: boolean, number, string.
let ligado = true;
let nome = 'Vinícius';
let idade = 23;
let altura = 1.9;
// Tipos Especiais
// null
// undefined
let nulo = null;
let indefinido = undefined;
//Tipod Abrangentes: any, void
function executaQuery() { }
let retornoView = false;
//objeto
// Objeto sem previsibilidade
let produto = {
    name: 'ViníAlias',
    cidade: 'Osasco'
};
let meuProduto = {
    nome: "tênis",
    preco: 89.99,
    unidades: 9,
};
// Array 
let dados = ['Vinicius', 'Eva', 'Adão'];
let dados2 = ['Vinicius', 'Eva', 'Adão'];
let infos = ['Vinicius', 22, "xccxcx"];
// Tuplas
let boleto = ['Agua conta', 19.09, 3384342343];
/// Array Método
// Mesmos metodos para manipular do JS
// Datas
let birthday = new Date("2023-06-22 18:00");
console.log(birthday.toString());
// Funções 
function addNummmber(x, y) {
    return x + y;
}
let soma = addNummmber(4, 7);
console.log(soma);
function addHello(name) {
    return `Hello ${name}`;
}
console.log(addHello('Vinícius'));
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone(12123123123123));
