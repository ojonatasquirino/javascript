// var, let & const: armazenam valores

var nome = "Jônatas";
var idade = 28;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

// evitam repetições • DRY (Don't repeat yourself)

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

// utiliza-se de vírgula (,) para criar mais uma variável sem repetir a palavra chave.

var sobrenome = "quirino",
    cidade = "Salvador";

console.log(sobrenome, cidade);

// pode ser declarada como 'sem valor'

var semDefinir;
console.log(semDefinir);
// return ---> undefined


/* nomes de variáveis 

1. podem começar com $, _ ou letras. podem conter números, mas não inciar com eles.
2. Case Sentive — 'nome' é diferente de 'Nome'.
3. Camel Case — É comum utilizar assim: 'abrirModal'

*/
