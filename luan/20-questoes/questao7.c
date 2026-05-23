#include <stdio.h>

int main() {
    float num[3];
    float temp;

    for (int i = 0; i < 3; i++) {
        printf("Digite o %dº numero: \n", i + 1);
        scanf("%f", &num[i]);
    }

    for (int i = 0; i < 2; i++) {
        for (int j = i + 1; j < 3; j++) {
            if (num[i] < num[j]) { 
                temp = num[i];
                num[i] = num[j];
                num[j] = temp;
            }
        }
    }

    printf("\n====RESULTADO====\n");
    printf("Maior numero: %.2f\n", num[0]);
    printf("Intermediario: %.2f\n", num[1]);
    printf("Menor numero: %.2f\n", num[2]);

    return 0;
}
