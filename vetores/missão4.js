const prompt = require('prompt-sync')();

const alunos = [];
const notas = [];

while (opção !== '3'){

console.log('\n==========MENU========')
console.log('1.Cadastrar')
console.log('2.Listar')
console.log('3.sair')

let opção = prompt ("opção: ")

if (opção == 1){
    let nome = prompt("Nome do aluno: ");
    let nota = Number(prompt("Nota: "));

        alunos.push(nome);
        notas.push(nota);
    }
 else if (opcao == 2) {

        for (let i = 0; i < notas.length; i++) {
            if (notas[i] >= 7) {
                console.log(alunos[i] + " aprovado com nota " + notas[i]);
            } else {
                console.log(alunos[i] + " reprovado com nota " + notas[i]);
            }
        }

    } else if (opcao == 3) {
        console.log("Saindo...");
    }
}
