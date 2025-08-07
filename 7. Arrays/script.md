# Arrays em JavaScript

Arrays são estruturas que armazenam múltiplos valores em uma única variável. No JavaScript, eles são objetos com funcionalidades próprias e métodos utilitários poderosos.

---

## 1. Criando Arrays

```js
const frutas = ["Maçã", "Banana", "Uva"];
const numeros = [10, 20, 30];
const misto = ["Texto", 25, true];
```

---

## 2. Acessando e modificando elementos

```js
const cores = ["Vermelho", "Azul", "Verde"];

console.log(cores[0]); // Vermelho

cores[1] = "Amarelo"; // Modifica o valor na posição 1

console.log(cores); // ['Vermelho', 'Amarelo', 'Verde']
```

---

## 3. Principais Métodos de Arrays

### `push()` – adiciona no final

```js
const lista = ["item1"];
lista.push("item2");
console.log(lista); // ['item1', 'item2']
```

### `pop()` – remove do final

```js
lista.pop();
console.log(lista); // ['item1']
```

### `unshift()` – adiciona no início

```js
lista.unshift("novo");
console.log(lista); // ['novo', 'item1']
```

### `shift()` – remove do início

```js
lista.shift();
console.log(lista); // ['item1']
```

### `length` – retorna o tamanho

```js
console.log(lista.length); // 1
```

---

## 4. Métodos de Percurso

### `for` tradicional

```js
const nomes = ["Ana", "Lucas", "Carla"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
```

### `forEach()` – mais declarativo

```js
nomes.forEach(function (nome, index) {
  console.log(`${index}: ${nome}`);
});
```

---

## 5. Métodos de Transformação

### `map()` – cria um novo array transformado

```js
const numeros = [1, 2, 3];
const dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [2, 4, 6]
```

### `filter()` – retorna elementos que atendem uma condição

```js
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // [2]
```

### `find()` – retorna o primeiro elemento que satisfaz a condição

```js
const maiorQueDois = numeros.find((n) => n > 2);
console.log(maiorQueDois); // 3
```

### `reduce()` – reduz o array a um único valor

```js
const total = numeros.reduce((acc, val) => acc + val, 0);
console.log(total); // 6
```

---

## 6. Outras operações úteis

### `includes()` – verifica se um valor está presente

```js
console.log(numeros.includes(2)); // true
```

### `indexOf()` – retorna o índice de um valor

```js
console.log(numeros.indexOf(3)); // 2
```

### `join()` – une os elementos em uma string

```js
const palavras = ["Olá", "mundo"];
console.log(palavras.join(" ")); // 'Olá mundo'
```

### `slice()` – retorna uma parte do array

```js
const cortado = numeros.slice(0, 2);
console.log(cortado); // [1, 2]
```

### `splice()` – remove ou substitui itens (modifica o original)

```js
const frutas = ["Banana", "Maçã", "Pêra"];
frutas.splice(1, 1); // remove a partir do índice 1, 1 item
console.log(frutas); // ['Banana', 'Pêra']
```

---

## 7. Arrays de Objetos

```js
const produtos = [
  { nome: "Camiseta", preco: 30 },
  { nome: "Tênis", preco: 120 },
];

const baratos = produtos.filter((p) => p.preco < 100);
console.log(baratos); // [{ nome: "Camiseta", preco: 30 }]
```

---

## 8. Spread e Rest com Arrays

### Spread – expandir um array

```js
const original = [1, 2, 3];
const copia = [...original, 4];
console.log(copia); // [1, 2, 3, 4]
```

### Rest – empacotar argumentos

```js
function somar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}
console.log(somar(1, 2, 3)); // 6
```

---

## 9. Boas práticas

| Prática                              | Por quê?                               |
| ------------------------------------ | -------------------------------------- |
| Usar `const` sempre que possível     | Evita reatribuições acidentais         |
| Evitar mutar arrays originais        | Prefira `map`, `filter`, `slice`       |
| Usar `forEach` ou `map` para clareza | Mais legível do que loops tradicionais |
| Trabalhar com imutabilidade          | Ajuda a evitar bugs e facilita testes  |

---

## 10. Exercício básico

```js
const numeros = [5, 10, 15, 20];

// Crie um novo array com os valores dobrados
const dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [10, 20, 30, 40]
```

---

## Resumo Rápido

| Método       | Finalidade                                    |
| ------------ | --------------------------------------------- |
| `push()`     | Adiciona no final                             |
| `pop()`      | Remove do final                               |
| `shift()`    | Remove do início                              |
| `unshift()`  | Adiciona no início                            |
| `map()`      | Transforma cada item                          |
| `filter()`   | Retorna apenas os que satisfazem uma condição |
| `reduce()`   | Reduz o array a um único valor                |
| `forEach()`  | Itera sem retornar                            |
| `slice()`    | Retorna parte do array                        |
| `splice()`   | Altera o array original                       |
| `includes()` | Verifica presença                             |
| `join()`     | Concatena os itens em uma string              |
