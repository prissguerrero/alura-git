

console.log("Trabalhando com listas");

// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

// console.log("Destinos Possíveis");
// console.log(salvador, saoPaulo, rioDeJaneiro);



//fazendo lista com Array, que é melhor:
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

//colocando mais itens na lista via push:
listaDeDestinos.push("Curitiba", "Cuiabá");

//Apresentando na tela
console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

//Tirando itens na lista via splice:
listaDeDestinos.splice(1,1);

//Apresentando na tela
console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

//Exibindo  elemento de uma posição específica
console.log("Destinos Escolhidos");
console.log(listaDeDestinos[1], listaDeDestinos[0]);