/**
 * Usos do laço for
 */
//1a parte => inicialização de variaveis
//2a parte => condiçao de permanencia 
//3a parte =>atribuição / incremento de valor
for (let i=0;i<10;i++){
console.log("Valor de i=" + i);
}
console.log("Fim do For");
//nesse caso a baixo da erro de inexistencia da variavel i
//porque pertence somente ao bloco do for a variavel i por
//conta do let i dentro do for 
console.log("Fim do For" + i);