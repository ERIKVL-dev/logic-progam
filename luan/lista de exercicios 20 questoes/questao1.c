#include <stdio.h> 
int main() {
     int idade;
    char cidade[50];
    char nome[50];

    printf("Qual o seu nome?: \n"); 
    scanf("%s", &nome); 
    printf("Qual é sua idade?: \n"); 
    scanf("%d", &idade); 
    printf("Qual é a sua cidade?: \n"); 
    scanf("%s", &cidade); 
    
    printf("Ola meu nome é %s tenho %d anos e moro em %s", nome,idade,cidade);
    
   return 0; 
}