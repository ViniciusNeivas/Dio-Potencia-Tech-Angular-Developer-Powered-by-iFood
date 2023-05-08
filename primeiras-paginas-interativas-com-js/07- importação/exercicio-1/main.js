const { gets, print } = require("./funcoes-auxiliares");
const numeroTabuada = gets();
let resultadoTabuada = 0;

for (let i = 1; i <= 10; i++) {
  resultadoTabuada = numeroTabuada * i;
  print(`${numeroTabuada} x ${i} = ${resultadoTabuada}`);
}
