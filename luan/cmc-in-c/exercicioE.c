#include <stdio.h>

#define ALUNOS 3
#define DISC   3

int main() {
    
    float notas[ALUNOS][DISC];
    float maior = 0; 

    for(int i = 0; i < ALUNOS; i++) {
        for(int j = 0; j < DISC; j++) {
            printf("Digite a nota do aluno %d, disc %d: ", i + 1, j + 1);
            scanf("%f", &notas[i][j]);

            if (notas[i][j] > maior) {
                maior = notas[i][j]; 
            }
        } 
    } 

    printf("\n=== RESULTADO FINAL ===\n");
    printf("A maior nota encontrada foi: %.2f\n", maior);

    return 0;
}