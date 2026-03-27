// DESCONTO PROGRESSIVO NA LOJA

let vlrtotal = 498
let desc1 = (vlrtotal * 5)  /100 
let desc2 = (vlrtotal * 10) /100
let desc3 = (vlrtotal * 15) /100

// CALCULANDO O VALOR FINAL COM DESCONTO PARA CADA FAIXA DE PREÇO

let valorfinal = vlrtotal - desc1
let valorfinal2 = valorfinal - desc2
let valorfinal3 =  vlrtotal - desc3

// CONSOLE.LOG PARA DEIXAR O TERMINAL MAIS ORGANIZADO E FÁCIL DE LER

console.log("INFORMAÇÕES DA COMPRA")
console.log("______________________________")


//  SEM DESCONTO PARA COMPRAS DE ATÉ 99 

if (vlrtotal < 100) {
    console.log(`O valor total da compra é R$${vlrtotal}`)
}    

// DESCONTO DE 5% PARA COMPRAS DE 100 A 299

if (vlrtotal >= 100 && vlrtotal < 299.99) {
console.log(`O valor total da compra é R$${vlrtotal} e o desconto é de 5%, o valor final é R$${valorfinal}`)
} 

// DESCONTO DE 10% PARA COMPRAS ENTRE 300 A 499

if (vlrtotal >= 300 && vlrtotal < 499.99) {
console.log(`O valor total da compra é R$${vlrtotal} e o desconto é de 10%, o valor final é R$${valorfinal2}`)
}

// DESCONTO DE 15% PARA COMPRAS ACIMA DE 500

if (vlrtotal >= 500) {
    console.log(`O valor total da compra é R$${vlrtotal} e o desconto é de 15%, o valor final é R$${valorfinal3}`)
}