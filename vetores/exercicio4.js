let medias = [ 6, 0, 8];
let soma = 0;

for (let i = 0; i < medias.length; i++) {
soma += medias[i];

if (medias[i] >= 7 ){
    console.log ("Aluno aprovado por media: ", medias[i]);
 };

if (medias[i] <= 7 ){ 
    console.log ("Aluno reprovado por media: ",medias[i]);
 }

  let = mediaf = soma / medias.length
 
  if (medias[i] >= 0 ){
    console.log("MEDIA: ", mediaf.toFixed(2));
 }
}