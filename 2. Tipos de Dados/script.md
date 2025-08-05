# Tipos de Dados em JavaScript

## 1. Introdução

Em JavaScript, os tipos de dados definem **a natureza do valor** que uma variável armazena. Eles podem ser **primitivos** ou **estruturados** (objetos).

JS é uma linguagem **dinamicamente tipada**, ou seja, uma variável pode mudar de tipo em tempo de execução.

---

## 2. Tipos Primitivos

São imutáveis e representam dados simples:

- **String**
- **Number**
- **Boolean**
- **Undefined**
- **Null**
- **Symbol** (ES6)
- **BigInt** (ES2020)

---

## 3. String

Representa texto. Pode ser delimitada por aspas simples `' '`, duplas `" "`, ou crase <code>\` \`</code> (template string).

```js
var nome = "Jônatas";
var sobrenome = "Quirino";

// Concatenação
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto); // Jônatas Quirino
console.log(typeof nomeCompleto); // string
```

---

## 4. Number

Números inteiros, decimais ou operações matemáticas.

```js
var idade = 30;
var preco = 19.9;
var total = preco * 2;

console.log(total); // 39.8
console.log(typeof total); // number
```

---

## 5. Boolean

Representa valores lógicos: `true` ou `false`.

```js
var possuiCarteira = true;
var temMultas = false;

console.log(typeof possuiCarteira); // boolean
```

---

## 6. Undefined

Uma variável declarada mas **não inicializada** é `undefined`.

```js
var corFavorita;
console.log(corFavorita); // undefined
console.log(typeof corFavorita); // undefined
```

---

## 7. Null

Representa **ausência de valor intencional**. É um tipo primitivo, mas o `typeof` retorna `object` (bug histórico do JS).

```js
var usuario = null;
console.log(usuario); // null
console.log(typeof usuario); // object
```

---

## 8. Symbol

Identificador único e imutável. Usado raramente em códigos comuns, mas útil para criar propriedades privadas em objetos.

```js
const simbolo = Symbol("descricao");
console.log(typeof simbolo); // symbol
```

---

## 9. BigInt

Representa inteiros muito grandes além do limite do tipo `Number`.

```js
const numeroGigante = 1234567890123456789012345678901234567890n;
console.log(typeof numeroGigante); // bigint
```

---

## 10. Tipo Dinâmico

Uma variável pode **mudar de tipo**:

```js
let valor = "123"; // string
valor = 123; // number
```

---

## 11. Template String

Permite interpolar variáveis com `${}` dentro de uma string com crase.

```js
var gols = 1000;
var frase = `CR7 fez ${gols} gols`;

console.log(frase); // CR7 fez 1000 gols
console.log(typeof frase); // string
```

---

## 12. Tipo de Dados vs typeof

`typeof` retorna o tipo de dado de uma variável:

```js
typeof "texto"; // 'string'
typeof 10; // 'number'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof null; // 'object' ❗ (comportamento antigo do JS)
typeof Symbol(); // 'symbol'
typeof 123n; // 'bigint'
```

---

## Boas Práticas

- Use `const` sempre que o valor não for reatribuído
- Use `template strings` para concatenar texto + variáveis
- Evite comparar tipos diferentes (`==`), prefira `===`
