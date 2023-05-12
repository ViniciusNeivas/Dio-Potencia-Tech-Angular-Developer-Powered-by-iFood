"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return `Vinícius`;
    });
}
const bot = {
    id: '1',
    name: "Megaman",
};
const bot1 = {
    id: '1',
    name: "Megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
console.log(bot1);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Helll I'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Megamente");
console.log(p.sayHello());
// CLASSES
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character('Carlitos', 10, 98);
(p1.attack());
