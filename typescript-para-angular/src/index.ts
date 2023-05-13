type heroi = {
    name: string,
    vulgo:string;
};

function printaObjetos(pessoa : heroi){
    console.log(pessoa);
}

printaObjetos({
    name: "Bruce Wayne",
    vulgo: "Batman",
});

console.log(`Olá mundo!`);


// tipos primitivos: boolean, number, string.
let ligado:boolean = true;
let nome: string = 'Vinícius';
let idade: number = 23;
let altura: number = 1.9;

// Tipos Especiais
// null
// undefined

let nulo: null = null;
let indefinido: undefined = undefined;

//Tipod Abrangentes: any, void

function executaQuery(): void{}
let retornoView: any = false;

//objeto

// Objeto sem previsibilidade
let produto: object = {
    name: 'ViníAlias',
    cidade: 'Osasco'
};

//Objeto Tipado - Com previsibilidade
type ProdutoLoja = {
    nome:string,
    preco: number,
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "tênis",
    preco: 89.99,
    unidades: 9,
}

// Array 

let dados: string[] =['Vinicius', 'Eva', 'Adão'];
let dados2: Array<string> = ['Vinicius', 'Eva', 'Adão'];

let infos: (string | number)[] = ['Vinicius', 22, "xccxcx"];

// Tuplas

let boleto: [string, number, number] = ['Agua conta', 19.09, 3384342343]


/// Array Método

// Mesmos metodos para manipular do JS

// Datas

let birthday : Date = new Date("2023-06-22 18:00");
console.log(birthday.toString());

// Funções 

function addNummmber(x:number, y:number) : number{
    return x + y;    
}

let soma : number = addNummmber(4,7)
console.log(soma);

function addHello(name:string){
    return `Hello ${name}`
}

console.log(addHello('Vinícius'));

function callToPhone(phone: number|string){
    return phone;
}
console.log(callToPhone(12123123123123));

async function getDatabase (id : number): Promise<string | number>{
    return `Vinícius`
}

// Interface (Type vc iterface)

type robot = {
    readonly id : number | string;
    name : string;
};

interface robot2{
    readonly id : number|string;
    name : string;
    sayHello(): string;
}

const bot : robot = {
    id : '1',
    name : "Megaman",
}

const bot1 : robot2 = {
    id: '1',
    name: "Megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}
console.log(bot);
console.log(bot1);

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id: number|string, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello() : string {
        return `Helll I'm ${this.name}`;
    } 
}

const p = new Pessoa(1, "Megamente");
console.log(p.sayHello());

// CLASSES

// Data Modifiers
    // public
    // private - > Só pode ser acessado por dentro da classe
    // protected - > Classes e subclasse conseguem ver

class Character {
    private name: string;
    stregth: number;
    skill: number

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

// Superclass --- > Character
//Subclass --- Magicia 
class Magician extends Character{
    magicPoints : number;
    constructor(
        name: string, 
        stregth: number, 
        skill: number, 
        magicPoints: number
        ){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character('Carlitos',10,98);
const p2 = new Magician('Dr.Strange', 9, 30, 100);
(p1.attack());


//Generics
function concatArray<T>(...itens : T []) : T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5,6], [3]);
const stgArray = concatArray<string[]>(["Vinícius","dos Santos"], ["Neivas"])
console.log(numArray);
console.log(stgArray);



