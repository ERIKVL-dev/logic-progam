let temp = [80, 80, 70, 80, 53]
let soma = 0 

for (let i = 0; i < temp.length; i++) {
 soma += temp[i]
 
    if (temp[i] > 80 ){
        console.log ("PASSOU DE  80C DEU UMA TEMPERATURA DE ", temp[i] )
    }
    else if (temp [i] >= 90 ){
        console.log ("ALERTA CRITICO TEMPERATURA CHEGOU A: ", temp[i])
    }
}

let media = soma / 5

console.log ("MEDIA TEMPERATURA: ", media.toFixed(2))