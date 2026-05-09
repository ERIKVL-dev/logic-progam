const prompt = require('prompt-sync')();

let inter1 = 0, inter2 = 0, inter3=0, inter4=0, inter5=0

while(true){
let num = parseInt(prompt("Digite um numero(negativo para sair):"));
if (num<0){
    break;
}

if (num<=25){
    inter1++;
}

else if (num<=50){
    inter2++;
}
else if (num<=75){
    inter3++;
}
else if (num<=100){
    inter4++;
}
else if (num>100){
    inter5++;
}

}

console.log ("\nNUMEROS ENTRE: (0-25): ", inter1);
console.log ("\nNUMEROS ENTRE: (26-50)", inter2);
console.log ("\nNUMEROS ENTRE: (51-75)", inter3);
console.log ("\nNUMEROS ENTRE: (76-100)", inter4);
console.log ("\nNUMEROS MAIORES QUE: (100)", inter5);