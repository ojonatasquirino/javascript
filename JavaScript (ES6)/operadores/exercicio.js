// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total); // total = 35

// Crie duas expressões que retornam NaN
var nome = "vic";
var idade = 23;
var soma =  nome + idade
var divisao = nome / idade;
console.log(soma); // NaN
console.log(divisao); // NaN

// Some a String '200' com o número 50 e retorne 250
var soma = +"200" + 50;
console.log(soma); // soma = 250, pois o '+' na frente da string '200' faz a conversão para número. 

// Incremente o número 5 e retorne o seu valor incrementado
var totalNum = 5;
console.log(++totalNum); // 6

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg ";
var peso  = numero + unidade; // NaN (Not a Number)
console.log(peso); // 40