let estoque = [ 6, 0, 8, 9, 8, 5, ]

for (let i = 0; i < estoque.length; i++) {

 if (estoque[i] <= 5 ){ 
    console.log ("ESTOQUE BAIXO NO ITEM: ",estoque[i])
 }
else if (estoque[i] <= 0 ){
    console.log("ESTOQUE ZERADO NO ITEM: ",estoque[i])
 }
else if (estoque[i] >= 5 ){
    console.log ("TODOS ESTOQUES TEM MAIS DE 5 ITENS!!", estoque[i])
 }
}