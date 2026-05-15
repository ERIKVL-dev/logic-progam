#include <stdio.h>

int main() {

	float altura;
	float peso;

	printf("Qual é sua altura?: \n");
	scanf("%f", &altura);
	printf("Qual é seu peso?: \n");
	scanf("%f", &peso);

	float calculo = peso / (altura*altura);

	if(calculo < 18.5) {
		printf("Abaixo do peso, o resultado do calculo foi:: = %2.f ", calculo);
	}
	else if(calculo >=18.5 && calculo <=24.9) {
		printf("Seu peso estar normal, o resultado do calculo foi:: = %2.f ", calculo);
	}
	else if(calculo >= 25 && calculo <29.9) {
		printf("Voçê estar sobrepeso, o resultado do calculo foi: = %2.f ", calculo);
	}
	else if(calculo >= 30) {
		printf("Obesidade, o resultado do calculo foi: = %2.f ", calculo);
	}
	return 0;
}