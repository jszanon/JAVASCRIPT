/* 
Jessica Sanzoni Zanon tem 31 anos, pesa 64 kg
tem 1.5 de altura e seu IMC é de 28.444444444444443
Jessica nasceu em 1991 
*/
const nome = 'Jessica';
const sobrenome = 'Sanzoni Zanon';
const idade = 31;
const peso = 64;
const alturaEmM = 1.5;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`); 
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);