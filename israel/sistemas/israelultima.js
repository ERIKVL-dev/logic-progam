const prompt = require('prompt-sync')();

let saldo = 0;
let qdepositos = []; 
let qsaques = [];
let opcao = 0;

    while(opcao !==5 ){

    console.log('\n------- 🏦 NUBANK 🏦 -------');
    console.log('1- 💰 Consultar saldo');
    console.log('2- 💸 Sacar biru biru');
    console.log('3- 📥 Depositar');
    console.log('4- 📜 Extrato');
    console.log('5- 🚪 Sair');

    let opcao = Number(prompt('Escolha uma opção: '));

    if (opcao == 1) {
        console.log(`\n💵 SALDO EM CONTA: $${saldo.toFixed(2)}`); 
    }

    if (opcao == 2) {
        if (saldo >= 1) {
            let saque = Number(prompt('Quanto deseja sacar? 💸: '));
            if (saque <= saldo) {
                saldo -= saque;
                qsaques.push(saque);
                console.log('✅ Saque realizado com sucesso!');
            } else {
                console.log('❌ Saldo insuficiente para esse valor!');
            }
        } else {
            console.log('❌ Saldo insuficiente! Você está zerado.');
        }
    }

    if (opcao == 3) {
        let deposito = Number(prompt('Quanto deseja depositar? 📥: '));
        if (deposito > 0) {
            saldo += deposito;
            qdepositos.push(deposito);
            console.log('✅ Depósito realizado com sucesso!');
        } else {
            console.log('❌ Valor inválido!');
        }
    }

    if (opcao == 4) {
        console.log('\n--- 📜 EXTRATO 📜 ---');
        if (qsaques.length === 0 && qdepositos.length === 0) {
            console.log('📭 Nenhuma movimentação realizada.');
        } else {
            console.log(`✅ Quantidade de depósitos: ${qdepositos.length}`);
            console.log(`❌ Quantidade de saques: ${qsaques.length}`);
            console.log(`💰 Saldo atual: $${saldo.toFixed(2)}`);
        }
    }

    if (opcao == 5) {
        console.log('👋 Encerrando o sistema... Até logo!');
        break;
    }
    }