# Controle de Fluxo em JavaScript

No JavaScript, **estruturas de controle de fluxo** definem como o código é executado, permitindo decisões, repetições e interrupções com base em condições.

---

## 1. Condicional `if / else`

Executa um bloco de código se a condição for verdadeira.

```js
let idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

---

## 2. `else if` para múltiplas condições

```js
let nota = 7;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

---

## 3. `switch`

Alternativa para muitos `if/else if`. Ideal para comparação direta de valores.

```js
let cor = "verde";

switch (cor) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor desconhecida");
}
```

---

## 4. `for`

Usado para repetir um bloco de código um número determinado de vezes.

```js
for (let i = 1; i <= 5; i++) {
  console.log(`Repetição ${i}`);
}
```

---

## 5. `while`

Executa o bloco de código **enquanto** a condição for verdadeira.

```js
let contador = 0;

while (contador < 3) {
  console.log(`Contador: ${contador}`);
  contador++;
}
```

---

## 6. `do while`

Garante a execução **ao menos uma vez**, mesmo que a condição seja falsa.

```js
let senha = "";

do {
  senha = prompt("Digite sua senha:");
} while (!senha);
```

> Em ambientes sem navegador (como Node.js), `prompt` não está disponível.

---

## 7. `break`

Encerra um loop ou `switch` imediatamente.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Imprime de 1 a 4
```

---

## 8. `continue`

Interrompe a iteração atual e **pula para a próxima**.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Imprime 1, 2, 4, 5
```

---

## 9. Controle de Fluxo + Arrays (exemplo prático)

```js
const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 3) {
    console.log("Número encontrado!");
    break;
  }
  console.log("Procurando...");
}
```

---

## 10. Boas práticas

| Prática                             | Por quê?                                |
| ----------------------------------- | --------------------------------------- |
| Evite múltiplos `else if` aninhados | Use `switch` ou refatore com objetos    |
| Prefira `for of` para arrays        | Mais legível que `for` clássico         |
| Use `break` com moderação           | Pode dificultar legibilidade            |
| Clareza > esperteza                 | Código limpo é melhor que "inteligente" |

---

## Exercício básico

```js
function verificarNota(nota) {
  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

verificarNota(6);
verificarNota(8);
```

---

## Resumo rápido

| Estrutura   | Função principal                              |
| ----------- | --------------------------------------------- |
| `if / else` | Decisões simples                              |
| `else if`   | Decisões múltiplas                            |
| `switch`    | Várias condições com mesmo tipo de comparação |
| `for`       | Repetição com índice                          |
| `while`     | Repetição com verificação prévia              |
| `do while`  | Repetição com verificação posterior           |
| `break`     | Interrompe o fluxo imediatamente              |
| `continue`  | Pula para próxima iteração                    |
