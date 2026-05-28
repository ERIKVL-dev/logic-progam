#include <stdio.h>

int main(){
        
        // Criando struct cliente e suas informações
        
        typedef struct{
            char nome[50];
            int mesa; 
            float total;
            int pedido;
        } TotalClientes;
        
        // Limite de clientes a serem cadastrado
        
        TotalClientes fila[100];
        int QuantidadeClientes = 0;
        
        int opcao = 0;
        
        while( opcao != 3){
            printf("\n======MENU======\n");
            printf("1-Cadastrar um Cliente\n");
            printf("2-Mostrar Clientes\n");
            printf("3-Sair\n");
            printf("Escolha uma opção");
            scanf("%d", &opcao);
                // Entradas das informações dos clientes
                
            if (opcao == 1){
                
                printf("Nome do cliente: \n");
                scanf(" %[^\n]", fila[QuantidadeClientes].nome);
                printf("Numero da mesa: \n");
                scanf("%d", &fila[TotalClientes].mesa);
                printf("Valor total: \n");
                scanf("%f", &fila[TotalClientes].total);
                printf("Numero do pedido: \n");
                scanf("%d", &fila[TotalClientes].pedido);
                
                // Adicionando +1 Cliente conforme cliente cadastrado
                QuantidadeClientes++;
            } 
            
            if (opcao == 2) {
              if (QuantidadeClientes == 0) {
                 printf("Nenhum Cliente Encontrado\n");
                }
            else {
                printf("\n===Clientes Cadastrados===\n");
                for (int i = 0; i < QuantidadeClientes; i++) {
                    printf("\nCliente %d:\n", i + 1);
                    printf("Nome: %s\n", fila[i].nome);
                    printf("Mesa: %d\n", fila[i].mesa);
                    printf("Pedido: %d\n", fila[i].pedido);
                 printf("Total: R$ %.2f\n", fila[i].total);
                }
            }
            
            if(opcao == 3){
                printf("Encerrando Sistema....");
                break;
            }
        }
    return 0;
}
