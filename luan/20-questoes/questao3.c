#include <stdio.h> 

int main() { 
    
    float cel;

        
    printf("Digite a temperatura em graus celsius: ");
    scanf("%f", &cel);
    
    float far = cel * 1.8 + 32;
    float kel = cel  + 273.15;
    
    printf("\n RESULTADOS \n");
    printf("\nTemperatura em Celsius: %.2f\n", cel);
    printf("\nTemperatura em Farhrenheit: %.2f\n", far);
    printf("\nTemperatura em Kelvin: %.2f\n", kel);

    
    return 0; 
}