// 1) IF & ELSE (SE & SENÃO)

let nomeFilme = "Vingadores";

if(nomeFilme === "Vingadores"){
    console.log("É o filme dos Vingadores");
}
else{
    console.log("É outro filme");
}

// Exemplo com variavel totalmente minuscula para perceber sensibilidade do JS!

let nome_filme = "vingadores";

if(nome_filme === "Vingadores"){
    console.log("É o filme dos Vingadores");
}
else{
    console.log("É outro filme");
}

// 2) ELSE IF (SENÃO SE) ---  CRIA DIVERSAS POSSIBILIDADES - MAIS ESPECÍFICO - FLUXOS DIFERENTES

let filme = "Batman vs Superman";

if (filme === "Vingadores"){
    console,log("É o filme dos Vingadores!");
}
else if (filme === "Batman vs Superman"){
    console.log("É o filme do Batman vs Superman");
}
else if (filme === "Capitão América"){
    console.log("É o filme do Capitão América");
}
else{
    console.log("É outro filme");
}

// 3) OPERADOR TERNÁRIO - VERSÃO CLEAN CODE - condição ? console.log("true") : console.log("false")

// FORMA DE ESCREVER IF & ELSE EM UMA ÚNICA LINHA! - USAR EM TRECHOS DE CÓDIGO NÃO MUITO COMPEXOS!

true ? console.log("Condição verdadeira!") : console.log("Condição falsa!");

nomeFilme === "Vingadores" ? console.log("É o filme dos Vingadores") : console.log("É outro filme!");

// 4) CONDICIONAIS SWITCH - MAIS ADEQUADO PARA MUITOS CASOS!

// switch(parametro){
//   case valor1:
//     <bloco de declaracao>
//     break
//   case valor2:
//     <bloco de declaracao>
//     break
//   default:
//     <bloco de declaracao>
//     break
// }

let nome_do_filme = "Senhor dos Anéis"

switch(nome_do_filme){
    case "Vingadores":
        console.log("É o filme dos Vingadores!");
        break;
    case "Batman vs Superman":
        console.log("É o filme do Batman vs Superman");
        break;
    case "Senhor dos Anéis":
        console.log("É o filme do Senhor dos Anéis");
        break;
    default:
        console.log("É outro filme!");
        break;
}

// MULTICASO DO SWITCH

let avaliacao = 1;

switch(avaliacao){
    case 1:
    case 2:
        console.log("Filme ruim!");
        break;
    case 3:
    case 4:
        console.log("Filme mediano!");
        break;
    case 5:
        console.log("Filme excelente!");
        break;
    default:
        console.log("Nota inválida!");
        break;
}