console.log("Trabalhando com Condicionais");

//fazendo lista com Array, que é melhor:
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

//colocando mais itens na lista via push:
listaDeDestinos.push("Curitiba", "Cuiabá");

//Uma pessoa de 15 anos não pode comprar passagens
const idadeComprador = 18;
const estaAcompanhada = true; //variável booleana
const temPassagemComprada = true;

//Apresentando na tela
console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

// //teste lógico para permitir a compra de passagem 
// //se cliente for maior igual a 18 anos
// if (idadeComprador >= 18) {
//     console.log("comprador maior de idade");
// //Tirando itens na lista via splice:
//     listaDeDestinos.splice(1, 1);
// //nao é necessário aqui colocar  == true pq ele já entende que é.
// } else if (estaAcompanhada == true) { 
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);//Tirando itens na lista via splice:
// } else {
//     console.log("comprador menor de idade, não posso vender");
// }
// }


// usando operador lógico || para melhorar o código

//se cliente for maior igual a 18 anos
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem");

    //Tirando itens na lista via splice:
    listaDeDestinos.splice(1, 1);

} else {

    console.log("comprador menor de idade, não posso vender");
}

//verificando se é maior de idade E se tem passagem comprada.
console.log("Embarque \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem");
} else {
    console.log("você nao pode embarcar");
}









//Apresentando na tela
console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

//Exibindo  elemento de uma posição específica
console.log("Lista reduzida após a compra");
console.log(listaDeDestinos[1], listaDeDestinos[0]);