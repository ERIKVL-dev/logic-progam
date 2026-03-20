// APROVAÇÕES POR MÉDIA COM RECUPERAÇÃO

let nome = "Erik";
let sala = "3° ano do ensino médio";
let nota1 = 10;
let nota2 = 4;
let nota3 = 8;
let notarec = 0;
let aprovacao = true;
let reprovacao = false;

// CALCULANDO A MÉDIA DAS NOTAS

let media = (nota1 + nota2 + nota3) / 3;
let mediarec = (media + notarec) / 2;
let mediafinal = mediarec;

// CONSOLE.LOG PARA DEIXAR O TERMINAL MAIS ORGANIZADO E FÁCIL DE LER

console.log("INFORMAÇÕES DO ALUNO")
console.log("______________________________")

// APROVADO POR MÉDIA 

if (media >= 7) {
    console.log("O aluno foi aprovado com média: ", media)
    console.log("______________________________")
    console.log("Aluno aprovado sem necessidade de recuperação? ", aprovacao)
    console.log("______________________________")
}

else {
    console.log ("O aluno está de recuperação com média: ", media)
    console.log("______________________________")
} 

// RECUPERAÇÃO

if (mediarec >=6) 
    { 
    console.log("Nota da recuperação: ", notarec)
    console.log("______________________________")
    console.log("O aluno precisou fazer recuperação, ficando com  a média final : ", mediafinal)
    console.log("______________________________")
    console.log("Aluno aprovado após recuperação? ", aprovacao)
    console.log("______________________________")
} 

else { 
    console.log ("O aluno foi aprovado após recuperação? ", reprovacao )
    console.log("______________________________")
}

// REPROVADO POS RECUPERAÇÃO

if (mediarec < 4) {
    console.log("O aluno foi reprovado após recuperação.")
}

else {
    console.log("O aluno foi aprovado após recuperação.")
}