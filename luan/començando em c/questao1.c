
#include <stdio.h>

#define PI 3.13159
#define MAX 100


int main() {

    int idade;
    float altura;
    char nome[50];
    int nota;

    printf("Digite o nome do aluno: ");
    scanf("%s", &nome);
    
    printf("Digite a idade do aluno: ");
    scanf("%d", &idade);
    
    printf("Digite a  Altura do aluno: ");
    scanf("%f", &altura);
    
    printf("Digite a nota do aluno: ");
    scanf("%d", &nota);
    
    if(nota >= 7 ){
        printf("Aluno reprovado!\n");
    }
    if(nota >= 4){
        printf("aluno em recuperação!\n");
    }
    else if (nota <= 3) {
        printf (" Aluno reprovado\n");
    }
    

    printf("Aluno: = %s\n ", nome);
    printf("idade do aluno: = %d\n ", idade);
    printf("Sua altura é = %.2f\n ", altura);
    printf("PI = %.3f\n", PI);
    printf("MAX = %d\n", MAX);
    
    return 0;
}