const firstName = prompt("Qual o seu primeiro nome?");
const secondName = prompt("Qual o seu sobrenome?");
const campoDeEstudo = prompt("Qual o seu campo de estudo?");
const anoDeNascimento = prompt("Qual seu ano de nascimento?");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    firstName +
    " " +
    secondName +
    "\nCampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    (2023 - anoDeNascimento)
);

// o ----> \n serve para pular uma linha dentro da string. 