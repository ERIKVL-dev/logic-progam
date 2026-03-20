// COELBA NOVO SISTEMA VALENDO 10 MILHÕES DE REAIS

let consumidor = "Erik"
let consumo = 400
let ate100 = 0.60
let a101a200 = 0.75
let acima200 = 0.90

console.log("INFORMAÇÕES CONTA DE ENERGIA")
console.log("______________________________")
console.log("Consumidor: " + consumidor)
console.log("______________________________")
console.log("Consumo em kWh: " + consumo)
console.log("______________________________")

if (consumo <= 100) {
    valor = consumo * ate100
    console.log("O valor do consumo é de R$" + valor + " para consumo de até 100 kWh, com tarifa de R$0,60 por kWh.")
}

    if (consumo >= 101 && consumo <= 200) {
    valor = consumo * a101a200
    console.log("O valor do consumo é de R$" + valor + " para consumo entre 101 e 200 kWh, com tarifa de R$0,75 por kWh.")
}

    if (consumo > 200) {
    valor = consumo * acima200
    console.log("O valor do consumo é de R$" + valor + " para consumo acima de 200 kWh, com tarifa de R$0,90 por kWh.")
}