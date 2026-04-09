const prompt = require('prompt-sync')();
let nomes = prompt('Digite os nomes(use virgulas): ') ;
let input = nomes.split(',')

for (let i = 0; i < input.length; i++) {
console.log("nomes digitados: ", input[i])
}