# Booleanos em JavaScript

## 1. O que são Booleanos?

O tipo **boolean** representa um valor **lógico**: `true` ou `false`.

```js
var possuiFaculdade = true;
var possuiDoutorado = false;
console.log(typeof possuiFaculdade); // boolean
```

Booleanos são frequentemente usados para **controle de fluxo**, **validações** e **condicionais**.

---

## 2. Condicionais com if / else

```js
var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
```

> Se o valor da condição for `true`, o bloco `if` é executado.  
> Caso contrário, o `else` será executado.

---

## 3. Estrutura com else if

```js
var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
```

> O `else if` é verificado **somente se a condição anterior for falsa**.

---

## 4. Truthy e Falsy

Valores que **se comportam como true ou false** ao serem avaliados em uma condição:

### Falsy → Avaliam como falso

```js
false;
0 - 0;
NaN;
null;
undefined;
("");
```

### Truthy → Avaliam como verdadeiro

```js
true
' '      // string com espaço
'texto'  // string qualquer
1, -1    // números diferentes de zero
[]
{}       // arrays e objetos vazios
```

### Exemplos:

```js
if ("") console.log("falsy"); // não executa
if (" ") console.log("truthy"); // executa
if (0) console.log("falsy"); // não executa
if (1) console.log("truthy"); // executa
```

---

## 5. Operadores de Comparação

| Operador | Descrição               | Exemplo       | Resultado |
| -------- | ----------------------- | ------------- | --------- |
| `==`     | Igual (não estrito)     | `10 == "10"`  | true      |
| `===`    | Igual (estrito - tipo)  | `10 === "10"` | false     |
| `!=`     | Diferente (não estrito) | `"10" != 10`  | false     |
| `!==`    | Diferente (estrito)     | `"10" !== 10` | true      |
| `>`      | Maior que               | `10 > 5`      | true      |
| `<`      | Menor que               | `10 < 5`      | false     |
| `>=`     | Maior ou igual          | `10 >= 10`    | true      |
| `<=`     | Menor ou igual          | `10 <= 9`     | false     |

---

## 6. Operadores Lógicos: AND (`&&`)

Retorna o **primeiro valor falso** ou o **último verdadeiro**:

```js
true && true; // true
true && false; // false
"Gato" && "Cão"; // "Cão"
0 && "Texto"; // 0
```

> Se o primeiro valor for falsy, ele será retornado.  
> Caso contrário, retorna o segundo.

---

## 7. Operadores Lógicos: OR (`||`)

Retorna o **primeiro valor truthy**:

```js
true || false; // true
false || true; // true
"Gato" || "Cão"; // "Gato"
0 || 42; // 42
false || "JS"; // "JS"
```

---

## 8. Uso Comum no Dia a Dia

```js
// Verificação com fallback
var corPreferida = "";
var corPadrao = corPreferida || "azul";
console.log(corPadrao); // azul

// Verificação condicional
var estaLogado = true;
estaLogado && console.log("Usuário autenticado");
```

---

## Exercício Prático

```js
var possuiFaculdade = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiFaculdade) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}

console.log(10 > 5); // true
console.log(10 === "10"); // false
console.log("Gato" && "Cão"); // "Cão"
console.log("" || "JS"); // "JS"
```

---

## Resumo

- `boolean` representa `true` ou `false`
- Usado em condicionais e validações
- JS trata muitos valores como truthy/falsy
- `&&` e `||` retornam valores úteis além de `true/false`
- Operadores `==` e `===` têm diferenças importantes
