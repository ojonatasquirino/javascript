// 1. Verifique se um número é positivo, negativo ou zero
function verificaNumero(n) {
  if (n > 0) {
    console.log("Positivo");
  } else if (n < 0) {
    console.log("Negativo");
  } else {
    console.log("Zero");
  }
}
verificaNumero(-5);

// 2. Retorne a maior entre duas idades
function maiorIdade(a, b) {
  if (a > b) return a;
  return b;
}
console.log(maiorIdade(22, 30)); // 30

// 3. Exiba uma mensagem de acordo com o dia da semana (use switch)
function mensagemDia(dia) {
  switch (dia) {
    case "segunda":
      console.log("Início da semana");
      break;
    case "sexta":
      console.log("Último dia útil");
      break;
    case "sábado":
    case "domingo":
      console.log("Fim de semana");
      break;
    default:
      console.log("Dia comum");
  }
}
mensagemDia("sábado");

// 4. Conte de 1 até 5 com um for
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5. Some os números pares de 1 a 10
let soma = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) soma += i;
}
console.log("Soma dos pares:", soma);

// 6. Crie um while que exiba os números de 0 a 3
let contador = 0;
while (contador <= 3) {
  console.log(contador);
  contador++;
}

// 7. Crie um do while que execute pelo menos uma vez
let senha = "";
let tentativas = 0;
do {
  console.log("Tentativa:", ++tentativas);
  senha = "123"; // simulação
} while (senha !== "123");

// 8. Use break para parar um loop ao encontrar um número divisível por 7
for (let i = 1; i <= 20; i++) {
  if (i % 7 === 0) {
    console.log("Encontrado:", i);
    break;
  }
}

// 9. Use continue para pular números ímpares de 1 a 5
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

// 10. Verifique se um número está entre 10 e 50
function estaNoIntervalo(n) {
  if (n >= 10 && n <= 50) {
    console.log("Está no intervalo");
  } else {
    console.log("Fora do intervalo");
  }
}
estaNoIntervalo(30);

// 11. Conte quantas letras "a" existem em uma palavra
function contarLetraA(palavra) {
  let total = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "a") total++;
  }
  console.log(`Total de letras 'a': ${total}`);
}
contarLetraA("banana");

// 12. Crie uma função que imprima todos os múltiplos de 3 de 1 a 30
function multiplosDeTres() {
  for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}
multiplosDeTres();

// 13. Imprima os elementos de um array com for
const nomes = ["João", "Ana", "Carlos"];
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// 14. Crie um switch que retorne o tipo de fruta
function tipoFruta(fruta) {
  switch (fruta.toLowerCase()) {
    case "banana":
      console.log("Fruta amarela");
      break;
    case "maçã":
      console.log("Fruta vermelha");
      break;
    default:
      console.log("Fruta desconhecida");
  }
}
tipoFruta("Banana");

// 15. Crie uma função que receba uma nota e retorne "Aprovado", "Recuperação" ou "Reprovado"
function resultadoNota(nota) {
  if (nota >= 7) return "Aprovado";
  else if (nota >= 5) return "Recuperação";
  else return "Reprovado";
}
console.log(resultadoNota(6)); // Recuperação

// 16. Inverta uma string usando for
function inverterString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  console.log(invertida);
}
inverterString("javascript");

// 17. Imprima os números de 10 até 1 com while
let n = 10;
while (n >= 1) {
  console.log(n);
  n--;
}

// 18. Imprima os quadrados dos números de 1 a 5
for (let i = 1; i <= 5; i++) {
  console.log(i * i);
}

// 19. Crie um loop que pare ao encontrar o número 4 em um array
const numeros = [1, 3, 7, 4, 9];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 4) {
    console.log("Número 4 encontrado");
    break;
  }
  console.log("Procurando...");
}

// 20. Use `for` e `continue` para imprimir apenas nomes com mais de 4 letras
const lista = ["Ana", "João", "Gabriel", "Lia"];
for (let i = 0; i < lista.length; i++) {
  if (lista[i].length <= 4) continue;
  console.log(lista[i]);
}
