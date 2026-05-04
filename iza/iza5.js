const prompt = require('prompt-sync')()

function somaNumero(n) {
let soma = 0;
for (let i = 0; i <= n; i++) {
    soma += i
}
    return soma;
}

function fatorial(n) {
    let fatorial = 1;    
 for (let i = 0; i <= n; i++) {
 soma += i
 }
    return fatorial;
}

let opcao;

do{
    console.log('\n=====MENU=====');
    console.log('\n1-Soma de 0 até N');
    console.log('\n2-Fatorial de N');
    console.log('\n0-Sair');

    let opcao = Number(prompt('Qual é a opção desejada?: '));

    if (opcao == 1){
      let n = Number(prompt(' Digite o Numero desejado: '))
        if(n >=0 ){ 
         console.log(`Soma de 0 até ${n} = ${somaNumero}`)
            } else {
            console.log('Numero invalido')
            }
    }
    if ( opcao == 2){
        let n = Number(prompt(' Digite o numero desejado:'))

        if( n >= 0){
            console.log(`Fatorial de ${n} = ${fatorial}`)
        }else{
            console.log('Numero invalido')
        }
        
    }

    if (opcao == 0){
        console.log ('Encerrando Sistema............');
        break;
    };
}while (opcao !== 0);