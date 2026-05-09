// UBER 2.0
let nome = "Erik"
let distanciakm = 16
let orcamento = 27

console.log("INFORMAÇÕES DO CLIENTE")
console.log("______________________________")
console.log("Cliente: " + nome)     
console.log("______________________________")   
console.log("Distância em km: " + distanciakm)
console.log("______________________________")
console.log("Orçamento disponível: R$" + orcamento)
console.log("______________________________")

// Ape

if (distanciakm <= 2) {
    console.log("A distancia é pouca vale mais apena .")
}

// Ônibus

if (distanciakm >=8 && distanciakm <= 15 && orcamento >= 10) {
    console.log("Seu Orçamento é de R$" + orcamento + " e a distancia é de " + distanciakm + "km, vale mais apena ir de ônibus.")
}

else if (distanciakm >=8 && distanciakm <= 15 && orcamento < 10) {
    console.log("Seu Orçamento é de R$" + orcamento + " Não é possivel pagar a corrida.")
}

// Uber moto ou carro 

if (distanciakm >= 15 && orcamento >= 25) { 
    console.log("Seu Orçamento é de R$" + orcamento + " e a distancia é de " + distanciakm + "km, vale mais apena ir de Uber.")
}

else if (distanciakm > 15 && orcamento < 25) {
    console.log("Seu Orçamento é de R$" + orcamento + " Não é possivel pagar a corrida.")
}