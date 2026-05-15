#include <stdio.h>

#define ALUNOS 3
#define DISC   3

int main() {
    
    float notas[ALUNOS][DISC];
    float maior = 0; 

    // leitura de dados

    for(int i = 0; i < ALUNOS; i++) {
        printf("Digite a nota do aluno %d ", i + 1);
        
        for(int j = 0; j < DISC; j++) {
            scanf("%f", &notas[i][j]);

            if (notas[i][j] > maior) {
                maior = notas[i][j]; 
            }
        } 
    } 
    
    // exibir matriz
    
    for (int i = 0; i<notas;i++){
        for (int i = 0; i<notas;i++){
        printf("%f", notas[i][j]);
        }  
        printf("\n");
    }
    
    // mostrar medias
    
    for (int i = 0; i<notas;i++){
        somarmedia = 0;
            mediaaluno = 0;
        for (int i = 0; i<notas;i++){
            somarmedia - somarmedia +notas[i][j];
        }  
        mediaaluno = somarmedia / notas;
    }
    

    printf("\n=== RESULTADO FINAL ===\n");
    printf("A maior nota encontrada foi: %.2f\n", maior);

    return 0;
}
