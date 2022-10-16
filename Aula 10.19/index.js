// String, number, undefined, null, boolean

const nome = 'Jessica'; //string
const nome1 = "Jessica"; //string
const nome2 = `Jessica`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined = não aponta para nenhum local na memória
let sobrenomeAluno = null; //nulo -> não aponta para nenhum local na memória
const aprovado = false; // true ou false (valor lógico)

let a = 2;
const b = a;
console.log(a, b); // 2,2

a = 3;
console.log(a, b);// 3,2