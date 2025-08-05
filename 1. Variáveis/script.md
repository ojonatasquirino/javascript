# Variáveis

## 1. Declaração de Variáveis

```js
var nome = "Ana"; // Forma antiga
let idade = 30; // Mais comum hoje
const cpf = "123.456"; // Valor fixo
```

- **var** → escopo de função, permite redeclaração e sofre hoisting.
- **let** → escopo de bloco, permite reatribuição.
- **const** → escopo de bloco, não permite reatribuição.

---

## 2. Tipos de Dados Válidos

Variáveis podem conter qualquer tipo primitivo ou objeto:

```js
let nome = "Lucas"; // string
let idade = 28; // number
let ativo = true; // boolean
let endereco = null; // null
let telefone; // undefined
let simbolo = Symbol(); // symbol
let user = { nome: "Aline" }; // objeto
let numeros = [1, 2, 3]; // array (objeto)
```

---

## 3. Reatribuição vs Redeclaração

```js
let a = 1;
a = 2; // ok

// let a = 3; // Erro: redeclaração não permitida com let

var x = 10;
var x = 20; // ok (comportamento antigo, perigoso)
```

---

## 4. Hoisting (Içamento)

`var` é içada, mas seu valor não.  
`let` e `const` também são içadas, mas entram em **TDZ (Temporal Dead Zone)** e não podem ser acessadas antes da linha de declaração.

```js
console.log(nome); // undefined (var)
var nome = "José";

// console.log(idade); // ReferenceError
let idade = 25;
```

---

## 5. Escopos: Global, Função, Bloco

### Escopo Global

```js
var cor = "azul";
let tema = "dark";
```

> Variáveis declaradas fora de qualquer bloco são globais.

### Escopo de Função

```js
function exemplo() {
  var interno = "visível só aqui";
  let internoLet = "também aqui";
}
```

### Escopo de Bloco

```js
if (true) {
  let teste = "ok";
  const fixo = "ok";
}

// console.log(teste); // ReferenceError
```

- `let` e `const` respeitam escopo de bloco (`{ }`)
- `var` ignora blocos e se comporta como escopo de função ou global

---

## 6. Constantes com Objetos e Arrays

```js
const pessoa = { nome: "Ana" };
pessoa.nome = "Bruna"; // permitido

const lista = [1, 2, 3];
lista.push(4); // permitido
```

> Reatribuir o objeto ou array inteiro **não é permitido**:

```js
// pessoa = {}; // Erro
```

---

## 7. Boas Práticas de Nomeação

- Use `camelCase`: `nomeUsuario`, `dataNascimento`
- Evite acentos, espaços ou caracteres especiais
- Não comece com números
- Use nomes descritivos e claros

---

## 8. DRY (Don’t Repeat Yourself)

```js
let preco = 100;
let qtd = 2;
let total = preco * qtd;
```

Evite repetir valores literais ou lógica desnecessária.

---

## 9. Declaração Múltipla (com `var`)

```js
var a = 1,
  b = 2,
  c = 3;
```

> Pouco usado com `let` e `const` por questões de legibilidade.  
> Prefira uma variável por linha.

---

## 10. Temporal Dead Zone (TDZ)

Com `let` e `const`, acessar antes de declarar causa erro:

```js
// console.log(nome); // ReferenceError
let nome = "Lucas";
```

---

## 11. Boas Práticas Gerais

| Recomendação                       | Motivo                            |
| ---------------------------------- | --------------------------------- |
| Use `const` sempre que possível    | Segurança e previsibilidade       |
| Use `let` apenas quando necessário | Evita mutações acidentais         |
| Evite `var`                        | Escopo confuso e propenso a erros |
| Declare no topo do bloco           | Melhor organização                |
| Nomeie variáveis de forma clara    | Facilita leitura e manutenção     |

---

## Resumo Final

| Característica | `var`                | `let`     | `const`   |
| -------------- | -------------------- | --------- | --------- |
| Escopo         | Função               | Bloco     | Bloco     |
| Hoisting       | Sim (como undefined) | Sim (TDZ) | Sim (TDZ) |
| Redeclaração   | Sim                  | Não       | Não       |
| Reatribuição   | Sim                  | Sim       | Não       |
