// 1. Crie um array com 3 nomes e exiba o segundo
const nomes = ["Lucas", "Ana", "João"];
console.log(nomes[1]); // Ana

// 2. Adicione um nome ao final do array com push
nomes.push("Carlos");
console.log(nomes); // ['Lucas', 'Ana', 'João', 'Carlos']

// 3. Remova o primeiro item com shift
nomes.shift();
console.log(nomes); // ['Ana', 'João', 'Carlos']

// 4. Adicione um item no início com unshift
nomes.unshift("Beatriz");
console.log(nomes); // ['Beatriz', 'Ana', 'João', 'Carlos']

// 5. Exiba o tamanho do array
console.log(nomes.length); // 4

// 6. Crie um novo array com os nomes em letras maiúsculas (map)
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log(nomesMaiusculos); // ['BEATRIZ', 'ANA', 'JOÃO', 'CARLOS']

// 7. Filtre os nomes com mais de 4 letras
const nomesGrandes = nomes.filter((nome) => nome.length > 4);
console.log(nomesGrandes); // ['Beatriz', 'Carlos']

// 8. Verifique se "Ana" está presente (includes)
console.log(nomes.includes("Ana")); // true

// 9. Encontre o índice de "João"
console.log(nomes.indexOf("João")); // 2

// 10. Junte os nomes em uma string separada por vírgulas (join)
console.log(nomes.join(", ")); // Beatriz, Ana, João, Carlos

// 11. Crie um novo array com os quadrados dos números de 1 a 5
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map((n) => n ** 2);
console.log(quadrados); // [1, 4, 9, 16, 25]

// 12. Filtre os números pares
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // [2, 4]

// 13. Some todos os valores do array (reduce)
const total = numeros.reduce((acc, n) => acc + n, 0);
console.log(total); // 15

// 14. Use forEach para exibir os elementos e seus índices
numeros.forEach((n, i) => {
  console.log(`Índice ${i}: ${n}`);
});

// 15. Crie uma função que retorna o dobro de todos os elementos
function dobrarArray(arr) {
  return arr.map((n) => n * 2);
}
console.log(dobrarArray([2, 4, 6])); // [4, 8, 12]

// 16. Corte os dois primeiros elementos com slice
const primeiros = numeros.slice(0, 2);
console.log(primeiros); // [1, 2]

// 17. Remova 1 elemento do meio com splice
const frutas = ["Maçã", "Banana", "Uva"];
frutas.splice(1, 1); // remove 'Banana'
console.log(frutas); // ['Maçã', 'Uva']

// 18. Crie uma função que verifica se um array está vazio
function estaVazio(arr) {
  return arr.length === 0;
}
console.log(estaVazio([])); // true

// 19. Use spread para clonar e adicionar mais elementos
const original = [1, 2, 3];
const clonado = [...original, 4, 5];
console.log(clonado); // [1, 2, 3, 4, 5]

// 20. Crie um array de objetos e filtre os que têm idade maior que 18
const pessoas = [
  { nome: "Lucas", idade: 17 },
  { nome: "Julia", idade: 21 },
  { nome: "Carlos", idade: 19 },
];
const maiores = pessoas.filter((p) => p.idade > 18);
console.log(maiores);
// [{ nome: 'Julia', idade: 21 }, { nome: 'Carlos', idade: 19 }]
