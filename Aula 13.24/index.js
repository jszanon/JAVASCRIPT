//               0123456789
let umaString = 'O rato roeu a roupa do rei de Roma.'

/* console.log(umaString.concat(' em um lindo dia.'))
console.log(umaString + ' em um lindo dia.')
console.log(`${umaString} em um lindo dia.`) */

console.log(umaString.indexOf('o', 3)) //IndexOf - do início para o fim (retorna o índice)
console.log(umaString.lastIndexOf('o')) //lastIndexOf - do fim para o início
console.log(umaString.match(/[a-z]/g)) //expressão regular
console.log(umaString.search(/x/))
console.log(umaString.replace(/r/g, '#')) /* se não colocar a letra
g ele vai substituir somente o primeiro r, para que isso aconteça 
repetidamente, é necessário usar a flag g */
console.log(umaString.length) //esse atributo diz o tamanho da string
console.log(umaString.slice(-5, umaString.length -1))
console.log(umaString.split(' ', 2)) //aparecer duas palavras