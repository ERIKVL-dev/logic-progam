#include <stdio.h>

#define MAX 10

typedef struct{
    int dados[MAX];
    int topo;
} Pilha;

void inicializar(Pilha *p){
    p->topo = -1;
}

int estaVazia(Pilha *p){
    return p->topo == -1;
}

int estaCheia(Pilha *p){
    return p->topo == MAX - 1;
}

void push(Pilha *p, int valor){
    if(estaCheia(p)){
        printf("Pilha cheia!\n");
        return;
    }

    p->dados[++p->topo] = valor;
}

int pop(Pilha *p){
    if(estaVazia(p)){
        return -1;
    }

    return p->dados[p->topo--];
}

void mostrar(Pilha *p){
    int i;

    if(estaVazia(p)){
        printf("Pilha vazia.\n");
        return;
    }

    for(i = 0; i <= p->topo; i++){
        printf("%d ", p->dados[i]);
    }

    printf("\n");
}

int main(){
    
    Pilha Pnumeros;
    inicializar(&Pnumeros);
    
    int Numeros[10];
    for(int i = 0; i<10; i++){
        printf("Digite os Numeros: \n");
        scanf("%d", &Numeros[i]); 
        push(&Pnumeros, Numeros[i]); 
    }
    printf("Estado Original da Pilha: \n");
    mostrar(&Pnumeros); 
    
    while(!estaVazia(&Pnumeros )){
        int Removendo = pop(&Pnumeros);
        printf("Desempilhado: \n");
        printf("%d\n", Removendo); 
        mostrar(&Pnumeros);
    }
    
    return 0;
}