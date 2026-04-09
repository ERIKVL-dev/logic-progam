const prompt = require('prompt-sync')();

let maiores = 0

for (let i = 0; i < 7; i++) {
    let idade = parseInt(prompt("digite a idade da pessoa" + 1 +":"));
    if (idade >=18 ){
    maiores ++;
    }
}
console.log ("quantidade de pessoas maiores de idade " ,maiores);