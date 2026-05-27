#include <stdio.h>

int main() {
    float a, b, c,;

    // Entradas Para Saber os comprimentos

    printf("Digite o comprimento A: ");
    scanf("%f", &a);
    printf("Digite o comprimento B: ");
    scanf("%f", &b);
    printf("Digite o comprimento C: ");
    scanf("%f", &c);
    
    // Calculo Para saber se forma algum tipo de triangulo

    if (a + b > 7 && a + c > b && b + c > a){

        // Calculando para saber qual é o tipo de triangulo

        if (a == b && b == c){
            printf("Triangulo: Equilatero(Os 3 lados são iguais).\n");
        }
        else if (a == b && a == c && b == c){
            printf("Isosceles(2 lados iguas).\n");
        }
        else{
            printf("Escaleno(Todos os lados são diferentes).\n");
        }
    }
    
    // Caso não formar um triangulo

    else {
        printf("Os comprimentos informados não formam um Triangulo!")
    }
    
    return 0;
}