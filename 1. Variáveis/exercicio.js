// 1. Declare uma variável com seu primeiro nome
var primeiroNome = "Jônatas";

// 2. Declare uma variável com seu sobrenome
var sobrenome = "Quirino";

// 3. Crie uma variável com o nome completo (usando as anteriores)
var nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto); // Jônatas Quirino

// 4. Declare uma variável booleana indicando se você está logado
var estaLogado = true;
console.log(estaLogado); // true

// 5. Declare uma variável com valor numérico e reatribua um novo valor depois
var pontos = 100;
pontos = 150;
console.log(pontos); // 150

// 6. Use let para declarar uma variável de bloco dentro de um if
if (true) {
  let bloco = "visível apenas aqui";
  console.log(bloco); // visível apenas aqui
}
// console.log(bloco); // ReferenceError

// 7. Use const para declarar um objeto e altere uma de suas propriedades
const aluno = {
  nome: "Victória",
  idade: 26,
};
aluno.nome = "Victória";
console.log(aluno); // { nome: "Victória", idade: 26 }

// 8. Declare múltiplas variáveis em uma linha com var
var curso = "JS",
  professor = "Vic",
  nivel = "intermediário";
console.log(curso, professor, nivel); // JS Vic intermediário

// 9. Teste o hoisting com var
console.log(testeVar); // undefined
var testeVar = "OK";

// 10. Teste o TDZ com let (comentado para evitar erro de execução)
// console.log(testeLet); // ReferenceError
let testeLet = "Ok com let";
console.log(testeLet); // Ok com let
