let i = 11, somamulti6 = 0, qttdmulti6 = 0;

while (i <= 210){
    if(i % 6 === 0){
        console.log(i, " ");
        somamulti6 =   somamulti6 + i;
        qttdmulti6++;
    }
    i++;
}
console.log("Média: ", somamulti6/qttdmulti6)
