# Funções em JavaScript

## 1. O que são funções?

Funções são **blocos de código reutilizáveis** que podem ser chamados sempre que necessário. Elas são fundamentais para **organizar, abstrair e modularizar** a lógica em um programa.

```js
function saudacao() {
  console.log("Olá, Mundo!");
}
```

---

## 2. Chamando uma função

```js
saudacao(); // Olá, Mundo!
```

---

## 3. Funções com parâmetros

Funções podem receber parâmetros para tornar seu comportamento dinâmico:

```js
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

saudacao("João"); // Olá, João!
```

---

## 4. Funções com valor de retorno

```js
function soma(a, b) {
  return a + b;
}

const resultado = soma(5, 3);
console.log(resultado); // 8
```

> O `return` encerra a função e retorna o valor.

---

## 5. Funções anônimas (function expressions)

Funções podem ser atribuídas a variáveis:

```js
var multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(4, 5)); // 20
```

---

## 6. Arrow Functions (ES6)

Sintaxe moderna, concisa e comum em React e callbacks.

### Sem parâmetros:

```js
const ola = () => "Olá!";
console.log(ola()); // Olá!
```

### Com parâmetros:

```js
const somar = (a, b) => a + b;
console.log(somar(2, 3)); // 5
```

---

## 7. Parâmetros com valor padrão

```js
function saudacao(nome = "Visitante") {
  console.log("Olá, " + nome + "!");
}

saudacao(); // Olá, Visitante!
saudacao("Ana"); // Olá, Ana!
```

---

## 8. Funções como argumentos (higher-order functions)

Funções podem **receber** outras funções como parâmetros:

```js
function operar(a, b, operacao) {
  return operacao(a, b);
}

console.log(
  operar(10, 2, function (x, y) {
    return x / y;
  })
); // 5
```

---

## 9. Recursão

Uma função que **chama a si mesma**:

```js
function fatorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // 120
```

---

## 10. Funções auto-invocadas (IIFE)

São executadas imediatamente após serem definidas:

```js
(function () {
  console.log("Função auto-executada!");
})(); // Função auto-executada!
```

---

## 11. Escopo em Funções

### Escopo Global

```js
var nome = "Global";

function mostrarNome() {
  console.log(nome); // Global
}

mostrarNome();
```

### Escopo Local

```js
function saudacao() {
  var nome = "Local";
  console.log(nome);
}

saudacao(); // Local
// console.log(nome); // ReferenceError
```

### Escopo de Bloco (`let` e `const`)

```js
if (true) {
  let nome = "Bloco";
  console.log(nome); // Bloco
}

// console.log(nome); // ReferenceError
```

---

## 12. Closures (Funções que "lembram" escopos)

```js
function saudacaoPersonalizada(nome) {
  return function () {
    console.log("Olá, " + nome);
  };
}

const olaJonatas = saudacaoPersonalizada("Jônatas");
olaJonatas(); // Olá, Jônatas
```

---

## 13. Por que funções são importantes no React?

No React, **funções são a base dos componentes funcionais**, a estrutura mais usada atualmente:

```js
function Botao() {
  return <button>Clique aqui</button>;
}
```

Ou com arrow function:

```js
const Botao = () => <button>Clique aqui</button>;
```

As funções tornam possível:

- Modularizar interfaces (componentes)
- Reutilizar lógica com **hooks**
- Criar componentes puros e reativos

---

## 14. Boas práticas com funções

| Prática                  | Por quê?                                                |
| ------------------------ | ------------------------------------------------------- |
| Dê nomes descritivos     | Facilita leitura e manutenção                           |
| Mantenha funções curtas  | Menos responsabilidade → mais legível                   |
| Use parâmetros padrão    | Evita valores `undefined`                               |
| Evite efeitos colaterais | Deixe a função previsível                               |
| Prefira funções puras    | Retornam sempre o mesmo resultado dado os mesmos inputs |

---

## Exercício Prático

```js
function saudacao(nome = "Visitante") {
  return `Olá, ${nome}`;
}

console.log(saudacao()); // Olá, Visitante
console.log(saudacao("Lucas")); // Olá, Lucas

const dobro = (n) => n * 2;
console.log(dobro(4)); // 8

function executarOperacao(a, b, fn) {
  return fn(a, b);
}

console.log(executarOperacao(5, 3, (x, y) => x - y)); // 2

(function () {
  console.log("Executado imediatamente!");
})(); // Executado imediatamente!
```

---

## Resumo

| Conceito               | Exemplo                               |
| ---------------------- | ------------------------------------- |
| Declaração             | `function nome() {}`                  |
| Expressão              | `const nome = function() {}`          |
| Arrow Function         | `const nome = () => {}`               |
| Parâmetros padrão      | `function ola(nome = "Visitante") {}` |
| Função como argumento  | `outraFunc(fn)`                       |
| Retorno                | `return valor`                        |
| Escopo Local/Global    | Variáveis internas ou externas        |
| Função como componente | `function App() { return <div /> }`   |
