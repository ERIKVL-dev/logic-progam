#include <stdio.h> 

int main() { 
    int mat[3][3]; 
    
    printf("Digite os elementos da matriz 3x3: \n"); 
    for(int i = 0; i < 3; i++) { 
        for(int j = 0; j < 3; j++) { 
            printf("Elemento [%d][%d]: ", i, j); 
            scanf("%d", &mat[i][j]); 
        } 
    } 
    
    printf("\nMATRIZ\n"); 
    for(int i = 0; i < 3; i++) { 
        for(int j = 0; j < 3; j++) { 
            printf("%d\t", mat[i][j]); 
        } 
        printf("\n"); 
    } 
    
    return 0; 
}