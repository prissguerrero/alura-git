console.log("Trabalhando com Condicionais \n\n");

//fazendo lista com Array, que é melhor:
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

//Uma pessoa de 15 anos não pode comprar passagens
const idadeComprador = 18;
const estaAcompanhada = false; //variável booleana
let temPassagemComprada = false;
const destino = "Salvador"; //para verificar qual o destino que a pessoa vai


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {

        //console.log("Destino Existe");
        destinoExiste = true;
        break;
    }
    //+= significa que soma 1 e reatribui ao contador 
    //o valor: 0+1 = contador vai ser 1
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem")

} else {
    console.log("Desculpe, tivemos um erro.");
}

for (let cont = 0; cont < 3; cont++) {

    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }


}