// PLANO DE ASSINATURA
let cliente = "Erik"
let faturamento = 20000
let tipcliente = "PF"
let tipcliente2 = "PJ"
let valorPF = 29.90
let valorPJ = 99
let valorPJ2 = 199
let valorpj3 = 399

console.log("INFORMAÇÕES DO CLIENTE")
console.log("______________________________")
console.log("Cliente: " + cliente)
console.log("______________________________")
console.log("Faturamento mensal: R$" + faturamento)
console.log("______________________________")

if  (faturamento >= 5001 && faturamento < 10000) {
    console.log("O cliente " + cliente + " é do tipo " + tipcliente2 + " e o valor da assinatura é R$" + valorPJ + " para faturamento de até R$10.000,00.")
}

if (faturamento >= 10000 && faturamento < 50000) {
    console.log("O cliente " + cliente + " é do tipo " + tipcliente2 + " e o valor da assinatura é R$" + valorPJ2 + " para faturamento entre R$10.000,00 e R$50.000,00.")
}

if (faturamento >= 50000) {
    console.log("O cliente " + cliente + " é do tipo " + tipcliente2 + " e o valor da assinatura é R$" + valorpj3 + " para faturamento acima de R$50.000,00.")
}

if  (faturamento <= 5000) {
    console.log("O cliente " + cliente + " é do tipo " + tipcliente + " e o valor da assinatura é R$" + valorPF + " para pessoa física.")
}

