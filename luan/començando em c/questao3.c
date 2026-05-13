#include <stdio.h>

int main()
{
    float notas[5];
    float soma = 0, media;
    float maior;
    
    for(int i = 0; i<5; i++){
    printf("Digite as 5 notas: \n");
    scanf("%f", &notas[i]);
    
    soma += notas [i];
    float media = soma / 5;
    
    printf("Todas as notas = %f ", notas[i]);
    printf("Media: = %2.f ", media)
    printf("Maior nota: = %f " ,);
        if (media >= 6 ){
        printf("Aluno aprovado\n");
    }else if (media < 6){
        printf("Aluno reprovado ");
    }
    return 0;
}