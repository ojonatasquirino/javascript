var nome = "Global";

function mostrarNome() {
  console.log(nome); // Acessa a variável global
}

mostrarNome(); // Output: Global

function saudacao() {
 var nome = "Local";
 console.log(nome); // Acessa a variável local
}

saudacao(); // Output: Local
console.log(nome); // Erro: nome is not defined


if (true) {
 let nome = "Bloco";
 console.log(nome); // Output: Bloco
}

console.log(nome); // Erro: nome is not defined
