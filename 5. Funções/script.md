// Função simples sem parâmetros e sem valor de retorno
function saudacao() {
 console.log("Olá, Mundo!");
}

// Chamada da função
saudacao(); // Output: Olá, Mundo!

// Função com parâmetros
function saudacao(nome) {
 console.log("Olá, " + nome + "!");
}

// Chamada da função com argumento
saudacao("João"); // Output: Olá, João!

// Função que retorna um valor
function soma(a, b) {
 return a + b;
}

// Chamada da função e armazenando o resultado em uma variável
var resultado = soma(5, 3);
console.log(resultado); // Output: 8


// Função anônima atribuída a uma variável
var multiplicar = function(a, b) {
 return a * b;
};

// Chamada da função anônima
console.log(multiplicar(4, 5)); // Output: 20

// Função que recebe uma função como argumento
function operar(a, b, operacao) {
 return operacao(a, b);
}

// Passando uma função anônima como argumento
console.log(operar(10, 2, function(x, y) { return x / y; })); // Output: 5

// Função de seta sem parâmetros
const saudacao = () => "Olá, Mundo!";

// Chamada da função
console.log(saudacao()); // Output: Olá, Mundo!

// Função de seta com parâmetros
const somar = (a, b) => a + b;

// Chamada da função de seta
console.log(somar(10, 5)); // Output: 15

// Função com parâmetros padrão
function saudacao(nome = "Visitante") {
 console.log("Olá, " + nome + "!");
}

// Chamada da função sem argumento
saudacao(); // Output: Olá, Visitante!

// Chamada da função com argumento
saudacao("Ana"); // Output: Olá, Ana!


// Função recursiva para calcular o fatorial de um número
function fatorial(n) {
 if (n === 0 || n === 1) {
   return 1;
 }
 return n * fatorial(n - 1);
}

// Chamada da função recursiva
console.log(fatorial(5)); // Output: 120


// Função auto-invocada
(function() {
 console.log("Esta função é executada imediatamente!");
})();







