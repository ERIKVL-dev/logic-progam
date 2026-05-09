const prompt = require('prompt-sync')();

function cSalariob(horas, valorHora) {
    return horas * valorHora;
}

function aplicarBonus(salario) {
    if (salario < 2000) {
        return salario + 200;
    } else {
        return salario;
    }
}

let nome = prompt("Digite seu nome: ");
let horas = Number(prompt("Digite as horas trabalhadas: "));
let valorHora = Number(prompt("Digite o valor da hora: "));

let salarioBruto = cSalariob(horas, valorHora);
let salarioFinal = aplicarBonus(salarioBruto);


console.log(`Funcionário: ${nome}`);
console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);