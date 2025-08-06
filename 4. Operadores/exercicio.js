// 1. Some 50 + 50 e armazene o resultado
var resultado = 50 + 50;
console.log(resultado); // 100

// 2. Subtraia 100 de 250
var diferenca = 250 - 100;
console.log(diferenca); // 150

// 3. Multiplique 10 por 5
var produto = 10 * 5;
console.log(produto); // 50

// 4. Divida 100 por 4
var divisao = 100 / 4;
console.log(divisao); // 25

// 5. Descubra o resto da divisão de 13 por 4
var resto = 13 % 4;
console.log(resto); // 1

// 6. Teste uma expressão usando parênteses: (10 + 2) * 3
var expressao = (10 + 2) * 3;
console.log(expressao); // 36

// 7. Use incremento e mostre o resultado antes e depois
var contador = 1;
console.log(contador++); // 1
console.log(contador); // 2

// 8. Converta a string "200" em número e some com 50
var preco = "200";
var total = +preco + 50;
console.log(total); // 250

// 9. Verifique se 10 é igual a "10" (duas formas)
console.log(10 == "10"); // true (comparação não estrita)
console.log(10 === "10"); // false (comparação estrita)

// 10. Use o operador ternário para verificar se uma idade é maior de idade
var idade = 17;
var status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // Menor de idade
