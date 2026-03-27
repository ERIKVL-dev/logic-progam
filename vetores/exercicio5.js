let consumo = [42, 42, 45, 87, 63, 55];
let consumalt = 0;
let soma = 0;

for (let i = 0; i < consumo.length; i++) {
 soma += consumo[i]

 console.log("CONSUMO TOTAL: ", soma)

    if (consumo[i] >= 58){
        console.log ("CONSUMO CRITICO",consumo[i])
    }
     if (consumo[i] >= 50){
        console.log ("Consumo elevado",consumo[i])
    }
}
