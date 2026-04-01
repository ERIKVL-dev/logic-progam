const prompt = require('prompt-sync')();
// nomesssssssssssss

let nomes = prompt('Digite os nomes(use virgulas): ') ;
let entrada = nomes.split(',')

for (let i = 0; i < entrada.length; i++) {
console.log("nomes digitados: ", entrada[i])
}

//notas

let notas = prompt('Digite as notas dos alunos(use virgulas): ') ;
let input = notas.split(',')

for (let u = 0; u < input.length; u++) {
    let nota = Number(input[u])

    if (nota >= 7){
        console.log("aluno aprovado", nota)
    }
    else if (nota < 7) {
        console.log("aluno reprovado", nota)
    }
}
