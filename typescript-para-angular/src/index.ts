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







