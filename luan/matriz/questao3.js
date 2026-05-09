let somadiagonal =  0;
let linhas = 5;
let colunas = 5;
let min = 1;
let max = 1000;
let matriz = [ ];

function gerarMatrizAle(linhas, colunas, min, max){

     for (let i = 0 ; i < linhas; i++){
        matriz[i] = [];

        for(let j = 0; j < colunas; j++){
        matriz[i][j] = Math.floor(Math.random() * ( max - min + 1 )) + min; 
         }
    }

    return matriz
}

 let matrizCalculada = gerarMatrizAle(linhas, colunas, min, max)

    for (let i = 0 ; i < matrizCalculada.length; i++){
        somadiagonal += matrizCalculada[i][i]
    
      console.log (
         'Diagonal ['+i+']['+i+']'
            + matrizCalculada [i][i]
        );      
    }

console.log('Soma: ' + somadiagonal)