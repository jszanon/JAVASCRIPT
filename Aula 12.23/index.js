let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

//Maneira mais antiga de resolver
const varATemp = varA //você tem que salvar o valor de A antes de modificar a variável. Temp significa Temporário.
varA = varB //varA passa a ter o valor de B e deixa de existir
varB = varC //Certo
varC = varATemp //

/* Maneira mais atual de resolver */
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)

