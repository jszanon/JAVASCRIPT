// ? :
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
//                               condição      valor verdadeiro    valor falso
console.log(nivelUsuario);


if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
// Para o caso acima, podemos usar a operação ternária...