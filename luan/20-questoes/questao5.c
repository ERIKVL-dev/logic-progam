#include <stdio.h>

int main() {
    float nota;
    
    printf("Digite a nota (0 a 10)");
    scanf("%f", &nota);
    
    if(nota <= 10 && nota >= 9){
        printf("Classificação de nota: Exelente");
    }
    else if (nota <= 8 && nota >= 7){
        printf("Classificação de nota: Bom");
    }
    else if (nota <= 6 && nota >= 5){
        printf("Classificação de nota: Regular");
    }
    else if (nota <= 4 && nota >= 0){
        printf("Classificação de nota: Insuficiente");
    }
        else if (nota < 0 && nota > 10){
        printf("Nota invalida!");
    }
    
	return 0;
}