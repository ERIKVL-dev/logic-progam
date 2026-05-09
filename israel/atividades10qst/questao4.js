// IFOOD 2.0 

// MENU COMO VAI APARECER NO TERMINAL

console.log("BEM VINDO AO IFOOD 2.0")
console.log("______________________________")
console.log("CARDÁPIO")
console.log("______________________________")
console.log("1 - X-BURGUER R$20,00")
console.log("2 - 4-PIZZAS FAMILIA R$190,00")
console.log("3 - X-BACON R$70,00")
console.log("4 - X-TUDO R$50,00")
console.log("______________________________")

// importando o módulo readline para ler a entrada do usuário no terminal (ler oq o usuario digitar) e criar 

const readline = require("readline");

// Criando uma interface de leitura para ler a entrada do usuário no terminal

const rl = readline.createInterface({
    input: process.stdin, // entrada do usuário (o que ele digitar)
    output: process.stdout // saída do programa (o que o programa vai mostrar no terminal)
});

// Variável para armazenar o valor do pedido

rl.question("QUAL O ITEM DO CARDÁPIO QUE DESEJA? (1-4): ", function(opcao) {

    // N PRECISA NEM EXPLICAR ISSO É LOGICA (SE O USUÁRIO DIGITAR 1, O PEDIDO VAI SER 20, SE DIGITAR 2 O PEDIDO VAI SER 190 E ASSIM POR DIANTE) 

    if (opcao == 1) {
    pedido = 20;
    } 
    else if (opcao == 2) {
    pedido = 190;
    } 
    else if (opcao == 3) {
    pedido = 70;
    } 
    else if (opcao == 4) {
    pedido = 50;
    } 
    else {
    console.log("Item inválido.");
    rl.close();
    return;
    }

    // ATRIBUNDO VALOR PARA OS BAIRROS 

    let Gleba = 15
    let Phoc = 10
    let centro = 12
    let outrosbairros = 20

    // LOGICA PARA CALCULAR O VALOR DO PEDIDO E A TAXA DE ENTREGA, SE O PEDIDO FOR MAIOR OU IGUAL A 80 A ENTREGA É GRÁTIS PARA TODOS OS BAIRROS, SE FOR MENOR QUE 80 A ENTREGA VAI SER COBRADA DE ACORDO COM O BAIRRO DO CLIENTE.

    if (pedido >= 80) {
    console.log("O valor do pedido é R$" + pedido + " e a taxa de entrega é GRÁTIS para todos os bairros.")
    } 
    else {
    console.log("O valor do pedido é R$" + pedido + " taxa para Gleba é R$ 15 valor total: R$" + (pedido + Gleba))
    console.log("O valor do pedido é R$" + pedido + " taxa para Phoc é R$ 10 valor total: R$" + (pedido + Phoc))
    console.log("O valor do pedido é R$" + pedido + " taxa para Centro é R$ 12 valor total: R$" + (pedido + centro))
    console.log("O valor do pedido é R$" + pedido + " taxa para outros bairros é R$ 20 valor total: R$" + (pedido + outrosbairros))
    }

    rl.close(); // Fechando a interface de leitura para encerrar o programa se n o programa n ficar esperando o usuário digitar algo para continuar rodando, isso é importante para evitar que o programa fique travado esperando uma entrada do usuário que n vai chegar.

});