
#include <stdio.h>

#define PI 3.13159
#define MAX 100


int main() {

	float num1;
	float num2;

	int opcao;

	printf("Digite o numero 1:\n");
	scanf("%f", &num1);

	printf("Digite o numero 2:\n");
	scanf("%f", &num2);

	printf("1- somar\n");
	printf("2- subtração\n");
	printf("3- multiplição\n");
	printf("4- divisão\n");

	printf("Qual a operação desejada?:  \n");
	scanf("%d", &opcao);


	if (opcao = 1) {
	float resultado1 = num1+num2;

	printf("Resultado: = %.2f\n", resultado1);

	} else if (opcao = 2) {

    float resultado2 = num1-num2;

	printf("Resultado: = %2.f\n", resultado2);

	} else if (opcao = 3) {
	float resultado3 = num1*num2;

	printf("Resultado: = %2.f\n", resultado3);

	} else if (opcao = 4){ 
	    if (num1 >=0 && num2 >= 0){
	          float resultado4 = num1/num2;
            	printf("Resultado: %2.f\n", resultado4);
	           }
	    else{
	            printf("O numero 0 não poder ser dividido! ");
	        }
	 } else if(opcao <= 0) {
	printf("Operação inválida!");
	}

	return 0;
}