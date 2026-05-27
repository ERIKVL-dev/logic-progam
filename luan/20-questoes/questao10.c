#include <stdio.h> 

int main() { 
    // Entrada de dados
    int num; 
    printf("\nDigite um numero para saber o seu fatorial (Apenas Numeros Inteiros): \n"); 
    scanf("%d", &num); 

    // Mensagem de ERRO para caso o usuario digite numeros menores ou iguais a zero
    if (num <= 0) { 
        printf("Numero invalido! Digite somente numeros maiores que 0.\n"); 
    } else {
        // Processamento para calcular fatorial
        int fatorial = 1; 
        for(int i = 1; i <= num; i++) { 
            fatorial *= i; 
        } 
        
        // Exibição do resultado
        printf("O fatorial de %d e: %d\n", num, fatorial); 
    }

    return 0; 
}
