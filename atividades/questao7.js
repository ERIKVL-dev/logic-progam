// juros por atraso de pagamento

let diasatraso = 30
let valorconta = 123 
let jurosdias = (valorconta * 0.1) / 100
let multafixa = (valorconta * 2) /100
let calculojuros = jurosdias * diasatraso


if (diasatraso === 0) {
    console.log("O valor da conta é R$" + valorconta + " sem juros por atraso, o pagamento foi feito no prazo.")
}

else if (diasatraso > 0 ) {
    console.log("O valor da conta é R$" + valorconta + " com multa fixa de R$" + multafixa + " e juros por atraso de R$" + calculojuros + " para um total de R$" + (valorconta + multafixa + calculojuros) + " o pagamento está atrasado em " + diasatraso + " dias.")
}