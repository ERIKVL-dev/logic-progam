const prompt = require('prompt-sync')();

const pedido = [];
const produto = [];
const prazo = [];
const quantidade = [];
const setor = [];
let opcao = 0;

while (opcao !== 5) {
    console.log('\n------------MENU------------');
    console.log('1. Cadastrar pedido');
    console.log('2. Listar pedido');
    console.log('3. Resumo gerencial');
    console.log('4. Buscar pedido');
    console.log('5. Sair');

    opcao = Number(prompt('Selecione uma opção: '));

    // CADASTRO
    if (opcao === 1) {
        let setor2 = prompt('Qual o setor do produto desejado? ');
        let produto2 = prompt("Qual produto o senhor(a) deseja?: ");
        let quantidade2 = Number(prompt("Quantidade desejada?: "));
        let prazo2 = Number(prompt("Quantos dias para entregar?: "));

        produto.push(produto2);
        quantidade.push(quantidade2);
        prazo.push(prazo2);
        setor.push(setor2);
        pedido.push(pedido.length + 1);
        console.log('Pedido cadastrado ✅');
    }

    // LISTA DE PEDIDOS
    if (opcao === 2) {
        if (pedido.length === 0) {
            console.log('Nenhum pedido cadastrado⛔.');
        } else {
            console.log('\n--- LISTA DE PEDIDOS ---');
            for (let i = 0; i < produto.length; i++) {
                console.log(`Pedido : ${pedido[i]} | Produto: ${produto[i]} | Quantidade: ${quantidade[i]}`);
                console.log(`Setor: ${setor[i]} | Prazo: ${prazo[i]} dias`);
                
                if (prazo[i] <= 2) console.log('Prioridade: Urgente‼️');
                else if (prazo[i] <= 5) console.log('Prioridade: Alta❗');
                else if (prazo[i] <= 10) console.log('Prioridade: Média');
                else console.log('Prioridade: Baixa');
                console.log('-----------------------');
            }
        }
    }

    // RESUMO GERENCIAL 
    if (opcao === 3) {
        if (pedido.length === 0) {
            console.log('Nenhum pedido para gerar resumo.⛔');
        } else {
            let totalItens = 0;
            let pedidosUrgentes = 0;

            for (let e = 0; e < produto.length; e++) {
                totalItens += quantidade[e]; 
                if (prazo[e] <= 2) {
                    pedidosUrgentes++; 
                }
            }

            console.log('\n--- RESUMO GERENCIAL ---');
            console.log(`Total de pedidos: ${produto.length} | Total de itens: ${totalItens} | Pedidos urgentes: ${pedidosUrgentes}`);
            console.log('------------------------');
        }
    }

    // SAIR
    if (opcao === 5) {
        console.log('Encerrando sistema...');
    }
}