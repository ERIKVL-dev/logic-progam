const prompt = require('prompt-sync')();

const produto = [];
const prazo = [];
const quantidade = [];
const setor = [];
let opcao = 0;

while (opcao !== 5) {
    console.log('\n------------MENU------------');
    console.log('1. CADASTRAR PEDIDO');
    console.log('2. LISTAR PEDIDOS');
    console.log('3. RESUMO GERENCIAL');
    console.log('4. BUSCAR PEDIDO');
    console.log('5. SAIR');

    opcao = Number(prompt('SELECIONE UMA OPÇÃO: '));

// CADASTRO //

    if (opcao == 1) {
        let setor2 = prompt('Qual o setor do produto desejado?');
        let produto2 = prompt("Qual produto o senhor(a) deseja?: ");
        let quantidade2 = Number(prompt("quantidade desejada?: "));
        let prazo2 = Number(prompt("Quantos dias para entregar?: "));

        produto.push(produto2);
        quantidade.push(quantidade2);
        prazo.push(prazo2);
        setor.push(setor2);
    }


// LISTA DE PEDIDOS //

    if (opcao == 2) {

        console.log('\n--- LISTA DE PEDIDOS ---');

        for (let i = 0; i < produto.length; i++) {
         console.log(`Pedido: ${i + 1}`);
         console.log(`Produto: ${produto[i]}`);
         console.log(`Quantidade: ${quantidade[i]}`);
         console.log(`Prazo de entrega: ${prazo[i]} dias`);

             if (prazo[i] <= 2) {
                console.log('Prioridade: Urgente!!');
            } 
             if (prazo[i] >= 3 && prazo[i] <= 5) {
                console.log('Prioridade: Alta!');
            } 
             if (prazo[i] >= 6 && prazo[i] <= 10) {
                console.log('Prioridade: Média');
            } 
             if (prazo[i] > 10) {
                console.log('Prioridade: Baixa');
            }
            else {
                console.log('Nenhum prazo digitado!!')
            }
            console.log('-----------------------');
        }
    }

     if (opcao == 3){
        // mostrar  maior pdd, qntt de pedd , setor top, itens, e urgente
        console.log(`Maior pedido: ${produto[i]} \n tendo a quantidade pedida${quantidade[i].max} `)
    }

// SAIR DO SISTEMA // 
    else if (opcao === 5) {
        console.log('Encerrando sistema...');
    }
}