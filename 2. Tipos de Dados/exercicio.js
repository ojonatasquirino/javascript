// 1. Declare uma variável contendo uma string com o nome de uma cidade
var cidade = "Salvador";
console.log(typeof cidade); // string

// 2. Declare uma variável contendo um número dentro de uma string
var ano = "2023";
console.log(typeof ano); // string

// 3. Declare uma variável com sua idade (como number)
var idade = 22;
console.log(typeof idade); // number

// 4. Declare duas variáveis com seu nome e sobrenome e concatene-as
var nome = "Jônatas ";
var sobrenome = "Quirino";
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto); // Jônatas Quirino

// 5. Faça o mesmo que o anterior utilizando template string
var nomeCompleto2 = `${nome}${sobrenome}`;
console.log(nomeCompleto2); // Jônatas Quirino

// 6. Armazene a frase: It's time
var frase = "It's time";
console.log(frase); // It's time

// 7. Verifique o tipo da variável que contém o seu nome
console.log(typeof nome); // string

// 8. Verifique o tipo da variável idade e se é igual a "number"
if (typeof idade === "number") {
  console.log("A variável idade é um número");
}

// 9. Declare uma variável booleana dizendo se você é maior de idade
var maiorDeIdade = idade >= 18;
console.log(maiorDeIdade); // true

// 10. Crie uma variável com valor null e outra undefined. Compare seus tipos.
var nulo = null;
var indefinido;
console.log(typeof nulo); // object (comportamento histórico do JS)
console.log(typeof indefinido); // undefined
