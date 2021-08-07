console.log("Atribuições de variáveis");
//const idade = 29;
const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

// coloca um espaço entre primeiroNome e sobrenome, devolve Ricardo Bugan
console.log(primeiroNome + " " + sobrenome);

// coloca um espaço entre primeiroNome e sobrenome, devolve Ricardo Bugan
console.log(primeiroNome, sobrenome);

// Solução elegante: coloca um espaço entre primeiroNome e sobrenome, devolve Ricardo Bugan
// isso ${variavel} é chamado de Interpolação
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

//esse contador nao tá fazendo nada ainda.
//mas é para mostrar que let é para declarar variável que variam.
let contador = 0;
contador = contador +1;

//aqui a gente criou uma outra variável que junta o primeiro nome com o sobrenome
//o ideal é usar const na maioria das coisas para deixar o código mais fácil. 
//é Boa Prática.
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

console.log(contador);
//nomeCompleto = 2;

//declara variável
let idade;

//atritribuindo valor
idade = 26; 
idade = idade+1;
console.log(idade);