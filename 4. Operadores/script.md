// operadores aritméticos
var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 50;
var divisao = 100 / 50;
var expoente = 2 ** 2;
var modulo = 14 % 3; // retorna o resto da divisão

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);

// operadores aritméticos (com strings)

var soma = "100" + 50; // 10050 — concatenação.
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * 50; // 5000
var divisao = "100" / 50; // 2
var divisaoComCaractere = "Comprei 100" / 50; // NaN (Not a Number) — Possui caracteres.

console.log(soma, subtracao, multiplicacao, divisao, divisaoComCaractere);

// obs: a ordem importa nas operações, pois é como na matemática.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// operadores aritméticos unários

// Incremento — Adiciona uma unidade ao número

var incremento = 5;
console.log(incremento++); // retorna 6 (5 + 1) quando declarada novamente.
console.log(++incremento); // retorna 6 (5 + 1) de imediato.

// Decremento — Subtrai uma unidade ao número.

var decremento = 5;
console.log(decremento--); // retorna 4 (5 - 1) quando declarada novamente.
console.log(--decremento); // retorna 4 (5 - 1) de imediato.

// os operadores '+' e '-' podem transformar um valor em um número

var frase = 'Eu sou um desenvolvedor front-end'
+frase; // NaN
-frase; // NaN

var idade = '28'
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1 — valor booleano. 


var NaoPossuiFaculdade = false;
console.log(+NaoPossuiFaculdade); // 1 — valor booleano. 

// os operadores de comparação — retornam boolenao

10 > 5; // true
10 < 5; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false
