// EVENTO FINAL DE SEMANA SÓ PARA +18

let idade = 18
let autorizacao = true

if (idade >= 18) {
    console.log("Você pode entrar no evento!");
} 
else    {
    console.log("Você não pode entrar no evento pois é de menor, apresente autorização dos seus pais.");
}

if (idade >= 16 && autorizacao ===true) {
    console.log("Você pode entrar no evento com autorização!");
}

else {
        console.log("Se voçê não for de maior ou não tiver autorização dos seus pais você não pode entrar no evento.");
}

if (idade < 16) {
    console.log("Você não pode entrar no evento, mesmo com autorização dos seus pais, pois possui menos de 16 anos.");
}