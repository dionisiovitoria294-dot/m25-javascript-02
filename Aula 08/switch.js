/**
 * Exemplos de uso do switch JS
 */
console.log ("Menu de opcões");
console.log ("1 - Cadastro");
console.log ("2 - Consulta");
console.log ("3 - Alteração");
console.log ("4 - Exclusão");
let op = 2;
let op = 6;
if (op==1){
    console.log("Escolheu Cadastro!");
}
    else if (op==2){
       console.log("Escolheu Consulta!");
    }
    else if (op==2){
       console.log("Escolheu Alteração!");
    }
    else if (op==2){
       console.log("Escolheu Exclusão");
    }
    else  {
       console.log("Escolheu a opção invalida");
    }
       

//Usando switch para a mesma situação
switch (op){
    case 1: console.log ("escolheu Cadastro");break;
    case 2: console.log ("escolheu Consulta");break;
    case 3: console.log ("escolheu Alteração");break;
    case 4: console.log ("escolheu Exclusão");break;
    default: console.log ("escolheu uma opção invalida");
}