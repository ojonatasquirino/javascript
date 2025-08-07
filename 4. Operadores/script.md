# Operadores em JavaScript

## 1. O que são operadores?

**Operadores** permitem realizar operações sobre valores e variáveis.  
Eles são amplamente utilizados em expressões lógicas, matemáticas e de controle.

Em JavaScript, temos diversos tipos:

- Aritméticos
- De atribuição
- De comparação
- Lógicos
- Unários
- Outros (typeof, delete, ternário)

---

## 2. Operadores Aritméticos

Executam operações matemáticas básicas:

```js
var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 50;
var divisao = 100 / 50;
var expoente = 2 ** 2;
var modulo = 14 % 3; // resto da divisão

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);
```

---

## 3. Operações com Strings e Números

Se um dos valores for `string`, o comportamento pode mudar:

```js
var soma = "100" + 50; // "10050" (concatenação)
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * 2; // 200
var divisao = "100" / 2; // 50
var invalido = "Comprei 100" / 2; // NaN

console.log(soma, subtracao, multiplicacao, divisao, invalido);
```

---

## 4. Ordem das Operações

Segue a mesma ordem da matemática:

```js
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
```

> Parênteses são importantes para controlar a precedência.

---

## 5. Operadores Unários (Incremento/Decremento)

### Incremento

```js
var incremento = 5;
console.log(incremento++); // 5 (retorna, depois soma)
console.log(++incremento); // 7 (soma, depois retorna)
```

### Decremento

```js
var decremento = 5;
console.log(decremento--); // 5
console.log(--decremento); // 3
```

---

## 6. Conversão Unária com `+` e `-`

Você pode converter strings e booleanos em números:

```js
var idade = "28";
console.log(+idade); // 28
console.log(-idade); // -28

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

var frase = "Sou dev";
console.log(+frase); // NaN
```

---

## 7. Operadores de Comparação

Retornam valores booleanos (`true` ou `false`):

```js
10 > 5; // true
10 < 5; // false
10 >= 10; // true
10 <= 9; // false
10 == "10"; // true  (não estrito)
10 === "10"; // false (estrito: tipo + valor)
10 != "10"; // false
10 !== "10"; // true
```

> `===` é o mais recomendado para evitar conversões implícitas de tipo.

---

## 8. Operadores Lógicos

### AND (`&&`)

Retorna o **primeiro valor falso** ou o **último verdadeiro**.

```js
true && true; // true
true && false; // false
"Gato" && "Cão"; // "Cão"
0 && "Texto"; // 0
```

### OR (`||`)

Retorna o **primeiro valor verdadeiro**:

```js
true || false; // true
false || "Texto"; // "Texto"
"" || "Valor padrão"; // "Valor padrão"
```

---

## 9. Uso Prático com Booleanos

```js
var corSelecionada = "";
var corPadrao = corSelecionada || "preta";
console.log(corPadrao); // preta

var logado = true;
logado && console.log("Bem-vindo!");
```

---

## 10. Operador Ternário

Atalho para `if/else` em uma linha:

```js
var idade = 18;
var podeEntrar = idade >= 18 ? "Entrada permitida" : "Proibido";
console.log(podeEntrar); // Entrada permitida
```

---

## 11. typeof e isNaN

### `typeof` mostra o tipo da variável:

```js
console.log(typeof "texto"); // string
console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object
```

### `isNaN()` verifica se um valor **não é um número**:

```js
isNaN("100"); // false
isNaN("Comprei"); // true
```

---

## Exercício Prático

```js
var preco = "100";
var imposto = 20;

var total = +preco + imposto; // 120
console.log(total); // 120

var expressao = ((10 + 5) * 2) / 5 + 1; // 7
console.log(expressao); // 7

var idade = "28";
console.log(+idade + 2); // 30

console.log(10 == "10"); // true
console.log(10 === "10"); // false

console.log("Gato" && "Cão"); // "Cão"
console.log(5 - 5 && 5 + 5); // 0
console.log("Gato" || "Cão"); // "Gato"
```

---

## Resumo

| Categoria           | Operadores                   |
| ------------------- | ---------------------------- | --- | --- |
| Aritméticos         | `+ - * / % **`               |
| Comparação          | `== != === !== > >= < <=`    |
| Lógicos             | `&&                          |     | !`  |
| Unários             | `++ -- +valor -valor typeof` |
| Conversão implícita | `"100" - 10 → 90`            |
| Ternário            | `condição ? valor1 : valor2` |
