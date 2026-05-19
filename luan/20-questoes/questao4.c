#include <stdio.h>
#define PI  3.14159

int main() {
	int opcao = 0;
	float altura;
	float raio;
	float base;


	while(opcao != 4 ) {
		printf("\n===MENU===\n");
		printf("\n1-Circulo\n");
		printf("\n2-Retangulo\n");
		printf("\n3-Triangulo\n");
		printf("\n4-Sair\n");
		printf("\nEscolha uma opção para fazer seu calculo: \n");
		scanf("%d", &opcao);

		if(opcao == 1) {
			printf("\nQual é o raio?\n");
			scanf("%f", &raio);

			printf("\nResultado: %.2f\n", PI*raio*raio);
		}
	    else if(opcao == 2) {
		    printf("\nQual é a altura?: \n");
            scanf("%f", altura);
            printf("\nQual é a base?: \n");
            scanf("%f", base);
            printf("\nResultado: %.2f\n", base * altura);
		}
		else if(opcao == 3) {
		    printf("\nQual é a altura?: \n");
            scanf("%f", altura);
            printf("\nQual é a base?: \n");
            scanf("%f", base);
            printf("\nResultado: %.2f\n", (base * altura)/2);
             
		}
	    else if(opcao == 4){
	        printf("Encerrando sistema....");
	        break;
	    }
	}

	return 0;
}