#include <stdio.h>

int main() {
    
    float num;
    float soma = 0;

    printf("Digite um numero: ");
    scanf("%f", &num);
    
    for (int i = 0; i <= num; i++){
        soma = soma + 1;
    }
    
    float media = soma / num;
    
    printf("\n=====RESULTADO=====\n");
    printf("Soma de 1 até %.2f:  \n", soma);
    printf("Media: %.2f\n", media);
    return 0;
}
