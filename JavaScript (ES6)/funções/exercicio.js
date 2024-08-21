// Declare uma função que exibe uma saudação
function saudacao() {
 console.log("Olá, Mundo!");
}
saudacao(); // Output: Olá, Mundo!

// Declare uma função que recebe um parâmetro e exibe uma saudação personalizada
function saudacaoPersonalizada(nome) {
 console.log("Olá, " + nome + "!");
}
saudacaoPersonalizada("Maria"); // Output: Olá, Maria!

// Declare uma função que recebe dois números e retorna a soma
function somar(a, b) {
 return a + b;
}
var resultadoSoma = somar(10, 5);
console.log(resultadoSoma); // Output: 15

// Declare uma função que retorna a idade de uma pessoa, dado o ano de nascimento
function calcularIdade(anoNascimento) {
 var anoAtual = new Date().getFullYear();
 return anoAtual - anoNascimento;
}
var idade = calcularIdade(2002);
console.log(idade); // Output: (Ano atual - 2002)

// Declare uma função que recebe um número e retorna se ele é par ou ímpar
function verificarParImpar(numero) {
 if (numero % 2 === 0) {
   return "Par";
 } else {
   return "Ímpar";
 }
}
var resultadoParImpar = verificarParImpar(7);
console.log(resultadoParImpar); // Output: Ímpar

// Declare uma função que recebe um array de números e retorna a soma de todos os elementos
function somarArray(numeros) {
 var soma = 0;
 for (var i = 0; i < numeros.length; i++) {
   soma += numeros[i];
 }
 return soma;
}
var numeros = [1, 2, 3, 4, 5];
var resultadoSomaArray = somarArray(numeros);
console.log(resultadoSomaArray); // Output: 15

// Declare uma função que retorna o maior valor entre três números
function maiorValor(a, b, c) {
 return Math.max(a, b, c);
}
var maior = maiorValor(3, 7, 5);
console.log(maior); // Output: 7

// Declare uma função que retorna uma saudação de acordo com o horário do dia
function saudacaoPorHorario(hora) {
 if (hora < 12) {
   return "Bom dia!";
 } else if (hora < 18) {
   return "Boa tarde!";
 } else {
   return "Boa noite!";
 }
}
var saudacaoAtual = saudacaoPorHorario(15);
console.log(saudacaoAtual); // Output: Boa tarde!

// Declare uma função auto-invocada que exibe uma mensagem
(function() {
 console.log("Função auto-invocada executada!");
})(); // Output: Função auto-invocada executada!
