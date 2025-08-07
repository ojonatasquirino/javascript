// 1. Crie uma variável booleana que indique se um usuário está online
var estaOnline = true;
console.log(estaOnline); // true

// 2. Verifique se uma idade é maior ou igual a 18 e guarde em uma variável
var idade = 20;
var maiorDeIdade = idade >= 18;
console.log(maiorDeIdade); // true

// 3. Escreva uma condicional que mostre "Entrada permitida" apenas se for maior de idade
if (maiorDeIdade) {
  console.log("Entrada permitida");
} else {
  console.log("Entrada negada");
}

// 4. Teste valores falsy em uma condicional
var nome = ""; // falsy
if (!nome) {
  console.log("Nome não preenchido");
}

// 5. Crie uma variável `temIngresso` e use `if/else` para mostrar mensagens diferentes
var temIngresso = false;

if (temIngresso) {
  console.log("Bem-vindo ao evento");
} else {
  console.log("Você precisa de um ingresso");
}

// 6. Use operadores de comparação para verificar se dois valores são iguais (tanto com == quanto ===)
console.log(10 == "10"); // true
console.log(10 === "10"); // false

// 7. Combine dois valores booleanos com operador &&
var logado = true;
var admin = false;

if (logado && admin) {
  console.log("Acesso ao painel de administrador");
} else {
  console.log("Acesso restrito");
}

// 8. Use o operador || para definir um valor padrão
var corEscolhida = "";
var corFinal = corEscolhida || "preta";
console.log(corFinal); // preta

// 9. Escreva uma condicional usando else if
var temGraduacao = true;
var temMestrado = false;

if (temMestrado) {
  console.log("Possui mestrado");
} else if (temGraduacao) {
  console.log("Possui graduação, mas não mestrado");
} else {
  console.log("Não possui formação");
}

// 10. Teste diferentes valores truthy e falsy com console.log
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("Texto")); // true
console.log(Boolean(null)); // false
console.log(Boolean({})); // true
