let n1 = parseFloat(prompt("Insira um número!")); // parseInt ou parseFloat muda o tipo string para number.
let n2 = parseFloat(prompt("Insira outro número!")); // parseInt ou parseFloat muda o tipo string para number.
let soma = n1 + n2;
let subtração = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;
let resto = n1 % n2;

alert(
  `A soma de ${n1} e ${n2}  é ${soma}\n 
   A difereça de ${n1} e ${n2} é ${subtração}\n 
   A multiplicação de ${n1} por ${n2} é ${multiplicacao}\n 
   A divisão ${n1} por ${n2} é ${divisao}\n
  O resto da divisão de ${n1} por ${n2} é ${resto}`
);
