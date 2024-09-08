//  boolean — true ou false

var possuiFaculdade = true; // por padrão, 1.
var possuiDoutorado = false; // por padrão, 0.

// condicionais If e Else

var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação"); //
} // retorna 'Possui graduação' e não executa o else.

// se o If não for verdadeiro, ele testa o else If antes do else

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduacao, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}

/* Truthy e Falsy — valores que retoranm true e false quando verificados em booleano.

Falsy 

if (false);
if (0)  ou - 0
if(NaN)
if (Null)
if (undefined)
if('')

Todo resto é truthy

Truthy

if(true)
if(2)
if (' ') - espaçado
if(-5)
if({}) - objeto
*/

// os operadores de comparação — retornam boolenao

10 > 5; // true
10 < 5; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

10 == "10"; // true — o == não faz comparação estrita qaunto ao tipo.
10 == 10; // true
10 === "10"; // false — faz comparaçao estrita quanto ao tipo.
10 === 10; // true
"10" !== 10; // true
"10" != 10; // false — não faz comparaçao estrita quanto ao tipo.

// operadores lógicos — && (e)

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false

// operadores lógicos —  || (ou)

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato

// retorna o primeiro valor true que encontrar
