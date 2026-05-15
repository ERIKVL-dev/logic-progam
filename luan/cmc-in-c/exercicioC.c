#include <stdio.h>

int main()
{
    int num;
    int dobro = 2;
    int opcao;
    
    while(opcao != 3){
        printf("\n===Menu===\n");
        printf("1-Exibir seu dobro\n");
        printf("2-Exibir seu quadrado\n");
        printf("3-Sair\n");
        printf("Escolha uma opcao: \n");
        scanf("%d", &opcao);
        printf("Escolha um numero: \n");
        scanf("%d", &num);
        
        if(opcao <= 0 && opcao > 3 ){
            printf("opcao invalida!\n");
        }
        if(opcao = 1){
            int dobro2 = num * 2;
            printf("Resultado = %d", dobro2);
        }
        else if(opcao = 2){
            int quadrado2 = num*num;
            printf("Resultado: = %d", quadrado2);
        }
        else if(opcao = 3){
            printf("Encerrando Sistema....\n");
            break;
        }
    }

    return 0;
}