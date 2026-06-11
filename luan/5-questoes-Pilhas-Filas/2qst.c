#include <stdio.h>
#include <string.h>

#define MAX 10

typedef struct {
    int dados[MAX];
    int topo;
} Pilha;

void inicializar(Pilha *p) {
    p->topo = -1;
}

int estaVazia(Pilha *p) {
    return p->topo == -1;
}

int estaCheia(Pilha *p) {
    return p->topo == MAX - 1;
}

void push(Pilha *p, int valor) {
    if (estaCheia(p)) {
        printf("Pilha cheia!\n");
        return;
    }
    p->dados[++p->topo] = valor;
}

int pop(Pilha *p) {
    if (estaVazia(p)) {
        return -1;
    }
    return p->dados[p->topo--];
}

int main() {
    Pilha p;
    inicializar(&p);
    
    char Plvr[MAX];
    int palindromo =