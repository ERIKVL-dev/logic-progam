const prompt = require('prompt-sync')();
const numeros = [];
let soma = 0;
let soma2 = 0
let opcao;

while (opcao !== 0){
    console.log ('\n----MENU----\n')
    console.log('1 - Digitar Numero\n')
    console.log('2 - Somar Valores\n')
    console.log('3 - Calcular Média\n')
    console.log('4 - Maior e Menor valor\n')
    console.log('5 - Buscar elemnto\n')
    console.log('0- Sair\n')
    opcao = parseInt(prompt('Escolha a Opção: '))

    switch(opcao){

        case 1: 
            let tam = parseInt(prompt('Quantos valores deseja? '))
            
            for (let i = 0; i < tam; i++){
                let num = parseInt(prompt(`Digite o ${i + 1}º valor: `))
                numeros.push(num);
            }
            console.log('Valores: ',numeros)
                break;
    

        case 2:
            for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
            }

    console.log (`Soma dos valores: ${soma.toFixed(2)}`);
    break;
            
            
        case 3:
                console.log (`Divisão dos valores: ${soma/numeros.length.toFixed(2)}`);
                    break;
                    
        case 4:

        let maior = numeros[0]
        let menor = numeros[0]
            for (let i = 0; i < numeros.length; i++) {
                 
            if (maior > numeros[i] ){
    maior = numeros[i]
            }
            if (menor < numeros[i]){
                menor = numeros[i]
              }
            }
            console.log(maior,menor)
        case 5: 
    let posicao = parseInt(prompt('Qual a posição (índice) do valor desejado?'));
    
    if (posicao >= 0 && posicao < numeros.length) {
        console.log(`No índice ${posicao}, o valor é: ${numeros[posicao]}`);
    } else {
        console.log('Posição inválida!');
    }
    break;
    }            
}   