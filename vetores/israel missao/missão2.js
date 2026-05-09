const prompt = require('prompt-sync')();
let numeros = prompt('Numeros (use virgulas): ') ;
let input = numeros.split(',')
let soma = 0

for (let i = 0; i < input.length; i++) {
    soma += Number(input[i])
console.log("Valores: ", input[i])

}
console.log("Soma total: ", soma)