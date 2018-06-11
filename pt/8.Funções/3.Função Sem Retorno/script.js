function verificarIdade(nomePessoa, anoDeNascimento) {
  var idade = 2018 - anoDeNascimento;
  if (idade >= 18) {
    console.log(nomePessoa + " é maior de idade.");
  } else {
    console.log(nomePessoa + " tem menos de 18 anos.");
  }
}

var nome = "Joana";
var nascimento = 2002;
verificarIdade(nome, nascimento);

verificarIdade("Cassiano", 1988);

nome = "John";
nascimento = 1978;
verificarIdade(nome, nascimento);
