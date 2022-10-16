// Não podemos criar constantes com palavras reservadas.
// Constantes precisam ter nomes significativos.
// Não pode começar o nome de uma constante com um número.
// Não podem conter espaços ou traços.
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// Não utilize var, utilize const

//const nome = 'João'; //esse valor não pode ser modificado.
// se precisar alterar a const acima, ela deve ser transformada em let.

// + - * /
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(primeiroNumero + segundoNumero);
