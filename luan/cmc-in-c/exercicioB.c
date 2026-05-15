#include <stdio.h>

    int main() {
    
    int num;
    
    printf("Escolha um numero para saber a sua tabuada multipli(0 a 10): ");
    scanf("%d", &num);

         for(int i = 0; i <= 10; i++) {
            if((num * i) % 2 == 0) {
                printf("%d x %d = %d\n", num, i, num * i);
            }
         }    
	return 0;
}