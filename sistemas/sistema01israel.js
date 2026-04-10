const prompt = require('prompt-sync')();

const produto = [];
const prazo = [];
const quantidade = [];
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
        let produto2 = prompt("QUAL PRODUTO O SENHOR(a) DESEJA?: ");
        let quantidade2 = Number(prompt("QUANTIDADE DESEJADA?: "));
        let prazo2 = Number(prompt("QUANTOS DIAS PARA ENTREGAR?: "));

        produto.push(produto2);
        quantidade.push(quantidade2);
        prazo.push(prazo2);
    }




// LISTA DE PEDIDOS //

    else if (opcao == 2) {

        console.log('\n--- LISTA DE PEDIDOS ---');

        for (let i = 0; i < produto.length; i++) {
         console.log(`PEDIDO ${i + 1}`);
         console.log(`PRODUTO: ${produto[i]}`);
         console.log(`QUANTIDADE: ${quantidade[i]}`);
         console.log(`PRAZO DE ENTREGA: ${prazo[i]} dias`);

            if (prazo.length <= 2) {
                console.log('PRIORIDADE: URGENTE!!');
            } 
            else if (prazo.length >= 3 && prazo.length <= 5) {
                console.log('PRIORIDADE: ALTA!');
            } 
            else if (prazo.length >= 6 && prazo.length <= 10) {
                console.log('PRIORIDADE: MÉDIA');
            } 
            else if (prazo.length > 10) {
                console.log('PRIORIDADE: BAIXA');
            }
            console.log('----------------------');
        }
    }

    else if (opcao == 3){

    }

// SAIR DO SISTEMA // 
    else if (opcao === 5) {
        console.log('Encerrando sistema...');
    }
}