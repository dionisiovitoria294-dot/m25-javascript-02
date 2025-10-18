/**
 * Exemplo de uso While
 */
let i=0
while (i<10){
    //lembrando que o pos-incremento (variavel)
    //ocorre como ultima coisa antes de ir para proxima linha
    //ou seja, imprime o texto com o valor de i e depois aumento 1
    console.log("valor de i=" i++);
}
console.log("Fim do While")
//usando while no final, com do..while
i=0;
do{
    console.log("valor de i="i++);
}while(i<10);
console.log("Fim do laço do..while");