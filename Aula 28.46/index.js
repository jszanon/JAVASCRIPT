/* //const tresHoras = 60 * 60 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); //01/01/1970 Timestamp unix ou época unix
//const data = new Date(2022, 9, 14, 17, 09);
//                     ano mês dia hora min... 
//(O mês em JS é representado de forma que, o mês decorrente é o 
//seu número anterior, por exemplo, o mês de Outubro é 9 ao invés 
//de ser 10. Isso porque a contagem dos meses começa no 0, que é
//Janeiro, portanto o mês 11 é Dezembro.)                  
//console.log(data.toString());

// new Date(); - Data atual
// new Date(valor); - Milésimo de segundo
// new Date(dataString); - Um valor do tipo String que representa
//uma data. A string deverá estar em formato reconhecido pelo
//método Date.parse()
const data = new Date(1665765018146);
console.log('Dia', data.getDate());//obter o número do dia
console.log('Mês', data.getMonth() + 1);//Mês começa do 0, para o mês correto utilizar + 1
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay());//0-Domingo, 6-Sábado 
console.log(data.toString());
console.log(Date.now());//Representa os milésimos de segundo contando
//desde o marco 0 até hoje. */

//Criar uma função que formata a data
function zeroAEsquerda (num) { //Colocar 0 a esquerda
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataPortugal = formataData(data);
console.log(dataPortugal);
