#include <stdio.h> 

int main() { 
    int mat[4][4]; 
    
    printf("Digite os elementos da matriz 3x3: \n"); 
    for(int i = 0; i < 4; i++) { 
        for(int j = 0; j < 4; j++) { 
            printf("Elemento [%d][%d]: ", i, j); 
            scanf("%d", &mat[i][j]); 
        } 
    } 
    
    printf("\nMATRIZ\n"); 
    for(int i = 0; i < 4; i++) { 
        for(int j = 0; j < 4; j++) { 
            printf("%d\t", mat[i][j]); 
        } 
        printf("\n"); 
    }
        printf("\nDIAGONAL PRINCIPAL: \n");
        for(int i = 0; i < 4; i++) { 
            printf("%d", mat[i][i]);
        }
        printf("\nDIAGONAL SEGUNDARIA: \n");
        for(int i = 0; i < 4; i++) { 
            printf("%d", mat[i][2-i]);
        }
    return 0; 
}