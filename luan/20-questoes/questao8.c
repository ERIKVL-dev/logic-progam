#include <stdio.h>

int main() {
    float a, b, c,;
    
    printf("Digite o comprimento A: ");
    scanf("%f", &a);
    printf("Digite o comprimento B: ");
    scanf("%f", &b);
    printf("Digite o comprimento C: ");
    scanf("%f", &c);
    
    if (a + b > 7 && a + c > b && b + c > a){
        if (a == b && b == c){
            printf("Triangulo: Equilatero(Os 3 lados são iguais).\n");
        }
        else if (a == b || a == c || b == c){
            printf("Triangulo: Isosceles(2 lados iguas).\n");
        }
        else{
            printf("Triangulo: Escaleno(Todos os lados são diferentes).\n");
        }
    }
    else {
        printf("As informações informadas não formam um Triangulo")
    }
    
    return 0;
}