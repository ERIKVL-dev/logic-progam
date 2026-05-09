// SIMULADOR DE CAIXA

let cliente = "Erik"
let saldo = 1000
let valorcompra = 1599
let limite = 500
let formapagamento = "cartão"

console.log("INFORMAÇÕES DO CLIENTE")
console.log("______________________________")
console.log("Cliente: " + cliente)
console.log("______________________________")
console.log("Saldo disponível: R$" + saldo)
console.log("______________________________")
console.log("Valor da compra: R$" + valorcompra)
console.log("______________________________")
console.log("Forma de pagamento: " + formapagamento)
console.log("______________________________")
console.log("Limite disponível?" + Boolean(limite))
console.log("______________________________")

if (saldo >= valorcompra) {
    console.log("Compra aprovada!")
} else if (saldo + limite >= valorcompra) {
    console.log("Compra aprovada com limite!")
} else {
    console.log("Compra negada!")
}