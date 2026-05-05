const prompt = require('prompt-sync')();

let vetor = [];

console.log("Preencha o vetor com 5 números inteiros:");
for (let i = 0; i < 5; i++) {
    vetor[i] = Number(prompt(`Digite o ${i + 1}º número: `));
}

// ===== Menu =====
let opcao;

do {
    console.log("\n===== MENU =====");
    console.log("1. Soma do vetor");
    console.log("2. Produto do vetor");
    console.log("3. Multiplicar todos os elementos por 5");
    console.log("4. Mudar elemento do vetor");
    console.log("5. Ordenar vetor (Bubble Sort)");
    console.log("6. Inverter vetor");
    console.log("7. Mostrar vetor");
    console.log("0. Sair");

    opcao = Number(prompt("Escolha: "));

    switch (opcao) {
        case 1:
            for (let i = 1; i <= vetor.length; i++) {
                let soma = 0
                soma += vetor[i]
            
                console.log("Soma =  " + soma[i]);
            }
            break;
        case 2:
            console.log("Produto =", multiplicaVetor(vetor));
            
            break;
        case 3:
            let multiplicador = 5;
            multiplicador* vetor
            console.log(vetor*multiplicador);
            console.log("Vetor atualizado!");
            break;
        case 4:
            mudarElemento(vetor);
            break;
        case 5:
            ordenarVetor(vetor);
            console.log("Vetor ordenado!");
            break;
        case 6:
            console.log(vetor);
            console.log("Vetor invertido!");
            break;
        case 7:
            console.log(vetor);
            break;
        case 0:
            console.log("Saindo do programa...");
            break;
        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);