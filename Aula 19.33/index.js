/* 
Primitivos (valores imutáveis, ou seja, não podem ser modificados):
string, number, boolean, undefined, null (bigint, symbol) - Valor

Referência (valores mutáveis): array, object, function
let a = [1, 2, 3];
let b = a;
let c = b;

console.log(a, b, c);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz')
console.log(c);
*/
/* 
Objeto 
*/
const a = {
    nome: 'Jessica',
    sobrenome: 'Zanon'
};
const b = a;

b.nome = 'Luiz';
console.log(a);
console.log(b);


