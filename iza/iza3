const prompt = require('prompt-sync')();

function Primo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;

function Mresultado(numero, resultado) {
    if (resultado) {
        console.log(`O número ${numero} é primo.`);
    } else {
        console.log(`O número ${numero} NÃO é primo.`);
    }
}


const numero = parseInt(prompt("Digite um número: "));

const resultado = Primo(numero);
Mresultado(numero, resultado);