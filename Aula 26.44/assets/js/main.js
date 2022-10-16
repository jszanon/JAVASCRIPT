const form = document.querySelector('#formulario'); //captura de formulário

form.addEventListener('submit', function (e) { //adicionamos um evento ao formulário(submit)
    e.preventDefault(); //previnimos o default, e não deixamos o formulário ser enviado
    const inputPeso = e.target.querySelector('#peso'); //capturamos dados dos inputs
    const inputAltura = e.target.querySelector('#altura'); //capturamos dados dos inputs

    const peso = Number(inputPeso.value); //tentamos converter os inputs para o tipo Number
    const altura = Number(inputAltura.value); //tentamos converter os inputs para o tipo Number

    if (!peso) { //Se o peso não for avaliado como verdadeiro !peso
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura) { //Se a altura não for avaliado como verdadeiro !altura
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); //Criamos uma função específica para calcular o IMC
    const nivelImc = getNivelImc(imc); //Criamos uma função específica para o texto que é exibido

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; //Criamos uma mensagem para exibir os valores acima

    setResultado(msg, true);//Setamos o resultado com a flag true
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'] //Criamos um array
//para obter uma lista de valores (no caso, uma lista de strings)

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
//Começamos a checar os resultados de trás para frente invertendo 
//a lógica, porque a medida que a função encontrar a palavra RETURN
//ela não vai ser mais executada. Baseado nisso, as condições foram
//feitas dessa forma.   
}

function getImc (peso, altura) { //Função que faz o cálculo do IMC
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () { //Função que cria um parágrafo
    const p = document.createElement('p');
    return p; 
}

function setResultado (msg, isValid) { //Função que seta o resultado, no caso, se o resultado é válido(isValid)
    const resultado = document.querySelector('#resultado');//Seleciona div de resultados
    resultado.innerHTML = '';//Zera o html daquele resultado
    
    const p = criaP();

    if (isValid) { //Significa 'se' o resultado é válido
        p.classList.add('paragrafo-resultado');//Classe com o fundo verde
    } else { //Se o resultado não for válido...
        p.classList.add('bad');//Classe com o fundo vermelho
    }

    p.innerHTML = msg; //Seta o innerHTML do parágrafo com uma mensagem que está sendo recebida
    resultado.appendChild(p);//Adicionamos o parágrafo no nosso resultado
}
