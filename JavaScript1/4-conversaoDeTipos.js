console.log("Conversão de Tipos");

console.log("ano" + 2020);

//o JS não soma strings, ele concatena
console.log("2" + "2");

//precisa transformar a string para inteiro usando o parseInt
console.log(parseInt("2") + parseInt("2"));


//mas quando é divisão ou multiplicação não precisa
//isso acontece pq o sinal de + pode ser usado para somar e para concatenar

console.log("7" / "2");

//já se tentarmos dividir uma string por um número,
//ele retornara NaN, Not a Number
console.log("Ricardo" / 2);

//aqui é um número float, ele devolve 6.5
console.log(6.5);

//aqui ele só coloca um espaço entre 6 e 5, ele devolve 6 5
// vírgula serve para inserir um espaço
console.log(6,5);