const prompt = require('prompt-sync')();


function positivo(numero){
    return numero >= 0;
}

let numeros = parseInt(prompt('Digite um numero inteiro: '));

if(positivo((numeros))){
    console.log('O numero é Positivo!')
}

else {
    console.log('O numero é negativo!')
}