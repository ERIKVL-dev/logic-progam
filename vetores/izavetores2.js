const prompt = require('prompt-sync')();
let soma = 0
for(let i = 0; i <10;i++){
    let num = parseInt(prompt("DIGITE O NUMERO" + i + ":"));
    if(num> 0){
    soma = soma + num;
    }
}
console.log ("SOMAR POSITIVOS", soma);