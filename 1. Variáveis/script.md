# Variáveis

## 1. Declaração de Variáveis

```js
var nome = "Ana"; // Forma antiga
let idade = 30; // Mais comum hoje
const cpf = "123.456"; // Valor fixo´
```

**var** → escopo de função, permite redeclaração e sofre hoisting.

**let** → escopo de bloco, permite reatribuição.

**const** → escopo de bloco, não permite reatribuição.

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

## 3. Reatribuição vs Redeclaração

```
let a = 1;
a = 2; // ok

// let a = 3; // erro: redeclaração não permitida com let

var x = 10;
var x = 20; // ok (comportamento antigo, perigoso)
```

## 4. Hoisting (Içamento)

var é içada, mas seu valor não. **let** e **const** não são acessíveis antes da linha de declaração.

```
console.log(nome); // undefined (var)
var nome = "José";

// console.log(idade); // ReferenceError
let idade = 25;
```

## 5. Escopos: Global, Função, Bloco

### Escopo Global

```
var cor = "azul";
let tema = "dark";
Variáveis declaradas fora de qualquer bloco são globais.
```

### Escopo de Função

```
function exemplo() {
var interno = "visível só aqui";
let internoLet = "também aqui";
}
```

### Escopo de Bloco

```
if (true) {
let teste = "ok";
const fixo = "ok";
}
// console.log(teste); // erro
let e const respeitam blocos (if, for, { })
```

var ignora blocos, funciona como global/função apenas.

## 6. Constantes com Objetos e Arrays

```
const pessoa = { nome: "Ana" };
pessoa.nome = "Bruna"; // permitido

const lista = [1, 2, 3];
lista.push(4); // permitido
Mas reatribuir o objeto inteiro não é permitido:
```

// pessoa = {}; // erro

## 7. Boas Práticas de Nomeação

camelCase → nomeUsuario, dataNascimento

```
Sem acentos, espaços ou caracteres especiais

Não começar com números

Use nomes claros e descritivos
```

## 8. DRY (Don’t Repeat Yourself)

```
 let preco = 100;
 let qtd = 2;
 let total = preco \* qtd;
```

Evite repetir valores literais ou declarações desnecessárias.

## 9. Declaração Múltipla (var apenas)

```
var a = 1, b = 2, c = 3;
```

Pouco usado com let e const por legibilidade. Prefira uma variável por linha.

## 10. Temporais Dead Zone (TDZ)

    Com let e const, acessar antes de declarar causa erro:

```
// console.log(nome); // erro
let nome = "Lucas"; 11. Boas Práticas Gerais
Recomendação Motivo
Use const sempre que possível Segurança e previsibilidade
Use let apenas se precisa reatribuir Evita mutações acidentais
Evite var Tem escopo confuso e causa bugs silenciosos
Declare variáveis no topo do bloco Clareza
Nomeie de forma clara e específica Melhor manutenção

🧩 Resumo Final
Característica var let const
Escopo Função Bloco Bloco
Hoisting Sim (undefined) Sim (TDZ) Sim (TDZ)
Redeclaração Sim Não Não
Reatribuição Sim Sim Não
```
