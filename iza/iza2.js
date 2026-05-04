const prompt = require('prompt-sync')();

function cAlturaPredio(alturaPessoa, sombraPessoa, sombraPredio) {
    return (alturaPessoa * sombraPredio) / sombraPessoa;
}


const alturaPessoa = parseFloat(prompt("Digite sua altura (em metros): "));
const sombraPessoa = parseFloat(prompt("Digite o tamanho da sua sombra (em metros): "));
const sombraPredio = parseFloat(prompt("Digite o tamanho da sombra do prédio (em metros): "));


const alturaPredio = cAlturaPredio(alturaPessoa, sombraPessoa, sombraPredio);


console.log(`A altura do prédio é aproximadamente: ${alturaPredio.toFixed(2)} metros`);