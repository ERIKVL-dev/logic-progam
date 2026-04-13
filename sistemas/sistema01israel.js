const prompt = require('prompt-sync')();

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

// RESUMO GERENCIAL //

if (opcao == 3) {

    let totalPedidos = produto.length;
    let totalItens = 0;
    let urgentes = 0;

    let maiorQtd = 0;
    let maiorPedido = '';

    let setoresCount = {};

    for (let i = 0; i < produto.length; i++) {

        totalItens += quantidade[i];

        
        if (prazo[i] <= 2) {
            urgentes++;
        }

        if (quantidade[i] > maiorQtd) {
            maiorQtd = quantidade[i];
            maiorPedido = produto[i];
        }
       
        if (setoresCount[setor[i]]) {
            setoresCount[setor[i]]++;
        } else {
            setoresCount[setor[i]] = 1;
        }
    }
    
    let setorTop = '';
    let maiorSetor = 0;

    for (let s in setoresCount) {
        if (setoresCount[s] > maiorSetor) {
            maiorSetor = setoresCount[s];
            setorTop = s;
        }
    }

    console.log('\n--- RESUMO GERENCIAL ---');
    console.log(`Pedidos: ${totalPedidos}`);
    console.log(`Itens: ${totalItens}`);
    console.log(`Urgentes: ${urgentes}`);
    console.log(`Setor Top: ${setorTop}`);
    console.log(`Maior Pedido: ${maiorPedido} - ${maiorQtd}`);
}

// BUSCAR PEDIDO //

if (opcao == 4) {

    let busca = prompt('Digite o nome do produto: ');
    let encontrado = false;

    for (let i = 0; i < produto.length; i++) {

        if (produto[i].toLowerCase() === busca.toLowerCase()) {

            console.log('\n--- PEDIDO ENCONTRADO ---');
            console.log(`Produto: ${produto[i]}`);
            console.log(`Quantidade: ${quantidade[i]}`);
            console.log(`Setor: ${setor[i]}`);
            console.log(`Prazo: ${prazo[i]} dias`);

            // prioridade
            if (prazo[i] <= 2) {
                console.log('Prioridade: Urgente');
            } else if (prazo[i] <= 5) {
                console.log('Prioridade: Alta');
            } else if (prazo[i] <= 10) {
                console.log('Prioridade: Média');
            } else {
                console.log('Prioridade: Baixa');
            }

            encontrado = true;
            break; 
        }
    }

    if (!encontrado) {
        console.log(' Pedido não encontrado!');
    }
}


// SAIR DO SISTEMA // 
    else if (opcao === 5) {
        console.log('Encerrando sistema...');
    }
}